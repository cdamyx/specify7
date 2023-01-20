import { preferencesText } from '../../localization/preferences';
import { StatLayout } from '../Statistics/types';
import { error } from '../Errors/assert';
import React from 'react';
import { defineItem, GenericPreferences } from './Definitions';
import { ensure } from '../../utils/types';
import { statsText } from '../../localization/stats';

export const collectionPreferenceDefinitions = {
  statistics: {
    title: statsText.statistics(),
    subCategories: {
      appearance: {
        title: preferencesText.appearance(),
        items: {
          layout: defineItem<StatLayout | undefined>({
            title: 'Defines the layout of the stats page',
            requiresReload: false,
            visible: false,
            defaultValue: undefined,
            renderer: () => <>{error('This should not get called')}</>,
          }),
          defaultLayout: defineItem<StatLayout | undefined>({
            title: 'Defines the default layout of the stats page',
            requiresReload: false,
            visible: false,
            defaultValue: undefined,
            renderer: () => <>{error('This should not get called')}</>,
          }),
        },
      },
    },
  },
};

ensure<GenericPreferences>()(collectionPreferenceDefinitions);
