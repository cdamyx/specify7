import { error } from '../assert';
import { fetchCollection } from '../collection';
import type { AnySchema } from '../datamodelutils';
import { collectionsForResource } from '../domain';
import type { SpecifyResource } from '../legacytypes';
import commonText from '../localization/common';
import * as navigation from '../navigation';
import { NotFoundView } from '../notfoundview';
import * as querystring from '../querystring';
import { resourceViewUrl } from '../resource';
import { router } from '../router';
import { getModel, getModelById, schema } from '../schema';
import * as app from '../specifyapp';
import { setCurrentView } from '../specifyapp';
import type { SpecifyModel } from '../specifymodel';
import { defined } from '../types';
import { userInformation } from '../userinfo';
import { crash } from './errorboundary';
import { setTitle } from './hooks';
import { OtherCollectionView } from './othercollectionview';
import { showResource } from './resourceview';

const reGuid = /[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}/;

async function recordSetView(id: string, index = '0'): Promise<void> {
  const recordSet = new schema.models.RecordSet.Resource({
    id: Number.parseInt(id),
  });
  return recordSet.fetchPromise().then((recordSet) =>
    typeof recordSet === 'undefined'
      ? setCurrentView(new NotFoundView())
      : checkLoggedInCollection(
          recordSet,
          (): void =>
            void fetchCollection('RecordSetItem', {
              recordSet: recordSet.id,
              offset: Number.parseInt(index),
              limit: 1,
            })
              .then(({ records }) =>
                navigation.navigate(
                  querystring.format(
                    resourceViewUrl(
                      getModelById(recordSet.get('dbTableId')).name,
                      records[0].recordId
                    ),
                    { recordSetId: id }
                  ),
                  {
                    replace: true,
                    trigger: true,
                  }
                )
              )
              .catch(crash)
        ).catch(crash)
  );
}

// Begins the process of creating a new resource
const newResourceView = async (modelName: string): Promise<void> =>
  userInformation.isReadOnly
    ? Promise.resolve(app.setCurrentView(new NotFoundView()))
    : resourceView(modelName, undefined);

/*
 * This function shows users individual resources which
 * can optionally be in the context of some recordset
 */
async function resourceView(
  modelName: string,
  id: string | undefined
): Promise<void> {
  const model = getModel(modelName);

  if (typeof model === 'undefined') {
    app.setCurrentView(new NotFoundView());
    return undefined;
  } else if (reGuid.test(id ?? '')) return viewResourceByGuid(model, id ?? '');

  // Look to see if we are in the context of a recordset

  const resource = new model.Resource({ id });

  const parameters = querystring.parse();
  const recordSet =
    typeof parameters.recordsetid === 'string'
      ? new schema.models.RecordSet.Resource({
          id: Number.parseInt(parameters.recordsetid),
        })
      : undefined;
  if (typeof recordSet === 'object') resource.recordsetid = recordSet.id;

  /*
   * We preload the resource and recordset to make sure they exist. this prevents
   * an unfilled view from being displayed.
   */
  return Promise.all([
    resource.isNew() ? resource.fetchPromise() : undefined,
    recordSet?.fetchPromise(),
  ])
    .catch(crash)
    .then(async () =>
      checkLoggedInCollection(resource, (): void =>
        showResource(resource, recordSet)
      )
    );
}

async function viewResourceByGuid(
  model: SpecifyModel,
  guid: string
): Promise<void> {
  const collection = new model.LazyCollection({ filters: { guid } });
  return collection.fetchPromise({ limit: 1 }).then(({ models }) => {
    if (models.length === 0) {
      app.setCurrentView(new NotFoundView());
      setTitle(commonText('pageNotFound'));
      return undefined;
    } else
      return checkLoggedInCollection(models[0], (): void =>
        showResource(models[0], undefined, true)
      );
  });
}

async function byCatNumber(
  rawCollection: string,
  rawCatNumber: string
): Promise<void> {
  const collection = decodeURIComponent(rawCollection);
  let catNumber = decodeURIComponent(rawCatNumber);
  const collectionLookup = new schema.models.Collection.LazyCollection({
    filters: { code: collection },
  });
  return collectionLookup
    .fetchPromise({ limit: 1 })
    .then((collections) => {
      if (collections.models.length === 0)
        error('Unable to find the collection');
      else if (collections._totalCount !== 1)
        error('Multiple collections with code:', collections);
      const collection = collections.models[0];
      if (collection.id !== schema.domainLevelIds.collection) {
        navigation.switchCollection(collection.id);
        return undefined;
      }

      const formatter = defined(
        schema.models.CollectionObject.getLiteralField('catalogNumber')
      ).getUiFormatter();
      if (typeof formatter === 'object') {
        const formatted = formatter.format(catNumber);
        if (typeof formatted === 'undefined')
          error('bad catalog number:', catNumber);
        catNumber = formatted;
      }

      const collectionObjects =
        new schema.models.CollectionObject.LazyCollection({
          filters: { catalognumber: catNumber },
          domainfilter: true,
        });
      return collectionObjects.fetchPromise({ limit: 1 }).then(({ models }) => {
        if (models.length === 0) error('Unable to find collection object');
        showResource(models[0], undefined, true);
        return undefined;
      });
    })
    .catch(() => app.setCurrentView(new NotFoundView()));
}

// Check that it makes sense to view this resource when logged into current collection
const checkLoggedInCollection = async (
  resource: SpecifyResource<AnySchema>,
  callback: () => void
): Promise<void> =>
  resource.isNew()
    ? Promise.resolve(void callback())
    : collectionsForResource(resource).then((collections) =>
        collections.some(({ id }) => id === schema.domainLevelIds.collection)
          ? callback()
          : app.setCurrentView(
              new OtherCollectionView({
                collections,
              })
            )
      );

export default function routes(): void {
  router.route('recordset/:id/', 'recordSetView', recordSetView);
  router.route('recordset/:id/:index/', 'recordSetView', recordSetView);
  router.route('view/:model/:id/', 'resourceView', resourceView);
  router.route('view/:model/new/', 'newResourceView', newResourceView);
  router.route('bycatalog/:collection/:catno/', 'byCatNum', byCatNumber);
}
