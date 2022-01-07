import React from 'react';
import _ from 'underscore';

import * as cache from '../cache';
import commonText from '../localization/common';
import wbText from '../localization/workbench';
import type { IR, RA } from '../types';
import type {
  ColumnOptions,
  MatchBehaviors,
} from '../uploadplantomappingstree';
import dataModelStorage from '../wbplanviewmodel';
import { getMappingLineData } from '../wbplanviewnavigator';
import type { MappingsTree } from '../wbplanviewtreehelper';
import { Button, Checkbox, LabelForCheckbox, Radio } from './basic';
import { TableIcon } from './common';
import { useId } from './hooks';
import { closeDialog, ModalDialog } from './modaldialog';
import type { HtmlGeneratorFieldData } from './wbplanviewcomponents';
import {
  ButtonWithConfirmation,
  MappingPathComponent,
} from './wbplanviewcomponents';
import type { MappingPath } from './wbplanviewmapper';

export type GetMappedFieldsBind = (
  // A mapping path that would be used as a filter
  mappingPathFilter: MappingPath
) => MappingsTree;

export type PathIsMappedBind = (
  // A mapping path that would be used as a filter
  mappingPathFilter: MappingPath
) => boolean;

export function MappingsControlPanel({
  showHiddenFields,
  onToggleHiddenFields: handleToggleHiddenFields,
  onAddNewHeader: handleAddNewHeader,
}: {
  readonly showHiddenFields: boolean;
  readonly onToggleHiddenFields?: () => void;
  readonly onAddNewHeader?: (newHeaderName: string) => void;
}): JSX.Element {
  const newHeaderIdRef = React.useRef(1);

  return (
    <div role="toolbar" className="gap-x-2 print:hidden flex items-center">
      {typeof handleAddNewHeader === 'function' && (
        <Button
          onClick={(): void => {
            handleAddNewHeader(wbText('newHeaderName')(newHeaderIdRef.current));
            newHeaderIdRef.current += 1;
          }}
        >
          {wbText('addNewColumn')}
        </Button>
      )}
      <LabelForCheckbox>
        <Checkbox
          checked={showHiddenFields}
          onChange={handleToggleHiddenFields}
        />
        {wbText('revealHiddenFormFields')}
      </LabelForCheckbox>
    </div>
  );
}

export function ValidationResults(props: {
  readonly baseTableName: string;
  readonly validationResults: RA<MappingPath>;
  readonly onSave: () => void;
  readonly onDismissValidation: () => void;
  readonly getMappedFields: GetMappedFieldsBind;
  readonly onValidationResultClick: (mappingPath: MappingPath) => void;
  readonly mustMatchPreferences: IR<boolean>;
}): JSX.Element | null {
  if (props.validationResults.length === 0) return null;

  return (
    <ModalDialog
      properties={{
        title: wbText('validationFailedDialogTitle'),
        modal: false,
        width: '40vw',
        height: 'auto',
        close: props.onDismissValidation,
        buttons: [
          {
            text: wbText('continueEditing'),
            click: closeDialog,
          },
          {
            text: wbText('saveUnfinished'),
            click: props.onSave,
          },
        ],
      }}
    >
      {wbText('validationFailedDialogHeader')}
      <p>{wbText('validationFailedDialogMessage')}</p>
      <section className="gap-x-2 flex flex-col">
        {props.validationResults.map((fieldPath, index) => (
          <Button
            className="hover:bg-gray-300 border-x-0 bg-transparent border-b-0 rounded-none"
            key={index}
            onClick={props.onValidationResultClick.bind(undefined, fieldPath)}
          >
            <MappingPathComponent
              mappingLineData={getMappingLineData({
                baseTableName: props.baseTableName,
                mappingPath: fieldPath,
                iterate: true,
                generateLastRelationshipData: false,
                customSelectType: 'PREVIEW_LIST',
                getMappedFields: props.getMappedFields,
                mustMatchPreferences: props.mustMatchPreferences,
              })}
            />
          </Button>
        ))}
      </section>
    </ModalDialog>
  );
}

const mappingViewResizeThrottle = 150;
const defaultMappingViewHeight = 300;

