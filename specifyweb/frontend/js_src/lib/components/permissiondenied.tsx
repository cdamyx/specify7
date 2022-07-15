import React from 'react';
import { omit } from 'underscore';

import type { SpecifyUser, Tables } from '../datamodel';
import type { AnyTree, SerializedModel } from '../datamodelutils';
import { serializeResource } from '../datamodelutils';
import { format } from '../dataobjformatters';
import { f } from '../functools';
import { jsonStringify } from '../helpers';
import { adminText } from '../localization/admin';
import { commonText } from '../localization/common';
import type { getOperationPermissions, tableActions } from '../permissions';
import {
  hasPermission,
  hasTablePermission,
  hasToolPermission,
  hasTreeAccess,
  institutionPermissions,
} from '../permissions';
import { formatUrl } from '../querystring';
import { schema } from '../schema';
import type { toolDefinitions } from '../securityutils';
import {
  actionToLabel,
  partsToResourceName,
  resourceNameToLongLabel,
  tableNameToResourceName,
  toolPermissionPrefix,
} from '../securityutils';
import type { RA } from '../types';
import { userInformation } from '../userinfo';
import { Button } from './basic';
import { useAsyncState } from './hooks';
import { Dialog } from './modaldialog';
import { deserializeResource } from './resource';

type PermissionErrorSchema = {
  readonly NoMatchingRuleException: RA<{
    readonly action: string;
    // This is null when accessing resource that is not scoped to a collection
    readonly collectionid: number | null;
    readonly resource: string;
    readonly userid: number;
  }>;
};

export function ToolPermissionDenied({
  tool,
  action,
}: {
  readonly tool: keyof ReturnType<typeof toolDefinitions>;
  readonly action: typeof tableActions[number];
}): JSX.Element {
  return (
    <PermissionError
      error={
        <FormatPermissionError
          error={[
            {
              resource: partsToResourceName([toolPermissionPrefix, tool]),
              action,
              collectionid: schema.domainLevelIds.collection,
              userid: userInformation.id,
            },
          ]}
          url={undefined}
        />
      }
      onClose={undefined}
    />
  );
}

export function ProtectedTool({
  tool,
  action,
  children,
}: {
  readonly tool: keyof ReturnType<typeof toolDefinitions>;
  readonly action: typeof tableActions[number];
  readonly children: React.ReactNode;
}): JSX.Element {
  return hasToolPermission(tool, action) ? (
    <>{children}</>
  ) : (
    <ToolPermissionDenied tool={tool} action={action} />
  );
}

export function PermissionDenied<
  RESOURCE extends keyof ReturnType<typeof getOperationPermissions>[number]
>({
  resource,
  action,
}: {
  readonly resource: RESOURCE;
  readonly action: string &
    keyof ReturnType<typeof getOperationPermissions>[number][RESOURCE];
}): JSX.Element {
  return (
    <PermissionError
      error={
        <FormatPermissionError
          error={[
            {
              resource,
              action,
              collectionid: schema.domainLevelIds.collection,
              userid: userInformation.id,
            },
          ]}
          url={undefined}
        />
      }
      onClose={undefined}
    />
  );
}

export function ProtectedAction<
  RESOURCE extends keyof ReturnType<typeof getOperationPermissions>[number]
>({
  resource,
  action,
  children,
}: {
  readonly resource: RESOURCE;
  readonly action: string &
    keyof ReturnType<typeof getOperationPermissions>[number][RESOURCE];
  readonly children: React.ReactNode;
}): JSX.Element {
  return hasPermission(resource, action) ? (
    <>{children}</>
  ) : (
    <PermissionDenied resource={resource} action={action} />
  );
}

export function TablePermissionDenied({
  tableName,
  action,
}: {
  readonly tableName: keyof Tables;
  readonly action: typeof tableActions[number];
}): JSX.Element {
  return (
    <PermissionError
      error={
        <FormatPermissionError
          error={[
            {
              resource: tableNameToResourceName(tableName),
              action,
              collectionid: schema.domainLevelIds.collection,
              userid: userInformation.id,
            },
          ]}
          url={undefined}
        />
      }
      onClose={undefined}
    />
  );
}

export function ProtectedTable({
  tableName,
  action,
  children,
}: {
  readonly tableName: keyof Tables;
  readonly action: typeof tableActions[number];
  readonly children: React.ReactNode;
}): JSX.Element {
  return hasTablePermission(tableName, action) ? (
    <>{children}</>
  ) : (
    <TablePermissionDenied tableName={tableName} action={action} />
  );
}

export function ProtectedTree({
  treeName,
  action,
  children,
}: {
  readonly treeName: AnyTree['tableName'];
  readonly action: typeof tableActions[number];
  readonly children: JSX.Element | null;
}): JSX.Element | null {
  return hasTreeAccess(treeName, action) ? (
    children
  ) : (
    <TablePermissionDenied
      tableName={
        hasTablePermission(treeName, action)
          ? hasTablePermission(`${treeName}TreeDef`, action)
            ? `${treeName}TreeDefItem`
            : `${treeName}TreeDef`
          : treeName
      }
      action={action}
    />
  );
}

