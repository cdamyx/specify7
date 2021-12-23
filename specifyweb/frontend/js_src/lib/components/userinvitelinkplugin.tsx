import React from 'react';

import { ajax } from '../ajax';
import type { SpecifyUser } from '../datamodel';
import type { SpecifyResource } from '../legacytypes';
import adminText from '../localization/admin';
import commonText from '../localization/common';
import { Button, Input } from './basic';
import { LoadingContext } from './contexts';
import { Dialog } from './modaldialog';

export function UserInviteLinkPlugin({
  specifyUser,
  id,
}: {
  readonly specifyUser: SpecifyResource<SpecifyUser>;
  readonly id: string | undefined;
}): JSX.Element {
  const loading = React.useContext(LoadingContext);
  const [link, setLink] = React.useState<string | undefined>(undefined);

  // TODO: add permissions for this
  return (
    <>
      <Button.Simple
        id={id}
        onClick={(): void =>
          loading(
            ajax(`/accounts/invite_link/${specifyUser.id}/`, {
              headers: { Accept: 'text/plain' },
            }).then(({ data }) => setLink(data))
          )
        }
        className="w-fit"
      >
        {adminText('createInviteLink')}
      </Button.Simple>
      {typeof link === 'string' && (
        <Dialog
          header={adminText('userInviteLinkDialogHeader')}
          onClose={(): void => setLink(undefined)}
          buttons={commonText('close')}
        >
          {adminText('userInviteLinkDialogMessage')}
          <Input.Text isReadOnly className="w-full">
            {link}
          </Input.Text>
        </Dialog>
      )}
    </>
  );
}