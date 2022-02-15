/**
 * Configuration for what schema tables and fields are accessible in the WB
 *
 * @remarks
 * Replaces the need for Sp6 Workbench Schema
 *
 * @module
 */

import type { Tables } from './datamodel';
import type { TableFields } from './datamodelutils';
import { schema } from './schema';
import type { IR, RR } from './types';

export type TableConfigOverwrite =
  /*
   * Adds a table to the list of common base tables (shown on the base table
   *  selection screen even if "Show Advanced Tables" is not checked
   */
  | 'commonBaseTable'
  /*
   * Remove table from the list of base tables, but still make it available
   *  through relationships
   */
  | 'hidden'
  /*
   * Remove the table, all of it's fields/relationships and all
   *  fields/relationships from any table to this table
   */
  | 'system';

export type FieldConfigOverwrite =
  // Makes a required field optional
  | 'optional'
  | 'required'
  // Removes a field from the mapper (but not from Query Builder)
  | 'readOnly'
  // Removes a field from the mapper and Query Builder
  | 'remove'
  // Hides a field. If it was required, it is made optional
  | 'hidden';

const tableOverwrites: RR<keyof Tables, TableConfigOverwrite> = {
  // Remove hierarchy tables
  ...Object.fromEntries(
    schema.orgHierarchy
      .filter((tableName) => tableName !== 'CollectionObject')
      .map((tableName) => [tableName, 'system'])
  ),
  Accession: 'commonBaseTable',
  Agent: 'commonBaseTable',
  Borrow: 'commonBaseTable',
  CollectingEvent: 'commonBaseTable',
  CollectionObject: 'commonBaseTable',
  ConservEvent: 'commonBaseTable',
  Container: 'commonBaseTable',
  Deaccession: 'commonBaseTable',
  Determination: 'commonBaseTable',
  DNASequence: 'commonBaseTable',
  ExchangeIn: 'commonBaseTable',
  ExchangeOut: 'commonBaseTable',
  Geography: 'commonBaseTable',
  Gift: 'commonBaseTable',
  Loan: 'commonBaseTable',
  Locality: 'commonBaseTable',
  Permit: 'commonBaseTable',
  Preparation: 'commonBaseTable',
  Storage: 'commonBaseTable',
  Taxon: 'commonBaseTable',
  TreatmentEvent: 'commonBaseTable',
  CollectingEventAttr: 'system',
  CollectionObjectAttr: 'system',
  LatLonPolygonPnt: 'system',
};

/*
 * Same as tableOverwrites, but matches with tableName.endsWith(key),
 *  instead of tableName===key
 */
const endsWithTableOverwrites: IR<TableConfigOverwrite> = {
  Authorization: 'hidden',
  Variant: 'hidden',
  Attribute: 'hidden',
  Def: 'system',
  Item: 'system',
  Property: 'hidden',
};

/*
 * All required fields are unhidden, unless they are overwritten to "hidden".
 * ReadOnly relationships are removed.
 */
const fieldOverwrites: {
  readonly [TABLE_NAME in keyof Tables]?: {
    readonly [FIELD_NAME in TableFields<
      Tables[TABLE_NAME]
    >]?: FieldConfigOverwrite;
  };
} & {
  readonly common: IR<FieldConfigOverwrite>;
} = {
  // Common overwrites apply to fields in all tables
  common: {
    timestampCreated: 'hidden',
    timestampModified: 'hidden',
    createdByAgent: 'hidden',
    modifiedByAgent: 'hidden',
    collectionMemberId: 'hidden',
    rankId: 'hidden',
    definition: 'hidden',
    definitionItem: 'hidden',
    orderNumber: 'hidden',
    isPrimary: 'hidden',
    isHybrid: 'hidden',
    isAccepted: 'hidden',
    fullName: 'readOnly',
  },
  Agent: {
    agentType: 'optional',
  },
  LoanPreparation: {
    isResolved: 'optional',
  },
  Locality: {
    srcLatLongUnit: 'optional',
  },
  PrepType: {
    isLoanable: 'readOnly',
  },
  Determination: {
    preferredTaxon: 'readOnly',
    isCurrent: 'hidden',
  },
  Taxon: {
    isAccepted: 'readOnly',
  },
};

// These field overrides apply to entire front-end
const globalFieldOverrides: typeof fieldOverwrites = {
  common: {
    timestampCreated: 'readOnly',
  },
  Taxon: {
    guid: 'readOnly',
    parent: 'required',
    isAccepted: 'readOnly',
    acceptedTaxon: 'readOnly',
    fullName: 'readOnly',
  },
  Geography: {
    guid: 'readOnly',
    parent: 'required',
    isAccepted: 'readOnly',
    acceptedGeography: 'readOnly',
    fullName: 'readOnly',
  },
  LithoStrat: {
    guid: 'readOnly',
    parent: 'required',
    isAccepted: 'readOnly',
    acceptedLithoStrat: 'readOnly',
    fullName: 'readOnly',
  },
  GeologicTimePeriod: {
    guid: 'readOnly',
    parent: 'required',
    isAccepted: 'readOnly',
    acceptedGeologicTimePeriod: 'readOnly',
    fullName: 'readOnly',
  },
  Storage: {
    parent: 'required',
    isAccepted: 'readOnly',
    acceptedStorage: 'readOnly',
    fullName: 'readOnly',
  },
};

/*
 * Same as fieldOverwrites, but matches with fieldName.endsWith(key),
 *  instead of fieldName===key.
 * endsWithFieldOverwrites are checked against fields in all tables.
 */
const endsWithFieldOverwrites: IR<FieldConfigOverwrite> = {
  precision: 'readOnly',
};

export const getTableOverwrite = (
  tableName: keyof Tables
): TableConfigOverwrite | undefined =>
  tableOverwrites[tableName] ??
  Object.entries(endsWithTableOverwrites).find(([label]) =>
    tableName.endsWith(label)
  )?.[1];

export const getGlobalFieldOverwrite = (
  tableName: string,
  fieldName: string
): FieldConfigOverwrite | undefined =>
  globalFieldOverrides[tableName as 'Accession']?.[fieldName as 'text1'] ??
  globalFieldOverrides.common?.[fieldName];

export const getFieldOverwrite = (
  tableName: string,
  fieldName: string
): FieldConfigOverwrite | undefined =>
  fieldOverwrites[tableName as 'Accession']?.[fieldName as 'text1'] ??
  fieldOverwrites.common?.[fieldName] ??
  Object.entries(endsWithFieldOverwrites).find(([key]) =>
    fieldName.endsWith(key)
  )?.[1];