export function PermissionError({
  error,
  onClose: handleClose,
}: {
  readonly error: JSX.Element | undefined;
  readonly onClose: (() => void) | undefined;
}): JSX.Element {
  return typeof error === 'object' ? (
    <Dialog
      header={commonText('permissionDeniedError')}
      onClose={
        handleClose || ((): void => globalThis.location.assign('/specify/'))
      }
      buttons={
        <>
          <Button.Red
            onClick={(): void => globalThis.location.assign('/specify/')}
          >
            {commonText('goToHomepage')}
          </Button.Red>
          {typeof handleClose === 'function' && (
            <Button.Red onClick={handleClose}>
              {commonText('dismiss')}
            </Button.Red>
          )}
        </>
      }
    >
      {error}
    </Dialog>
  ) : (
    <Dialog
      header={commonText('sessionTimeOutDialogHeader')}
      forceToTop={true}
      onClose={(): void =>
        globalThis.location.assign(
          formatUrl('/accounts/login/', { next: globalThis.location.href })
        )
      }
      buttons={commonText('logIn')}
    >
      {commonText('sessionTimeOutDialogText')}
    </Dialog>
  );
}

function FormatPermissionError({
  error,
  url,
}: {
  readonly error: PermissionErrorSchema['NoMatchingRuleException'];
  readonly url: string | undefined;
}): JSX.Element {
  return (
    <div className="flex flex-col h-full gap-2">
      <p>{commonText('permissionDeniedDialogText')}</p>
      <table className="grid-table grid-cols-4 border border-gray-500 rounded">
        <thead>
          <tr>
            {[
              adminText('action'),
              adminText('resource'),
              schema.models.Collection.label,
              schema.models.SpecifyUser.label,
            ].map((label, index, { length }) => (
              <th
                scope="column"
                className={`bg-gray-350 dark:bg-neutral-600 p-2 ${
                  index === 0
                    ? 'rounded-l'
                    : index + 1 === length
                    ? 'rounded-r'
                    : ''
                }`}
                key={index}
              >
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {error.map(({ collectionid, userid, resource, action }, index) => (
            <tr key={index}>
              {[
                actionToLabel(action),
                resourceNameToLongLabel(resource),
                <CollectionName
                  collectionId={
                    institutionPermissions.has(resource)
                      ? undefined
                      : collectionid ?? undefined
                  }
                />,
                <UserName userId={userid} />,
              ].map((value, index) => (
                <td className="p-2" key={index}>
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {typeof url === 'string' && (
        <p>
          {commonText('permissionDeniedDialogSecondText', <code>{url}</code>)}
        </p>
      )}
    </div>
  );
}

export function formatPermissionsError(
  response: string,
  url: string
):
  | Readonly<[errorObject: JSX.Element | undefined, errorMessage: string]>
  | undefined {
  if (response.length === 0)
    return [undefined, commonText('sessionTimeOutDialogHeader')];

  let parsed: PermissionErrorSchema | undefined = undefined;
  try {
    parsed = JSON.parse(response) as PermissionErrorSchema;
  } catch {}

  const error = parsed?.NoMatchingRuleException;

  return typeof error === 'object'
    ? ([
        <FormatPermissionError error={error} url={url} />,
        [
          `Permission denied when fetching from ${url}`,
          `Response: ${jsonStringify(error, '\t')}`,
        ].join('\n'),
      ] as const)
    : undefined;
}

function CollectionName({
  collectionId,
}: {
  readonly collectionId: number | undefined;
}): JSX.Element {
  const [formatted] = useAsyncState(
    React.useCallback(
      () =>
        typeof collectionId === 'number'
          ? format(
              f.maybe(
                userInformation.availableCollections.find(
                  ({ id }) => id === collectionId
                ),
                deserializeResource
              ) ?? new schema.models.Collection.Resource({ id: collectionId }),
              undefined,
              true
            )
          : schema.models.Institution.label,
      [collectionId]
    ),
    false
  );
  return <>{formatted}</>;
}

function UserName({ userId }: { readonly userId: number }): JSX.Element {
  const [formatted] = useAsyncState(
    React.useCallback(
      async () =>
        format(
          userInformation.id === userId
            ? deserializeResource(
                serializeResource(
                  omit(
                    userInformation,
                    'availableCollections',
                    'isauthenticated',
                    'agent'
                  ) as SerializedModel<SpecifyUser>
                )
              )
            : new schema.models.SpecifyUser.Resource({ id: userId }),
          undefined,
          true
        ),
      [userId]
    ),
    false
  );
  return <>{formatted}</>;
}