export function MappingView(props: {
  readonly baseTableName: string;
  readonly focusedLineExists: boolean;
  readonly mappingPath: MappingPath;
  readonly mapButtonIsEnabled: boolean;
  readonly readonly: boolean;
  readonly mustMatchPreferences: IR<boolean>;
  readonly handleMapButtonClick?: () => void;
  readonly handleMappingViewChange?: (payload: {
    readonly index: number;
    readonly close: boolean;
    readonly newValue: string;
    readonly isRelationship: boolean;
    readonly currentTableName: string;
    readonly newTableName: string;
    readonly isDoubleClick: boolean;
  }) => void;
  readonly getMappedFields: GetMappedFieldsBind;
  readonly showHiddenFields?: boolean;
}): JSX.Element | null {
  const mappingLineData = getMappingLineData({
    baseTableName: props.baseTableName,
    mappingPath: props.mappingPath,
    generateLastRelationshipData: true,
    iterate: true,
    customSelectType: 'OPENED_LIST',
    handleChange({ isDoubleClick, ...rest }) {
      if (isDoubleClick) props.handleMapButtonClick?.();
      else
        props.handleMappingViewChange?.({
          ...rest,
          isDoubleClick,
        });
    },
    getMappedFields: props.getMappedFields,
    showHiddenFields: props.showHiddenFields,
    mustMatchPreferences: props.mustMatchPreferences,
  });
  const mapButtonIsEnabled =
    !props.readonly &&
    props.mapButtonIsEnabled &&
    (Object.entries(
      mappingLineData[mappingLineData.length - 1]?.fieldsData
    ).find(([, { isDefault }]) => isDefault)?.[1].isEnabled ??
      false);

  // `resize` event listener for the mapping view
  const mappingViewHeightRef = React.useRef<number>(defaultMappingViewHeight);
  const mappingViewParentRef = React.useCallback<
    (mappingViewParent: HTMLElement | null) => void
  >((mappingViewParent) => {
    if (typeof ResizeObserver === 'undefined' || mappingViewParent === null)
      return undefined;

    const resizeObserver = new ResizeObserver(
      _.throttle(() => {
        const height = mappingViewParent.offsetHeight;
        mappingViewHeightRef.current = height;
        cache.set('wbPlanViewUi', 'mappingViewHeight', height, {
          overwrite: true,
        });
      }, mappingViewResizeThrottle)
    );

    resizeObserver.observe(mappingViewParent);

    return (): void => resizeObserver.disconnect();
  }, []);

  const isMappable = mapButtonIsEnabled && props.focusedLineExists;

  return (
    <section
      className={`overflow-x-auto relative resize-vertical
        max-h-[50vh] min-h-[250px] h-[var(--mapping-view-height)]`}
      style={
        {
          '--mapping-view-height': `${mappingViewHeightRef.current ?? ''}px`,
        } as React.CSSProperties
      }
      aria-label={wbText('mappingEditor')}
      ref={mappingViewParentRef}
    >
      <div className="flex-nowrap gap-x-8 w-max flex h-full">
        <div className="gap-x-1 flex-nowrap flex" role="list">
          <MappingPathComponent mappingLineData={mappingLineData} />
        </div>
        <Button
          className="button flex-col justify-center p-2"
          disabled={!isMappable}
          onClick={
            mapButtonIsEnabled && props.focusedLineExists
              ? props.handleMapButtonClick
              : undefined
          }
          title={wbText('mapButtonDescription')}
        >
          {wbText('map')}
          <span
            className={`text-green-500 ${isMappable ? '' : 'invisible'}`}
            aria-hidden="true"
          >
            &#8594;
          </span>
        </Button>
      </div>
      <span
        className="absolute bottom-0 right-0 cursor-pointer pointer-events-none"
        title={wbText('resizeMappingEditorButtonDescription')}
        aria-hidden={true}
      >
        ⇲
      </span>
    </section>
  );
}

export function EmptyDataSetDialog({
  lineCount,
}: {
  readonly lineCount: number;
}): JSX.Element | null {
  const [showDialog, setShowDialog] = React.useState<boolean>(lineCount === 0);

  return showDialog ? (
    <ModalDialog
      properties={{
        title: wbText('emptyDataSetDialogTitle'),
        close: (): void => setShowDialog(false),
      }}
    >
      {wbText('emptyDataSetDialogHeader')}
      <p>{wbText('emptyDataSetDialogMessage')}</p>
    </ModalDialog>
  ) : null;
}

