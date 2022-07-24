import React from 'react';
import type { State } from 'typesafe-reducer';

import { ajax } from '../ajax';
import { error } from '../assert';
import {
  attachmentsAvailable,
  attachmentSettingsPromise,
  formatAttachmentUrl,
} from '../attachments';
import { parseXml } from '../codemirrorlinters';
import { fetchCollection } from '../collection';
import { csrfToken } from '../csrftoken';
import type { RecordSet, SpAppResource, SpQuery, SpReport } from '../datamodel';
import type { SerializedModel, SerializedResource } from '../datamodelutils';
import { serializeResource } from '../datamodelutils';
import { f } from '../functools';
import {
  getAttribute,
  group,
  keysToLowerCase,
  replaceItem,
  replaceKey,
  sortFunction,
  split,
} from '../helpers';
import { commonText } from '../localization/common';
import { formsText } from '../localization/forms';
import { parseSpecifyProperties } from '../parseformcells';
import type { QueryField } from '../querybuilderutils';
import { parseQueryFields, unParseQueryFields } from '../querybuilderutils';
import { QueryFieldSpec } from '../queryfieldspec';
import { formatUrl } from '../querystring';
import { fetchResource, idFromUrl } from '../resource';
import { getModelById } from '../schema';
import type { SpecifyModel } from '../specifymodel';
import type { IR, RA } from '../types';
import { defined, filterArray } from '../types';
import { userInformation } from '../userinfo';
import { AttachmentPlugin } from './attachmentplugin';
import { Button, Form, H3, Input, Label, Link, Submit, Ul } from './basic';
import { FormattedResource, SortIndicator, useSortConfig } from './common';
import { LoadingContext } from './contexts';
import { ErrorBoundary, softFail } from './errorboundary';
import { useAsyncState, useBooleanState, useId, useLiveState } from './hooks';
import { iconClassName, icons } from './icons';
import { DateElement } from './internationalization';
import { Dialog, LoadingScreen } from './modaldialog';
import { usePref } from './preferenceshooks';
import { queryFieldFilters } from './querybuilderfieldfilter';
import { QueryFields } from './querybuilderfields';
import { RecordSetsDialog } from './recordsetsdialog';
import { cachableUrl } from '../initialcontext';
import { OverlayContext } from './router';

export const reportsAvailable = ajax<{ readonly available: boolean }>(
  cachableUrl('/context/report_runner_status.json'),
  {
    headers: { Accept: 'application/json' },
  },
  { strict: false }
)
  .then(({ data }) => data.available)
  .catch(() => false);

export function ReportsOverlay(): JSX.Element {
  const handleClose = React.useContext(OverlayContext);
  return (
    <ReportsView
      autoSelectSingle={false}
      model={undefined}
      resourceId={undefined}
      onClose={handleClose}
    />
  );
}

