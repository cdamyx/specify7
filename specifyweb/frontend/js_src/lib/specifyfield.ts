import type { Tables } from './datamodel';
import type { SchemaLocalization } from './schema';
import schema, { getModel } from './schema';
import { unescape } from './schemabase';
import type SpecifyModel from './specifymodel';
import type { UIFormatter } from './uiformatters';
import * as uiformatters from './uiformatters';

export type JavaType =
  // Strings
  | 'text'
  | 'java.lang.String'
  // Numbers
  | 'java.lang.Byte'
  | 'java.lang.Short'
  | 'java.lang.Integer'
  | 'java.lang.Float'
  | 'java.lang.Double'
  | 'java.lang.Long'
  | 'java.math.BigDecimal'
  // Bools
  | 'java.lang.Boolean'
  // Dates
  | 'java.sql.Timestamp'
  | 'java.util.Calendar'
  | 'java.util.Date';

const relationshipTypes = [
  'one-to-one',
  'one-to-many',
  'many-to-one',
  'many-to-many',
  'zero-to-one',
] as const;

export type RelationshipType = typeof relationshipTypes[number];

export type FieldDefinition = {
  readonly column?: string;
  readonly indexed: boolean;
  readonly length?: number;
  readonly name: string;
  readonly required: boolean;
  readonly type: JavaType;
  readonly unique: boolean;
  readonly readOnly?: boolean;
};

export type RelationshipDefinition = {
  readonly column?: string;
  readonly dependent: boolean;
  readonly name: string;
  readonly otherSideName?: string;
  readonly relatedModelName: keyof Tables;
  readonly required: boolean;
  readonly type: RelationshipType;
  readonly readOnly?: boolean;
};

export type SchemaModelTableField = {
  readonly name: string;
  readonly getLocalizedName: () => string | null;
  readonly getPickList: () => string | null | undefined;
  readonly isRequired: boolean;
  readonly isHidden: () => number;
  readonly isRelationship: boolean;
  readonly length: number | undefined;
  readonly readOnly: boolean;
  readonly type: RelationshipType;
};

// Define a JS object constructor to represent fields of Specify data objects.
export class Field {
  public readonly modelName: keyof Tables;

  // Whether the field represents a relationship.
  public readonly isRelationship: boolean;

  public readonly name: string;

  public readonly dottedName: string;

  public readOnly: boolean;

  public isRequired: boolean;

  public readonly type: JavaType | RelationshipType;

  public readonly length?: number;

  public readonly dbColumn?: string;

  public readonly localization: SchemaLocalization['items'][string];

  public constructor(
    modelName: keyof Tables,
    localization: SchemaLocalization['items'][string],
    fieldDefinition: Omit<FieldDefinition, 'type'> & {
      readonly type: JavaType | RelationshipType;
    }
  ) {
    this.modelName = modelName;
    this.isRelationship = relationshipTypes.includes(
      fieldDefinition.type as RelationshipType
    );

    this.name = fieldDefinition.name;
    this.dottedName = `${modelName}.${this.name}`;

    this.readOnly =
      fieldDefinition.readOnly === true ||
      (this.name === 'guid' &&
        modelName !== 'Taxon' &&
        modelName !== 'Geography') ||
      this.name === 'timestampcreated';

    this.isRequired = fieldDefinition.required;
    this.type = fieldDefinition.type;
    this.length = fieldDefinition.length;
    this.dbColumn = fieldDefinition.column;

    this.localization = localization;
  }

  // Returns the user friendly name of the field from the schema config.
  public getLocalizedName(): string | undefined {
    const name = this.localization.name;
    return name === null || typeof name === 'undefined'
      ? undefined
      : unescape(name);
  }

  // Returns the description of the field from the schema config.
  public getLocalizedDesc(): string | undefined {
    const description = this.localization.desc;
    return description === null || typeof description === 'undefined'
      ? undefined
      : unescape(description);
  }

  // Returns the name of the UIFormatter for the field from the schema config.
  public getFormat(): string | undefined {
    return this.localization.format ?? undefined;
  }

  // Returns the UIFormatter for the field specified in the schema config.
  public getUIFormatter(): ReturnType<typeof UIFormatter> | undefined {
    const format = this.getFormat();
    return typeof format === 'undefined'
      ? undefined
      : uiformatters.getByName(format);
  }

  /*
   * Returns the name of the picklist definition if any is assigned to the field
   * by the schema configuration.
   */
  public getPickList(): string | undefined {
    return this.localization.picklistname ?? undefined;
  }

  // Returns the weblink definition name if any is assigned to the field.
  public getWebLinkName(): string | undefined {
    return this.localization.weblinkname ?? undefined;
  }

  /*
   * Returns true if the field is required by the schema configuration.
   * NB the field maybe required for other reasons.
   */
  public isRequiredBySchemaLocalization(): boolean {
    return this.localization.isrequired;
  }

  // Returns true if the field is marked hidden in the schema configuration.
  public isHidden(): boolean {
    return this.localization.ishidden;
  }

  // Returns true if the field represents a time value.
  public isTemporal(): boolean {
    return [
      'java.util.Date',
      'java.util.Calendar',
      'java.sql.Timestamp',
    ].includes(this.type);
  }

  public isDependent(): boolean {
    return false;
  }
}

/*
 * Define a JS object constructor to represent relationship fields of Specify data objects.
 * Extends the Field object.
 */
export class Relationship extends Field {
  public otherSideName?: string;

  public relatedModelName: keyof Tables;

  public dependent: boolean;

  public constructor(
    modelName: keyof Tables,
    localization: SchemaLocalization['items'][string],
    relationshipDefinition: RelationshipDefinition
  ) {
    super(modelName, localization, {
      ...relationshipDefinition,
      indexed: false,
      unique: false,
    });

    this.otherSideName = relationshipDefinition.otherSideName;
    this.relatedModelName = relationshipDefinition.relatedModelName;
    this.dependent = relationshipDefinition.dependent;
  }

  /*
   * Returns true if the field represents a dependent relationship. ie one where
   * the data in the related object(s) is automatically included by the API.
   * eg CollectionObject.determinations.
   */
  public isDependent(): boolean {
    return this.modelName == 'CollectionObject' &&
      this.name == 'collectingEvent'
      ? schema.embeddedCollectingEvent
      : this.modelName.toLowerCase() == schema.paleoContextChildTable &&
        this.name == 'paleoContext'
      ? schema.embeddedPaleoContext
      : this.dependent;
  }

  // Returns the related model for relationship fields.
  public getRelatedModel<TABLE_NAME extends keyof Tables>():
    | SpecifyModel<Tables[TABLE_NAME]>
    | undefined {
    if (!this.isRelationship)
      throw new Error(`${this.dottedName} is not a relationship field`);
    return getModel(this.relatedModelName as TABLE_NAME);
  }

  // Returns the field of the related model that is the reverse of this field.
  public getReverse(): Relationship | undefined {
    const relModel = this.getRelatedModel();
    return this.otherSideName
      ? relModel?.getRelationship(this.otherSideName)
      : undefined;
  }
}