export function mappingOptionsMenu({
  id,
  columnOptions,
  readonly,
  onChangeMatchBehaviour: handleChangeMatchBehaviour,
  onToggleAllowNulls: handleToggleAllowNulls,
  onChangeDefaultValue: handleChangeDefaultValue,
}: {
  readonly id: (suffix: string) => string;
  readonly readonly: boolean;
  readonly columnOptions: ColumnOptions;
  readonly onChangeMatchBehaviour: (matchBehavior: MatchBehaviors) => void;
  readonly onToggleAllowNulls: (allowNull: boolean) => void;
  readonly onChangeDefaultValue: (defaultValue: string | null) => void;
}): IR<HtmlGeneratorFieldData> {
  return {
    matchBehavior: {
      optionLabel: (
        <>
          {wbText('matchBehavior')}
          <ul>
            {Object.entries({
              ignoreWhenBlank: {
                title: wbText('ignoreWhenBlank'),
                description: wbText('ignoreWhenBlankDescription'),
              },
              ignoreAlways: {
                title: wbText('ignoreAlways'),
                description: wbText('ignoreAlwaysDescription'),
              },
              ignoreNever: {
                title: wbText('ignoreNever'),
                description: wbText('ignoreNeverDescription'),
              },
            }).map(([id, { title, description }]) => (
              <li key={id}>
                <LabelForCheckbox title={description}>
                  <Radio
                    name="match-behavior"
                    value={id}
                    checked={columnOptions.matchBehavior === id}
                    readOnly={readonly}
                    onChange={({ target }): void =>
                      handleChangeMatchBehaviour(target.value as MatchBehaviors)
                    }
                  />
                  {` ${title}`}
                </LabelForCheckbox>
              </li>
            ))}
          </ul>
        </>
      ),
    },
    nullAllowed: {
      optionLabel: (
        <LabelForCheckbox>
          <Checkbox
            checked={columnOptions.nullAllowed}
            disabled={readonly}
            onChange={
              readonly
                ? undefined
                : (event): void => handleToggleAllowNulls(event.target.checked)
            }
          />{' '}
          {wbText('allowNullValues')}
        </LabelForCheckbox>
      ),
    },
    default: {
      optionLabel: (
        <>
          <LabelForCheckbox>
            <Checkbox
              checked={columnOptions.default !== null}
              disabled={readonly}
              onChange={
                readonly
                  ? undefined
                  : (): void =>
                      handleChangeDefaultValue(
                        columnOptions.default === null ? '' : null
                      )
              }
            />{' '}
            <span id={id('default-value')}>{wbText('useDefaultValue')}</span>
            {columnOptions.default !== null && ':'}
          </LabelForCheckbox>
          {typeof columnOptions.default === 'string' && (
            <>
              <br />
              <textarea
                value={columnOptions.default || ''}
                title={wbText('defaultValue')}
                aria-labelledby={id('default-value')}
                onChange={
                  readonly
                    ? undefined
                    : ({ target }): void =>
                        handleChangeDefaultValue(target.value)
                }
                disabled={readonly}
              />
            </>
          )}
        </>
      ),
      title: wbText('useDefaultValueDescription'),
    },
  };
}

export function ChangeBaseTable({
  onClick: handleClick,
}: {
  readonly onClick: () => void;
}): JSX.Element {
  return (
    <ButtonWithConfirmation
      dialogTitle={wbText('goToBaseTableDialogTitle')}
      dialogContent={
        <>
          {wbText('goToBaseTableDialogHeader')}
          {wbText('goToBaseTableDialogMessage')}
        </>
      }
      /* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */
      buttons={(confirm, cancel) => [
        {
          text: commonText('cancel'),
          click: cancel,
        },
        {
          text: commonText('changeBaseTable'),
          click: confirm,
        },
      ]}
      onConfirm={handleClick}
    >
      {wbText('baseTable')}
    </ButtonWithConfirmation>
  );
}