export function ReportsView({
  // If resource ID is provided, model must be too
  model,
  resourceId,
  autoSelectSingle,
  onClose: handleClose,
}: {
  readonly model: SpecifyModel | undefined;
  readonly resourceId: number | undefined;
  readonly autoSelectSingle: boolean;
  readonly onClose: () => void;
}): JSX.Element | null {
  const [appResources] = useAsyncState(
    React.useCallback(
      async () =>
        ajax<{
          readonly objects: RA<SerializedModel<SpAppResource>>;
        }>(
          formatUrl(
            typeof model === 'object'
              ? `/report_runner/get_reports_by_tbl/${model.tableId}/`
              : '/report_runner/get_reports/',
            {
              domainFilter: 'false',
            }
          ),
          {
            headers: { Accept: 'application/json' },
          }
        ).then(({ data: { objects } }) =>
          split(
            objects.map(serializeResource),
            (resource) => resource.mimeType?.includes('report') === true
          )
        ),
      [model]
    ),
    true
  );

  const [selectedReport, setSelectedReport] = useLiveState(
    React.useCallback(
      () =>
        // Select the first one automatically
        autoSelectSingle &&
        Array.isArray(appResources) &&
        appResources.flat().length === 1
          ? appResources.flat()[0]
          : undefined,
      [autoSelectSingle, appResources]
    )
  );

  const [attachmentSettings] = useAsyncState(
    React.useCallback(async () => attachmentSettingsPromise.then(f.true), []),
    true
  );

  const [labels, reports] = appResources ?? [[], []];

  return typeof appResources === 'object' && attachmentSettings === true ? (
    typeof selectedReport === 'object' ? (
      <ErrorBoundary dismissable>
        <Report
          appResource={selectedReport}
          model={model}
          resourceId={resourceId}
          onClose={handleClose}
        />
      </ErrorBoundary>
    ) : (
      <Dialog
        buttons={commonText('cancel')}
        header={commonText('reports')}
        icon={<span className="text-blue-500">{icons.documentReport}</span>}
        onClose={handleClose}
      >
        <div className="flex flex-col gap-4">
          <section>
            <h2>{commonText('reports')}</h2>
            <Entries
              cacheKey="listOfReports"
              icon="/images/Reports16x16.png"
              resources={reports}
              onClick={setSelectedReport}
            />
          </section>
          <section>
            <h2>{commonText('labels')}</h2>
            <Entries
              cacheKey="listOfLabels"
              icon="/images/Label16x16.png"
              resources={labels}
              onClick={setSelectedReport}
            />
          </section>
        </div>
      </Dialog>
    )
  ) : null;
}

