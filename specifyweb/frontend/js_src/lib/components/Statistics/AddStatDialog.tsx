import type { RA } from '../../utils/types';
import type { SerializedResource } from '../DataModel/helperTypes';
import type { SpQuery, Tables } from '../DataModel/types';
import type { CustomStat, DefaultStat, StatLayout, StatsSpec } from './types';
import { Dialog, dialogClassNames } from '../Molecules/Dialog';
import { Button } from '../Atoms/Button';
import { commonText } from '../../localization/common';
import { statsText } from '../../localization/stats';
import { H2, H3 } from '../Atoms';
import { QueryList } from '../Toolbar/Query';
import { Categories } from './Categories';
import React from 'react';
import { QueryFieldSpec } from '../QueryBuilder/fieldSpec';
import { SpecifyResource } from '../DataModel/legacyTypes';
import { useDefaultStatsToAdd } from './hooks';

export function AddStatDialog({
  defaultStatsAddLeft,
  statsSpec,
  queries,
  onClose: handleClose,
  onAdd: handleAdd,
  onValueLoad: handleValueLoad,
  onStatNetwork: handleStatNetwork,
}: {
  readonly queries: RA<SerializedResource<SpQuery>> | undefined;
  readonly defaultStatsAddLeft: StatLayout;
  readonly layout: StatLayout;
  readonly statsSpec: StatsSpec;
  readonly onClose: () => void;
  readonly onAdd: (item: CustomStat | DefaultStat, itemIndex: number) => void;
  readonly onStatNetwork: (
    query: SpecifyResource<SpQuery> | undefined
  ) => Promise<string | undefined>;
  readonly onValueLoad:
    | ((
        categoryIndex: number,
        itemIndex: number,
        value: number | string,
        itemName: string,
        itemType: string,
        pageIndexMod: number
      ) => void)
    | undefined;
}): JSX.Element | null {
  return Array.isArray(queries) ? (
    <Dialog
      buttons={<Button.DialogClose>{commonText('close')}</Button.DialogClose>}
      className={{
        container: dialogClassNames.wideContainer,
      }}
      header={statsText('chooseStatistics')}
      onClose={handleClose}
    >
      <div>
        <H3 className="text-lg">{statsText('selectFromQueries')}</H3>
        {Array.isArray(queries) && (
          <QueryList
            getQuerySelectCallback={(query) => () => {
              handleAdd(
                {
                  type: 'CustomStat',
                  itemLabel: query.name,
                  tableName: query.contextName as keyof Tables,
                  fields: query.fields.map((field) => ({
                    ...field,
                    path: QueryFieldSpec.fromStringId(
                      field.stringId,
                      field.isRelFld ?? false
                    )
                      .toMappingPath()
                      .join('.'),
                  })),
                },
                -1
              );
              handleClose();
            }}
            isReadOnly
            queries={queries}
          />
        )}
      </div>
      <div>
        {defaultStatsAddLeft.length > 0 && (
          <div>
            <H3 className="text-lg">{statsText('selectFromDefault')}</H3>
            {defaultStatsAddLeft.map((defaultLayoutPage, index) =>
              defaultLayoutPage.categories.every(({ items }) =>
                items.every(
                  (item) => item.type === 'DefaultStat' && item.absent === true
                )
              ) ? undefined : (
                <div key={index}>
                  <h1>{defaultLayoutPage.label}</h1>
                  <div>
                    <Categories
                      pageLayout={defaultLayoutPage}
                      statsSpec={statsSpec}
                      onClick={(item: DefaultStat | CustomStat): void => {
                        handleAdd(item, -1);
                        handleClose();
                      }}
                      onRemove={undefined}
                      onRename={undefined}
                      onAdd={undefined}
                      onSpecChanged={undefined}
                      onValueLoad={(
                        categoryIndex: number,
                        itemIndex: number,
                        value: number | string,
                        itemName: string,
                        itemType: string
                      ) => {
                        handleValueLoad(
                          categoryIndex,
                          itemIndex,
                          value,
                          itemName,
                          itemType,
                          index
                        );
                      }}
                      onStatNetwork={handleStatNetwork}
                    />
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </Dialog>
  ) : null;
}
