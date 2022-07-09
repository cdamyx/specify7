import React from 'react';

import {
  buildAppResourceConformation,
  getAppResourceMode,
} from '../appresourceshelpers';
import type {
  SpAppResource,
  SpAppResourceDir,
  SpViewSetObj as SpViewSetObject,
} from '../datamodel';
import type { SerializedResource } from '../datamodelutils';
import { removeItem, replaceItem } from '../helpers';
import { adminText } from '../localization/admin';
import { commonText } from '../localization/common';
import { hasToolPermission } from '../permissions';
import type { RA } from '../types';
import { AppResourceIcon } from './appresourceeditorcomponents';
import {
  AppResourcesFilters,
  useFilteredAppResources,
} from './appresourcefilters';
import type { AppResources, AppResourcesTree } from './appresourceshooks';
import { useAppResourceCount, useResourcesTree } from './appresourceshooks';
import { Button, className, Link, Ul } from './basic';
import { useId } from './hooks';
import { icons } from './icons';
import { useCachedState } from './statecache';

export function AppResourcesAside({
  resources: initialResources,
  onOpen: handleOpen,
  onCreate: handleCreate,
}: {
  readonly resources: AppResources;
  readonly onOpen: (
    resource: SerializedResource<SpAppResource | SpViewSetObject>,
    directory: SerializedResource<SpAppResourceDir>
  ) => void;
  readonly onCreate: (directory: SerializedResource<SpAppResourceDir>) => void;
}): JSX.Element {
  const [conformations = [], setConformations] = useCachedState({
    category: 'appResources',
    key: 'conformation',
    defaultValue: [],
    staleWhileRefresh: false,
  });
  const resources = useFilteredAppResources(initialResources);
  const resourcesTree = useResourcesTree(resources);
  return (
    <aside className={className.containerBase}>
      <Ul role="tree" className="flex flex-col flex-1 gap-1 overflow-auto">
        {resourcesTree.map((resources) => (
          <TreeItem
            resourcesTree={resources}
            key={resources.key}
            conformations={conformations}
            onFold={setConformations}
            onOpen={handleOpen}
            onCreate={handleCreate}
          />
        ))}
      </Ul>
      <div className="flex flex-wrap gap-2">
        <AppResourcesFilters initialResources={initialResources} />
        <AppResourcesExpand
          resourcesTree={resourcesTree}
          onChange={setConformations}
        />
      </div>
    </aside>
  );
}

export type AppResourcesConformation = {
  readonly key: string;
  readonly children: RA<AppResourcesConformation>;
};

function AppResourcesExpand({
  resourcesTree,
  onChange: handleChange,
}: {
  readonly resourcesTree: AppResourcesTree;
  readonly onChange: (conformation: RA<AppResourcesConformation>) => void;
}): JSX.Element {
  return (
    <>
      <Button.Blue
        onClick={(): void =>
          handleChange(buildAppResourceConformation(resourcesTree))
        }
      >
        {commonText('expandAll')}
      </Button.Blue>
      <Button.Blue onClick={(): void => handleChange([])}>
        {commonText('collapseAll')}
      </Button.Blue>
    </>
  );
}