function Entries({
  resources: unsortedResources,
  icon,
  cacheKey,
  onClick: handleClick,
}: {
  readonly resources: RA<SerializedResource<SpAppResource>>;
  readonly icon: string;
  readonly cacheKey: 'listOfLabels' | 'listOfReports';
  readonly onClick: (resource: SerializedResource<SpAppResource>) => void;
}): JSX.Element {
  const [sortConfig, handleSort] = useSortConfig(cacheKey, 'name');
  const resources = React.useMemo(
    () =>
      Array.from(unsortedResources).sort(
        sortFunction(
          (record) => record[sortConfig.sortField],
          !sortConfig.ascending
        )
      ),
    [sortConfig, unsortedResources]
  );
  return resources.length === 0 ? (
    <p>{commonText('noResults')}</p>
  ) : (
    <table className="grid-table grid-cols-[1fr_auto_auto_min-content] gap-2">
      <thead>
        <tr>
          <th>
            <Button.LikeLink onClick={(): void => handleSort('name')}>
              {commonText('name')}
              <SortIndicator fieldName="name" sortConfig={sortConfig} />
            </Button.LikeLink>
          </th>
          <th>
            <Button.LikeLink
              onClick={(): void => handleSort('timestampCreated')}
            >
              {commonText('created')}
              <SortIndicator
                fieldName="timestampCreated"
                sortConfig={sortConfig}
              />
            </Button.LikeLink>
          </th>
          <th>{commonText('createdBy')}</th>
          <td />
        </tr>
      </thead>
      <tbody>
        {resources.map((resource) => (
          <tr key={resource.id}>
            <td>
              <Button.LikeLink
                className="flex-1"
                title={resource.description ?? undefined}
                onClick={(): void => handleClick(resource)}
              >
                <img alt="" className={iconClassName} src={icon} />
                {resource.name}
              </Button.LikeLink>
            </td>
            <td>
              <DateElement date={resource.timestampCreated} />
            </td>
            <td>
              <FormattedResource resourceUrl={resource.specifyUser} />
            </td>
            <td>
              <Link.Icon
                aria-label={commonText('edit')}
                href={`/specify/appresources/${resource.id}/`}
                icon="pencil"
                title={commonText('edit')}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Report({
  appResource,
  resourceId,
  model,
  onClose: handleClose,
}: {
  readonly appResource: SerializedResource<SpAppResource>;
  readonly resourceId: number | undefined;
  readonly model: SpecifyModel | undefined;
  readonly onClose: () => void;
}): JSX.Element | null {
  const [definition] = useAsyncState(
    React.useCallback(
      async () =>
        fetchCollection('SpAppResourceData', {
          limit: 1,
          spAppResource: appResource.id,
        })
          .then(({ records }) =>
            parseXml(defined(records[0].data ?? undefined))
          )
          .then((parsed) =>
            typeof parsed === 'object'
              ? parsed
              : error(`Failed parsing XML report definition`, { report })
          ),
      [appResource]
    ),
    true
  );

  const [report] = useAsyncState<
    SerializedResource<SpReport> | false | undefined
  >(
    React.useCallback(
      async () =>
        fetchCollection('SpReport', {
          limit: 1,
          appResource: appResource.id,
        }).then(({ records }) => records[0] ?? false),
      [appResource]
    ),
    false
  );
  const [query] = useAsyncState<SerializedResource<SpQuery> | false>(
    React.useCallback(
      () =>
        typeof report === 'object'
          ? f.maybe(idFromUrl(report.query), async (id) =>
              fetchResource('SpQuery', id, false).then(
                (resource) => resource ?? false
              )
            ) ?? false
          : undefined,
      [report]
    ),
    false
  );

  const [runCount, setRunCount] = React.useState(0);
  const [missingAttachments, setMissingAttachments] = useAsyncState(
    React.useCallback(
      () => f.maybe(definition, fixupImages),
      [definition, runCount]
    ),
    true
  );
  return query === false ? (
    <Dialog
      buttons={commonText('close')}
      header={formsText('missingReportQueryDialogHeader')}
      icon={<span className="text-blue-500">{icons.documentReport}</span>}
      onClose={handleClose}
    >
      {formsText('missingReportQueryDialogText')}
    </Dialog>
  ) : report === false ? (
    <Dialog
      buttons={commonText('close')}
      header={formsText('missingReportDialogHeader')}
      icon={<span className="text-blue-500">{icons.documentReport}</span>}
      onClose={handleClose}
    >
      {formsText('missingReportDialogText')}
    </Dialog>
  ) : Array.isArray(missingAttachments) && typeof definition === 'object' ? (
    missingAttachments.length === 0 ? (
      <ParametersDialog
        appResource={appResource}
        definition={definition}
        model={model}
        query={typeof query === 'object' ? query : undefined}
        resourceId={resourceId}
        onClose={handleClose}
      />
    ) : (
      <FixImagesDialog
        missingAttachments={missingAttachments}
        onClose={handleClose}
        onIgnore={(): void => setMissingAttachments([])}
        onRefresh={(): void => setRunCount(runCount + 1)}
      />
    )
  ) : null;
}

async function fixupImages(definition: Document): Promise<RA<string>> {
  const fileNames = Object.fromEntries(
    group(
      filterArray(
        Array.from(definition.querySelectorAll('imageExpression'), (image) =>
          f.var(
            image.classList.contains('java.net.URL')
              ? undefined
              : image.textContent
                  ?.match(
                    /\$P\{\s*RPT_IMAGE_DIR\s*\}\s*\+\s*"\/"\s*\+\s*"(.*?)"/
                  )
                  ?.slice(1)?.[0] ?? undefined,
            (match) => (typeof match === 'string' ? [match, image] : undefined)
          )
        )
      )
    )
  );
  const attachments = await fetchCollection(
    'Attachment',
    {
      limit: 0,
    },
    {
      title__in: Object.keys(fileNames).join(','),
    }
  ).then(({ records }) => records);
  const indexedAttachments = Object.fromEntries(
    attachments.map((record) => [record.title ?? '', record])
  );

  const badImageUrl = `"${globalThis.location.origin}/images/unknown.png"`;
  return filterArray(
    Object.entries(fileNames).map(([fileName, imageExpressions]) => {
      const attachment = indexedAttachments[fileName];
      const imageUrl =
        typeof attachment === 'object' && attachmentsAvailable()
          ? `"${defined(formatAttachmentUrl(attachment, undefined))}"`
          : badImageUrl;
      imageExpressions.forEach((image) => {
        image.textContent = imageUrl;
      });
      return attachment === undefined ? fileName : undefined;
    })
  );
}

function FixImagesDialog({
  missingAttachments,
  onIgnore: handleIgnore,
  onRefresh: handleRefresh,
  onClose: handleClose,
}: {
  readonly missingAttachments: RA<string>;
  readonly onIgnore: () => void;
  readonly onRefresh: () => void;
  readonly onClose: () => void;
}): JSX.Element {
  const [index, setIndex] = React.useState<number | undefined>(undefined);

  const loading = React.useContext(LoadingContext);
  return index === undefined ? (
    <Dialog
      buttons={
        <>
          <Button.DialogClose>{commonText('cancel')}</Button.DialogClose>
          <Button.Orange onClick={handleIgnore}>
            {commonText('ignore')}
          </Button.Orange>
        </>
      }
      header={formsText('reportProblemsDialogTitle')}
      icon={<span className="text-blue-500">{icons.documentReport}</span>}
      onClose={handleClose}
    >
      {formsText('reportsProblemsDialogText')}
      <H3>{formsText('missingAttachments')}</H3>
      <Ul>
        {missingAttachments.map((fileName, index) => (
          <Button.LikeLink
            aria-label={formsText('fix')}
            key={fileName}
            title={formsText('fix')}
            onClick={(): void => setIndex(index)}
          >
            {fileName}
          </Button.LikeLink>
        ))}
      </Ul>
    </Dialog>
  ) : (
    <Dialog
      buttons={commonText('cancel')}
      header={formsText('missingAttachmentsFixDialogTitle')}
      icon={<span className="text-blue-500">{icons.documentReport}</span>}
      onClose={(): void => setIndex(undefined)}
    >
      <AttachmentPlugin
        mode="edit"
        resource={undefined}
        onUploadComplete={(attachment): void =>
          loading(
            attachment
              .set('title', missingAttachments[index])
              .save()
              .then(handleRefresh)
          )
        }
      />
    </Dialog>
  );
}

function ParametersDialog({
  definition,
  query,
  appResource,
  resourceId,
  model,
  onClose: handleClose,
}: {
  readonly definition: Document;
  readonly query: SerializedResource<SpQuery> | false | undefined;
  readonly appResource: SerializedResource<SpAppResource>;
  readonly resourceId: number | undefined;
  readonly model: SpecifyModel | undefined;
  readonly onClose: () => void;
}): JSX.Element | null {
  const [parameters, setParameters] = useLiveState(
    React.useCallback(
      () =>
        Object.fromEntries(
          filterArray(
            Array.from(
              definition.querySelectorAll('parameter[isForPrompting="true"]'),
              (parameter) => getAttribute(parameter, 'name')
            )
          ).map((name) => [name, ''])
        ),
      [definition]
    )
  );

  const [isSubmitted, handleSubmitted] = useBooleanState(
    Object.values(parameters).length === 0
  );

  const id = useId('report-parameters');
  return isSubmitted ? (
    typeof query === 'object' ? (
      typeof resourceId === 'number' && typeof model === 'object' ? (
        <ReportForRecord
          definition={definition}
          model={model}
          parameters={parameters}
          query={query}
          resourceId={resourceId}
          onClose={handleClose}
        />
      ) : (
        <RecordSets
          appResource={appResource}
          definition={definition}
          parameters={parameters}
          query={query}
          onClose={handleClose}
        />
      )
    ) : (
      <LoadingScreen />
    )
  ) : (
    <Dialog
      buttons={
        <>
          <Button.DialogClose>{commonText('cancel')}</Button.DialogClose>
          <Submit.Green form={id('form')}>{commonText('save')}</Submit.Green>
        </>
      }
      header={formsText('reportParameters')}
      icon={<span className="text-blue-500">{icons.documentReport}</span>}
      onClose={handleClose}
    >
      <Form id={id('form')} onSubmit={handleSubmitted}>
        {Object.entries(parameters).map(([name, value]) => (
          <Label.Generic key={name}>
            {name}
            <Input.Text
              autoComplete="on"
              spellCheck
              value={value}
              onValueChange={(value): void =>
                setParameters(replaceKey(parameters, name, value))
              }
            />
          </Label.Generic>
        ))}
      </Form>
    </Dialog>
  );
}

function ReportForRecord({
  query: rawQuery,
  parameters,
  definition,
  model,
  resourceId,
  onClose: handleClose,
}: {
  readonly query: SerializedResource<SpQuery>;
  readonly definition: Document;
  readonly parameters: IR<string>;
  readonly model: SpecifyModel;
  readonly resourceId: number;
  readonly onClose: () => void;
}): JSX.Element {
  const [clearQueryFilters] = usePref(
    'reports',
    'behavior',
    'clearQueryFilters'
  );
  const query = React.useMemo(() => {
    const query = replaceKey(
      rawQuery,
      'fields',
      rawQuery.fields.map((field) =>
        field.alwaysFilter === true
          ? field
          : {
              ...field,
              operStart:
                clearQueryFilters && field.startValue === ''
                  ? queryFieldFilters.any.id
                  : field.operStart,
              startValue: clearQueryFilters ? '' : field.startValue,
              operEnd: null,
              endValue: null,
            }
      )
    );
    const newField = QueryFieldSpec.fromPath(model.name, [model.idField.name])
      .toSpQueryField()
      .set('operStart', queryFieldFilters.equal.id)
      .set('startValue', resourceId.toString())
      .set('position', query.fields.length)
      .set('query', query.resource_uri);
    return replaceKey(query, 'fields', [
      ...query.fields,
      serializeResource(newField),
    ]);
  }, [rawQuery, model, resourceId, clearQueryFilters]);

  return (
    <RunReport
      definition={definition}
      parameters={parameters}
      query={query}
      recordSetId={undefined}
      onClose={handleClose}
    />
  );
}

function RecordSets({
  query,
  appResource,
  definition,
  parameters,
  onClose: handleClose,
}: {
  readonly query: SerializedResource<SpQuery>;
  readonly appResource: SerializedResource<SpAppResource>;
  readonly definition: Document;
  readonly parameters: IR<string>;
  readonly onClose: () => void;
}): JSX.Element {
  const tableId = React.useMemo(
    () =>
      query.contextTableId ??
      f.parseInt(parseSpecifyProperties(appResource.metaData ?? '').tableid),
    [query, appResource]
  );
  React.useEffect(
    () =>
      query !== undefined && (tableId === undefined || tableId < 0)
        ? error("Couldn't determine table id for report")
        : undefined,
    [tableId, query]
  );
  const recordSetsPromise = React.useMemo(
    async () =>
      fetchCollection('RecordSet', {
        specifyUser: userInformation.id,
        type: 0,
        domainFilter: true,
        dbTableId: tableId,
        limit: 200,
      }),
    [tableId]
  );
  React.useEffect(
    () =>
      void recordSetsPromise
        .then(({ totalCount }) =>
          totalCount === 0 ? setState({ type: 'Raw' }) : undefined
        )
        .catch(softFail),
    [recordSetsPromise]
  );
  const [state, setState] = React.useState<
    | State<
        'RecordSet',
        {
          readonly recordSet: SerializedResource<RecordSet>;
          readonly autoRun: boolean;
        }
      >
    | State<'Main'>
    | State<'Raw'>
  >({ type: 'Main' });
  return state.type === 'Main' ? (
    <RecordSetsDialog
      isReadOnly
      recordSetsPromise={recordSetsPromise}
      onClose={handleClose}
      onConfigure={(recordSet): void =>
        setState({
          type: 'RecordSet',
          recordSet,
          autoRun: false,
        })
      }
      onSelect={(recordSet): void =>
        setState({
          type: 'RecordSet',
          recordSet,
          autoRun: true,
        })
      }
    >
      {({ children, dialog }): JSX.Element =>
        dialog(
          children,
          <Button.Blue onClick={(): void => setState({ type: 'Raw' })}>
            {commonText('query')}
          </Button.Blue>
        )
      }
    </RecordSetsDialog>
  ) : (
    <QueryParametersDialog
      autoRun={state.type === 'RecordSet' && state.autoRun}
      definition={definition}
      parameters={parameters}
      query={query}
      recordSetId={state.type === 'RecordSet' ? state.recordSet.id : undefined}
      onClose={handleClose}
    />
  );
}

function QueryParametersDialog({
  query,
  recordSetId,
  definition,
  parameters,
  autoRun,
  onClose: handleClose,
}: {
  readonly query: SerializedResource<SpQuery>;
  readonly recordSetId: number | undefined;
  readonly definition: Document;
  readonly parameters: IR<string>;
  readonly autoRun: boolean;
  readonly onClose: () => void;
}): JSX.Element {
  const model = getModelById(query.contextTableId);

  const [fields, setFields] = useLiveState<RA<QueryField>>(
    React.useCallback(() => parseQueryFields(query.fields), [query])
  );
  const id = useId('report-query');
  const [state, setState] = useLiveState<
    | State<
        'Running',
        {
          /*
           * This query here may be different from the one passed as a prop
           * since user can modify filters
           */
          readonly query: SerializedResource<SpQuery>;
        }
      >
    | State<'Main'>
  >(
    React.useCallback(
      () =>
        autoRun
          ? {
              type: 'Running',
              query,
            }
          : { type: 'Main' },
      [autoRun, query]
    )
  );

  return state.type === 'Running' ? (
    <RunReport
      definition={definition}
      parameters={parameters}
      query={state.query}
      recordSetId={recordSetId}
      onClose={(): void => setState({ type: 'Main' })}
    />
  ) : (
    <Dialog
      buttons={
        <>
          <Button.DialogClose>{commonText('cancel')}</Button.DialogClose>
          <Submit.Blue form={id('form')}>{formsText('runReport')}</Submit.Blue>
        </>
      }
      header={query.name ?? commonText('reports')}
      icon={<span className="text-blue-500">{icons.documentReport}</span>}
      onClose={handleClose}
    >
      <Form
        id={id('form')}
        onSubmit={(): void =>
          setState({
            type: 'Running',
            query: replaceKey(
              query,
              'fields',
              unParseQueryFields(model.name, fields)
            ),
          })
        }
      >
        <QueryFields
          baseTableName={model.name}
          enforceLengthLimit={false}
          fields={fields}
          getMappedFields={() => []}
          openedElement={undefined}
          showHiddenFields={false}
          onChangeField={(line, field): void =>
            setFields(replaceItem(fields, line, field))
          }
          onClose={undefined}
          onLineFocus={undefined}
          onLineMove={undefined}
          onMappingChange={undefined}
          onOpen={undefined}
          onOpenMap={undefined}
          onRemoveField={undefined}
        />
      </Form>
    </Dialog>
  );
}

function RunReport({
  query,
  recordSetId,
  definition,
  parameters,
  onClose: handleClose,
}: {
  readonly query: SerializedResource<SpQuery>;
  readonly recordSetId: number | undefined;
  readonly definition: Document;
  readonly parameters: IR<string>;
  readonly onClose: () => void;
}): JSX.Element {
  const reportWindowContext = useId('report-window')('');
  React.useEffect(
    () => void globalThis.open('', reportWindowContext),
    [reportWindowContext, handleClose]
  );
  const [form, setForm] = React.useState<HTMLFormElement | null>(null);
  React.useEffect(() => {
    if (form === null) return;
    const container = document.createElement('div');
    container.classList.add('hidden');
    document.body.append(container);
    container.innerHTML = form.outerHTML;
    const newForm = container.children[0] as HTMLFormElement;
    newForm.submit();
    globalThis.setTimeout(() => {
      container.remove();
      handleClose();
    }, 0);
  }, [form, handleClose]);
  return (
    <form
      action="/report_runner/run/"
      className="hidden"
      method="post"
      ref={setForm}
      target={reportWindowContext}
    >
      <input
        defaultValue={csrfToken}
        name="csrfmiddlewaretoken"
        type="hidden"
      />
      <input
        defaultValue={new XMLSerializer().serializeToString(
          definition.documentElement
        )}
        name="report"
        type="hidden"
      />
      <input
        defaultValue={JSON.stringify(
          keysToLowerCase({
            ...query,
            limit: 0,
            recordSetId,
          })
        )}
        name="query"
        type="hidden"
      />
      <input
        defaultValue={JSON.stringify(parameters)}
        name="parameters"
        readOnly
        type="hidden"
      />
      <input type="submit" />
    </form>
  );
}
