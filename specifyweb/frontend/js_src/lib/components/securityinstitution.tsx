import React from 'react';
import { useOutletContext } from 'react-router';
import { useLocation } from 'react-router-dom';

import { ajax } from '../ajax';
import type { Institution } from '../datamodel';
import type { SerializedResource } from '../datamodelutils';
import { sortFunction } from '../helpers';
import { adminText } from '../localization/admin';
import { commonText } from '../localization/common';
import { hasPermission, hasTablePermission } from '../permissionutils';
import { schema } from '../schema';
import { policiesToTsv } from '../securityutils';
import type { RA } from '../types';
import { userInformation } from '../userinfo';
import { Button, Container, DataEntry, Link, Ul } from './basic';
import { LoadingContext } from './contexts';
import { downloadFile } from './filepicker';
import { useAsyncState, useBooleanState, useTitle } from './hooks';
import { deserializeResource } from './resource';
import { ResourceView } from './resourceview';
import { createLibraryRole } from './securitycreatelibraryrole';
import { SecurityImportExport } from './securityimportexport';
import { updateLibraryRole } from './securitylibraryrole';
import type { SecurityOutlet } from './toolbar/security';
import { SafeOutlet } from './routerutils';
import { useErrorContext } from '../errorcontext';

export function SecurityInstitution(): JSX.Element | null {
  const { institution } = useOutletContext<SecurityOutlet>();
  return typeof institution === 'object' ? (
    <InstitutionView institution={institution} />
  ) : null;
}

function InstitutionView({
  institution,
}: {
  readonly institution: SerializedResource<Institution>;
}): JSX.Element {
  const outletState = useOutletContext<SecurityOutlet>();
  const {
    getSetLibraryRoles,
    getSetUsers: [users],
  } = outletState;
  const [libraryRoles, handleChangeLibraryRoles] = getSetLibraryRoles;
  useErrorContext('libraryRoles', libraryRoles);

  const admins = useAdmins();

  useTitle(institution.name ?? undefined);
  const loading = React.useContext(LoadingContext);
  const location = useLocation();
  const isOverlay = location.pathname.startsWith(
    '/specify/security/institution/role/create/'
  );
  const isRoleState =
    !isOverlay &&
    location.pathname.startsWith('/specify/security/institution/role');
  const isMainState = !isRoleState;

  return (
    <Container.Base className="flex-1">
      {isMainState || isOverlay ? (
        <>
          <div className="flex gap-2">
            <h3 className="text-2xl">
              {`${schema.models.Institution.label}: ${institution.name ?? ''}`}
            </h3>
            <ViewInstitutionButton institution={institution} />
          </div>
          <div className="flex flex-1 flex-col gap-8 overflow-y-scroll">
            {hasPermission('/permissions/library/roles', 'read') && (
              <section className="flex flex-col gap-2">
                <h4 className="text-xl">{adminText('userRoleLibrary')}</h4>
                {typeof libraryRoles === 'object' ? (
                  <ul>
                    {Object.values(libraryRoles).map((role) => (
                      <li key={role.id}>
                        <Link.Default
                          href={`/specify/security/institution/role/${role.id}/`}
                        >
                          {role.name}
                        </Link.Default>
                      </li>
                    ))}
                  </ul>
                ) : (
                  commonText('loading')
                )}
                <div className="flex gap-2">
                  {hasPermission('/permissions/library/roles', 'create') && (
                    <Link.Green href="/specify/security/institution/role/create/">
                      {commonText('create')}
                    </Link.Green>
                  )}
                  {isOverlay && <SafeOutlet<SecurityOutlet> {...outletState} />}
                  <SecurityImportExport
                    baseName={institution.name ?? ''}
                    collectionId={schema.domainLevelIds.collection}
                    permissionName="/permissions/library/roles"
                    roles={libraryRoles}
                    onCreateRole={(role): void =>
                      loading(createLibraryRole(handleChangeLibraryRoles, role))
                    }
                    onUpdateRole={(role): void =>
                      loading(updateLibraryRole(handleChangeLibraryRoles, role))
                    }
                  />
                  <Button.Blue
                    className={
                      process.env.NODE_ENV === 'development'
                        ? undefined
                        : 'hidden'
                    }
                    onClick={(): void =>
                      loading(
                        downloadFile('Permission Policies.tsv', policiesToTsv())
                      )
                    }
                  >
                    [DEV] Download policy list
                  </Button.Blue>
                </div>
              </section>
            )}
            <section className="flex flex-col gap-2">
              <h4 className="text-xl">{adminText('institutionUsers')}</h4>
              {typeof users === 'object' ? (
                <>
                  <Ul>
                    {Object.values(users)
                      .sort(sortFunction(({ name }) => name))
                      .map((user) => {
                        const canRead =
                          user.id === userInformation.id ||
                          hasTablePermission('SpecifyUser', 'read');
                        const children = (
                          <>
                            {`${user.name}`}
                            <span className="text-gray-500">{`${
                              admins?.admins.has(user.id) === true
                                ? ` ${adminText('specifyAdmin')}`
                                : ''
                            }${
                              admins?.legacyAdmins.has(user.id) === true
                                ? ` ${adminText('legacyAdmin')}`
                                : ''
                            }`}</span>
                          </>
                        );
                        return (
                          <li key={user.id}>
                            {canRead ? (
                              <Link.Default
                                href={`/specify/security/user/${user.id}/`}
                              >
                                {children}
                              </Link.Default>
                            ) : (
                              children
                            )}
                          </li>
                        );
                      })}
                  </Ul>
                  {hasTablePermission('SpecifyUser', 'create') && (
                    <div>
                      <Link.Green href="/specify/security/user/new/">
                        {commonText('create')}
                      </Link.Green>
                    </div>
                  )}
                </>
              ) : (
                commonText('loading')
              )}
              {typeof users === 'object' && admins === undefined && (
                <p>{adminText('loadingAdmins')}</p>
              )}
            </section>
          </div>
        </>
      ) : (
        <SafeOutlet<SecurityOutlet> {...outletState} />
      )}
    </Container.Base>
  );
}