function TreeItem({
  resourcesTree,
  conformations,
  onFold: handleFold,
  onOpen: handleOpen,
  onCreate: handleCreate,
}: {
  readonly resourcesTree: AppResourcesTree[number];
  readonly conformations: RA<AppResourcesConformation>;
  readonly onFold: (conformations: RA<AppResourcesConformation>) => void;
  readonly onOpen: (
    resource: SerializedResource<SpAppResource | SpViewSetObject>,
    directory: SerializedResource<SpAppResourceDir>
  ) => void;
  readonly onCreate: (directory: SerializedResource<SpAppResourceDir>) => void;
}): JSX.Element {
  const { label, key, subCategories } = resourcesTree;
  const conformationIndex = conformations.findIndex(
    (conformation) => conformation.key === key
  );
  const isExpanded = conformationIndex !== -1;
  const conformation = conformations[conformationIndex] ?? {
    key,
    children: [],
  };
  const id = useId('app-resources-tree');
  const count = useAppResourceCount(resourcesTree);
  return (
    <li
      id={id('li')}
      aria-labelledby={id('label')}
      role="treeitem"
      aria-expanded={isExpanded}
      className="flex flex-col gap-2"
    >
      <Button.LikeLink
        id={id('label')}
        aria-controls={id('li')}
        className="font-bold"
        onClick={(): void =>
          handleFold(
            conformationIndex === -1
              ? [...conformations, conformation]
              : removeItem(conformations, conformationIndex)
          )
        }
      >
        {label}
        <span className="text-neutral-500">{` (${count})`}</span>
      </Button.LikeLink>
      {isExpanded && (
        <>
          <TreeItemResources
            resourcesTree={resourcesTree}
            onCreate={handleCreate}
            onOpen={handleOpen}
          />
          {subCategories.length > 0 && (
            <Ul
              role="group"
              aria-label={adminText('subCategories')}
              className="flex flex-col gap-2 pl-4"
            >
              {subCategories.map((resources) => (
                <TreeItem
                  resourcesTree={resources}
                  key={resources.key}
                  conformations={conformation.children}
                  onFold={(newConformation): void =>
                    handleFold(
                      mutateConformation(conformations, key, newConformation)
                    )
                  }
                  onOpen={handleOpen}
                  onCreate={handleCreate}
                />
              ))}
            </Ul>
          )}
        </>
      )}
    </li>
  );
}

function TreeItemResources({
  resourcesTree,
  onCreate: handleCreate,
  onOpen: handleOpen,
}: {
  readonly resourcesTree: AppResourcesTree[number];
  readonly onCreate: (directory: SerializedResource<SpAppResourceDir>) => void;
  readonly onOpen: (
    resource: SerializedResource<SpAppResource | SpViewSetObject>,
    directory: SerializedResource<SpAppResourceDir>
  ) => void;
}): JSX.Element | null {
  const { appResources, viewSets, directory } = resourcesTree;
  const canCreate =
    hasToolPermission('resources', 'create') && typeof directory === 'object';
  return canCreate ? (
    <Ul role="group" aria-label={adminText('resources')} className="pl-4">
      {[...appResources, ...viewSets].map((resource, index) => (
        <li key={index}>
          <ResourceItem
            resource={resource}
            onOpen={(resource): void => handleOpen(resource, directory)}
          />
        </li>
      ))}
      {canCreate && (
        <li>
          <Button.LikeLink onClick={(): void => handleCreate(directory)}>
            <span className={className.dataEntryAdd}>{icons.plus}</span>
            {adminText('addResource')}
          </Button.LikeLink>
        </li>
      )}
    </Ul>
  ) : null;
}

function mutateConformation(
  conformations: RA<AppResourcesConformation>,
  key: string,
  childConformation: RA<AppResourcesConformation>
): RA<AppResourcesConformation> {
  const conformationIndex = conformations.findIndex(
    (conformation) => conformation.key === key
  );
  return replaceItem(conformations, conformationIndex, {
    key,
    children: childConformation,
  });
}

function ResourceItem({
  resource,
  onOpen: handleOpen,
}: {
  readonly resource: SerializedResource<SpAppResource | SpViewSetObject>;
  readonly onOpen: (
    resource: SerializedResource<SpAppResource | SpViewSetObject>
  ) => void;
}): JSX.Element {
  const url =
    getAppResourceMode(resource) === 'appResources'
      ? `/specify/appresource/${resource.id}`
      : `/specify/viewset/${resource.id}`;
  return (
    <Link.Default
      href={url}
      className={`!text-neutral-500 hover:!text-brand-300 ${className.navigationHandled}`}
      onClick={(event): void => {
        event.preventDefault();
        handleOpen(resource);
      }}
    >
      <AppResourceIcon resource={resource} />
      {resource.name || commonText('nullInline')}
    </Link.Default>
  );
}
