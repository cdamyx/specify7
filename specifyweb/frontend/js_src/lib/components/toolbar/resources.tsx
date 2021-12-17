import React from 'react';

import commonText from '../../localization/common';
import userInfo from '../../userinfo';
import type { UserTool } from '../main';
import { closeDialog, ModalDialog } from '../modaldialog';
import createBackboneView from '../reactbackboneextend';

type Props = {
  readonly onClose: () => void;
};

function AppResourceDialog({ onClose: handleClose }: Props): JSX.Element {
  return (
    <ModalDialog
      properties={{
        title: commonText('resourcesDialogTitle'),
        close: handleClose,
        buttons: [
          {
            text: commonText('cancel'),
            click: closeDialog,
          },
        ],
      }}
    >
      {commonText('resourcesDialogHeader')}
      <nav>
        <a href="/specify/appresources/" className="intercept-navigation">
          {commonText('appResources')}
        </a>
        <br />
        <a href="/specify/viewsets/" className="intercept-navigation">
          {commonText('viewSets')}
        </a>
      </nav>
    </ModalDialog>
  );
}

const View = createBackboneView<Props>({
  moduleName: 'AppResourceDialog',
  className: 'app-resource-dialog',
  component: AppResourceDialog,
});

const userTool: UserTool = {
  task: 'resources',
  title: commonText('resources'),
  view: ({ onClose }) => new View({ onClose }),
  enabled: () => userInfo.isadmin,
};

export default userTool;