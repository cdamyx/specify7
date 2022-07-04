import React from 'react';

import type { AnySchema } from '../datamodelutils';
import type { SpecifyResource } from '../legacytypes';
import { commonText } from '../localization/common';
import { formsText } from '../localization/forms';
import type { LiteralField } from '../specifyfield';
import type { SpecifyModel } from '../specifymodel';
import type { RA } from '../types';
import { defined } from '../types';
import { Button, Input, Label, Ul } from './basic';
import { useBooleanState } from './hooks';
import { Dialog } from './modaldialog';
import { useCachedState } from './statecache';

export function FormAutoNumbering({
  resource,
}: {
  readonly resource: SpecifyResource<AnySchema>;
}): JSX.Element | null {
  const fields = getAutoNumberingFields(resource.specifyModel);
  const [isOpen, handleOpen, handleClose] = useBooleanState();
  return fields.length > 0 ? (
    <>
      <Button.Simple onClick={handleOpen}>
        {formsText('autoNumbering')}
      </Button.Simple>
      {isOpen && (
        <AutoNumberingDialog
          resource={resource}
          fields={fields}
          onClose={handleClose}
        />
      )}
    </>
  ) : null;
}

const getAutoNumberingFields = (model: SpecifyModel): RA<LiteralField> =>
  model.literalFields.filter(
    (field) => field.getUiFormatter()?.canAutonumber() === true
  );

function AutoNumberingDialog({
  resource,
  fields,
  onClose: handleClose,
}: {
  readonly resource: SpecifyResource<AnySchema>;
  readonly fields: RA<LiteralField>;
  readonly onClose: () => void;
}): JSX.Element {
  const [globalConfig = {}, setGlobalConfig] = useCachedState({
    category: 'forms',
    key: 'autoNumbering',
    defaultValue: {},
    staleWhileRefresh: false,
  });
  const config =
    (globalConfig[resource.specifyModel.name] as RA<string>) ?? fields;

  function handleEnableAutoNumbering(fieldName: string): void {
    const stringValue = ((resource.get(fieldName) as string) ?? '').toString();
    if (stringValue.length === 0) {
      const field = defined(resource.specifyModel.getLiteralField(fieldName));
      const formatter = defined(field.getUiFormatter());
      const wildCard = formatter.valueOrWild();
      resource.set(fieldName, wildCard as never);
    }
    handleChange([...config, fieldName]);
  }

  function handleDisableAutoNumbering(fieldName: string): void {
    const field = defined(resource.specifyModel.getLiteralField(fieldName));
    const formatter = defined(field.getUiFormatter());
    const wildCard = formatter.valueOrWild();
    if (resource.get(fieldName) === wildCard)
      resource.set(fieldName, null as never);
    handleChange(config.filter((name) => name !== fieldName));
  }

  const handleChange = (config: RA<string>): void =>
    setGlobalConfig({
      ...globalConfig,
      [resource.specifyModel.name]: config,
    });

  return (
    <Dialog
      header={formsText('autoNumbering')}
      buttons={commonText('close')}
      onClose={handleClose}
    >
      <Ul>
        {fields.map(({ name, label }) => (
          <li key={name}>
            <Label.ForCheckbox>
              <Input.Checkbox
                checked={config.includes(name)}
                onValueChange={(checked): void =>
                  checked
                    ? handleEnableAutoNumbering(name)
                    : handleDisableAutoNumbering(name)
                }
              />
              {label}
            </Label.ForCheckbox>
          </li>
        ))}
      </Ul>
    </Dialog>
  );
}
