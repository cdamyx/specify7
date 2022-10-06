import React from 'react';
import { useOutletContext } from 'react-router';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import type { AppResourceMode } from './helpers';
import { getAppResourceMode } from './helpers';
import type {
  SpAppResource,
  SpAppResourceDir,
  SpViewSetObj,
} from '../DataModel/types';
import { commonText } from '../../localization/common';
import { fetchResource } from '../DataModel/resource';
import { getUniqueName } from '../../utils/uniquifyName';
import type { AppResourcesOutlet } from './index';
import { findAppResourceDirectory } from './Create';
import { AppResourceEditor } from './Editor';
import type { AppResources } from './hooks';
import { useResourcesTree } from './hooks';
import { Container, H3 } from '../Atoms';
import { useAsyncState } from '../../hooks/useAsyncState';
import { SerializedResource } from '../DataModel/helperTypes';

export function AppResourceView(): JSX.Element {
  return <Wrapper mode="appResources" />;
}

export function ViewSetView(): JSX.Element {
  return <Wrapper mode="viewSets" />;
}

export function Wrapper({
  mode,
}: {
  readonly mode: AppResourceMode;
}): JSX.Element | null {
  const {
    getSet: [resources, setResources],
  } = useOutletContext<AppResourcesOutlet>();
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as
    | {
        readonly resource?: SerializedResource<SpAppResource | SpViewSetObj>;
        readonly directoryKey?: string;
        readonly initialDataFrom?: number;
      }
    | undefined;
  const resource = useAppResource(state?.resource, resources, mode);
  const initialData = useInitialData(state?.initialDataFrom);
  const directory = useDirectory(state?.directoryKey, resource, resources);

  const baseHref = `/specify/resources/${
    mode === 'appResources' ? 'app-resource' : 'view-set'
  }`;
  return initialData === undefined ? null : resource === undefined ||
    directory === undefined ? (
    <Container.Base className="flex-1">
      <H3>{commonText('pageNotFound')}</H3>
    </Container.Base>
  ) : (
    <AppResourceEditor
      directory={directory}
      initialData={initialData === false ? undefined : initialData}
      resource={resource}
      onClone={(appResource, initialDataFrom): void =>
        navigate(`${baseHref}/new/`, {
          state: {
            resource: {
              ...appResource,
              name: getUniqueName(appResource.name, [appResource.name]),
            },
            directoryKey: state?.directoryKey,
            initialDataFrom,
          },
        })
      }
      onDeleted={(): void => {
        const mode = getAppResourceMode(
          resource
          // Casting to simplify typing
        ) as 'appResources';
        setResources({
          ...resources,
          [mode]: resources[mode].filter((record) => record !== resource),
        });
        navigate('/specify/resources/');
      }}
      onSaved={(appResource, directory): void => {
        setResources({
          ...resources,
          directories:
            resource.id === undefined && typeof directory.id === 'number'
              ? [...resources.directories, directory]
              : resources.directories,
          [mode]: [
            ...resources[mode as 'appResources'].filter(
              ({ id }) => id !== appResource.id
            ),
            appResource,
          ],
        });
        navigate(`${baseHref}/${appResource.id}/`);
      }}
    />
  );
}

function useAppResource(
  resource: SerializedResource<SpAppResource | SpViewSetObj> | undefined,
  resources: AppResources,
  mode: AppResourceMode
): SerializedResource<SpAppResource | SpViewSetObj> | undefined {
  const { id } = useParams();
  return React.useMemo(
    () =>
      resource ??
      resources[mode as 'appResources'].find(
        (resource) => resource.id.toString() === id
      ),
    [resource, resources, id, mode]
  );
}

function useInitialData(
  initialDataFrom: number | undefined
): string | false | undefined {
  return useAsyncState(
    React.useCallback(
      async () =>
        initialDataFrom === undefined
          ? false
          : fetchResource('SpAppResourceData', initialDataFrom).then(
              ({ data }) => data ?? ''
            ),
      [initialDataFrom]
    ),
    true
  )[0];
}

function useDirectory(
  directoryKey: string | undefined,
  resource: SerializedResource<SpAppResource | SpViewSetObj> | undefined,
  resources: AppResources
): SerializedResource<SpAppResourceDir> | undefined {
  const resourcesTree = useResourcesTree(resources);
  return React.useMemo(() => {
    if (typeof directoryKey === 'string')
      return findAppResourceDirectory(resourcesTree, directoryKey);
    const directoryUrl = resource?.spAppResourceDir;
    return resources.directories.find(
      (directory) => directory.resource_uri === directoryUrl
    );
  }, [resourcesTree, directoryKey, resource, resources]);
}
