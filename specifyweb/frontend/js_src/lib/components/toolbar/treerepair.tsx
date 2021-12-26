import React from 'react';

import ajax from '../../ajax';
import domain from '../../domain';
import type { SchemaModelTableData } from '../../legacytypes';
import commonText from '../../localization/common';
import schema from '../../schema';
import userInfo from '../../userinfo';
import { TableIcon } from '../common';
import type { UserTool } from '../main';
import { closeDialog, LoadingScreen, ModalDialog } from '../modaldialog';
import createBackboneView from '../reactbackboneextend';
import type { IR } from '../wbplanview';

const treesForAll = new Set(['geography', 'storage', 'taxon']);
const treesForPaleo = new Set(['geologictimeperiod', 'lithostrat']);
const paleoDiscs = new Set(['paleobotany', 'invertpaleo', 'vertpaleo']);

type Props = {
  readonly onClose: () => void;
};

export function TreeSelectDialog({
  onClose: handleClose,
  onClick: handleClick,
  title,
  getLink,
}: Props & {
  readonly onClick: (tree: string) => Promise<void>;
  readonly title: string;
  readonly getLink: (tree: string) => string;
}): JSX.Element {
  const [trees, setTrees] = React.useState<
    IR<SchemaModelTableData> | undefined
  >(undefined);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    Promise.resolve(domain.getDomainResource('discipline').rget('type'))
      .then((type) => [
        ...treesForAll,
        ...(paleoDiscs.has(type) ? treesForPaleo : []),
      ])
      .then((trees) =>
        Object.fromEntries(trees.map((tree) => [tree, schema.getModel(tree)]))
      )
      .then((trees) => (destructorCalled ? undefined : setTrees(trees)))
      .catch(console.error);

    let destructorCalled = false;
    return (): void => {
      destructorCalled = true;
    };
  }, []);

  return typeof trees === 'undefined' || isLoading ? (
    <LoadingScreen />
  ) : (
    <ModalDialog
      properties={{
        title,
        close: handleClose,
        buttons: [
          {
            text: commonText('cancel'),
            click: closeDialog,
          },
        ],
      }}
    >
      <nav>
        <ul style={{ padding: 0 }}>
          {Object.entries(trees).map(([tree, model]) => (
            <li key={tree}>
              <a
                href={getLink(tree)}
                className="fake-link"
                style={{ fontSize: '0.8rem' }}
                onClick={(event): void => {
                  event.preventDefault();
                  setIsLoading(true);
                  Promise.resolve(handleClick(tree))
                    .then(handleClose)
                    .catch(console.error);
                }}
              >
                <TableIcon tableName={tree} tableLabel="false" />
                {model.getLocalizedName()}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </ModalDialog>
  );
}

const handleClick = async (tree: string): Promise<void> =>
  ajax(`/api/specify_tree/${tree}/repair/`, {
    method: 'POST',
  }).then(() => undefined);

function RepairTree({ onClose: handleClose }: Props): JSX.Element {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  React.useEffect(() => {
    const urlSearchParameters = new URLSearchParams(window.location.search);
    const parameters = Object.fromEntries(urlSearchParameters.entries());
    if (typeof parameters.tree === 'undefined') return;
    setIsLoading(true);
    handleClick(parameters.tree).then(handleClose).catch(console.error);
  }, []);
  return isLoading ? (
    <LoadingScreen />
  ) : (
    <TreeSelectDialog
      onClose={handleClose}
      onClick={handleClick}
      title={commonText('repairTree')}
      getLink={(tree): string => `/specify/task/repair-tree/?tree=${tree}`}
    />
  );
}

const View = createBackboneView<Props>({
  moduleName: 'RepairTree',
  className: 'repair-tree',
  component: RepairTree,
});

const userTool: UserTool = {
  task: 'repair-tree',
  title: commonText('repairTree'),
  view: ({ onClose }) => new View({ onClose }),
  enabled: () => userInfo.isadmin,
};

export default userTool;