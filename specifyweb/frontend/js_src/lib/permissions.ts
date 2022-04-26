/**
 * Parse user permissions
 */

import { ajax } from './ajax';
import { error } from './assert';
import { crash } from './components/errorboundary';
import { formatList } from './components/internationalization';
import type { Tables } from './datamodel';
import type { AnyTree } from './datamodelutils';
import { f } from './functools';
import { group, split } from './helpers';
import { load } from './initialcontext';
import type { anyAction, anyResource } from './securityutils';
import {
  tableNameToResourceName,
  tablePermissionsPrefix,
  toolDefinitions,
} from './securityutils';
import type { RA, RR } from './types';
import { defined } from './types';
import { userInformation } from './userinfo';

export const tableActions = ['read', 'create', 'update', 'delete'] as const;

/**
 * List of policies is stored on the front-end to improve TypeScript typing
 * In development mode, this code would still fetch the policies from the back-end
 * to make sure they haven't changed
 */
const checkRegistry = async (): Promise<void> =>
  process.env.NODE_ENV === 'production'
    ? Promise.resolve()
    : load<typeof operationPolicies>(
        '/permissions/registry/',
        'application/json'
      ).then((policies) =>
        JSON.stringify(policies) === JSON.stringify(operationPolicies)
          ? undefined
          : error('Front-end has outdated list of operation policies')
      );

export const collectionAccessResource = '/system/sp7/collection';
export const operationPolicies = {
  '/system/sp7/collection': ['access'],
  '/admin/user/password': ['update'],
  '/admin/user/agents': ['update'],
  '/admin/user/sp6/is_admin': ['update'],
  '/admin/user/invite_link': ['create'],
  '/admin/user/oic_providers': ['read'],
  '/admin/user/sp6/collection_access': ['read', 'update'],
  '/report': ['execute'],
  '/export/dwca': ['execute'],
  '/export/feed': ['force_update'],
  '/permissions/policies/user': ['update', 'read'],
  '/permissions/user/roles': ['update', 'read'],
  '/permissions/roles': [
    'create',
    'read',
    'update',
    'delete',
    'copy_from_library',
  ],
  '/permissions/library/roles': ['create', 'read', 'update', 'delete'],
  '/tree/mutation/taxon': [
    'merge',
    'move',
    'synonymize',
    'desynonymize',
    'repair',
  ],
  '/tree/mutation/geography': [
    'merge',
    'move',
    'synonymize',
    'desynonymize',
    'repair',
  ],
  '/tree/mutation/storage': [
    'merge',
    'move',
    'synonymize',
    'desynonymize',
    'repair',
  ],
  '/tree/mutation/geologictimeperiod': [
    'merge',
    'move',
    'synonymize',
    'desynonymize',
    'repair',
  ],
  '/tree/mutation/lithostrat': [
    'merge',
    'move',
    'synonymize',
    'desynonymize',
    'repair',
  ],
  '/querybuilder/query': [
    'execute',
    'export_csv',
    'export_kml',
    'create_recordset',
  ],
  '/workbench/dataset': [
    'create',
    'update',
    'delete',
    'upload',
    'unupload',
    'validate',
    'transfer',
  ],
} as const;

/**
 * These permissions have no effect on the collection level and should instead
 * be set on the institution level.
 */
export const institutionPermissions = new Set([
  '/admin/user/password',
  '/admin/user/agents',
  '/admin/user/sp6/is_admin',
  '/admin/user/invite_link',
  '/admin/user/oic_providers',
  '/admin/user/sp6/collection_access',
  '/export/feed',
  '/permissions/library/roles',
]);

/**
 * Policies that are respected on the front-end, but ignored by the back-end.
 */
export const frontEndPermissions = {
  '/preferences/user': ['edit_hidden'],
} as const;

let operationPermissions: {
  readonly [RESOURCE in keyof typeof operationPolicies]: RR<
    typeof operationPolicies[RESOURCE][number],
    boolean
  >;
} & RR<typeof anyResource, RR<typeof anyAction, boolean>> & {
    readonly [RESOURCE in keyof typeof frontEndPermissions]: RR<
      typeof frontEndPermissions[RESOURCE][number],
      boolean
    >;
  };