export function useAdmins():
  | {
      readonly admins: ReadonlySet<number>;
      readonly legacyAdmins: ReadonlySet<number>;
    }
  | undefined {
  return useAsyncState(
    React.useCallback(
      async () =>
        hasPermission('/permissions/list_admins', 'read')
          ? ajax<{
              readonly sp7_admins: RA<{
                readonly userid: number;
                readonly username: string;
              }>;
              readonly sp6_admins: RA<{
                readonly userid: number;
                readonly username: string;
              }>;
            }>('/permissions/list_admins/', {
              headers: { Accept: 'application/json' },
            }).then(({ data }) => ({
              admins: new Set(data.sp7_admins.map(({ userid }) => userid)),
              legacyAdmins: new Set(
                data.sp6_admins.map(({ userid }) => userid)
              ),
            }))
          : { admins: new Set<number>(), legacyAdmins: new Set<number>() },
      []
    ),
    false
  )[0];
}

function ViewInstitutionButton({
  institution,
}: {
  readonly institution: SerializedResource<Institution>;
}): JSX.Element {
  const [isOpen, handleOpen, handleClose] = useBooleanState();
  const resource = React.useMemo(
    () => deserializeResource(institution),
    [institution]
  );
  return (
    <>
      <DataEntry.Edit onClick={handleOpen} />
      {isOpen && (
        <ResourceView
          canAddAnother={false}
          dialog="modal"
          isDependent={false}
          isSubForm={false}
          mode="edit"
          resource={resource}
          onClose={handleClose}
          onDeleted={undefined}
          onSaved={undefined}
        />
      )}
    </>
  );
}
