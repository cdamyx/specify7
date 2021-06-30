import type { IR, RA } from './components/wbplanview';

const strip = (value: string): string => value.trim().replace(/ {2,}/, ' ');

type Dictionary = IR<string | ((...args: RA<never>) => string)>;

const wbText: Dictionary = {
  // Buttons
  cancel: 'Cancel',
  create: 'Create',
  close: 'Close',
  apply: 'Apply',
  applyAll: 'Apply All',
  rollback: 'Roll back',
  validate: 'Validate',
  upload: 'Upload',
  results: 'Results',
  save: 'Save',
  delete: 'Delete',
  disambiguate: 'Disambiguate',
  fillDown: 'Fill Down',
  fillUp: 'Fill Up',
  revert: 'Revert',
  next: 'Next',
  previous: 'Previous',
  geoLocate: 'GeoLocate',
  geoMap: 'GeoMap',
  uploadPlan: 'Upload Plan',
  tools: 'Tools',
  dataCheck: 'Data Check',
  dataCheckOn: (queueLength: number): string =>
    `Data Check: On ${queueLength > 0 ? ` (${queueLength})` : ''}`,
  changeOwner: 'Change Owner',
  export: 'Export',
  convertCoordinates: 'Convert Coordinates',
  searchResults: 'Search Results',
  modifiedCells: 'Modified Cells',
  newCells: 'New Cells',
  errorCells: 'Error Cells',

  // Dialogs
  dataSetLoadingDialogTitle: 'Loading',
  noUploadPlanDialogTitle: 'No Upload Plan is Defined',
  noUploadPlanDialogMessage:
    'No Upload Plan has been defined for this Data Set. Create one now?',
  noDisambiguationResultsDialogTitle: 'Disambiguate',
  noDisambiguationResultsDialogMessage: `
    None of the matched records currently exist in the database.
    This can happen if all of the matching records were deleted since the
    validation process occurred, or if all of the matches were ambiguous
    with respect other records in this data set. In the latter case, you
    will need to add fields and values to the data set to resolve the
    ambiguity.`,
  disambiguationDialogTitle: 'Disambiguate Multiple Record Matches',
  applyAllUnavailable: `
    "Apply All" is not available while Data Check is in progress.`,
  rollbackDialogTitle: 'Data Set Roll Back',
  rollbackDialogMessage: `
    Rolling back will remove the new data records this Data Set added to the
    Specify database. The entire rollback will be cancelled if any of the
    uploaded data have been referenced (re-used) by other data records in the
    database since they were uploaded.`,
  startUploadDialogTitle: 'Data Set Upload',
  startUploadDialogMessage: `
    Start the Upload? Uploading the Data Set will add the data to the Specify
    database.`,
  deleteDataSetDialogTitle: 'Delete Data Set',
  deleteDataSetDialogMessage: `
    Delete this Data Set? Deleting permanently removes it and its Upload Plan.
    Data mappings will no longer be available for re-use with other
    Data Sets. Also after deleting, Rollback will no longer be an option for
    an uploaded Data Set.`,
  dataSetDeletedTitle: 'Delete Data Set',
  dataSetDeletedMessage: 'Data Set successfully deleted.',
  revertChangesDialogTitle: `
    Reverting Unsaved Changes`,
  revertChangesDialogMessage: `
    Revert Changes? This action will discard all changes to the Data Set since the last save.`,
  savingDialogTitle: 'Saving',
  onExitDialogMessage: 'Changes to this Data Set have not been saved.',

  // Validation
  picklistValidationFailed: (value: string): string =>
    strip(
      `${value ? `"${value}"` : ''} is not a legal value in this picklist
      field. Click on the arrow to choose among available options.`
    ),
  noMatchErrorMessage: 'No matching record for must-match table.',
  matchedMultipleErrorMessage: strip(
    `This value matches two or more existing database records and must
    be manually disambiguated before uploading.'`
  ),
  validationNoErrorsDialogTitle: 'Validation Completed with No Errors',
  validationNoErrorsDialogMessage: `
    Validation found no errors in the Data Set. It is
    ready to be uploaded into the database.<br><br>

    Cell validations and their highlighting will
    remain with the Data Set until it is edited and
    re-saved. If any cells are edited, Validation should
    be re-run as the last step prior to uploading
    to confirm that no errors have been introduced.`,
  validationErrorsDialogTitle: 'Validation Completed with Errors',
  validationErrorsDialogMessage: `
    Validation found errors in some cell values in this Data Set.<br><br>

    If any cells are edited and the Data Set re-saved,
    Validation should always be re-run as the last step
    prior to uploading to confirm that no errors have
    been introduced.`,
  uploadNoErrorsDialogTitle: 'Upload Completed with No Errors',
  uploadNoErrorsDialogMessage: `
    Click on the "Results" button above to see values for new records
    added to each database table.`,
  uploadErrorsDialogTitle: 'Upload Failed due to Validation Errors',
  uploadErrorsDialogMessage: `
    The Data Set upload failed due to one or more cell value errors.<br><br>

    Run "Data Check" or "Validate" again, review the
    mouseover hints for each error cell, and make the
    appropriate corrections. Save changes and retry the
    Upload.`,
  dataSetRollbackDialogTitle: 'Data Set Rollback',
  dataSetRollbackDialogMessage: 'Data Set was rolled back successfully.',
  validationCanceledDialogTitle: 'Validation Process Status',
  validationCanceledDialogMessage: 'Validation cancelled.',
  rollbackCanceledDialogTitle: 'Rollback Process Status',
  rollbackCanceledDialogMessage: 'Rollback cancelled.',
  uploadCanceledDialogTitle: 'Upload Process Status',
  uploadCanceledDialogMessage: 'Upload cancelled.',
  geoLocateDialogTitle: 'GeoLocate',
  coordinateConverterDialogTitle: 'Change Geocoordinate Format',

  // Misc
  wbUploadedUnavailable: 'The data set must be validated or uploaded',
  wbValidateUnavailable:
    'Please define an Upload Plan before Validating the Data Set',
  unavailableWhileEditing: 'This action requires all changes to be saved.',
  unavailableWhileViewingResults:
    'This action is unavailable while viewing the upload results',
  unavailableWhileValidating:
    'This action is unavailable while Data Check is in progress',
  unavailableWithoutLocality:
    'This tool requires locality columns to be mapped',
  unavailableWhenUploaded: 'This tool does not work with uploaded Data Sets',
  dataSetDeletedOrNotFound: 'Data Set was deleted by another session.',
  dataSetNotFoundPageTitle: 'Page Not Found',
  includeDmsSymbols: 'Include DMS Symbols',

  // WbUploaded
  uploadResults: 'Upload Results',
  potentialUploadResults: 'Potential Upload Results',
  wbUploadedDescription: 'The number of new records created in each table:',
  wbUploadedPotentialDescription:
    'The number of new records that would be created in each table:',
} as const;

export default wbText;
