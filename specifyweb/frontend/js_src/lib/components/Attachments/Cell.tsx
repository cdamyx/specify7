import React from 'react';

import { useAsyncState } from '../../hooks/useAsyncState';
import { useBooleanState } from '../../hooks/useBooleanState';
import { attachmentsText } from '../../localization/attachments';
import { commonText } from '../../localization/common';
import { f } from '../../utils/functools';
import type { GetOrSet } from '../../utils/types';
import { Button } from '../Atoms/Button';
import { LoadingContext } from '../Core/Contexts';
import { fetchRelated } from '../DataModel/collection';
import { deserializeResource } from '../DataModel/helpers';
import type { AnySchema, SerializedResource } from '../DataModel/helperTypes';
import type { SpecifyResource } from '../DataModel/legacyTypes';
import { idFromUrl } from '../DataModel/resource';
import { getModelById } from '../DataModel/schema';
import type { SpecifyModel } from '../DataModel/specifyModel';
import type { Attachment } from '../DataModel/types';
import { softFail } from '../Errors/Crash';
import { Dialog } from '../Molecules/Dialog';
import { TableIcon } from '../Molecules/TableIcon';
import { hasTablePermission } from '../Permissions/helpers';
import { AttachmentThumbnail, fetchThumbnail } from './attachments';
import { tablesWithAttachments } from './index';
import { AttachmentPreview } from './Preview';

export function AttachmentCell({
  attachment,
  onViewRecord: handleViewRecord,
  onChange: handleChange,
}: {
  readonly attachment: SerializedResource<Attachment>;
  readonly onViewRecord:
    | ((model: SpecifyModel, recordId: number) => void)
    | undefined;
  readonly onChange: (attachment: SerializedResource<Attachment>) => void;
}): JSX.Element {
  const model = f.maybe(attachment.tableID ?? undefined, getAttachmentTable);

  const [related, setRelated] = React.useState<
    SpecifyResource<AnySchema> | undefined
  >(undefined);

  const thumbnail = useAttachmentThumbnail(attachment);
  return (
    <div className="relative">
      {typeof handleViewRecord === 'function' &&
      model !== undefined &&
      hasTablePermission(model.name, 'read') ? (
        <RecordLink
          attachment={attachment}
          model={model}
          related={[related, setRelated]}
          onViewRecord={handleViewRecord}
        />
      ) : undefined}
      {typeof thumbnail === 'object' ? (
        <AttachmentPreview
          attachment={attachment}
          thumbnail={thumbnail}
          onChange={handleChange}
          related={related}
          onOpen={(): void =>
            related === undefined && typeof model === 'object'
              ? void fetchAttachmentParent(model, attachment)
                  .then(setRelated)
                  .catch(softFail)
              : undefined
          }
        />
      ) : (
        <div className="flex h-10 w-10 items-center justify-center">
          {commonText.loading()}
        </div>
      )}
    </div>
  );
}

function useAttachmentThumbnail(
  attachment: SerializedResource<Attachment>
): AttachmentThumbnail | undefined {
  return useAsyncState(
    React.useCallback(async () => fetchThumbnail(attachment), [attachment]),
    false
  )[0];
}

export function getAttachmentTable(tableId: number): SpecifyModel | undefined {
  const model = getModelById(tableId);
  return tablesWithAttachments().includes(model) ? model : undefined;
}

/**
 * A button to open a record associated with the attachment
 */
function RecordLink({
  model,
  attachment,
  onViewRecord: handleViewRecord,
  related: [related, setRelated],
}: {
  readonly model: SpecifyModel;
  readonly attachment: SerializedResource<Attachment>;
  readonly onViewRecord: (model: SpecifyModel, recordId: number) => void;
  readonly related: GetOrSet<SpecifyResource<AnySchema> | undefined>;
}): JSX.Element {
  const loading = React.useContext(LoadingContext);
  const [isFailed, handleFailed, handleNotFailed] = useBooleanState();
  return (
    <>
      <Button.LikeLink
        className="absolute top-0 left-0"
        title={model?.label}
        onClick={(): void =>
          loading(
            (typeof related === 'object'
              ? Promise.resolve(related)
              : fetchAttachmentParent(model, attachment).then((related) => {
                  setRelated(related);
                  return related;
                })
            )
              .then((related) =>
                typeof related === 'object'
                  ? getBaseResourceId(model, related)
                  : undefined
              )
              .then((id) =>
                typeof id === 'number'
                  ? handleViewRecord(model, id)
                  : handleFailed()
              )
          )
        }
      >
        <TableIcon label name={model?.name ?? 'Attachment'} />
      </Button.LikeLink>
      {isFailed ? (
        <Dialog
          buttons={commonText.close()}
          header={attachmentsText.unableToFindRelatedRecord()}
          onClose={handleNotFailed}
        >
          {attachmentsText.unableToFindRelatedRecordDescription()}
        </Dialog>
      ) : undefined}
    </>
  );
}

/** Fetch CollectionObjectAttachment for a given Attachment */
async function fetchAttachmentParent(
  model: SpecifyModel,
  attachment: SerializedResource<Attachment>
): Promise<SpecifyResource<AnySchema> | undefined> {
  const { records } = await fetchRelated(
    attachment,
    `${model.name as 'collectionObject'}Attachments`
  );
  return deserializeResource(records[0]);
}

/**
 * Get CollectionObject id from CollectionObjectAttachment
 */
function getBaseResourceId(
  model: SpecifyModel,
  related: SpecifyResource<AnySchema>
): number | undefined {
  // This would be a URL to CollectionObject
  const resourceUrl = related.get(model.name as 'CollectionObject');
  return idFromUrl(resourceUrl ?? '');
}
