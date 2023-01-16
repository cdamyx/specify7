import React from 'react';

import type { PickList, SpQuery } from '../DataModel/types';
import type { SpecifyResource } from '../DataModel/legacyTypes';
import { commonText } from '../../localization/common';
import { formsText } from '../../localization/forms';
import { flippedSortTypes } from '../QueryBuilder/helpers';
import { QueryFieldSpec } from '../QueryBuilder/fieldSpec';
import { schema } from '../DataModel/schema';
import { Button } from '../Atoms/Button';
import { Dialog, dialogClassNames } from '../Molecules/Dialog';
import { QueryBuilder } from '../QueryBuilder/Wrapped';
import { queryFieldFilters } from '../QueryBuilder/FieldFilter';
import { createQuery } from '../QueryBuilder';
import { useBooleanState } from '../../hooks/useBooleanState';
import { formattedEntry } from '../WbPlanView/mappingHelpers';

export function PickListUsages({
  pickList,
}: {
  readonly pickList: SpecifyResource<PickList>;
}): JSX.Element {
  const [isOpen, handleOpen, handleClose] = useBooleanState();
  return (
    <>
      <Button.Small onClick={handleOpen}>{formsText.findUsages()}</Button.Small>
      {isOpen && (
        <PickListUsagesDialog pickList={pickList} onClose={handleClose} />
      )}
    </>
  );
}

function PickListUsagesDialog({
  pickList,
  onClose: handleClose,
}: {
  readonly pickList: SpecifyResource<PickList>;
  readonly onClose: () => void;
}): JSX.Element {
  const query = usePickListQuery(pickList);
  return (
    <Dialog
      buttons={<Button.DialogClose>{commonText.close()}</Button.DialogClose>}
      className={{
        container: dialogClassNames.wideContainer,
      }}
      header={pickList.specifyModel.label}
      onClose={handleClose}
    >
      <QueryBuilder
        autoRun
        isEmbedded
        isReadOnly={false}
        query={query}
        recordSet={undefined}
        forceCollection={undefined}
      />
    </Dialog>
  );
}

function usePickListQuery(
  resource: SpecifyResource<PickList>
): SpecifyResource<SpQuery> {
  return React.useMemo(
    () =>
      createQuery(
        formsText.usagesOfPickList({ pickList: resource.get('name') }),
        schema.models.SpLocaleContainerItem
      ).set('fields', [
        QueryFieldSpec.fromPath('SpLocaleContainerItem', [
          'container',
          'discipline',
          formattedEntry,
        ])
          .toSpQueryField()
          .set('sortType', flippedSortTypes.ascending),
        QueryFieldSpec.fromPath('SpLocaleContainerItem', ['container', 'name'])
          .toSpQueryField()
          .set('sortType', flippedSortTypes.ascending),
        QueryFieldSpec.fromPath('SpLocaleContainerItem', ['name'])
          .toSpQueryField()
          .set('sortType', flippedSortTypes.ascending),
        QueryFieldSpec.fromPath('SpLocaleContainerItem', ['pickListName'])
          .toSpQueryField()
          .set('isDisplay', false)
          .set('operStart', queryFieldFilters.equal.id)
          .set('startValue', resource.get('name')),
      ]),
    [resource]
  );
}