import React from 'react';

import { fetchFormatters } from '../dataobjformatters';
import { getModel } from '../schema';
import type { RA } from '../types';
import type { DefaultComboBoxProps, PickListItemSimple } from './combobox';
import { PickListTypes } from '../picklistmixins';
import { crash } from './errorboundary';
import { useAsyncState } from './hooks';
import { PickListComboBox } from './picklist';
import { resourceOn } from '../resource';

export function PickListFormatterComboBox(
  props: DefaultComboBoxProps
): JSX.Element {
  const fetchItems = React.useCallback(async () => {
    if (props.resource.get('type') !== PickListTypes.TABLE) return [];
    const { formatters } = await fetchFormatters;
    const model = getModel(props.resource.get('tableName') ?? '');
    return typeof model === 'object'
      ? formatters
          .filter(({ className }) => className === model.longName)
          .map(({ name, title }) => ({
            value: name ?? title ?? '',
            title: title ?? name ?? '',
          }))
      : [];
  }, [props.resource]);
  const [items, setItems] = useAsyncState<RA<PickListItemSimple>>(
    fetchItems,
    false
  );
  React.useEffect(
    () =>
      resourceOn(props.resource, 'change:tableName change:type', (): void => {
        if (props.resource.get('type') !== PickListTypes.TABLE)
          props.resource.set('formatter', null as never);
        fetchItems().then(setItems).catch(crash);
      }),
    [props.resource, fetchItems, setItems]
  );

  return (
    <PickListComboBox
      {...props}
      items={items}
      onAdd={undefined}
      pickList={undefined}
      isDisabled={
        props.isDisabled || items === undefined || items.length === 0
      }
    />
  );
}