export function ReRunAutoMapper({
  onClick: handleClick,
  showConfirmation,
}: {
  readonly onClick: () => void;
  readonly showConfirmation: () => boolean;
}): JSX.Element {
  return (
    <ButtonWithConfirmation
      dialogTitle={wbText('reRunAutoMapperDialogTitle')}
      dialogContent={
        <>
          {wbText('reRunAutoMapperDialogHeader')}
          {wbText('reRunAutoMapperDialogMessage')}
        </>
      }
      /* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */
      buttons={(confirm, cancel) => [
        {
          text: commonText('cancel'),
          click: cancel,
        },
        {
          text: wbText('reRunAutoMapper'),
          click: confirm,
        },
      ]}
      showConfirmation={showConfirmation}
      onConfirm={handleClick}
    >
      {wbText('autoMapper')}
    </ButtonWithConfirmation>
  );
}

export function ToggleMappingPath({
  showMappingView,
  onClick: handleClick,
}: {
  readonly showMappingView: boolean;
  readonly onClick: () => void;
}): JSX.Element {
  return (
    <Button
      className={showMappingView ? '' : 'active'}
      onClick={handleClick}
      aria-pressed={!showMappingView}
    >
      {showMappingView
        ? wbText('hideMappingEditor')
        : wbText('showMappingEditor')}
    </Button>
  );
}

export function MustMatch({
  readonly,
  /**
   * Recalculating tables available for MustMatch is expensive, so we only
   * do it when opening the dialog
   */
  getMustMatchPreferences,
  onChange: handleChange,
  onClose: handleClose,
}: {
  readonly readonly: boolean;
  readonly getMustMatchPreferences: () => IR<boolean>;
  readonly onChange: (mustMatchPreferences: IR<boolean>) => void;
  readonly onClose: () => void;
}): JSX.Element {
  const id = useId('wbplanview-must-match');
  const [localPreferences, setLocalPreferences] = React.useState<
    IR<boolean> | undefined
  >(undefined);

  return (
    <>
      <Button
        aria-haspopup="dialog"
        onClick={(): void => setLocalPreferences(getMustMatchPreferences())}
      >
        {wbText('mustMatch')}
      </Button>
      {typeof localPreferences !== 'undefined' && (
        <ModalDialog
          properties={{
            title: wbText('matchingLogicDialogTitle'),
            close: (): void => {
              setLocalPreferences(undefined);
              handleClose();
            },
            width: 350,
            buttons: [
              {
                text:
                  Object.keys(localPreferences).length === 0
                    ? commonText('close')
                    : commonText('apply'),
                click: closeDialog,
              },
            ],
          }}
        >
          {Object.keys(localPreferences).length === 0 ? (
            wbText('matchingLogicUnavailableDialogMessage')
          ) : (
            <>
              <p id={id('description')}>
                {wbText('matchingLogicDialogMessage')}
              </p>
              <table
                className="grid-table grid-cols-[auto_auto] gap-2"
                aria-describedby={id('description')}
              >
                <thead>
                  <tr>
                    <th scope="col" className="justify-center">
                      {commonText('tableName')}
                    </th>
                    <th scope="col" className="justify-center">
                      {wbText('mustMatch')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(localPreferences).map(
                    ([tableName, mustMatch]) => (
                      <tr key={tableName}>
                        <td>
                          <label
                            htmlFor={id(`table-${tableName}`)}
                            className="contents"
                          >
                            <TableIcon
                              tableName={tableName}
                              tableLabel={false}
                            />
                            {dataModelStorage.tables[tableName].label}
                          </label>
                        </td>
                        <td className="justify-center">
                          <Checkbox
                            checked={mustMatch}
                            id={id(`table-${tableName}`)}
                            {...(readonly
                              ? {
                                  disabled: true,
                                }
                              : {
                                  onChange: (): void => {
                                    const newPreferences = {
                                      ...localPreferences,
                                      [tableName]: !mustMatch,
                                    };
                                    handleChange(newPreferences);
                                    setLocalPreferences(newPreferences);
                                  },
                                })}
                          />
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </>
          )}
        </ModalDialog>
      )}
    </>
  );
}