let tablePermissions: {
  readonly [TABLE_NAME in keyof Tables as `${typeof tablePermissionsPrefix}${Lowercase<TABLE_NAME>}`]: RR<
    typeof tableActions[number],
    boolean
  >;
};

export const getTablePermissions = () => tablePermissions;
export const getOperationPermissions = () => operationPermissions;

export type PermissionsQueryItem = {
  readonly action: string;
  readonly resource: string;
  readonly allowed: boolean;
  readonly matching_role_policies: RA<{
    readonly action: string;
    readonly resource: string;
    readonly roleid: number;
    readonly rolename: string;
  }>;
  readonly matching_user_policies: RA<{
    readonly action: string;
    readonly collectionid: number | null;
    readonly resource: string;
    readonly userid: number | null;
  }>;
};

export const queryUserPermissions = async (
  userId: number,
  collectionId: number
): Promise<RA<PermissionsQueryItem>> =>
  import('./schema')
    .then(async ({ fetchContext }) => fetchContext)
    .then(async (schema) =>
      ajax<{
        readonly details: RA<PermissionsQueryItem>;
      }>('/permissions/query/', {
        headers: { Accept: 'application/json' },
        method: 'POST',
        body: {
          collectionid: collectionId,
          userid: userId,
          queries: [
            ...Object.entries(operationPolicies).map(([policy, actions]) => ({
              resource: policy,
              actions,
            })),
            ...Object.keys(schema.models)
              .map(tableNameToResourceName)
              .map((resource) => ({
                resource,
                actions: tableActions,
              })),
            ...Object.entries(frontEndPermissions).map(([policy, actions]) => ({
              resource: policy,
              actions,
            })),
          ],
        },
      })
    )
    .then(({ data }) => data.details);

export const fetchContext = import('./schemabase')
  .then(async ({ fetchContext }) => fetchContext)
  .then(async (schema) =>
    queryUserPermissions(userInformation.id, schema.domainLevelIds.collection)
      .then((query) =>
        split(
          group(
            query.map((result) => [
              result.resource,
              [result.action, result.allowed] as const,
            ])
          ).map(
            ([resource, actions]) =>
              [resource, Object.fromEntries(actions)] as const
          ),
          ([key]) => key.startsWith(tablePermissionsPrefix)
        ).map(Object.fromEntries)
      )
      .then(([operations, tables]) => {
        operationPermissions =
          operations as unknown as typeof operationPermissions;
        tablePermissions = tables as unknown as typeof tablePermissions;
        void checkRegistry();
        // Check that user has at least read access to the hierarchy tables
        if (
          schema.orgHierarchy.some(
            (tableName) =>
              tableName !== 'CollectionObject' &&
              !hasTablePermission(tableName, 'read')
          )
        )
          crash(
            new Error(
              `User must have at least read access to these tables to use Specify: ${formatList(
                schema.orgHierarchy
              )}`
            )
          );
      })
  );

export const hasTablePermission = (
  tableName: keyof Tables,
  action: typeof tableActions[number]
): boolean =>
  defined(tablePermissions)[tableNameToResourceName(tableName)][action]
    ? true
    : f.log(`No permission to ${action} ${tableName}`) ?? false;

export const hasPermission = <
  RESOURCE extends keyof typeof operationPermissions
>(
  resource: RESOURCE,
  action: keyof typeof operationPermissions[RESOURCE]
): boolean =>
  defined(operationPermissions)[resource][action]
    ? true
    : f.log(`No permission to ${action.toString()} ${resource}`) ?? false;

export const hasToolPermission = (
  tool: keyof ReturnType<typeof toolDefinitions>,
  action: typeof tableActions[number]
): boolean =>
  (toolDefinitions()[tool].tables as RA<keyof Tables>).every((tableName) =>
    hasTablePermission(tableName, action)
  );

export const hasTreeAccess = (
  treeName: AnyTree['tableName'],
  action: typeof tableActions[number]
): boolean =>
  hasTablePermission(treeName, action) &&
  hasTablePermission(`${treeName}TreeDef`, action) &&
  hasTablePermission(`${treeName}TreeDefItem`, action);
