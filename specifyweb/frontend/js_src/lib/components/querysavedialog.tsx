import React from 'react';

import type { SpecifyResource } from '../legacytypes';
import commonText from '../localization/common';
import queryText from '../localization/query';
import userInfo from '../userinfo';
import { useId } from './hooks';
import { LoadingScreen, JqueryDialog } from './modaldialog';
import createBackboneView from './reactbackboneextend';

async function doSave(
  query: SpecifyResource,
  name: string,
  isSaveAs: boolean
): Promise<number> {
  const clonedQuery = isSaveAs ? query.clone() : query;
  clonedQuery.set('name', name.trim());

  if (isSaveAs) clonedQuery.set('specifyuser', userInfo.resource_uri);
  return new Promise((resolve) => {
    clonedQuery.save().done(() => resolve(clonedQuery.id));
  });
}

function QuerySaveDialog({
  isSaveAs,
  query,
  onClose: handleClose,
}: {
  readonly isSaveAs: boolean;
  readonly query: SpecifyResource;
  readonly onClose: (queryId: number) => void;
}): JSX.Element {
  const id = useId('id');
  const [name, setName] = React.useState<string>(query.get<string>('name'));
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (query.isNew() || isSaveAs) return;
    setIsLoading(true);
    doSave(query, name, isSaveAs).then(handleClose).catch(console.error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isLoading ? (
    <LoadingScreen />
  ) : (
    <JqueryDialog
      properties={{
        title: queryText('saveQueryDialogTitle'),
        buttons: [
          {
            text: commonText('save'),
            click(): void {
              /* Submit form */
            },
            type: 'submit',
            form: id('form'),
          },
        ],
      }}
    >
      {isSaveAs
        ? queryText('saveClonedQueryDialogHeader')
        : queryText('saveQueryDialogHeader')}
      <p>
        {isSaveAs
          ? queryText('saveClonedQueryDialogMessage')
          : queryText('saveQueryDialogMessage')}
      </p>
      <form
        className="grid"
        id={id('form')}
        onSubmit={(event): void => {
          event.preventDefault();
          setIsLoading(true);
          doSave(query, name, isSaveAs).then(handleClose).catch(console.error);
        }}
      >
        <label>
          {queryText('queryName')}
          <input
            type="text"
            autoComplete="on"
            spellCheck="true"
            required
            value={name}
            onChange={({ target }): void => setName(target.value)}
          />
        </label>
      </form>
    </JqueryDialog>
  );
}

const View = createBackboneView(QuerySaveDialog);

export default View;
