import type { CustomStat, DefaultStat, StatLayout, StatsSpec } from './types';
import { H3 } from '../Atoms';
import { Input } from '../Atoms/Form';
import { StatItem, QueryStat } from './StatItems';
import { Button } from '../Atoms/Button';
import { className } from '../Atoms/className';
import { commonText } from '../../localization/common';
import React from 'react';
import { RA } from '../../utils/types';
import { SerializedResource } from '../DataModel/helperTypes';
import { SpQuery, SpQueryField } from '../DataModel/types';
import { SpecifyResource } from '../DataModel/legacyTypes';
import { checkMoveViolatesEnforced } from '../TreeView/helpers';

export function Categories({
  pageLayout,
  statsSpec,
  onAdd: handleAdd,
  onClick: handleClick,
  onRemove: handleRemove,
  onRename: handleRename,
  onSpecChanged: handleSpecChanged,
  onValueLoad: handleValueLoad,
}: {
  readonly pageLayout: StatLayout[number];
  readonly statsSpec: StatsSpec;
  readonly onAdd: ((categoryIndex: number | undefined) => void) | undefined;
  readonly onClick:
    | ((
        item: CustomStat | DefaultStat,
        categoryIndex?: number,
        itemIndex?: number
      ) => void)
    | ((item: CustomStat | DefaultStat) => void)
    | undefined;
  readonly onRemove:
    | ((categoryIndex: number, itemIndex: number | undefined) => void)
    | undefined;
  readonly onRename:
    | ((newName: string, categoryIndex: number) => void)
    | undefined;
  readonly onSpecChanged:
    | ((
        categoryIndex: number,
        itemIndex: number,
        fields: RA<
          Partial<SerializedResource<SpQueryField>> & { readonly path: string }
        >
      ) => void)
    | undefined;
  readonly onValueLoad:
    | ((
        categoryIndex: number,
        itemIndex: number,
        value: number | string,
        itemLabel: string
      ) => void)
    | undefined;
}): JSX.Element {
  const checkEmptyItems = handleSpecChanged === undefined;
  return pageLayout === undefined ? (
    <></>
  ) : (
    <>
      {pageLayout.categories.map(
        ({ label, items }, categoryIndex) =>
          (!checkEmptyItems ||
            items.some(
              (item) =>
                item.type === 'CustomStat' ||
                item.absent === false ||
                item.absent === undefined
            )) && (
            <div
              className={
                'flex h-auto max-h-80 flex-col content-center gap-2 rounded border-[1px] bg-[color:var(--form-foreground)] p-4 shadow-lg shadow-gray-300 transition hover:shadow-md hover:shadow-gray-400' +
                (checkEmptyItems ? ' contents' : '')
              }
              key={categoryIndex}
            >
              {handleRename === undefined ? (
                checkEmptyItems ? (
                  <H3 className="font-bold">{label}</H3>
                ) : (
                  <h5 className="font-bold">{label}</h5>
                )
              ) : (
                <Input.Text
                  required
                  value={label}
                  onValueChange={(newname): void => {
                    handleRename(newname, categoryIndex);
                  }}
                />
              )}
              <div className="flex-1 overflow-auto">
                {items?.map((item, itemIndex) =>
                  item.absent === false || item.absent === undefined ? (
                    <StatItem
                      item={item}
                      categoryIndex={categoryIndex}
                      itemIndex={itemIndex}
                      key={itemIndex}
                      statsSpec={statsSpec}
                      onValueLoad={handleValueLoad}
                      onSpecChanged={
                        handleSpecChanged !== undefined
                          ? item.type === 'DefaultStat'
                            ? handleClick !== undefined
                              ? (tableName, newFields, itemName): void => {
                                  handleClick(
                                    {
                                      type: 'CustomStat',
                                      itemLabel: itemName,
                                      tableName,
                                      fields: newFields,
                                    },
                                    categoryIndex,
                                    itemIndex
                                  );
                                }
                              : undefined
                            : (_, fields) =>
                                handleSpecChanged(
                                  categoryIndex,
                                  itemIndex,
                                  fields
                                )
                          : undefined
                      }
                      onClick={
                        item.type === 'CustomStat'
                          ? undefined
                          : typeof handleClick === 'function'
                          ? handleSpecChanged === undefined
                            ? (): void =>
                                handleClick({
                                  type: 'DefaultStat',
                                  pageName: item.pageName,
                                  categoryName: item.categoryName,
                                  itemName: item.itemName,
                                  itemLabel: item.itemLabel,
                                  itemValue: item.itemValue,
                                })
                            : undefined
                          : undefined
                      }
                      onRemove={
                        handleRemove === undefined
                          ? undefined
                          : (): void => handleRemove(categoryIndex, itemIndex)
                      }
                    />
                  ) : undefined
                )}
              </div>
              {handleAdd !== undefined && handleRemove !== undefined ? (
                <div className="flex gap-2">
                  <Button.Small
                    variant={className.blueButton}
                    onClick={(): void => handleAdd(categoryIndex)}
                  >
                    {commonText('add')}
                  </Button.Small>
                  <span className="-ml-2 flex-1" />
                  <Button.Small
                    variant={className.redButton}
                    onClick={(): void => handleRemove(categoryIndex, undefined)}
                  >
                    {'Delete All'}
                  </Button.Small>
                </div>
              ) : null}
            </div>
          )
      )}
      {handleAdd !== undefined && (
        <Button.Gray
          className="!p-4 font-bold shadow-md shadow-gray-300"
          onClick={(): void => handleAdd(undefined)}
        >
          {commonText('add')}
        </Button.Gray>
      )}
    </>
  );
}
