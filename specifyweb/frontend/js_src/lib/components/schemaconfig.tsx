import React from 'react';

import csrfToken from '../csrftoken';
import type { Schema } from '../legacytypes';
import schema from '../schema';
import { fetchStrings } from '../schemaconfighelper';
import { reducer } from '../schemaconfigreducer';
import { useId } from './common';
import { stateReducer } from './schemaconfigstate';
import type {
  WithFetchedStrings,
  WithFieldInfo,
  CommonTableFields,
  SpLocaleContainer,
} from './schemaconfigwrapper';
import type { IR, RA } from './wbplanview';
import { handlePromiseReject } from './wbplanview';

export type SpLocaleItem = CommonTableFields & {
  readonly id: number;
  readonly format: null;
  readonly ishidden: boolean;
  readonly isrequired: boolean;
  readonly issystem: boolean;
  readonly isuiformatter: boolean;
  readonly name: string;
  readonly picklistname: string | null;
  readonly type: null;
  readonly weblinkname: string | null;
  /*
   * Readonly container: string;
   * readonly spexportschemaitems: string;
   */
  readonly descs: string;
  readonly names: string;
};

export type SpLocaleItemStr = CommonTableFields & {
  readonly id: number;
  readonly country?: string;
  readonly language: string;
  readonly text: string;
  /*
   * Readonly variant: null;
   * readonly containerdesc?: string;
   * readonly contaninername?: string;
   * readonly itemdesc?: string;
   * readonly itemname?: string;
   */
};

export type Formatter = {
  readonly name: string;
  readonly isSystem: boolean;
  readonly isDefault: boolean;
  readonly value: string;
};

export type ItemType = 'none' | 'formatted' | 'webLink' | 'pickList';

export function SchemaConfig({
  languages,
  tables,
  defaultLanguage,
  defaultTable,
  formatters,
  onClose: handleClose,
  onSave: handleSave,
  removeUnloadProtect,
  setUnloadProtect,
}: {
  readonly languages: RA<string>;
  readonly tables: IR<SpLocaleContainer>;
  readonly defaultLanguage: string | undefined;
  readonly defaultTable: SpLocaleContainer | undefined;
  readonly formatters: RA<Formatter>;
  readonly onClose: () => void;
  readonly onSave: (language: string) => void;
  readonly removeUnloadProtect: () => void;
  readonly setUnloadProtect: () => void;
}): JSX.Element {
  const [state, dispatch] = React.useReducer(
    reducer,
    typeof defaultTable === 'undefined' ||
      typeof defaultLanguage === 'undefined'
      ? typeof defaultLanguage === 'undefined'
        ? {
            type: 'ChooseLanguageState',
          }
        : {
            type: 'ChooseTableState',
            language: defaultLanguage,
          }
      : {
          type: 'FetchingTableItemsState',
          language: defaultLanguage,
          table: defaultTable,
        }
  );

  const id = useId('schema-config');

  // Fetch table items after table is selected
  const tableId = 'table' in state ? state.table.id : undefined;
  React.useEffect(() => {
    if (
      state.type !== 'FetchingTableItemsState' ||
      typeof tableId === 'undefined'
    )
      return undefined;

    const [language, country] = state.language.split('_');

    const fields = Object.fromEntries(
      Object.values((schema as unknown as Schema).models)
        .find(({ name }) => name.toLowerCase() === state.table.name)
        ?.fields.map((field) => [
          field.name,
          {
            length: field.length,
            readOnly: field.readOnly,
            relatedModelName:
              'relatedModelName' in field ? field.relatedModelName : undefined,
            isRequired: field.isRequired,
            isRelationship: field.isRelationship,
            type: field.type,
            canChangeIsRequired: !field.isRequired && !field.isRelationship,
          },
        ]) ?? []
    );

    if (Object.keys(fields).length === 0)
      throw new Error('Unable to find table fields');

    Promise.all([
      // Fetch all picklists
      fetch(`/api/specify/picklist/?domainfilter=true&limit=0`)
        .then<{
          readonly objects: RA<{ readonly id: string; readonly name: string }>;
        }>(async (response) => response.json())
        .then(({ objects }) =>
          Object.fromEntries(objects.map(({ id, name }) => [id, name]))
        ),
      // Fetch table items and their strings
      fetch(
        `/api/specify/splocalecontaineritem/?limit=0&container_id=${tableId}`
      )
        .then<{ readonly objects: RA<SpLocaleItem> }>(async (response) =>
          response.json()
        )
        .then(({ objects }) =>
          destructorCalled ? [] : fetchStrings(objects, language, country)
        )
        .then<RA<SpLocaleItem & WithFetchedStrings & WithFieldInfo>>((items) =>
          items.map((item) => ({
            ...item,
            dataModel: fields[item.name] ?? {
              length: undefined,
              readOnly: false,
              relatedModelName: undefined,
              isRequired: false,
              isRelationship: false,
              type: '',
              canChangeIsRequired: false,
            },
          }))
        ),
      // Fetch table strings
      fetchStrings([state.table], language, country),
    ])
      .then(([pickLists, items, [table]]) => {
        if (destructorCalled) return;
        dispatch({
          type: 'FetchedTableDataAction',
          table: {
            ...table,
            dataModel: {
              pickLists,
            },
          },
          items: Object.fromEntries(items.map((item) => [item.id, item])),
        });
      })
      .catch(handlePromiseReject);

    let destructorCalled = false;
    return (): void => {
      destructorCalled = true;
    };
  }, [state.type, tableId]);

  // Set unload protect after changes were made
  const changesMade =
    state.type === 'MainState'
      ? state.tableWasModified || state.modifiedItems.length > 0
      : false;
  React.useEffect(() => {
    if (changesMade) setUnloadProtect();
    return removeUnloadProtect;
  }, [changesMade]);

  // Save Changes
  React.useEffect(() => {
    if (state.type !== 'SavingState') return;
    removeUnloadProtect();

    const saveResource = async (
      resource: CommonTableFields
    ): Promise<Response> =>
      fetch(resource.resource_uri, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfToken!,
        },
        body: JSON.stringify(resource),
      });

    const { strings, ...table } = state.table;
    const requests = [
      ...(state.tableWasModified
        ? [
            saveResource(table),
            saveResource(strings.name),
            saveResource(strings.desc),
          ]
        : []),
      ...state.modifiedItems
        .map((id) => state.items[id])
        .flatMap(({ strings, dataModel: _, ...item }) => [
          saveResource(item),
          saveResource(strings.name),
          saveResource(strings.desc),
        ]),
    ];

    Promise.all(requests)
      .then(() => handleSave(state.language))
      .catch(handlePromiseReject);
  }, [state.type]);

  return stateReducer(<i />, {
    ...state,
    parameters: {
      languages,
      tables,
      dispatch,
      id,
      handleClose,
      formatters,
    },
  });
}