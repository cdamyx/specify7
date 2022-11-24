import React from 'react';

import { commonText } from '../../localization/common';
import { formsText } from '../../localization/forms';
import type { RA } from '../../utils/types';
import { removeItem } from '../../utils/utils';
import { Button } from '../Atoms/Button';
import { DataEntry } from '../Atoms/DataEntry';
import type { AnySchema } from '../DataModel/helperTypes';
import type { SpecifyResource } from '../DataModel/legacyTypes';
import type { FormMode } from '../FormParse';
import { ResourceView } from '../Forms/ResourceView';
import { Dialog } from '../Molecules/Dialog';
import { hasTablePermission } from '../Permissions/helpers';
import type { RecordSelectorProps } from './RecordSelector';
import { BaseRecordSelector } from './RecordSelector';

/**
 * A Wrapper for RecordSelector that allows to specify list of records by their
 * IDs
 */
export function RecordSelectorFromIds<SCHEMA extends AnySchema>({
  ids,
  newResource,
  onSlide: handleSlide,
  defaultIndex,
  model,
  viewName,
  title = model.label,
  headerButtons,
  dialog,
  isDependent,
  mode,
  canAddAnother,
  canRemove = true,
  onClose: handleClose,
  onSaved: handleSaved,
  onAdd: handleAdd,
  onDelete: handleDelete,
  urlContext,
  ...rest
}: Omit<RecordSelectorProps<SCHEMA>, 'children' | 'index' | 'records'> & {
  /*
   * Undefined IDs are placeholders for items with unknown IDs (e.g in record
   * sets or query results with thousands of items)
   */
  readonly ids: RA<number | undefined>;
  readonly newResource: SpecifyResource<SCHEMA> | undefined;
  readonly defaultIndex?: number;
  readonly title: string | undefined;
  readonly headerButtons?: JSX.Element;
  readonly dialog: 'modal' | 'nonModal' | false;
  readonly isDependent: boolean;
  readonly mode: FormMode;
  readonly viewName?: string;
  readonly canAddAnother: boolean;
  readonly canRemove?: boolean;
  readonly onClose: () => void;
  readonly onSaved: (payload: {
    readonly resource: SpecifyResource<SCHEMA>;
    readonly newResource: SpecifyResource<SCHEMA> | undefined;
    readonly wasNew: boolean;
  }) => void;
  // Record set ID, or false to not update the URL
  readonly urlContext: number | false | undefined;
}): JSX.Element | null {
  const [records, setRecords] = React.useState<
    RA<SpecifyResource<SCHEMA> | undefined>
  >(() =>
    ids.map((id) => (id === undefined ? undefined : new model.Resource({ id })))
  );

  const previousIds = React.useRef(ids);
  React.useEffect(() => {
    setRecords((records) =>
      ids.map((id, index) => {
        if (id === undefined) return undefined;
        else if (records[index]?.id === id) return records[index];
        else return new model.Resource({ id });
      })
    );

    return (): void => {
      previousIds.current = ids;
    };
  }, [ids, model]);

  const [index, setIndex] = React.useState(defaultIndex ?? ids.length - 1);
  React.useEffect(
    () =>
      typeof defaultIndex === 'number' ? setIndex(defaultIndex) : undefined,
    [defaultIndex]
  );
  React.useEffect(
    () =>
      setIndex((index) =>
        typeof newResource === 'object'
          ? rest.totalCount
          : Math.min(index, rest.totalCount - 1)
      ),
    [newResource, rest.totalCount]
  );

  const currentResource = newResource ?? records[index];

  // Show a warning dialog if navigating away before saving the record
  const [unloadProtect, setUnloadProtect] = React.useState<
    (() => void) | undefined
  >(undefined);

  return (
    <BaseRecordSelector<SCHEMA>
      {...rest}
      index={index}
      model={model}
      records={
        typeof newResource === 'object' ? [...records, newResource] : records
      }
      totalCount={rest.totalCount + (typeof newResource === 'object' ? 1 : 0)}
      onAdd={
        typeof handleAdd === 'function'
          ? (resources): void => {
              if (currentResource?.needsSaved === true)
                /*
                 * Since React's setState has a special behavior when a function
                 * argument is passed, need to wrap a function in a function
                 */
                setUnloadProtect(() => () => handleAdd(resources));
              else handleAdd(resources);
            }
          : undefined
      }
      onDelete={
        typeof handleDelete === 'function'
          ? (index, source): void => {
              handleDelete(index, source);
              setRecords(removeItem(records, index));
              if (ids.length === 1) handleClose();
            }
          : undefined
      }
      onSlide={
        typeof handleSlide === 'function'
          ? (index, callback): void => {
              function doSlide(): void {
                setIndex(index);
                handleSlide?.(index);
                callback?.();
              }

              if (
                currentResource?.needsSaved === true ||
                /*
                 * If adding new resource that hasn't yet been modified, show a
                 * warning anyway because navigating away before saving in a
                 * RecordSet cancels the record adding process
                 */
                currentResource?.isNew() === true
              )
                setUnloadProtect(() => doSlide);
              else doSlide();
            }
          : undefined
      }
    >
      {({
        dialogs,
        slider,
        resource,
        onAdd: handleAdd,
        onRemove: handleRemove,
        isLoading,
      }): JSX.Element => (
        <>
          <ResourceView
            canAddAnother={canAddAnother}
            dialog={dialog}
            headerButtons={(specifyNetworkBadge): JSX.Element => (
              <>
                {headerButtons}
                <DataEntry.Visit
                  resource={
                    !isDependent && dialog !== false ? resource : undefined
                  }
                />
                {hasTablePermission(
                  model.name,
                  isDependent ? 'create' : 'read'
                ) && typeof handleAdd === 'function' ? (
                  <DataEntry.Add
                    aria-label={
                      typeof urlContext === 'number'
                        ? formsText('addToRecordSet')
                        : commonText('add')
                    }
                    disabled={mode === 'view'}
                    title={
                      typeof urlContext === 'number'
                        ? formsText('addToRecordSet')
                        : commonText('add')
                    }
                    onClick={handleAdd}
                  />
                ) : undefined}
                {typeof handleRemove === 'function' && canRemove ? (
                  <DataEntry.Remove
                    aria-label={
                      typeof urlContext === 'number'
                        ? formsText('removeFromRecordSet')
                        : commonText('delete')
                    }
                    disabled={resource === undefined || mode === 'view'}
                    title={
                      typeof urlContext === 'number'
                        ? formsText('removeFromRecordSet')
                        : commonText('delete')
                    }
                    onClick={(): void => handleRemove('minusButton')}
                  />
                ) : undefined}
                {typeof newResource === 'object' ? (
                  <p className="flex-1">{formsText('creatingNewRecord')}</p>
                ) : (
                  <span
                    className={`flex-1 ${dialog === false ? '-ml-2' : '-ml-4'}`}
                  />
                )}
                {specifyNetworkBadge}
                {slider}
              </>
            )}
            isDependent={isDependent}
            isLoading={isLoading}
            isSubForm={false}
            mode={mode}
            resource={resource}
            title={title}
            viewName={viewName}
            onClose={handleClose}
            onDeleted={
              resource?.isNew() === true ||
              hasTablePermission(model.name, 'delete')
                ? handleRemove?.bind(undefined, 'deleteButton')
                : undefined
            }
            onSaved={(payload): void =>
              handleSaved({
                ...payload,
                resource: resource!,
              })
            }
          />
          {dialogs}
          {typeof unloadProtect === 'function' && (
            <Dialog
              buttons={
                <>
                  <Button.DialogClose>
                    {commonText('cancel')}
                  </Button.DialogClose>
                  <Button.Orange
                    onClick={(): void => {
                      unloadProtect();
                      setUnloadProtect(undefined);
                    }}
                  >
                    {commonText('proceed')}
                  </Button.Orange>
                </>
              }
              header={formsText('recordSelectorUnloadProtectDialogHeader')}
              onClose={(): void => setUnloadProtect(undefined)}
            >
              {formsText('recordSelectorUnloadProtectDialogText')}
            </Dialog>
          )}
        </>
      )}
    </BaseRecordSelector>
  );
}
