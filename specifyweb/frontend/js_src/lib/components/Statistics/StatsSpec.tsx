import { getDateInputValue } from '../../utils/dayJs';
import type { IR } from '../../utils/types';
import { formatNumber } from '../Atoms/Internationalization';
import { queryFieldFilters } from '../QueryBuilder/FieldFilter';
import { statsText } from '../../localization/stats';
import { formattedEntry } from '../WbPlanView/mappingHelpers';
import type { BackendStatsResult, StatCategoryReturn } from './types';
import { userInformation } from '../InitialContext/userInformation';
import { ensure } from '../../utils/types';
import { urlSpec } from './definitions';

type StatsSpec =
  | {
      readonly [CATEGORY_NAME in keyof BackendStatsResult]: {
        readonly label: string;
        readonly categories: (
          backendStatsResult: BackendStatsResult[CATEGORY_NAME] | undefined
        ) => StatCategoryReturn;
      };
    }
  | {
      readonly [CATEGORY_NAME in string]: {
        readonly label: string;
        readonly categories: () => StatCategoryReturn;
      };
    };

/*
 * TODO: Return objects directly instead of returning a callback since
 *  Code now supports relative dates
 */
// @ts-expect-error
export const statsSpec: IR<StatsSpec> = {
  [statsText.collection()]: {
    holdings: {
      label: statsText.holdings(),
      categories: () => ({
        specimens: {
          label: statsText.collectionObjects(),
          spec: {
            type: 'QueryBuilderStat',
            tableName: 'CollectionObject',
            fields: [
              {
                path: formattedEntry,
                isDisplay: true,
                operStart: queryFieldFilters.any.id,
              },
            ],
          },
        },
        preparations: {
          label: statsText.preparations(),
          spec: {
            type: 'QueryBuilderStat',
            tableName: 'Preparation',
            fields: [
              {
                path: formattedEntry,
              },
              { path: 'countAmt' },
            ],
          },
        },
        typeSpecimens: {
          label: statsText.typeSpecimens(),
          spec: {
            type: 'QueryBuilderStat',
            tableName: 'Determination',
            fields: [
              {
                path: formattedEntry,
              },
              {
                path: 'typeStatusName',
                operStart: queryFieldFilters.equal.id,
                isNot: true,
              },
            ],
          },
        } /*
        familiesRepresented: {
          label: statsText('familiesRepresented'),
          spec: {
            type: 'QueryBuilderStat',
            tableName: 'Determination',
            fields: [
              {
                operStart: queryFieldFilters.any.id,
                path: 'taxon.Family',
                selectdistinct: true,
              },
            ],
          },
        },
        generaRepresented: {
          label: statsText('generaRepresented'),
          spec: {
            type: 'QueryBuilderStat',
            tableName: 'Determination',
            fields: [
              {
                operStart: queryFieldFilters.any.id,
                path: 'taxon.Genus',
                selectdistinct: true,
              },
            ],
          },
        },
        speciesRepresented: {
          label: statsText('speciesRepresented'),
          spec: {
            type: 'QueryBuilderStat',
            tableName: 'Determination',
            fields: [
              {
                operStart: queryFieldFilters.any.id,
                path: 'taxon.Genus',
                selectdistinct: true,
              },
            ],
          },
        },*/,
      }),
    },
    preparations: {
      label: statsText.preparations(),
      categories: () => ({
        phantomItem: {
          label: statsText.preparations(),
          spec: {
            type: 'BackEndStat',
            pathToValue: undefined,
            urlToFetch: urlSpec.preparations,
            formatter: ({
              lots,
              total,
            }: {
              readonly lots: number;
              readonly total: number;
            }) => `${formatNumber(lots)} / ${formatNumber(total)}`,
          },
        },
      }),
    },
    loans: {
      label: statsText.loans(),
      categories: () => ({
        itemsOnLoans: {
          label: statsText.itemsOnLoans(),
          spec: {
            type: 'QueryBuilderStat',
            tableName: 'LoanPreparation',
            fields: [
              {
                path: `loan.${formattedEntry}`,
              },
              {
                path: 'loan.isClosed',
                operStart: queryFieldFilters.falseOrNull.id,
                isDisplay: false,
              },
            ],
          },
        },
        openLoansCount: {
          label: statsText.openLoans(),
          spec: {
            type: 'QueryBuilderStat',
            tableName: 'Loan',
            fields: [
              {
                path: formattedEntry,
              },
              {
                path: 'isClosed',
                operStart: queryFieldFilters.falseOrNull.id,
                isDisplay: false,
              },
            ],
          },
        },
        overdueLoansCount: {
          label: statsText.overdueLoans(),
          spec: {
            type: 'QueryBuilderStat',
            tableName: 'Loan',
            fields: [
              {
                path: formattedEntry,
              },
              {
                path: 'currentDueDate',
                operStart: queryFieldFilters.lessOrEqual.id,
                startValue: getDateInputValue(new Date()),
              },
              {
                path: 'isClosed',
                operStart: queryFieldFilters.false.id,
                isDisplay: false,
              },
            ],
          },
        },
      }),
    },
    taxonomicTree: {
      label: statsText.taxonomicTree(),
      categories: () => ({
        classesCount: {
          label: statsText.classes(),
          spec: {
            type: 'QueryBuilderStat',
            tableName: 'Taxon',
            fields: [
              {
                path: formattedEntry,
              },
              {
                path: 'rankId',
                operStart: queryFieldFilters.equal.id,
                startValue: '60',
                isDisplay: false,
              },
            ],
          },
        },
        ordersCount: {
          label: statsText.orders(),
          spec: {
            type: 'QueryBuilderStat',
            tableName: 'Taxon',
            fields: [
              {
                path: formattedEntry,
              },
              {
                path: 'rankId',
                operStart: queryFieldFilters.equal.id,
                startValue: '100',
                isDisplay: false,
              },
            ],
          },
        },
        familiesCount: {
          label: statsText.families(),
          spec: {
            type: 'QueryBuilderStat',
            tableName: 'Taxon',
            fields: [
              {
                path: formattedEntry,
              },
              {
                path: 'rankId',
                operStart: queryFieldFilters.equal.id,
                startValue: '140',
                isDisplay: false,
              },
            ],
          },
        },
        generaCount: {
          label: statsText.genera(),
          spec: {
            type: 'QueryBuilderStat',
            tableName: 'Taxon',
            fields: [
              {
                path: formattedEntry,
              },
              {
                path: 'rankId',
                operStart: queryFieldFilters.equal.id,
                startValue: '180',
                isDisplay: false,
              },
            ],
          },
        },
        speciesCount: {
          label: statsText.species(),
          spec: {
            type: 'QueryBuilderStat',
            tableName: 'Taxon',
            fields: [
              {
                path: formattedEntry,
              },
              {
                path: 'rankId',
                operStart: queryFieldFilters.equal.id,
                startValue: '220',
                isDisplay: false,
              },
            ],
          },
        },
      }),
    },
    localityGeography: {
      label: statsText.localityGeography(),
      categories: () => ({
        localityCount: {
          label: statsText.localities(),
          spec: {
            type: 'QueryBuilderStat',
            tableName: 'Locality',
            fields: [
              {
                path: formattedEntry,
              },
              {
                path: 'localityId',
                operStart: queryFieldFilters.any.id,
              },
            ],
          },
        },
        geographyEntryCount: {
          label: statsText.geographyEntries(),
          spec: {
            type: 'QueryBuilderStat',
            tableName: 'Geography',
            fields: [
              {
                path: formattedEntry,
              },
              {
                path: 'geographyId',
                operStart: queryFieldFilters.any.id,
              },
            ],
          },
        },
        georeferencedLocalityCount: {
          label: statsText.georeferencedLocalities(),
          spec: {
            type: 'QueryBuilderStat',
            tableName: 'Locality',
            fields: [
              {
                path: formattedEntry,
              },
              {
                path: 'latitude1',
                operStart: queryFieldFilters.empty.id,
                isNot: true,
                isDisplay: false,
              },
            ],
          },
        },
      }),
    },
    typeSpecimens: {
      label: statsText.typeSpecimens(),
      categories: () => ({
        phantomItem: {
          label: statsText.typeSpecimens(),
          spec: {
            type: 'BackEndStat',
            pathToValue: undefined,
            urlToFetch: urlSpec.typeSpecimens,
            formatter: formatNumber,
          },
        },
      }),
    },
    catalogStats: {
      label: statsText.computerization(),
      categories() {
        const currentDate = new Date();
        const initialDate = getDateInputValue(currentDate);

        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);
        const initialDateSevenDaysPast = getDateInputValue(weekAgo);

        const monthAgo = new Date();
        monthAgo.setMonth(monthAgo.getMonth() - 1);
        const initialDateMonthPast = getDateInputValue(monthAgo);

        const yearAgo = new Date();
        yearAgo.setFullYear(yearAgo.getFullYear() - 1);
        const initialDateYearPast = getDateInputValue(yearAgo);

        return {
          catalogedLastSevenDays: {
            label: statsText.computerizedLastSevenDays(),
            spec: {
              type: 'QueryBuilderStat',
              tableName: 'CollectionObject',
              fields: [
                {
                  path: formattedEntry,
                },
                {
                  path: 'catalogedDate',
                  operStart: queryFieldFilters.between.id,
                  startValue: `${initialDateSevenDaysPast},${initialDate}`,
                },
              ],
            },
          },
          catalogedLastMonth: {
            label: statsText.computerizedLastMonth(),
            spec: {
              type: 'QueryBuilderStat',
              tableName: 'CollectionObject',
              fields: [
                {
                  path: formattedEntry,
                },
                {
                  path: 'catalogedDate',
                  operStart: queryFieldFilters.between.id,
                  startValue: `${initialDateMonthPast},${initialDate}`,
                },
              ],
            },
          },
          catalogedLastYear: {
            label: statsText.computerizedLastYear,
            spec: {
              type: 'QueryBuilderStat',
              tableName: 'CollectionObject',
              fields: [
                {
                  path: formattedEntry,
                },
                {
                  path: 'catalogedDate',
                  operStart: queryFieldFilters.between.id,
                  startValue: `${initialDateYearPast},${initialDate}`,
                },
              ],
            },
          },
        };
      },
    },
  },
  [statsText.personal()]: {
    holdings: {
      label: statsText.collection(),
      categories: () =>
        ({
          ordersCount: {
            label: statsText.orders(),
            spec: {
              type: 'QueryBuilderStat',
              tableName: 'Taxon',
              fields: [
                {
                  path: formattedEntry,
                },
                {
                  path: 'rankId',
                  operStart: queryFieldFilters.equal.id,
                  startValue: '100',
                  isDisplay: false,
                },
              ],
            },
          },
          collectionObjectsCataloged: {
            label: statsText.collectionObjectsCataloged(),
            spec: {
              type: 'QueryBuilderStat',
              tableName: 'CollectionObject',
              fields: [
                {
                  path: 'cataloger.SpecifyUser.name',
                  startvalue: userInformation.name,
                  operstart: queryFieldFilters.equal.id,
                },
              ],
            },
          },
          collectionObjectsDetermined: {
            label: statsText.collectionObjectsDetermined(),
            spec: {
              type: 'QueryBuilderStat',
              tableName: 'CollectionObject',
              fields: [
                {
                  path: 'determinations.determiner.SpecifyUser.name',
                  startvalue: userInformation.name,
                  operstart: queryFieldFilters.equal.id,
                },
              ],
            },
          },
          collectionObjectInventorized: {
            label: statsText.collectionObjects(),
            spec: {
              type: 'QueryBuilderStat',
              tableName: 'CollectionObject',
              fields: [
                {
                  path: 'inventorizedBy.SpecifyUser.name',
                  startvalue: userInformation.name,
                  operstart: queryFieldFilters.equal.id,
                },
              ],
            },
          },
        } as const),
    },
  },
};

ensure<IR<StatsSpec>>()(statsSpec);
