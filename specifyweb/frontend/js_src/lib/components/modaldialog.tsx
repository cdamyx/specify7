/*
 *
 * A React wrapper for jQuery's dialog. Also has a jQuery's dialog with
 * a loading bar inside it
 *
 *
 */

import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import commonText from '../localization/common';

import type { IR, RA } from './wbplanview';

interface ModalDialogBaseProps {
  readonly children: JSX.Element | RA<JSX.Element> | string;
}

function ModalDialogContent({
  children,
  onLoadCallback,
}: ModalDialogBaseProps & {
  readonly onLoadCallback?: () => void | (() => void);
}): JSX.Element {
  if (onLoadCallback) React.useEffect(onLoadCallback, []);

  return <>{children}</>;
}

function closeDialog(
  $dialog: JQuery,
  resize: () => void,
  onCloseCallback?: () => void
): void {
  if (!$dialog.is(':ui-dialog')) return;
  ReactDOM.unmountComponentAtNode($dialog[0]);
  window.removeEventListener('resize', resize);
  $dialog.dialog('close');
  // Unset event listeners
  $dialog.remove();
  onCloseCallback?.();
}

export const ModalDialog = React.memo(function ModalDialog({
  onCloseCallback,
  properties,
  onLoadCallback,
  children,
}: ModalDialogBaseProps & {
  readonly onLoadCallback?: (dialog: JQuery) => void | (() => void);
  readonly onCloseCallback?: () => void;
  readonly properties?: IR<unknown>;
}) {
  const dialogRef = React.useRef<HTMLDivElement>(null);
  const [$dialog, setDialog] = React.useState<JQuery | undefined>();

  React.useEffect(() => {
    if (dialogRef.current === null) return undefined;

    const dialogElement = $(dialogRef.current.children[0] as HTMLElement);
    const resize = (): void =>
      void dialogElement.dialog('option', 'position', 'center');

    const closeDialogBind = (): void =>
      closeDialog(dialogElement, resize, onCloseCallback);

    dialogElement.dialog({
      modal: true,
      width: 300,
      close: closeDialogBind,
      buttons: [
        {
          text: commonText('close'),
          click: closeDialogBind,
        },
      ],
      ...properties,
    });
    window.addEventListener('resize', resize);

    setDialog(dialogElement);

    return closeDialogBind;
  }, [dialogRef]);

  React.useEffect(() => {
    if (typeof $dialog === 'undefined') return;

    ReactDOM.render(
      <ModalDialogContent
        onLoadCallback={onLoadCallback?.bind(undefined, $dialog)}
      >
        {children}
      </ModalDialogContent>,
      $dialog[0]
    );
  }, [$dialog, children]);

  return (
    <div ref={dialogRef}>
      <div />
    </div>
  );
});

// Loading Screen
const handleOnLoad = (dialog: JQuery) =>
  void $('.progress-bar', dialog).progressbar({ value: false });

export function LoadingScreen(): JSX.Element {
  return (
    <ModalDialog
      onLoadCallback={handleOnLoad}
      properties={{
        modal: false,
        title: commonText('loading'),
        buttons: [],
        close: undefined,
      }}
    >
      <div className="progress-bar" />
    </ModalDialog>
  );
}
