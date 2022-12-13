import React from 'react';

import { useBooleanState } from '../../hooks/useBooleanState';
import { useCachedState } from '../../hooks/useCachedState';
import { adminText } from '../../localization/admin';
import { commonText } from '../../localization/common';
import { toggleItem } from '../../utils/utils';
import { Ul } from '../Atoms';
import { Button } from '../Atoms/Button';
import { className } from '../Atoms/className';
import { Input, Label } from '../Atoms/Form';
import { icons } from '../Atoms/Icons';
import { Link } from '../Atoms/Link';
import { Dialog } from '../Molecules/Dialog';
import type { AppResourceFilters as AppResourceFiltersType } from './filtersHelpers';
import {
  allAppResources,
  countAppResources,
  defaultAppResourceFilters,
  filterAppResources,
  hasAllAppResources,
} from './filtersHelpers';
import type { AppResources } from './hooks';
import { appResourceSubTypes, appResourceTypes } from './types';

export function AppResourcesFilters({
  initialResources,
}: {
  readonly initialResources: AppResources;
}): JSX.Element {
  const [filters = defaultAppResourceFilters, setFilters] = useCachedState(
    'appResources',
    'filters'
  );

  const showAllResources = hasAllAppResources(filters.appResources);
  const handleToggleResources = (): void =>
    setFilters({
      ...filters,
      appResources: showAllResources ? [] : allAppResources,
    });

  const [isOpen, handleOpen, handleClose] = useBooleanState();

  return (
    <>
      <div className="flex gap-2 rounded bg-[color:var(--background)]">
        <span className="sr-only">{adminText('filters')}</span>
        <RadioButton
          isPressed={filters.viewSets}
          onClick={(): void =>
            setFilters({
              viewSets: showAllResources ? true : !filters.viewSets,
              appResources: [],
            })
          }
        >
          {commonText('formDefinitions')}
        </RadioButton>
        <RadioButton
          isPressed={showAllResources}
          onClick={(): void =>
            setFilters({
              viewSets: false,
              appResources:
                filters.viewSets || !showAllResources ? allAppResources : [],
            })
          }
        >
          {commonText('appResources')}
        </RadioButton>
        <Button.Blue
          aria-label={adminText('custom')}
          title={adminText('custom')}
          onClick={handleOpen}
        >
          {icons.cog}
        </Button.Blue>
      </div>
      {isOpen && (
        <Dialog
          buttons={commonText('close')}
          header={adminText('custom')}
          modal={false}
          onClose={handleClose}
        >
          <Ul>
            <li>
              <Label.Inline>
                <Input.Checkbox
                  checked={filters.viewSets}
                  onValueChange={(): void =>
                    setFilters({
                      ...filters,
                      viewSets: !filters.viewSets,
                    })
                  }
                />
                {appResourceTypes.viewSets.icon}
                {`${commonText('formDefinitions')} (${countAppResources(
                  initialResources,
                  { appResources: [], viewSets: true }
                )})`}
              </Label.Inline>
            </li>
            <li>
              <Label.Inline>
                <Input.Checkbox
                  checked={showAllResources}
                  onValueChange={handleToggleResources}
                />
                {appResourceTypes.appResources.icon}
                {`${commonText('appResources')} (${countAppResources(
                  initialResources,
                  { appResources: allAppResources, viewSets: false }
                )})`}
              </Label.Inline>
              <Ul className="pl-6">
                {Object.entries(appResourceSubTypes).map(
                  ([key, { label, icon, documentationUrl }]): JSX.Element => (
                    <li key={key}>
                      <Label.Inline>
                        <Input.Checkbox
                          checked={filters.appResources.includes(key)}
                          onValueChange={(): void =>
                            setFilters({
                              ...filters,
                              appResources: toggleItem(
                                filters.appResources,
                                key
                              ),
                            })
                          }
                        />
                        {icon}
                        {`${label} (${countAppResources(initialResources, {
                          appResources: [key],
                          viewSets: false,
                        })})`}
                        {typeof documentationUrl === 'string' && (
                          <Link.Icon
                            href={documentationUrl}
                            icon="externalLink"
                            target="_blank"
                            title={commonText('documentation')}
                          />
                        )}
                      </Label.Inline>
                    </li>
                  )
                )}
              </Ul>
            </li>
          </Ul>
        </Dialog>
      )}
    </>
  );
}

function RadioButton({
  isPressed,
  children,
  onClick: handleClick,
}: {
  readonly isPressed: boolean;
  readonly children: string;
  readonly onClick: () => void;
}): JSX.Element {
  return (
    <button
      aria-pressed={isPressed}
      className={`
        ${className.niceButton} aria-handled
        ${
          isPressed
            ? className.blueButton
            : 'hover:bg-gray-300 hover:dark:bg-neutral-600'
        }
      `}
      type="button"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export function useFilteredAppResources(
  initialResources: AppResources,
  initialFilters: AppResourceFiltersType | undefined = defaultAppResourceFilters
): AppResources {
  const [filters, setFilters] = useCachedState('appResources', 'filters');

  React.useEffect(() => {
    if (initialFilters === defaultAppResourceFilters) return undefined;
    setFilters(initialFilters);
    const oldFilter = filters;
    return (): void => setFilters(oldFilter);
  }, [setFilters]);

  const nonNullFilters = filters ?? initialFilters;
  return React.useMemo(
    () => filterAppResources(initialResources, nonNullFilters),
    [nonNullFilters, initialResources]
  );
}
