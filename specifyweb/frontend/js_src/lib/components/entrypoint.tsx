import React from 'react';
import { createRoot } from 'react-dom/client';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';

import { parseDjangoDump } from '../csrftoken';
import type { getEntrypointName } from '../initialcontext';
import { unlockInitialContext } from '../initialcontext';
import { interceptLogs } from '../interceptlogs';
import { commonText } from '../localization/common';
import { Contexts } from './contexts';
import { EntrypointRouter } from './entrypointrouter';
import { SetCssVariables } from './preferenceshooks';
import { createBrowserHistory } from 'history';

// REFACTOR: simplify this after migrating to jest
if (process.env.NODE_ENV !== 'test') require('../../css/main.css');

export function SplashScreen({
  children,
}: {
  readonly children: React.ReactNode;
}): JSX.Element {
  return (
    <div
      className={`
        flex h-full items-center justify-center overflow-y-auto
        bg-gray-400 dark:bg-neutral-900
      `}
    >
      <div
        className={`
          flex w-full flex-col gap-4 rounded bg-gray-100 p-16
          shadow-2xl dark:bg-neutral-800 sm:max-w-md
        `}
      >
        <header className="pb-2">
          <h1 className="sr-only">{commonText('specifySeven')}</h1>
          <img
            alt=""
            className="max-w-xs hover:animate-hue-rotate"
            src="/static/img/seven_logo.png"
          />
        </header>
        <main className="contents">{children}</main>
      </div>
    </div>
  );
}

const history = createBrowserHistory({ window });

function entrypoint(): void {
  interceptLogs();

  if (process.env.NODE_ENV === 'test') return;
  console.group('Specify App Starting');
  const entrypointName =
    parseDjangoDump<ReturnType<typeof getEntrypointName>>('entrypoint-name');
  console.log(entrypointName);
  unlockInitialContext(entrypointName);

  globalThis.addEventListener('load', () => {
    const root = document.getElementById('root');
    const portalRoot = document.getElementById('portal-root');
    if (root === null || portalRoot === null)
      throw new Error('Unable to find root element');
    root.setAttribute(
      'class',
      `flex flex-col h-screen overflow-hidden bg-[color:var(--background)]
      text-neutral-900 dark:text-neutral-200`
    );
    portalRoot.setAttribute('class', 'text-neutral-900 dark:text-neutral-200');
    const reactRoot = createRoot(root);
    reactRoot.render(
      <React.StrictMode>
        <HistoryRouter history={history}>
          <Contexts>
            <SetCssVariables />
            <EntrypointRouter />
          </Contexts>
        </HistoryRouter>
      </React.StrictMode>
    );
  });
}

entrypoint();
