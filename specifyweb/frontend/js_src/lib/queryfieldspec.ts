import type { SpQueryField } from './datamodel';
import type { SerializedModel } from './datamodelutils';
import { getModel, getModelById } from './schema';
import type { LiteralField, Relationship } from './specifyfield';
import type { SpecifyModel } from './specifymodel';
import type { RA } from './types';
import { defined, filterArray } from './types';
import { capitalize } from './wbplanviewhelper';
import { MappingPath } from './components/wbplanviewmapper';
import {
  formatTreeRank,
  relationshipIsToMany,
} from './wbplanviewmappinghelper';

const reStringId = /^([^.]*)\.([^.]*)\.(.*)$/;

const reDatePart = /(.*)(NumericDay|NumericMonth|NumericYear)$/;

export type DatePart = 'fullDate' | 'day' | 'month' | 'year';

function extractDatePart(fieldName: string): {
  readonly fieldName: string;
  readonly datePart: DatePart | undefined;
} {
  const match = reDatePart.exec(fieldName)?.slice(1);
  return match
    ? {
        fieldName: match[1],
        datePart: match[2].replace('Numeric', '').toLowerCase() as DatePart,
      }
    : {
        fieldName,
        datePart: undefined,
      };
}

export class QueryFieldSpec {
  private readonly baseTable: SpecifyModel;

  public joinPath: RA<LiteralField | Relationship> = [];

  public table: SpecifyModel;

  public datePart: DatePart | undefined = undefined;

  public treeRank: string | undefined = undefined;

  public constructor(baseTableName: string) {
    this.baseTable = defined(getModel(baseTableName));
    this.table = this.baseTable;
  }

  public toSpQueryAttributes(): Pick<
    SerializedModel<SpQueryField>,
    Lowercase<'tableList' | 'stringId' | 'fieldName' | 'isRelFld'>
  > {
    const { tableList, tableName, fieldName } = this.makeStringId(
      this.makeTableList()
    );

    return {
      tablelist: tableList,
      stringid: [tableList, tableName, fieldName].join('.'),
      fieldname: fieldName,
      isrelfld: this.isRelationship(),
    };
  }

  public getField(): LiteralField | Relationship | undefined {
    return this.joinPath.slice(-1)[0];
  }

  public toMappingPath(): MappingPath {
    return filterArray([
      ...this.joinPath.flatMap((field) => [
        field.name.toLowerCase(),
        field.isRelationship && relationshipIsToMany(field.type)
          ? '#1'
          : undefined,
      ]),
      // TODO: test this part
      typeof this.treeRank === 'string'
        ? formatTreeRank(this.treeRank)
        : undefined,
    ]);
  }

  private isRelationship(): boolean {
    return (
      this.treeRank === undefined && this.getField()?.isRelationship === true
    );
  }

  private makeTableList(): string {
    const path = (
      typeof this.treeRank !== undefined ||
      this.joinPath.length === 0 ||
      this.isRelationship()
        ? this.joinPath
        : this.joinPath.slice(0, -1)
    ) as RA<Relationship>;

    const rest = path.map((field) => {
      const relatedModel = defined(field.getRelatedModel());
      return relatedModel.name.toLowerCase() === field.name.toLowerCase()
        ? relatedModel.tableId.toString()
        : `${relatedModel.tableId}-${field.name.toLowerCase()}`;
    });
    return [this.baseTable.tableId, ...rest].join(',');
  }

  private makeStringId(tableList: string): {
    readonly tableList: string;
    readonly tableName: string;
    readonly fieldName: string;
  } {
    let fieldName =
      this.treeRank ??
      (this.joinPath.length > 0 ? defined(this.getField()).name : '');
    if (typeof this.datePart === 'string' && this.datePart !== 'fullDate')
      fieldName += `Numeric${capitalize(this.datePart)}`;
    return {
      tableList,
      tableName: this.table.name.toLowerCase(),
      fieldName,
    };
  }

  public static fromPath(pathIn: RA<string>): QueryFieldSpec {
    const [baseTableName, ...path] = Array.from(pathIn);
    const rootTable = defined(getModel(baseTableName));

    const joinPath: (LiteralField | Relationship)[] = [];
    let node = rootTable;
    path.forEach((fieldName, index) => {
      const field = defined(node.getField(fieldName));
      joinPath.push(field);
      if (field.isRelationship) node = defined(field.getRelatedModel());
      else if (index + 1 !== path.length)
        throw new Error('bad query field spec path');
    });

    const fieldSpec = new QueryFieldSpec(baseTableName);
    fieldSpec.joinPath = joinPath;
    fieldSpec.table = node;
    fieldSpec.datePart = joinPath.slice(-1)[0]?.isTemporal()
      ? 'fullDate'
      : undefined;
    return fieldSpec;
  }

  public static fromStringId(
    stringId: string,
    isRelationship: boolean
  ): QueryFieldSpec {
    const match = defined(reStringId.exec(stringId) ?? undefined);
    const [fullPath, _tableName, fullFieldName] = match.slice(1);
    const [baseTableId, ...path] = isRelationship
      ? fullPath.split(',').slice(0, -1)
      : fullPath.split(',');

    const baseTable = getModelById(Number.parseInt(baseTableId));

    let node = baseTable;
    const joinPath = path.map((element) => {
      const [tableId, fieldName] = element.split('-');
      const table = getModelById(Number.parseInt(tableId));
      const field = defined(node.getField(fieldName ?? table.name));
      node = table;
      return field;
    });

    const { fieldName, datePart } = extractDatePart(fullFieldName);
    const field = node.getField(fieldName);

    const fieldSpec = new QueryFieldSpec(baseTable.name);
    fieldSpec.joinPath =
      typeof field === 'object' ? [...joinPath, field] : joinPath;
    fieldSpec.table = node;
    fieldSpec.treeRank = typeof field === 'undefined' ? fieldName : undefined;
    fieldSpec.datePart =
      field?.isTemporal() === true ? datePart ?? 'fullDate' : undefined;
    return fieldSpec;
  }
}