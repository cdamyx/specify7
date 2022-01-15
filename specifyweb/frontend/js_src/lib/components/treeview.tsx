import * as React from 'react';

import ajax from '../ajax';
import type { SpecifyResource } from '../legacytypes';
import treeText from '../localization/tree';
import * as navigation from '../navigation';
import * as querystring from '../querystring';
import { getIntPref, getPref } from '../remoteprefs';
import { getModel } from '../schema';
import type { Conformations, Row, Stats } from '../treeviewutils';
import {
  deserializeConformation,
  fetchRows,
  fetchStats,
  pipe,
  serializeConformation,
} from '../treeviewutils';
import type { IR, RA } from '../types';
import { defined } from '../types';
import { capitalize } from '../wbplanviewhelper';
import { Autocomplete } from './autocomplete';
import { Button, className, Input } from './basic';
import { useId, useTitle } from './hooks';
import { LoadingScreen } from './modaldialog';
import createBackboneView from './reactbackboneextend';
import { useCachedState } from './stateCache';
import { TreeRow } from './treeviewrow';
import { TreeViewActions } from './treeviewactions';

function TreeView({
  tableName,
  treeDefinition,
  treeDefinitionItems,
}: {
  readonly tableName: string;
  readonly treeDefinition: SpecifyResource;
  readonly treeDefinitionItems: RA<SpecifyResource>;
}): JSX.Element {
  const table = defined(getModel(tableName));
  const rankIds = treeDefinitionItems.map((rank) => rank.get<number>('rankid'));
  const [collapsedRanks, setCollapsedRanks] = useCachedState({
    bucketName: 'tree',
    cacheName: `collapsedRanks${capitalize(tableName)}`,
    bucketType: 'localStorage',
    defaultValue: [],
  });

  const [rawConformation, setConformation] = useCachedState({
    bucketName: 'tree',
    cacheName: `conformation${capitalize(tableName)}`,
    bucketType: 'localStorage',
    defaultValue: undefined,
  });
  const conformation = deserializeConformation(rawConformation);

  function updateConformation(value: Conformations | undefined): void {
    if (typeof value === 'undefined') setConformation('');
    else {
      const encoded = serializeConformation(value);
      navigation.push(
        querystring.format(window.location.href, { conformation: encoded })
      );
      setConformation(encoded);
    }
  }

  React.useEffect(() => {
    const { conformation } = querystring.parse();
    if (typeof conformation === 'string' && conformation.length > 0)
      updateConformation(deserializeConformation(conformation));
  }, []);

  useTitle(treeText('treeViewTitle')(table.getLocalizedName()));

  // Node sort order
  const sortOrderFieldName = `${capitalize(tableName)}.treeview_sort_field`;
  const sortField = getPref(sortOrderFieldName, 'name');
  const baseUrl = `/api/specify_tree/${tableName}/${treeDefinition.id}`;
  const getRows = React.useCallback(
    async (parentId: number | 'null') =>
      fetchRows(`${baseUrl}/${parentId}/${sortField}`),
    [baseUrl, sortField]
  );

  const statsThreshold = getIntPref(
    `TreeEditor.Rank.Threshold.${capitalize(tableName)}`
  );
  const getStats = React.useCallback(
    async (nodeId: number | 'null', rankId: number): Promise<Stats> =>
      typeof statsThreshold === 'undefined' || statsThreshold > rankId
        ? Promise.resolve({})
        : fetchStats(`${baseUrl}/${nodeId}/stats/`),
    [baseUrl, statsThreshold]
  );

  const [rows, setRows] = React.useState<RA<Row> | undefined>(undefined);

  React.useEffect(() => {
    void getRows('null').then((rows) =>
      destructorCalled ? undefined : setRows(rows)
    );

    let destructorCalled = false;
    return (): void => {
      destructorCalled = true;
    };
  }, [getRows]);

  const id = useId('tree-view');

  const [focusPath, setFocusPath] = React.useState<RA<number>>([]);
  const [focusedRow, setFocusedRow] = React.useState<Row | undefined>(
    undefined
  );

  const searchBoxRef = React.useRef<HTMLInputElement | null>(null);
  const toolbarButtonRef = React.useRef<HTMLButtonElement | null>(null);

  return typeof rows === 'undefined' ? (
    <LoadingScreen />
  ) : (
    <section className={className.containerFull}>
      <header className="flex flex-wrap items-center gap-2">
        <h2>{table.getLocalizedName()}</h2>
        {/* A react component that is also a TypeScript generic */}
        <Autocomplete<SpecifyResource>
          source={async (value) => {
            const collection = new table.LazyCollection({
              filters: { name__istartswith: value, orderby: 'name' },
              domainfilter: true,
            });
            await collection.fetch();
            return Object.fromEntries(
              collection.models.map((node) => {
                const rankDefinition = treeDefinitionItems.find(
                  (rank) =>
                    rank.get<number>('rankid') === node.get<number>('rankid')
                );
                const rankName =
                  rankDefinition?.get<string | null>('title') ??
                  rankDefinition?.get<string>('name') ??
                  node.get<string>('name');
                return [
                  node.get<string>('fullname'),
                  { label: rankName, data: node },
                ];
              })
            );
          }}
          onChange={(_value, { data }): void => {
            void ajax<
              IR<{ readonly rankid: number; readonly id: number } | string>
            >(`/api/specify_tree/${tableName}/${data.id}/path/`, {
              headers: { Accept: 'application/json' },
            }).then(({ data }) =>
              setFocusPath(
                Object.values(data)
                  .filter(
                    (
                      node
                    ): node is {
                      readonly rankid: number;
                      readonly id: number;
                    } => typeof node === 'object'
                  )
                  .sort(({ rankid: left }, { rankid: right }) =>
                    left > right ? 1 : left === right ? 0 : -1
                  )
                  .map(({ id }) => id)
              )
            );
          }}
          renderSearchBox={(inputProps): JSX.Element => (
            <Input
              forwardRef={searchBoxRef}
              className="tree-search"
              placeholder={treeText('searchTreePlaceholder')}
              title={treeText('searchTreePlaceholder')}
              aria-label={treeText('searchTreePlaceholder')}
              {...inputProps}
            />
          )}
        />
        <span className="flex-1 -ml-2" />
        <TreeViewActions
          tableName={tableName}
          focusRef={toolbarButtonRef}
          onRefresh={(): void => {
            // Force re-load
            setRows(undefined);
            setTimeout(() => setRows(rows), 0);
          }}
          focusedRow={focusedRow}
          ranks={rankIds}
        />
      </header>
      <div
        className={`grid-table grid-cols-[repeat(var(--cols),auto)] flex-1
          overflow-auto bg-gray-200 shadow-md shadow-gray-500 content-start
          bg-gradient-to-bl from-[hsl(26deg_92%_62%_/_0)] rounded p-2 pt-0
          via-[hsl(26deg_92%_62%_/_20%)] to-[hsl(26deg_92%_62%_/_0)] outline-none`}
        style={{ '--cols': treeDefinitionItems.length } as React.CSSProperties}
        // First role is for screen readers. Second is for styling
        role="none table"
        tabIndex={0}
        // When tree viewer is focused, move focus to last focused node
        onFocus={(event): void => {
          // Don't handle bubbled events
          if (event.currentTarget !== event.target) return;
          event.preventDefault();
          // Unset and set focus path to trigger a useEffect hook in <TreeNode>
          setFocusPath([-1]);
          setTimeout(
            () => setFocusPath(focusPath.length > 0 ? focusPath : [0]),
            0
          );
        }}
      >
        <div role="none rowgroup">
          <div role="none row">
            {treeDefinitionItems.map((rank, index, { length }) => (
              <div
                role="columnheader"
                key={index}
                className={`border whitespace-nowrap border-transparent top-0
                  sticky bg-gray-100/60 p-2 backdrop-blur-sm
                  ${index === 0 ? '-ml-2 pl-4 rounded-bl' : ''}
                  ${index + 1 === length ? 'pr-4 -mr-2 rounded-br' : ''}`}
              >
                <Button.LikeLink
                  id={id(rank.get<number>('rankId').toString())}
                  onClick={
                    typeof collapsedRanks === 'undefined'
                      ? undefined
                      : (): void =>
                          setCollapsedRanks(
                            collapsedRanks.includes(rank.get<number>('rankId'))
                              ? collapsedRanks.filter(
                                  (rankId) =>
                                    rankId !== rank.get<number>('rankId')
                                )
                              : [...collapsedRanks, rank.get<number>('rankId')]
                          )
                  }
                >
                  {pipe(
                    rank.get<string | null>('title') ??
                      rank.get<string>('name'),
                    collapsedRanks?.includes(rank.get<number>('rankId')) ??
                      false,
                    (name) => name[0]
                  )}
                </Button.LikeLink>
              </div>
            ))}
          </div>
        </div>
        <ul role="tree rowgroup">
          {rows.map((row, index) => (
            <TreeRow
              key={row.nodeId}
              row={row}
              getRows={getRows}
              getStats={getStats}
              nodeStats={undefined}
              path={[]}
              ranks={rankIds}
              rankNameId={id}
              collapsedRanks={collapsedRanks ?? []}
              conformation={
                conformation
                  ?.find(([id]) => id === row.nodeId)
                  ?.slice(1) as Conformations
              }
              onChangeConformation={(newConformation): void =>
                updateConformation([
                  ...(conformation?.filter(([id]) => id !== row.nodeId) ?? []),
                  ...(typeof newConformation === 'undefined'
                    ? []
                    : ([[row.nodeId, ...newConformation]] as const)),
                ])
              }
              focusPath={
                (focusPath[0] === 0 && index === 0) ||
                focusPath[0] === row.nodeId
                  ? focusPath.slice(1)
                  : undefined
              }
              onFocusNode={(newFocusPath): void =>
                setFocusPath([row.nodeId, ...newFocusPath])
              }
              onAction={(action): void => {
                if (action === 'next')
                  if (typeof rows[index + 1] === 'undefined') return undefined;
                  else setFocusPath([rows[index + 1].nodeId]);
                else if (action === 'previous' && index !== 0)
                  setFocusPath([rows[index - 1].nodeId]);
                else if (action === 'previous' || action === 'parent')
                  setFocusPath([]);
                else if (action === 'focusPrevious')
                  toolbarButtonRef.current?.focus();
                else if (action === 'focusNext') searchBoxRef.current?.focus();
                return undefined;
              }}
              setFocusedRow={setFocusedRow}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default createBackboneView(TreeView);