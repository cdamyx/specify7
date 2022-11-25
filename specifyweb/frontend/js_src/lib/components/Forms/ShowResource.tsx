import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useSearchParameter } from '../../hooks/navigation';
import { deserializeResource } from '../../hooks/resource';
import { useAsyncState } from '../../hooks/useAsyncState';
import { useErrorContext } from '../../hooks/useErrorContext';
import { useTriggerState } from '../../hooks/useTriggerState';
import { f } from '../../utils/functools';
import { serializeResource } from '../DataModel/helpers';
import type { AnySchema, SerializedResource } from '../DataModel/helperTypes';
import type { SpecifyResource } from '../DataModel/legacyTypes';
import { getResourceViewUrl } from '../DataModel/resource';
import { getModel, schema } from '../DataModel/schema';
import type { RecordSet } from '../DataModel/types';
import { RecordSetWrapper } from '../FormSliders/RecordSet';
import { useMenuItem } from '../Header';
import { interactionTables } from '../Interactions/InteractionsDialog';
import { hasTablePermission } from '../Permissions/helpers';
import { TablePermissionDenied } from '../Permissions/PermissionDenied';
import { NotFoundView } from '../Router/NotFoundView';
import { CheckLoggedInCollection, ViewResourceByGuid } from './DataTask';
import { ResourceView } from './ResourceView';

export function ShowResource({
  resource: initialResource,
}: {
  readonly resource: SpecifyResource<AnySchema>;
}): JSX.Element | null {
  // Look to see if we are in the context of a Record Set
  const [recordsetid] = useSearchParameter('recordsetid');
  const recordSetId = f.parseInt(recordsetid);
  const [recordSet] = useAsyncState<SpecifyResource<RecordSet> | false>(
    React.useCallback(
      () =>
        typeof recordSetId === 'number'
          ? new schema.models.RecordSet.Resource({
              id: recordSetId,
            }).fetch()
          : false,
      [recordSetId]
    ),
    true
  );

  useErrorContext('recordSet', recordSet);

  const [resource, setResource] = useTriggerState(initialResource);
  useErrorContext('resource', resource);

  useMenuItem(
    typeof recordSet === 'object'
      ? 'recordSets'
      : interactionTables.has(resource.specifyModel.name)
      ? 'interactions'
      : 'dataEntry'
  );

  const navigate = useNavigate();
  return recordSet === undefined ? null : typeof recordSet === 'object' ? (
    <RecordSetWrapper
      recordSet={recordSet}
      resource={resource}
      onClose={(): void => navigate('/specify/')}
    />
  ) : (
    <ResourceView
      dialog={false}
      isDependent={false}
      isSubForm={false}
      mode="edit"
      resource={resource}
      viewName={resource.specifyModel.view}
      onAdd={(newResource): void =>
        navigate(
          getResourceViewUrl(
            newResource.specifyModel.name,
            undefined,
            recordSetId
          ),
          {
            state: { resource: serializeResource(newResource) },
          }
        )
      }
      onClose={f.never}
      onDeleted={f.void}
      onSaved={(): void => {
        const reloadResource = new resource.specifyModel.Resource({
          id: resource.id,
        });
        reloadResource.fetch().then(async () => setResource(reloadResource));
      }}
    />
  );
}

const reGuid = /[\da-f]{8}(?:-[\da-f]{4}){3}-[\da-f]{12}/u;

/**
 * Shows user's individual resources which can optionally be in the context of
 * some Record Set
 *
 * id may be a record id, or GUID (for Collection Objects)
 */
export function ViewResourceById({
  tableName,
  id,
}: {
  readonly tableName: string;
  readonly id: string | undefined;
}): JSX.Element {
  const model = getModel(tableName);
  const location = useLocation();
  const state = (location.state ?? {}) as {
    readonly resource: SerializedResource<AnySchema> | undefined;
    readonly recordSetItemIndex?: number;
  };
  const record = React.useMemo(
    () => f.maybe(state?.resource, deserializeResource),
    [state?.resource]
  );
  const isInRecordSet = 'recordSetItemIndex' in state;

  const numericId = f.parseInt(id);
  const resource = React.useMemo(
    () =>
      typeof model === 'object'
        ? record ?? new model.Resource({ id: numericId })
        : undefined,
    [model, record, numericId]
  );

  if (
    (numericId === undefined && id?.toLowerCase() !== 'new') ||
    model === undefined ||
    resource === undefined
  ) {
    return <NotFoundView />;
  } else if (
    typeof numericId === 'number' &&
    !hasTablePermission(model.name, 'read')
  )
    return <TablePermissionDenied action="read" tableName={model.name} />;
  else if (reGuid.test(id ?? ''))
    return <ViewResourceByGuid guid={id!} model={model} />;
  else
    return isInRecordSet ? (
      <ShowResource resource={resource} />
    ) : (
      <CheckLoggedInCollection resource={resource}>
        <ShowResource resource={resource} />
      </CheckLoggedInCollection>
    );
}
