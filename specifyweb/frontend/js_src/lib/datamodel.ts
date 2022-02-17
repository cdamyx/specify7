/**
 * TypeScript types for DataModel tables
 * The types types were generated with help from the regenerate() function
 *   in ./datamodelutils.ts
 *
 * Schema version: 2.9
 * Date generated: Jan 20, 2022
 */

import type { RA, RR } from './types';

export type Tables = {
  readonly Accession: Accession;
  readonly AccessionAgent: AccessionAgent;
  readonly AccessionAttachment: AccessionAttachment;
  readonly AccessionAuthorization: AccessionAuthorization;
  readonly AccessionCitation: AccessionCitation;
  readonly Address: Address;
  readonly AddressOfRecord: AddressOfRecord;
  readonly Agent: Agent;
  readonly AgentAttachment: AgentAttachment;
  readonly AgentGeography: AgentGeography;
  readonly AgentSpecialty: AgentSpecialty;
  readonly AgentVariant: AgentVariant;
  readonly Appraisal: Appraisal;
  readonly Attachment: Attachment;
  readonly AttachmentImageAttribute: AttachmentImageAttribute;
  readonly AttachmentMetadata: AttachmentMetadata;
  readonly AttachmentTag: AttachmentTag;
  readonly AttributeDef: AttributeDef;
  readonly Author: Author;
  readonly AutoNumberingScheme: AutoNumberingScheme;
  readonly Borrow: Borrow;
  readonly BorrowAgent: BorrowAgent;
  readonly BorrowAttachment: BorrowAttachment;
  readonly BorrowMaterial: BorrowMaterial;
  readonly BorrowReturnMaterial: BorrowReturnMaterial;
  readonly CollectingEvent: CollectingEvent;
  readonly CollectingEventAttachment: CollectingEventAttachment;
  readonly CollectingEventAttr: CollectingEventAttr;
  readonly CollectingEventAttribute: CollectingEventAttribute;
  readonly CollectingEventAuthorization: CollectingEventAuthorization;
  readonly CollectingTrip: CollectingTrip;
  readonly CollectingTripAttachment: CollectingTripAttachment;
  readonly CollectingTripAttribute: CollectingTripAttribute;
  readonly CollectingTripAuthorization: CollectingTripAuthorization;
  readonly Collection: Collection;
  readonly CollectionObject: CollectionObject;
  readonly CollectionObjectAttachment: CollectionObjectAttachment;
  readonly CollectionObjectAttr: CollectionObjectAttr;
  readonly CollectionObjectAttribute: CollectionObjectAttribute;
  readonly CollectionObjectCitation: CollectionObjectCitation;
  readonly CollectionObjectProperty: CollectionObjectProperty;
  readonly CollectionRelType: CollectionRelType;
  readonly CollectionRelationship: CollectionRelationship;
  readonly Collector: Collector;
  readonly CommonNameTx: CommonNameTx;
  readonly CommonNameTxCitation: CommonNameTxCitation;
  readonly ConservDescription: ConservDescription;
  readonly ConservDescriptionAttachment: ConservDescriptionAttachment;
  readonly ConservEvent: ConservEvent;
  readonly ConservEventAttachment: ConservEventAttachment;
  readonly Container: Container;
  readonly DNAPrimer: DNAPrimer;
  readonly DNASequence: DNASequence;
  readonly DNASequenceAttachment: DNASequenceAttachment;
  readonly DNASequencingRun: DNASequencingRun;
  readonly DNASequencingRunAttachment: DNASequencingRunAttachment;
  readonly DNASequencingRunCitation: DNASequencingRunCitation;
  readonly DataType: DataType;
  readonly Deaccession: Deaccession;
  readonly DeaccessionAgent: DeaccessionAgent;
  readonly DeaccessionAttachment: DeaccessionAttachment;
  readonly Determination: Determination;
  readonly DeterminationCitation: DeterminationCitation;
  readonly Discipline: Discipline;
  readonly Disposal: Disposal;
  readonly DisposalAgent: DisposalAgent;
  readonly DisposalAttachment: DisposalAttachment;
  readonly DisposalPreparation: DisposalPreparation;
  readonly Division: Division;
  readonly ExchangeIn: ExchangeIn;
  readonly ExchangeInPrep: ExchangeInPrep;
  readonly ExchangeOut: ExchangeOut;
  readonly ExchangeOutPrep: ExchangeOutPrep;
  readonly Exsiccata: Exsiccata;
  readonly ExsiccataItem: ExsiccataItem;
  readonly Extractor: Extractor;
  readonly FieldNotebook: FieldNotebook;
  readonly FieldNotebookAttachment: FieldNotebookAttachment;
  readonly FieldNotebookPage: FieldNotebookPage;
  readonly FieldNotebookPageAttachment: FieldNotebookPageAttachment;
  readonly FieldNotebookPageSet: FieldNotebookPageSet;
  readonly FieldNotebookPageSetAttachment: FieldNotebookPageSetAttachment;
  readonly FundingAgent: FundingAgent;
  readonly GeoCoordDetail: GeoCoordDetail;
  readonly Geography: Geography;
  readonly GeographyTreeDef: GeographyTreeDef;
  readonly GeographyTreeDefItem: GeographyTreeDefItem;
  readonly GeologicTimePeriod: GeologicTimePeriod;
  readonly GeologicTimePeriodTreeDef: GeologicTimePeriodTreeDef;
  readonly GeologicTimePeriodTreeDefItem: GeologicTimePeriodTreeDefItem;
  readonly Gift: Gift;
  readonly GiftAgent: GiftAgent;
  readonly GiftAttachment: GiftAttachment;
  readonly GiftPreparation: GiftPreparation;
  readonly GroupPerson: GroupPerson;
  readonly InfoRequest: InfoRequest;
  readonly Institution: Institution;
  readonly InstitutionNetwork: InstitutionNetwork;
  readonly Journal: Journal;
  readonly LatLonPolygon: LatLonPolygon;
  readonly LatLonPolygonPnt: LatLonPolygonPnt;
  readonly LithoStrat: LithoStrat;
  readonly LithoStratTreeDef: LithoStratTreeDef;
  readonly LithoStratTreeDefItem: LithoStratTreeDefItem;
  readonly Loan: Loan;
  readonly LoanAgent: LoanAgent;
  readonly LoanAttachment: LoanAttachment;
  readonly LoanPreparation: LoanPreparation;
  readonly LoanReturnPreparation: LoanReturnPreparation;
  readonly Locality: Locality;
  readonly LocalityAttachment: LocalityAttachment;
  readonly LocalityCitation: LocalityCitation;
  readonly LocalityDetail: LocalityDetail;
  readonly LocalityNameAlias: LocalityNameAlias;
  readonly MaterialSample: MaterialSample;
  readonly MorphBankView: MorphBankView;
  readonly OtherIdentifier: OtherIdentifier;
  readonly PaleoContext: PaleoContext;
  readonly PcrPerson: PcrPerson;
  readonly Permit: Permit;
  readonly PermitAttachment: PermitAttachment;
  readonly PickList: PickList;
  readonly PickListItem: PickListItem;
  readonly PrepType: PrepType;
  readonly Preparation: Preparation;
  readonly PreparationAttachment: PreparationAttachment;
  readonly PreparationAttr: PreparationAttr;
  readonly PreparationAttribute: PreparationAttribute;
  readonly PreparationProperty: PreparationProperty;
  readonly Project: Project;
  readonly RecordSet: RecordSet;
  readonly RecordSetItem: RecordSetItem;
  readonly ReferenceWork: ReferenceWork;
  readonly ReferenceWorkAttachment: ReferenceWorkAttachment;
  readonly RepositoryAgreement: RepositoryAgreement;
  readonly RepositoryAgreementAttachment: RepositoryAgreementAttachment;
  readonly Shipment: Shipment;
  readonly SpAppResource: SpAppResource;
  readonly SpAppResourceData: SpAppResourceData;
  readonly SpAppResourceDir: SpAppResourceDir;
  readonly SpAuditLog: SpAuditLog;
  readonly SpAuditLogField: SpAuditLogField;
  readonly SpExportSchema: SpExportSchema;
  readonly SpExportSchemaItem: SpExportSchemaItem;
  readonly SpExportSchemaItemMapping: SpExportSchemaItemMapping;
  readonly SpExportSchemaMapping: SpExportSchemaMapping;
  readonly SpFieldValueDefault: SpFieldValueDefault;
  readonly SpLocaleContainer: SpLocaleContainer;
  readonly SpLocaleContainerItem: SpLocaleContainerItem;
  readonly SpLocaleItemStr: SpLocaleItemStr;
  readonly SpPermission: SpPermission;
  readonly SpPrincipal: SpPrincipal;
  readonly SpQuery: SpQuery;
  readonly SpQueryField: SpQueryField;
  readonly SpReport: SpReport;
  readonly SpSymbiotaInstance: SpSymbiotaInstance;
  readonly SpTaskSemaphore: SpTaskSemaphore;
  readonly SpVersion: SpVersion;
  readonly SpViewSetObj: SpViewSetObj;
  readonly SpVisualQuery: SpVisualQuery;
  readonly SpecifyUser: SpecifyUser;
  readonly Storage: Storage;
  readonly StorageAttachment: StorageAttachment;
  readonly StorageTreeDef: StorageTreeDef;
  readonly StorageTreeDefItem: StorageTreeDefItem;
  readonly Taxon: Taxon;
  readonly TaxonAttachment: TaxonAttachment;
  readonly TaxonAttribute: TaxonAttribute;
  readonly TaxonCitation: TaxonCitation;
  readonly TaxonTreeDef: TaxonTreeDef;
  readonly TaxonTreeDefItem: TaxonTreeDefItem;
  readonly TreatmentEvent: TreatmentEvent;
  readonly TreatmentEventAttachment: TreatmentEventAttachment;
  readonly VoucherRelationship: VoucherRelationship;
  readonly Workbench: Workbench;
  readonly WorkbenchDataItem: WorkbenchDataItem;
  readonly WorkbenchRow: WorkbenchRow;
  readonly WorkbenchRowExportedRelationship: WorkbenchRowExportedRelationship;
  readonly WorkbenchRowImage: WorkbenchRowImage;
  readonly WorkbenchTemplate: WorkbenchTemplate;
  readonly WorkbenchTemplateMappingItem: WorkbenchTemplateMappingItem;
};
export type Accession = {
  readonly tableName: 'Accession';
  readonly fields: {
    readonly accessionCondition: string | null;
    readonly accessionNumber: string;
    readonly dateAccessioned: string | null;
    readonly dateAcknowledged: string | null;
    readonly dateReceived: string | null;
    readonly integer1: number | null;
    readonly integer2: number | null;
    readonly integer3: number | null;
    readonly number1: number | null;
    readonly number2: number | null;
    readonly remarks: string | null;
    readonly status: string | null;
    readonly text1: string | null;
    readonly text2: string | null;
    readonly text3: string | null;
    readonly text4: string | null;
    readonly text5: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly totalValue: number | null;
    readonly type: string | null;
    readonly verbatimDate: string | null;
    readonly version: number | null;
    readonly yesNo1: boolean | null;
    readonly yesNo2: boolean | null;
  };
  readonly toOneDependent: { readonly addressOfRecord: AddressOfRecord | null };
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly division: Division;
    readonly modifiedByAgent: Agent | null;
    readonly repositoryAgreement: RepositoryAgreement | null;
  };
  readonly toManyDependent: {
    readonly accessionAgents: RA<AccessionAgent>;
    readonly accessionAttachments: RA<AccessionAttachment>;
    readonly accessionAuthorizations: RA<AccessionAuthorization>;
  };
  readonly toManyIndependent: {
    readonly accessionCitations: RA<AccessionCitation>;
    readonly appraisals: RA<Appraisal>;
    readonly collectionObjects: RA<CollectionObject>;
    readonly treatmentEvents: RA<TreatmentEvent>;
  };
};
export type AccessionAgent = {
  readonly tableName: 'AccessionAgent';
  readonly fields: {
    readonly remarks: string | null;
    readonly role: string;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly accession: Accession | null;
    readonly agent: Agent;
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
    readonly repositoryAgreement: RepositoryAgreement | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type AccessionAttachment = {
  readonly tableName: 'AccessionAttachment';
  readonly fields: {
    readonly ordinal: number;
    readonly remarks: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: { readonly attachment: Attachment };
  readonly toOneIndependent: {
    readonly accession: Accession;
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type AccessionAuthorization = {
  readonly tableName: 'AccessionAuthorization';
  readonly fields: {
    readonly remarks: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly accession: Accession | null;
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
    readonly permit: Permit;
    readonly repositoryAgreement: RepositoryAgreement | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type AccessionCitation = {
  readonly tableName: 'AccessionCitation';
  readonly fields: {
    readonly figureNumber: string | null;
    readonly isFigured: boolean | null;
    readonly pageNumber: string | null;
    readonly plateNumber: string | null;
    readonly remarks: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly accession: Accession;
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
    readonly referenceWork: ReferenceWork;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type Address = {
  readonly tableName: 'Address';
  readonly fields: {
    readonly address: string | null;
    readonly address2: string | null;
    readonly address3: string | null;
    readonly address4: string | null;
    readonly address5: string | null;
    readonly city: string | null;
    readonly country: string | null;
    readonly endDate: string | null;
    readonly fax: string | null;
    readonly isCurrent: boolean | null;
    readonly isPrimary: boolean | null;
    readonly isShipping: boolean | null;
    readonly ordinal: number | null;
    readonly phone1: string | null;
    readonly phone2: string | null;
    readonly positionHeld: string | null;
    readonly postalCode: string | null;
    readonly remarks: string | null;
    readonly roomOrBuilding: string | null;
    readonly startDate: string | null;
    readonly state: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly typeOfAddr: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly agent: Agent | null;
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: {
    readonly divisions: RA<Division>;
    readonly insitutions: RA<Institution>;
  };
};
export type AddressOfRecord = {
  readonly tableName: 'AddressOfRecord';
  readonly fields: {
    readonly address: string | null;
    readonly address2: string | null;
    readonly city: string | null;
    readonly country: string | null;
    readonly postalCode: string | null;
    readonly remarks: string | null;
    readonly state: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly agent: Agent | null;
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: {
    readonly accessions: RA<Accession>;
    readonly exchangeIns: RA<ExchangeIn>;
    readonly exchangeOuts: RA<ExchangeOut>;
    readonly loans: RA<Loan>;
    readonly repositoryAgreements: RA<RepositoryAgreement>;
  };
};
export type Agent = {
  readonly tableName: 'Agent';
  readonly fields: {
    readonly abbreviation: string | null;
    readonly agentType: number;
    readonly date1: string | null;
    readonly date1Precision: number | null;
    readonly date2: string | null;
    readonly date2Precision: number | null;
    readonly dateOfBirth: string | null;
    readonly dateOfBirthPrecision: number | null;
    readonly dateOfDeath: string | null;
    readonly dateOfDeathPrecision: number | null;
    readonly dateType: number | null;
    readonly email: string | null;
    readonly firstName: string | null;
    readonly guid: string | null;
    readonly initials: string | null;
    readonly integer1: number | null;
    readonly integer2: number | null;
    readonly interests: string | null;
    readonly jobTitle: string | null;
    readonly lastName: string | null;
    readonly middleInitial: string | null;
    readonly remarks: string | null;
    readonly suffix: string | null;
    readonly text1: string | null;
    readonly text2: string | null;
    readonly text3: string | null;
    readonly text4: string | null;
    readonly text5: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly title: string | null;
    readonly url: string | null;
    readonly verbatimDate1: string | null;
    readonly verbatimDate2: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly collContentContact: Collection | null;
    readonly collTechContact: Collection | null;
    readonly createdByAgent: Agent | null;
    readonly division: Division | null;
    readonly instContentContact: Institution | null;
    readonly instTechContact: Institution | null;
    readonly modifiedByAgent: Agent | null;
    readonly organization: Agent | null;
    readonly specifyUser: SpecifyUser | null;
  };
  readonly toManyDependent: {
    readonly addresses: RA<Address>;
    readonly agentAttachments: RA<AgentAttachment>;
    readonly agentGeographies: RA<AgentGeography>;
    readonly agentSpecialties: RA<AgentSpecialty>;
    readonly groups: RA<GroupPerson>;
    readonly variants: RA<AgentVariant>;
  };
  readonly toManyIndependent: {
    readonly collectors: RA<Collector>;
    readonly members: RA<GroupPerson>;
    readonly orgMembers: RA<Agent>;
  };
};
export type AgentAttachment = {
  readonly tableName: 'AgentAttachment';
  readonly fields: {
    readonly ordinal: number;
    readonly remarks: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: { readonly attachment: Attachment };
  readonly toOneIndependent: {
    readonly agent: Agent;
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type AgentGeography = {
  readonly tableName: 'AgentGeography';
  readonly fields: {
    readonly remarks: string | null;
    readonly role: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly agent: Agent;
    readonly createdByAgent: Agent | null;
    readonly geography: Geography;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type AgentSpecialty = {
  readonly tableName: 'AgentSpecialty';
  readonly fields: {
    readonly orderNumber: number;
    readonly specialtyName: string;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly agent: Agent;
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type AgentVariant = {
  readonly tableName: 'AgentVariant';
  readonly fields: {
    readonly country: string | null;
    readonly language: string | null;
    readonly name: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly varType: number;
    readonly variant: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly agent: Agent;
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type Appraisal = {
  readonly tableName: 'Appraisal';
  readonly fields: {
    readonly appraisalDate: string;
    readonly appraisalNumber: string;
    readonly appraisalValue: number | null;
    readonly monetaryUnitType: string | null;
    readonly notes: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly accession: Accession | null;
    readonly agent: Agent;
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: {
    readonly collectionObjects: RA<CollectionObject>;
  };
};
export type Attachment = {
  readonly tableName: 'Attachment';
  readonly fields: {
    readonly attachmentLocation: string | null;
    readonly attachmentStorageConfig: string | null;
    readonly captureDevice: string | null;
    readonly copyrightDate: string | null;
    readonly copyrightHolder: string | null;
    readonly credit: string | null;
    readonly dateImaged: string | null;
    readonly fileCreatedDate: string | null;
    readonly guid: string | null;
    readonly isPublic: boolean;
    readonly license: string | null;
    readonly licenseLogoUrl: string | null;
    readonly metadataText: string | null;
    readonly mimeType: string | null;
    readonly origFilename: string;
    readonly remarks: string | null;
    readonly scopeID: number | null;
    readonly scopeType: number | null;
    readonly subjectOrientation: string | null;
    readonly subtype: string | null;
    readonly tableID: number;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly title: string | null;
    readonly type: string | null;
    readonly version: number | null;
    readonly visibility: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly attachmentImageAttribute: AttachmentImageAttribute | null;
    readonly createdByAgent: Agent | null;
    readonly creator: Agent | null;
    readonly modifiedByAgent: Agent | null;
    readonly visibilitySetBy: SpecifyUser | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: {
    readonly accessionAttachments: RA<AccessionAttachment>;
    readonly agentAttachments: RA<AgentAttachment>;
    readonly borrowAttachments: RA<BorrowAttachment>;
    readonly collectingEventAttachments: RA<CollectingEventAttachment>;
    readonly collectingTripAttachments: RA<CollectingTripAttachment>;
    readonly collectionObjectAttachments: RA<CollectionObjectAttachment>;
    readonly conservDescriptionAttachments: RA<ConservDescriptionAttachment>;
    readonly conservEventAttachments: RA<ConservEventAttachment>;
    readonly deaccessionAttachments: RA<DeaccessionAttachment>;
    readonly disposalAttachments: RA<DisposalAttachment>;
    readonly dnaSequenceAttachments: RA<DNASequenceAttachment>;
    readonly dnaSequencingRunAttachments: RA<DNASequencingRunAttachment>;
    readonly fieldNotebookAttachments: RA<FieldNotebookAttachment>;
    readonly fieldNotebookPageAttachments: RA<FieldNotebookPageAttachment>;
    readonly fieldNotebookPageSetAttachments: RA<FieldNotebookPageSetAttachment>;
    readonly giftAttachments: RA<GiftAttachment>;
    readonly loanAttachments: RA<LoanAttachment>;
    readonly localityAttachments: RA<LocalityAttachment>;
    readonly metadata: RA<AttachmentMetadata>;
    readonly permitAttachments: RA<PermitAttachment>;
    readonly preparationAttachments: RA<PreparationAttachment>;
    readonly referenceWorkAttachments: RA<ReferenceWorkAttachment>;
    readonly repositoryAgreementAttachments: RA<RepositoryAgreementAttachment>;
    readonly storageAttachments: RA<StorageAttachment>;
    readonly tags: RA<AttachmentTag>;
    readonly taxonAttachments: RA<TaxonAttachment>;
    readonly treatmentEventAttachments: RA<TreatmentEventAttachment>;
  };
};
export type AttachmentImageAttribute = {
  readonly tableName: 'AttachmentImageAttribute';
  readonly fields: {
    readonly creativeCommons: string | null;
    readonly height: number | null;
    readonly imageType: string | null;
    readonly magnification: number | null;
    readonly mbImageId: number | null;
    readonly number1: number | null;
    readonly number2: number | null;
    readonly remarks: string | null;
    readonly resolution: number | null;
    readonly text1: string | null;
    readonly text2: string | null;
    readonly timestampCreated: string;
    readonly timestampLastSend: string | null;
    readonly timestampLastUpdateCheck: string | null;
    readonly timestampModified: string | null;
    readonly version: number | null;
    readonly viewDescription: string | null;
    readonly width: number | null;
    readonly yesNo1: boolean | null;
    readonly yesNo2: boolean | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
    readonly morphBankView: MorphBankView | null;
  };
  readonly toManyDependent: { readonly attachments: RA<Attachment> };
  readonly toManyIndependent: RR<never, never>;
};
export type AttachmentMetadata = {
  readonly tableName: 'AttachmentMetadata';
  readonly fields: {
    readonly name: string;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly value: string;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly attachment: Attachment | null;
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type AttachmentTag = {
  readonly tableName: 'AttachmentTag';
  readonly fields: {
    readonly tag: string;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly attachment: Attachment;
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type AttributeDef = {
  readonly tableName: 'AttributeDef';
  readonly fields: {
    readonly dataType: number | null;
    readonly fieldName: string | null;
    readonly tableType: number | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly discipline: Discipline;
    readonly modifiedByAgent: Agent | null;
    readonly prepType: PrepType | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: {
    readonly collectingEventAttrs: RA<CollectingEventAttr>;
    readonly collectionObjectAttrs: RA<CollectionObjectAttr>;
    readonly preparationAttrs: RA<PreparationAttr>;
  };
};
export type Author = {
  readonly tableName: 'Author';
  readonly fields: {
    readonly orderNumber: number;
    readonly remarks: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly agent: Agent;
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
    readonly referenceWork: ReferenceWork;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type AutoNumberingScheme = {
  readonly tableName: 'AutoNumberingScheme';
  readonly fields: {
    readonly formatName: string | null;
    readonly isNumericOnly: boolean;
    readonly schemeClassName: string | null;
    readonly schemeName: string | null;
    readonly tableNumber: number;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: {
    readonly collections: RA<Collection>;
    readonly disciplines: RA<Discipline>;
    readonly divisions: RA<Division>;
  };
};
export type Borrow = {
  readonly tableName: 'Borrow';
  readonly fields: {
    readonly borrowDate: string | null;
    readonly borrowDatePrecision: number | null;
    readonly collectionMemberId: number;
    readonly currentDueDate: string | null;
    readonly dateClosed: string | null;
    readonly invoiceNumber: string;
    readonly isClosed: boolean | null;
    readonly isFinancialResponsibility: boolean | null;
    readonly number1: number | null;
    readonly number2: number | null;
    readonly numberOfItemsBorrowed: number | null;
    readonly originalDueDate: string | null;
    readonly receivedDate: string | null;
    readonly remarks: string | null;
    readonly status: string | null;
    readonly text1: string | null;
    readonly text2: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
    readonly yesNo1: boolean | null;
    readonly yesNo2: boolean | null;
  };
  readonly toOneDependent: { readonly addressOfRecord: AddressOfRecord | null };
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: {
    readonly borrowAgents: RA<BorrowAgent>;
    readonly borrowAttachments: RA<BorrowAttachment>;
    readonly borrowMaterials: RA<BorrowMaterial>;
    readonly shipments: RA<Shipment>;
  };
  readonly toManyIndependent: RR<never, never>;
};
export type BorrowAgent = {
  readonly tableName: 'BorrowAgent';
  readonly fields: {
    readonly collectionMemberId: number;
    readonly remarks: string | null;
    readonly role: string;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly agent: Agent;
    readonly borrow: Borrow;
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type BorrowAttachment = {
  readonly tableName: 'BorrowAttachment';
  readonly fields: {
    readonly ordinal: number;
    readonly remarks: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: { readonly attachment: Attachment };
  readonly toOneIndependent: {
    readonly borrow: Borrow;
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type BorrowMaterial = {
  readonly tableName: 'BorrowMaterial';
  readonly fields: {
    readonly collectionMemberId: number;
    readonly description: string | null;
    readonly inComments: string | null;
    readonly materialNumber: string;
    readonly outComments: string | null;
    readonly quantity: number | null;
    readonly quantityResolved: number | null;
    readonly quantityReturned: number | null;
    readonly text1: string | null;
    readonly text2: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly borrow: Borrow;
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: {
    readonly borrowReturnMaterials: RA<BorrowReturnMaterial>;
  };
  readonly toManyIndependent: RR<never, never>;
};
export type BorrowReturnMaterial = {
  readonly tableName: 'BorrowReturnMaterial';
  readonly fields: {
    readonly collectionMemberId: number;
    readonly quantity: number | null;
    readonly remarks: string | null;
    readonly returnedDate: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly agent: Agent | null;
    readonly borrowMaterial: BorrowMaterial;
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type CollectingEvent = {
  readonly tableName: 'CollectingEvent';
  readonly fields: {
    readonly endDate: string | null;
    readonly endDatePrecision: number | null;
    readonly endDateVerbatim: string | null;
    readonly endTime: number | null;
    readonly guid: string | null;
    readonly integer1: number | null;
    readonly integer2: number | null;
    readonly method: string | null;
    readonly remarks: string | null;
    readonly reservedInteger3: number | null;
    readonly reservedInteger4: number | null;
    readonly reservedText1: string | null;
    readonly reservedText2: string | null;
    readonly sgrStatus: number | null;
    readonly startDate: string | null;
    readonly startDatePrecision: number | null;
    readonly startDateVerbatim: string | null;
    readonly startTime: number | null;
    readonly stationFieldNumber: string | null;
    readonly stationFieldNumberModifier1: string | null;
    readonly stationFieldNumberModifier2: string | null;
    readonly stationFieldNumberModifier3: string | null;
    readonly text1: string | null;
    readonly text2: string | null;
    readonly text3: string | null;
    readonly text4: string | null;
    readonly text5: string | null;
    readonly text6: string | null;
    readonly text7: string | null;
    readonly text8: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly uniqueIdentifier: string | null;
    readonly verbatimDate: string | null;
    readonly verbatimLocality: string | null;
    readonly version: number | null;
    readonly visibility: number | null;
  };
  readonly toOneDependent: {
    readonly collectingEventAttribute: CollectingEventAttribute | null;
  };
  readonly toOneIndependent: {
    readonly collectingTrip: CollectingTrip | null;
    readonly createdByAgent: Agent | null;
    readonly discipline: Discipline;
    readonly locality: Locality | null;
    readonly modifiedByAgent: Agent | null;
    readonly paleoContext: PaleoContext | null;
    readonly visibilitySetBy: SpecifyUser | null;
  };
  readonly toManyDependent: {
    readonly collectingEventAttachments: RA<CollectingEventAttachment>;
    readonly collectingEventAttrs: RA<CollectingEventAttr>;
    readonly collectors: RA<Collector>;
  };
  readonly toManyIndependent: {
    readonly collectingEventAuthorizations: RA<CollectingEventAuthorization>;
    readonly collectionObjects: RA<CollectionObject>;
  };
};
export type CollectingEventAttachment = {
  readonly tableName: 'CollectingEventAttachment';
  readonly fields: {
    readonly collectionMemberId: number;
    readonly ordinal: number;
    readonly remarks: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: { readonly attachment: Attachment };
  readonly toOneIndependent: {
    readonly collectingEvent: CollectingEvent;
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type CollectingEventAttr = {
  readonly tableName: 'CollectingEventAttr';
  readonly fields: {
    readonly collectionMemberId: number;
    readonly dblValue: number | null;
    readonly strValue: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly collectingEvent: CollectingEvent;
    readonly createdByAgent: Agent | null;
    readonly definition: AttributeDef;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type CollectingEventAttribute = {
  readonly tableName: 'CollectingEventAttribute';
  readonly fields: {
    readonly integer1: number | null;
    readonly integer10: number | null;
    readonly integer2: number | null;
    readonly integer3: number | null;
    readonly integer4: number | null;
    readonly integer5: number | null;
    readonly integer6: number | null;
    readonly integer7: number | null;
    readonly integer8: number | null;
    readonly integer9: number | null;
    readonly number1: number | null;
    readonly number10: number | null;
    readonly number11: number | null;
    readonly number12: number | null;
    readonly number13: number | null;
    readonly number2: number | null;
    readonly number3: number | null;
    readonly number4: number | null;
    readonly number5: number | null;
    readonly number6: number | null;
    readonly number7: number | null;
    readonly number8: number | null;
    readonly number9: number | null;
    readonly remarks: string | null;
    readonly text1: string | null;
    readonly text10: string | null;
    readonly text11: string | null;
    readonly text12: string | null;
    readonly text13: string | null;
    readonly text14: string | null;
    readonly text15: string | null;
    readonly text16: string | null;
    readonly text17: string | null;
    readonly text2: string | null;
    readonly text3: string | null;
    readonly text4: string | null;
    readonly text5: string | null;
    readonly text6: string | null;
    readonly text7: string | null;
    readonly text8: string | null;
    readonly text9: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
    readonly yesNo1: boolean | null;
    readonly yesNo2: boolean | null;
    readonly yesNo3: boolean | null;
    readonly yesNo4: boolean | null;
    readonly yesNo5: boolean | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly discipline: Discipline;
    readonly hostTaxon: Taxon | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: {
    readonly collectingEvents: RA<CollectingEvent>;
  };
};
export type CollectingEventAuthorization = {
  readonly tableName: 'CollectingEventAuthorization';
  readonly fields: {
    readonly remarks: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly collectingEvent: CollectingEvent | null;
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
    readonly permit: Permit;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type CollectingTrip = {
  readonly tableName: 'CollectingTrip';
  readonly fields: {
    readonly collectingTripName: string | null;
    readonly cruise: string | null;
    readonly date1: string | null;
    readonly date1Precision: number | null;
    readonly date2: string | null;
    readonly date2Precision: number | null;
    readonly endDate: string | null;
    readonly endDatePrecision: number | null;
    readonly endDateVerbatim: string | null;
    readonly endTime: number | null;
    readonly expedition: string | null;
    readonly number1: number | null;
    readonly number2: number | null;
    readonly remarks: string | null;
    readonly sponsor: string | null;
    readonly startDate: string | null;
    readonly startDatePrecision: number | null;
    readonly startDateVerbatim: string | null;
    readonly startTime: number | null;
    readonly text1: string | null;
    readonly text2: string | null;
    readonly text3: string | null;
    readonly text4: string | null;
    readonly text5: string | null;
    readonly text6: string | null;
    readonly text7: string | null;
    readonly text8: string | null;
    readonly text9: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
    readonly vessel: string | null;
    readonly yesNo1: boolean | null;
    readonly yesNo2: boolean | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly agent1: Agent | null;
    readonly agent2: Agent | null;
    readonly collectingTripAttribute: CollectingTripAttribute | null;
    readonly createdByAgent: Agent | null;
    readonly discipline: Discipline;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: {
    readonly collectingTripAttachments: RA<CollectingTripAttachment>;
    readonly fundingAgents: RA<FundingAgent>;
  };
  readonly toManyIndependent: {
    readonly collectingEvents: RA<CollectingEvent>;
    readonly collectingTripAuthorizations: RA<CollectingTripAuthorization>;
  };
};
export type CollectingTripAttachment = {
  readonly tableName: 'CollectingTripAttachment';
  readonly fields: {
    readonly collectionMemberId: number;
    readonly ordinal: number;
    readonly remarks: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: { readonly attachment: Attachment };
  readonly toOneIndependent: {
    readonly collectingTrip: CollectingTrip;
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type CollectingTripAttribute = {
  readonly tableName: 'CollectingTripAttribute';
  readonly fields: {
    readonly integer1: number | null;
    readonly integer10: number | null;
    readonly integer2: number | null;
    readonly integer3: number | null;
    readonly integer4: number | null;
    readonly integer5: number | null;
    readonly integer6: number | null;
    readonly integer7: number | null;
    readonly integer8: number | null;
    readonly integer9: number | null;
    readonly number1: number | null;
    readonly number10: number | null;
    readonly number11: number | null;
    readonly number12: number | null;
    readonly number13: number | null;
    readonly number2: number | null;
    readonly number3: number | null;
    readonly number4: number | null;
    readonly number5: number | null;
    readonly number6: number | null;
    readonly number7: number | null;
    readonly number8: number | null;
    readonly number9: number | null;
    readonly remarks: string | null;
    readonly text1: string | null;
    readonly text10: string | null;
    readonly text11: string | null;
    readonly text12: string | null;
    readonly text13: string | null;
    readonly text14: string | null;
    readonly text15: string | null;
    readonly text16: string | null;
    readonly text17: string | null;
    readonly text2: string | null;
    readonly text3: string | null;
    readonly text4: string | null;
    readonly text5: string | null;
    readonly text6: string | null;
    readonly text7: string | null;
    readonly text8: string | null;
    readonly text9: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
    readonly yesNo1: boolean | null;
    readonly yesNo2: boolean | null;
    readonly yesNo3: boolean | null;
    readonly yesNo4: boolean | null;
    readonly yesNo5: boolean | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly discipline: Discipline;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: { readonly collectingTrips: RA<CollectingTrip> };
};
export type CollectingTripAuthorization = {
  readonly tableName: 'CollectingTripAuthorization';
  readonly fields: {
    readonly remarks: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly collectingTrip: CollectingTrip | null;
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
    readonly permit: Permit;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type Collection = {
  readonly tableName: 'Collection';
  readonly fields: {
    readonly catalogNumFormatName: string;
    readonly code: string | null;
    readonly collectionName: string | null;
    readonly collectionType: string | null;
    readonly dbContentVersion: string | null;
    readonly description: string | null;
    readonly developmentStatus: string | null;
    readonly estimatedSize: number | null;
    readonly guid: string | null;
    readonly institutionType: string | null;
    readonly isEmbeddedCollectingEvent: boolean;
    readonly isaNumber: string | null;
    readonly kingdomCoverage: string | null;
    readonly preservationMethodType: string | null;
    readonly primaryFocus: string | null;
    readonly primaryPurpose: string | null;
    readonly regNumber: string | null;
    readonly remarks: string | null;
    readonly scope: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
    readonly webPortalURI: string | null;
    readonly webSiteURI: string | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly adminContact: Agent | null;
    readonly createdByAgent: Agent | null;
    readonly discipline: Discipline;
    readonly institutionNetwork: Institution | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: {
    readonly contentContacts: RA<Agent>;
    readonly leftSideRelTypes: RA<CollectionRelType>;
    readonly numberingSchemes: RA<AutoNumberingScheme>;
    readonly pickLists: RA<PickList>;
    readonly prepTypes: RA<PrepType>;
    readonly rightSideRelTypes: RA<CollectionRelType>;
    readonly technicalContacts: RA<Agent>;
    readonly userGroups: RA<SpPrincipal>;
  };
};
export type CollectionObject = {
  readonly tableName: 'CollectionObject';
  readonly fields: {
    readonly altCatalogNumber: string | null;
    readonly availability: string | null;
    readonly catalogNumber: string | null;
    readonly catalogedDate: string | null;
    readonly catalogedDatePrecision: number | null;
    readonly catalogedDateVerbatim: string | null;
    readonly collectionMemberId: number;
    readonly countAmt: number | null;
    readonly date1: string | null;
    readonly date1Precision: number | null;
    readonly deaccessioned: boolean | null;
    readonly description: string | null;
    readonly embargoReason: string | null;
    readonly embargoReleaseDate: string | null;
    readonly embargoReleaseDatePrecision: number | null;
    readonly embargoStartDate: string | null;
    readonly embargoStartDatePrecision: number | null;
    readonly fieldNumber: string | null;
    readonly guid: string | null;
    readonly integer1: number | null;
    readonly integer2: number | null;
    readonly inventoryDate: string | null;
    readonly inventoryDatePrecision: number | null;
    readonly modifier: string | null;
    readonly name: string | null;
    readonly notifications: string | null;
    readonly number1: number | null;
    readonly number2: number | null;
    readonly numberOfDuplicates: number | null;
    readonly objectCondition: string | null;
    readonly ocr: string | null;
    readonly projectNumber: string | null;
    readonly remarks: string | null;
    readonly reservedInteger3: number | null;
    readonly reservedInteger4: number | null;
    readonly reservedText: string | null;
    readonly reservedText2: string | null;
    readonly reservedText3: string | null;
    readonly restrictions: string | null;
    readonly sgrStatus: number | null;
    readonly text1: string | null;
    readonly text2: string | null;
    readonly text3: string | null;
    readonly text4: string | null;
    readonly text5: string | null;
    readonly text6: string | null;
    readonly text7: string | null;
    readonly text8: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly totalValue: number | null;
    readonly uniqueIdentifier: string | null;
    readonly version: number | null;
    readonly visibility: number | null;
    readonly yesNo1: boolean | null;
    readonly yesNo2: boolean | null;
    readonly yesNo3: boolean | null;
    readonly yesNo4: boolean | null;
    readonly yesNo5: boolean | null;
    readonly yesNo6: boolean | null;
  };
  readonly toOneDependent: {
    readonly collectionObjectAttribute: CollectionObjectAttribute | null;
  };
  readonly toOneIndependent: {
    readonly accession: Accession | null;
    readonly agent1: Agent | null;
    readonly appraisal: Appraisal | null;
    readonly cataloger: Agent | null;
    readonly collectingEvent: CollectingEvent | null;
    readonly collection: Collection;
    readonly container: Container | null;
    readonly containerOwner: Container | null;
    readonly createdByAgent: Agent | null;
    readonly embargoAuthority: Agent | null;
    readonly fieldNotebookPage: FieldNotebookPage | null;
    readonly inventorizedBy: Agent | null;
    readonly modifiedByAgent: Agent | null;
    readonly paleoContext: PaleoContext | null;
    readonly visibilitySetBy: SpecifyUser | null;
  };
  readonly toManyDependent: {
    readonly collectionObjectAttachments: RA<CollectionObjectAttachment>;
    readonly collectionObjectAttrs: RA<CollectionObjectAttr>;
    readonly collectionObjectCitations: RA<CollectionObjectCitation>;
    readonly collectionObjectProperties: RA<CollectionObjectProperty>;
    readonly conservDescriptions: RA<ConservDescription>;
    readonly determinations: RA<Determination>;
    readonly dnaSequences: RA<DNASequence>;
    readonly exsiccataItems: RA<ExsiccataItem>;
    readonly leftSideRels: RA<CollectionRelationship>;
    readonly otherIdentifiers: RA<OtherIdentifier>;
    readonly preparations: RA<Preparation>;
    readonly rightSideRels: RA<CollectionRelationship>;
    readonly treatmentEvents: RA<TreatmentEvent>;
    readonly voucherRelationships: RA<VoucherRelationship>;
  };
  readonly toManyIndependent: { readonly projects: RA<Project> };
};
export type CollectionObjectAttachment = {
  readonly tableName: 'CollectionObjectAttachment';
  readonly fields: {
    readonly collectionMemberId: number;
    readonly ordinal: number;
    readonly remarks: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: { readonly attachment: Attachment };
  readonly toOneIndependent: {
    readonly collectionObject: CollectionObject;
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type CollectionObjectAttr = {
  readonly tableName: 'CollectionObjectAttr';
  readonly fields: {
    readonly collectionMemberId: number;
    readonly dblValue: number | null;
    readonly strValue: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly collectionObject: CollectionObject;
    readonly createdByAgent: Agent | null;
    readonly definition: AttributeDef;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type CollectionObjectAttribute = {
  readonly tableName: 'CollectionObjectAttribute';
  readonly fields: {
    readonly bottomDistance: number | null;
    readonly collectionMemberId: number;
    readonly date1: string | null;
    readonly date1Precision: number | null;
    readonly direction: string | null;
    readonly distanceUnits: string | null;
    readonly integer1: number | null;
    readonly integer10: number | null;
    readonly integer2: number | null;
    readonly integer3: number | null;
    readonly integer4: number | null;
    readonly integer5: number | null;
    readonly integer6: number | null;
    readonly integer7: number | null;
    readonly integer8: number | null;
    readonly integer9: number | null;
    readonly number1: number | null;
    readonly number10: number | null;
    readonly number11: number | null;
    readonly number12: number | null;
    readonly number13: number | null;
    readonly number14: number | null;
    readonly number15: number | null;
    readonly number16: number | null;
    readonly number17: number | null;
    readonly number18: number | null;
    readonly number19: number | null;
    readonly number2: number | null;
    readonly number20: number | null;
    readonly number21: number | null;
    readonly number22: number | null;
    readonly number23: number | null;
    readonly number24: number | null;
    readonly number25: number | null;
    readonly number26: number | null;
    readonly number27: number | null;
    readonly number28: number | null;
    readonly number29: number | null;
    readonly number3: number | null;
    readonly number30: number | null;
    readonly number31: number | null;
    readonly number32: number | null;
    readonly number33: number | null;
    readonly number34: number | null;
    readonly number35: number | null;
    readonly number36: number | null;
    readonly number37: number | null;
    readonly number38: number | null;
    readonly number39: number | null;
    readonly number4: number | null;
    readonly number40: number | null;
    readonly number41: number | null;
    readonly number42: number | null;
    readonly number5: number | null;
    readonly number6: number | null;
    readonly number7: number | null;
    readonly number8: number | null;
    readonly number9: number | null;
    readonly positionState: string | null;
    readonly remarks: string | null;
    readonly text1: string | null;
    readonly text10: string | null;
    readonly text11: string | null;
    readonly text12: string | null;
    readonly text13: string | null;
    readonly text14: string | null;
    readonly text15: string | null;
    readonly text16: string | null;
    readonly text17: string | null;
    readonly text18: string | null;
    readonly text19: string | null;
    readonly text2: string | null;
    readonly text20: string | null;
    readonly text21: string | null;
    readonly text22: string | null;
    readonly text23: string | null;
    readonly text24: string | null;
    readonly text25: string | null;
    readonly text26: string | null;
    readonly text27: string | null;
    readonly text28: string | null;
    readonly text29: string | null;
    readonly text3: string | null;
    readonly text30: string | null;
    readonly text4: string | null;
    readonly text5: string | null;
    readonly text6: string | null;
    readonly text7: string | null;
    readonly text8: string | null;
    readonly text9: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly topDistance: number | null;
    readonly version: number | null;
    readonly yesNo1: boolean | null;
    readonly yesNo10: boolean | null;
    readonly yesNo11: boolean | null;
    readonly yesNo12: boolean | null;
    readonly yesNo13: boolean | null;
    readonly yesNo14: boolean | null;
    readonly yesNo15: boolean | null;
    readonly yesNo16: boolean | null;
    readonly yesNo17: boolean | null;
    readonly yesNo18: boolean | null;
    readonly yesNo19: boolean | null;
    readonly yesNo2: boolean | null;
    readonly yesNo20: boolean | null;
    readonly yesNo3: boolean | null;
    readonly yesNo4: boolean | null;
    readonly yesNo5: boolean | null;
    readonly yesNo6: boolean | null;
    readonly yesNo7: boolean | null;
    readonly yesNo8: boolean | null;
    readonly yesNo9: boolean | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly agent1: Agent | null;
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: {
    readonly collectionObjects: RA<CollectionObject>;
  };
};
export type CollectionObjectCitation = {
  readonly tableName: 'CollectionObjectCitation';
  readonly fields: {
    readonly collectionMemberId: number;
    readonly figureNumber: string | null;
    readonly isFigured: boolean | null;
    readonly pageNumber: string | null;
    readonly plateNumber: string | null;
    readonly remarks: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly collectionObject: CollectionObject;
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
    readonly referenceWork: ReferenceWork;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type CollectionObjectProperty = {
  readonly tableName: 'CollectionObjectProperty';
  readonly fields: {
    readonly collectionMemberId: number;
    readonly date1: string | null;
    readonly date10: string | null;
    readonly date11: string | null;
    readonly date12: string | null;
    readonly date13: string | null;
    readonly date14: string | null;
    readonly date15: string | null;
    readonly date16: string | null;
    readonly date17: string | null;
    readonly date18: string | null;
    readonly date19: string | null;
    readonly date2: string | null;
    readonly date20: string | null;
    readonly date3: string | null;
    readonly date4: string | null;
    readonly date5: string | null;
    readonly date6: string | null;
    readonly date7: string | null;
    readonly date8: string | null;
    readonly date9: string | null;
    readonly guid: string | null;
    readonly integer1: number | null;
    readonly integer10: number | null;
    readonly integer11: number | null;
    readonly integer12: number | null;
    readonly integer13: number | null;
    readonly integer14: number | null;
    readonly integer15: number | null;
    readonly integer16: number | null;
    readonly integer17: number | null;
    readonly integer18: number | null;
    readonly integer19: number | null;
    readonly integer2: number | null;
    readonly integer20: number | null;
    readonly integer21: number | null;
    readonly integer22: number | null;
    readonly integer23: number | null;
    readonly integer24: number | null;
    readonly integer25: number | null;
    readonly integer26: number | null;
    readonly integer27: number | null;
    readonly integer28: number | null;
    readonly integer29: number | null;
    readonly integer3: number | null;
    readonly integer30: number | null;
    readonly integer4: number | null;
    readonly integer5: number | null;
    readonly integer6: number | null;
    readonly integer7: number | null;
    readonly integer8: number | null;
    readonly integer9: number | null;
    readonly number1: number | null;
    readonly number10: number | null;
    readonly number11: number | null;
    readonly number12: number | null;
    readonly number13: number | null;
    readonly number14: number | null;
    readonly number15: number | null;
    readonly number16: number | null;
    readonly number17: number | null;
    readonly number18: number | null;
    readonly number19: number | null;
    readonly number2: number | null;
    readonly number20: number | null;
    readonly number21: number | null;
    readonly number22: number | null;
    readonly number23: number | null;
    readonly number24: number | null;
    readonly number25: number | null;
    readonly number26: number | null;
    readonly number27: number | null;
    readonly number28: number | null;
    readonly number29: number | null;
    readonly number3: number | null;
    readonly number30: number | null;
    readonly number4: number | null;
    readonly number5: number | null;
    readonly number6: number | null;
    readonly number7: number | null;
    readonly number8: number | null;
    readonly number9: number | null;
    readonly remarks: string | null;
    readonly text1: string | null;
    readonly text10: string | null;
    readonly text11: string | null;
    readonly text12: string | null;
    readonly text13: string | null;
    readonly text14: string | null;
    readonly text15: string | null;
    readonly text16: string | null;
    readonly text17: string | null;
    readonly text18: string | null;
    readonly text19: string | null;
    readonly text2: string | null;
    readonly text20: string | null;
    readonly text21: string | null;
    readonly text22: string | null;
    readonly text23: string | null;
    readonly text24: string | null;
    readonly text25: string | null;
    readonly text26: string | null;
    readonly text27: string | null;
    readonly text28: string | null;
    readonly text29: string | null;
    readonly text3: string | null;
    readonly text30: string | null;
    readonly text31: string | null;
    readonly text32: string | null;
    readonly text33: string | null;
    readonly text34: string | null;
    readonly text35: string | null;
    readonly text36: string | null;
    readonly text37: string | null;
    readonly text38: string | null;
    readonly text39: string | null;
    readonly text4: string | null;
    readonly text40: string | null;
    readonly text5: string | null;
    readonly text6: string | null;
    readonly text7: string | null;
    readonly text8: string | null;
    readonly text9: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
    readonly yesNo1: boolean | null;
    readonly yesNo10: boolean | null;
    readonly yesNo11: boolean | null;
    readonly yesNo12: boolean | null;
    readonly yesNo13: boolean | null;
    readonly yesNo14: boolean | null;
    readonly yesNo15: boolean | null;
    readonly yesNo16: boolean | null;
    readonly yesNo17: boolean | null;
    readonly yesNo18: boolean | null;
    readonly yesNo19: boolean | null;
    readonly yesNo2: boolean | null;
    readonly yesNo20: boolean | null;
    readonly yesNo3: boolean | null;
    readonly yesNo4: boolean | null;
    readonly yesNo5: boolean | null;
    readonly yesNo6: boolean | null;
    readonly yesNo7: boolean | null;
    readonly yesNo8: boolean | null;
    readonly yesNo9: boolean | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly agent1: Agent | null;
    readonly agent10: Agent | null;
    readonly agent11: Agent | null;
    readonly agent12: Agent | null;
    readonly agent13: Agent | null;
    readonly agent14: Agent | null;
    readonly agent15: Agent | null;
    readonly agent16: Agent | null;
    readonly agent17: Agent | null;
    readonly agent18: Agent | null;
    readonly agent19: Agent | null;
    readonly agent2: Agent | null;
    readonly agent20: Agent | null;
    readonly agent3: Agent | null;
    readonly agent4: Agent | null;
    readonly agent5: Agent | null;
    readonly agent6: Agent | null;
    readonly agent7: Agent | null;
    readonly agent8: Agent | null;
    readonly agent9: Agent | null;
    readonly collectionObject: CollectionObject;
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type CollectionRelType = {
  readonly tableName: 'CollectionRelType';
  readonly fields: {
    readonly name: string | null;
    readonly remarks: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly leftSideCollection: Collection | null;
    readonly modifiedByAgent: Agent | null;
    readonly rightSideCollection: Collection | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type CollectionRelationship = {
  readonly tableName: 'CollectionRelationship';
  readonly fields: {
    readonly text1: string | null;
    readonly text2: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly collectionRelType: CollectionRelType | null;
    readonly createdByAgent: Agent | null;
    readonly leftSide: CollectionObject;
    readonly modifiedByAgent: Agent | null;
    readonly rightSide: CollectionObject;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type Collector = {
  readonly tableName: 'Collector';
  readonly fields: {
    readonly isPrimary: boolean;
    readonly orderNumber: number;
    readonly remarks: string | null;
    readonly text1: string | null;
    readonly text2: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
    readonly yesNo1: boolean | null;
    readonly yesNo2: boolean | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly agent: Agent;
    readonly collectingEvent: CollectingEvent;
    readonly createdByAgent: Agent | null;
    readonly division: Division | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type CommonNameTx = {
  readonly tableName: 'CommonNameTx';
  readonly fields: {
    readonly author: string | null;
    readonly country: string | null;
    readonly language: string | null;
    readonly name: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly variant: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
    readonly taxon: Taxon;
  };
  readonly toManyDependent: { readonly citations: RA<CommonNameTxCitation> };
  readonly toManyIndependent: RR<never, never>;
};
export type CommonNameTxCitation = {
  readonly tableName: 'CommonNameTxCitation';
  readonly fields: {
    readonly figureNumber: string | null;
    readonly isFigured: boolean | null;
    readonly number1: number | null;
    readonly number2: number | null;
    readonly pageNumber: string | null;
    readonly plateNumber: string | null;
    readonly remarks: string | null;
    readonly text1: string | null;
    readonly text2: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
    readonly yesNo1: boolean | null;
    readonly yesNo2: boolean | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly commonNameTx: CommonNameTx;
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
    readonly referenceWork: ReferenceWork;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type ConservDescription = {
  readonly tableName: 'ConservDescription';
  readonly fields: {
    readonly backgroundInfo: string | null;
    readonly composition: string | null;
    readonly description: string | null;
    readonly determinedDate: string | null;
    readonly displayRecommendations: string | null;
    readonly height: number | null;
    readonly lightRecommendations: string | null;
    readonly objLength: number | null;
    readonly otherRecommendations: string | null;
    readonly remarks: string | null;
    readonly shortDesc: string | null;
    readonly source: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly units: string | null;
    readonly version: number | null;
    readonly width: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly collectionObject: CollectionObject | null;
    readonly createdByAgent: Agent | null;
    readonly division: Division | null;
    readonly modifiedByAgent: Agent | null;
    readonly preparation: Preparation | null;
  };
  readonly toManyDependent: {
    readonly conservDescriptionAttachments: RA<ConservDescriptionAttachment>;
    readonly events: RA<ConservEvent>;
  };
  readonly toManyIndependent: RR<never, never>;
};
export type ConservDescriptionAttachment = {
  readonly tableName: 'ConservDescriptionAttachment';
  readonly fields: {
    readonly ordinal: number;
    readonly remarks: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: { readonly attachment: Attachment };
  readonly toOneIndependent: {
    readonly conservDescription: ConservDescription;
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type ConservEvent = {
  readonly tableName: 'ConservEvent';
  readonly fields: {
    readonly advTestingExam: string | null;
    readonly advTestingExamResults: string | null;
    readonly completedComments: string | null;
    readonly completedDate: string | null;
    readonly completedDatePrecision: number | null;
    readonly conditionReport: string | null;
    readonly curatorApprovalDate: string | null;
    readonly curatorApprovalDatePrecision: number | null;
    readonly examDate: string | null;
    readonly examDatePrecision: number | null;
    readonly number1: number | null;
    readonly number2: number | null;
    readonly photoDocs: string | null;
    readonly remarks: string | null;
    readonly text1: string | null;
    readonly text2: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly treatmentCompDate: string | null;
    readonly treatmentCompDatePrecision: number | null;
    readonly treatmentReport: string | null;
    readonly version: number | null;
    readonly yesNo1: boolean | null;
    readonly yesNo2: boolean | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly conservDescription: ConservDescription;
    readonly createdByAgent: Agent | null;
    readonly curator: Agent | null;
    readonly examinedByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
    readonly treatedByAgent: Agent | null;
  };
  readonly toManyDependent: {
    readonly conservEventAttachments: RA<ConservEventAttachment>;
  };
  readonly toManyIndependent: RR<never, never>;
};
export type ConservEventAttachment = {
  readonly tableName: 'ConservEventAttachment';
  readonly fields: {
    readonly ordinal: number;
    readonly remarks: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: { readonly attachment: Attachment };
  readonly toOneIndependent: {
    readonly conservEvent: ConservEvent;
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type Container = {
  readonly tableName: 'Container';
  readonly fields: {
    readonly collectionMemberId: number;
    readonly description: string | null;
    readonly name: string | null;
    readonly number: number | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly type: number | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
    readonly parent: Container | null;
    readonly storage: Storage | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: {
    readonly children: RA<Container>;
    readonly collectionObjectKids: RA<CollectionObject>;
    readonly collectionObjects: RA<CollectionObject>;
  };
};
export type DNAPrimer = {
  readonly tableName: 'DNAPrimer';
  readonly fields: {
    readonly integer1: number | null;
    readonly integer2: number | null;
    readonly number1: number | null;
    readonly number2: number | null;
    readonly primerDesignator: string | null;
    readonly primerNameForward: string | null;
    readonly primerNameReverse: string | null;
    readonly primerReferenceCitationForward: string | null;
    readonly primerReferenceCitationReverse: string | null;
    readonly primerReferenceLinkForward: string | null;
    readonly primerReferenceLinkReverse: string | null;
    readonly primerSequenceForward: string | null;
    readonly primerSequenceReverse: string | null;
    readonly purificationMethod: string | null;
    readonly remarks: string | null;
    readonly reservedInteger3: number | null;
    readonly reservedInteger4: number | null;
    readonly reservedNumber3: number | null;
    readonly reservedNumber4: number | null;
    readonly reservedText3: string | null;
    readonly reservedText4: string | null;
    readonly text1: string | null;
    readonly text2: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
    readonly yesNo1: boolean | null;
    readonly yesNo2: boolean | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: {
    readonly dnaSequencingRuns: RA<DNASequencingRun>;
  };
};
export type DNASequence = {
  readonly tableName: 'DNASequence';
  readonly fields: {
    readonly ambiguousResidues: number | null;
    readonly boldBarcodeId: string | null;
    readonly boldLastUpdateDate: string | null;
    readonly boldSampleId: string | null;
    readonly boldTranslationMatrix: string | null;
    readonly collectionMemberId: number;
    readonly compA: number | null;
    readonly compC: number | null;
    readonly compG: number | null;
    readonly compT: number | null;
    readonly extractionDate: string | null;
    readonly extractionDatePrecision: number | null;
    readonly genbankAccessionNumber: string | null;
    readonly geneSequence: string | null;
    readonly moleculeType: string | null;
    readonly number1: number | null;
    readonly number2: number | null;
    readonly number3: number | null;
    readonly remarks: string | null;
    readonly sequenceDate: string | null;
    readonly sequenceDatePrecision: number | null;
    readonly targetMarker: string | null;
    readonly text1: string | null;
    readonly text2: string | null;
    readonly text3: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly totalResidues: number | null;
    readonly version: number | null;
    readonly yesNo1: boolean | null;
    readonly yesNo2: boolean | null;
    readonly yesNo3: boolean | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly collectionObject: CollectionObject | null;
    readonly createdByAgent: Agent | null;
    readonly extractor: Agent | null;
    readonly materialSample: MaterialSample | null;
    readonly modifiedByAgent: Agent | null;
    readonly sequencer: Agent | null;
  };
  readonly toManyDependent: {
    readonly attachments: RA<DNASequenceAttachment>;
    readonly dnaSequencingRuns: RA<DNASequencingRun>;
  };
  readonly toManyIndependent: {
    readonly extractors: RA<Extractor>;
    readonly pcrPersons: RA<PcrPerson>;
  };
};
export type DNASequenceAttachment = {
  readonly tableName: 'DNASequenceAttachment';
  readonly fields: {
    readonly ordinal: number;
    readonly remarks: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: { readonly attachment: Attachment };
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly dnaSequence: DNASequence;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type DNASequencingRun = {
  readonly tableName: 'DNASequencingRun';
  readonly fields: {
    readonly collectionMemberId: number;
    readonly dryadDOI: string | null;
    readonly geneSequence: string | null;
    readonly number1: number | null;
    readonly number2: number | null;
    readonly number3: number | null;
    readonly ordinal: number | null;
    readonly pcrCocktailPrimer: boolean | null;
    readonly pcrForwardPrimerCode: string | null;
    readonly pcrPrimerName: string | null;
    readonly pcrPrimerSequence5_3: string | null;
    readonly pcrReversePrimerCode: string | null;
    readonly readDirection: string | null;
    readonly remarks: string | null;
    readonly runDate: string | null;
    readonly scoreFileName: string | null;
    readonly sequenceCocktailPrimer: boolean | null;
    readonly sequencePrimerCode: string | null;
    readonly sequencePrimerName: string | null;
    readonly sequencePrimerSequence5_3: string | null;
    readonly sraExperimentID: string | null;
    readonly sraRunID: string | null;
    readonly sraSubmissionID: string | null;
    readonly text1: string | null;
    readonly text2: string | null;
    readonly text3: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly traceFileName: string | null;
    readonly version: number | null;
    readonly yesNo1: boolean | null;
    readonly yesNo2: boolean | null;
    readonly yesNo3: boolean | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly dnaPrimer: DNAPrimer | null;
    readonly dnaSequence: DNASequence;
    readonly modifiedByAgent: Agent | null;
    readonly preparedByAgent: Agent | null;
    readonly runByAgent: Agent | null;
  };
  readonly toManyDependent: {
    readonly attachments: RA<DNASequencingRunAttachment>;
    readonly citations: RA<DNASequencingRunCitation>;
  };
  readonly toManyIndependent: RR<never, never>;
};
export type DNASequencingRunAttachment = {
  readonly tableName: 'DNASequencingRunAttachment';
  readonly fields: {
    readonly ordinal: number;
    readonly remarks: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: { readonly attachment: Attachment };
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly dnaSequencingRun: DNASequencingRun;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type DNASequencingRunCitation = {
  readonly tableName: 'DNASequencingRunCitation';
  readonly fields: {
    readonly figureNumber: string | null;
    readonly isFigured: boolean | null;
    readonly number1: number | null;
    readonly number2: number | null;
    readonly pageNumber: string | null;
    readonly plateNumber: string | null;
    readonly remarks: string | null;
    readonly text1: string | null;
    readonly text2: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
    readonly yesNo1: boolean | null;
    readonly yesNo2: boolean | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
    readonly referenceWork: ReferenceWork;
    readonly sequencingRun: DNASequencingRun;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type DataType = {
  readonly tableName: 'DataType';
  readonly fields: {
    readonly name: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type Deaccession = {
  readonly tableName: 'Deaccession';
  readonly fields: {
    readonly date1: string | null;
    readonly date2: string | null;
    readonly deaccessionDate: string | null;
    readonly deaccessionNumber: string;
    readonly integer1: number | null;
    readonly integer2: number | null;
    readonly integer3: number | null;
    readonly integer4: number | null;
    readonly integer5: number | null;
    readonly number1: number | null;
    readonly number2: number | null;
    readonly number3: number | null;
    readonly number4: number | null;
    readonly number5: number | null;
    readonly remarks: string | null;
    readonly status: string | null;
    readonly text1: string | null;
    readonly text2: string | null;
    readonly text3: string | null;
    readonly text4: string | null;
    readonly text5: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly type: string | null;
    readonly version: number | null;
    readonly yesNo1: boolean | null;
    readonly yesNo2: boolean | null;
    readonly yesNo3: boolean | null;
    readonly yesNo4: boolean | null;
    readonly yesNo5: boolean | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly agent1: Agent | null;
    readonly agent2: Agent | null;
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: {
    readonly deaccessionAgents: RA<DeaccessionAgent>;
    readonly deaccessionAttachments: RA<DeaccessionAttachment>;
  };
  readonly toManyIndependent: {
    readonly disposals: RA<Disposal>;
    readonly exchangeOuts: RA<ExchangeOut>;
    readonly gifts: RA<Gift>;
  };
};
export type DeaccessionAgent = {
  readonly tableName: 'DeaccessionAgent';
  readonly fields: {
    readonly remarks: string | null;
    readonly role: string;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly agent: Agent;
    readonly createdByAgent: Agent | null;
    readonly deaccession: Deaccession;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type DeaccessionAttachment = {
  readonly tableName: 'DeaccessionAttachment';
  readonly fields: {
    readonly ordinal: number;
    readonly remarks: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: { readonly attachment: Attachment };
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly deaccession: Deaccession;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type Determination = {
  readonly tableName: 'Determination';
  readonly fields: {
    readonly addendum: string | null;
    readonly alternateName: string | null;
    readonly collectionMemberId: number;
    readonly confidence: string | null;
    readonly determinedDate: string | null;
    readonly determinedDatePrecision: number | null;
    readonly featureOrBasis: string | null;
    readonly guid: string | null;
    readonly integer1: number | null;
    readonly integer2: number | null;
    readonly integer3: number | null;
    readonly integer4: number | null;
    readonly integer5: number | null;
    readonly isCurrent: boolean;
    readonly method: string | null;
    readonly nameUsage: string | null;
    readonly number1: number | null;
    readonly number2: number | null;
    readonly number3: number | null;
    readonly number4: number | null;
    readonly number5: number | null;
    readonly qualifier: string | null;
    readonly remarks: string | null;
    readonly subSpQualifier: string | null;
    readonly text1: string | null;
    readonly text2: string | null;
    readonly text3: string | null;
    readonly text4: string | null;
    readonly text5: string | null;
    readonly text6: string | null;
    readonly text7: string | null;
    readonly text8: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly typeStatusName: string | null;
    readonly varQualifier: string | null;
    readonly version: number | null;
    readonly yesNo1: boolean | null;
    readonly yesNo2: boolean | null;
    readonly yesNo3: boolean | null;
    readonly yesNo4: boolean | null;
    readonly yesNo5: boolean | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly collectionObject: CollectionObject;
    readonly createdByAgent: Agent | null;
    readonly determiner: Agent | null;
    readonly modifiedByAgent: Agent | null;
    readonly preferredTaxon: Taxon | null;
    readonly taxon: Taxon | null;
  };
  readonly toManyDependent: {
    readonly determinationCitations: RA<DeterminationCitation>;
  };
  readonly toManyIndependent: RR<never, never>;
};
export type DeterminationCitation = {
  readonly tableName: 'DeterminationCitation';
  readonly fields: {
    readonly collectionMemberId: number;
    readonly figureNumber: string | null;
    readonly isFigured: boolean | null;
    readonly pageNumber: string | null;
    readonly plateNumber: string | null;
    readonly remarks: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly determination: Determination;
    readonly modifiedByAgent: Agent | null;
    readonly referenceWork: ReferenceWork;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type Discipline = {
  readonly tableName: 'Discipline';
  readonly fields: {
    readonly isPaleoContextEmbedded: boolean;
    readonly name: string | null;
    readonly paleoContextChildTable: string | null;
    readonly regNumber: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly type: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly dataType: DataType;
    readonly division: Division;
    readonly geographyTreeDef: GeographyTreeDef;
    readonly geologicTimePeriodTreeDef: GeologicTimePeriodTreeDef;
    readonly lithoStratTreeDef: LithoStratTreeDef | null;
    readonly modifiedByAgent: Agent | null;
    readonly taxonTreeDef: TaxonTreeDef | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: {
    readonly attributeDefs: RA<AttributeDef>;
    readonly collections: RA<Collection>;
    readonly numberingSchemes: RA<AutoNumberingScheme>;
    readonly spExportSchemas: RA<SpExportSchema>;
    readonly spLocaleContainers: RA<SpLocaleContainer>;
    readonly userGroups: RA<SpPrincipal>;
  };
};
export type Disposal = {
  readonly tableName: 'Disposal';
  readonly fields: {
    readonly disposalDate: string | null;
    readonly disposalNumber: string;
    readonly doNotExport: boolean | null;
    readonly number1: number | null;
    readonly number2: number | null;
    readonly remarks: string | null;
    readonly text1: string | null;
    readonly text2: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly type: string | null;
    readonly version: number | null;
    readonly yesNo1: boolean | null;
    readonly yesNo2: boolean | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly deaccession: Deaccession | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: {
    readonly disposalAgents: RA<DisposalAgent>;
    readonly disposalAttachments: RA<DisposalAttachment>;
    readonly disposalPreparations: RA<DisposalPreparation>;
  };
  readonly toManyIndependent: RR<never, never>;
};
export type DisposalAgent = {
  readonly tableName: 'DisposalAgent';
  readonly fields: {
    readonly remarks: string | null;
    readonly role: string;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly agent: Agent;
    readonly createdByAgent: Agent | null;
    readonly disposal: Disposal;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type DisposalAttachment = {
  readonly tableName: 'DisposalAttachment';
  readonly fields: {
    readonly ordinal: number;
    readonly remarks: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: { readonly attachment: Attachment };
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly disposal: Disposal;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type DisposalPreparation = {
  readonly tableName: 'DisposalPreparation';
  readonly fields: {
    readonly quantity: number | null;
    readonly remarks: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly disposal: Disposal;
    readonly loanReturnPreparation: LoanReturnPreparation | null;
    readonly modifiedByAgent: Agent | null;
    readonly preparation: Preparation | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type Division = {
  readonly tableName: 'Division';
  readonly fields: {
    readonly abbrev: string | null;
    readonly altName: string | null;
    readonly description: string | null;
    readonly discipline: string | null;
    readonly iconURI: string | null;
    readonly name: string | null;
    readonly regNumber: string | null;
    readonly remarks: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly uri: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly address: Address | null;
    readonly createdByAgent: Agent | null;
    readonly institution: Institution;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: {
    readonly disciplines: RA<Discipline>;
    readonly members: RA<Agent>;
    readonly numberingSchemes: RA<AutoNumberingScheme>;
    readonly userGroups: RA<SpPrincipal>;
  };
};
export type ExchangeIn = {
  readonly tableName: 'ExchangeIn';
  readonly fields: {
    readonly contents: string | null;
    readonly descriptionOfMaterial: string | null;
    readonly exchangeDate: string | null;
    readonly exchangeInNumber: string | null;
    readonly number1: number | null;
    readonly number2: number | null;
    readonly quantityExchanged: number | null;
    readonly remarks: string | null;
    readonly srcGeography: string | null;
    readonly srcTaxonomy: string | null;
    readonly text1: string | null;
    readonly text2: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
    readonly yesNo1: boolean | null;
    readonly yesNo2: boolean | null;
  };
  readonly toOneDependent: { readonly addressOfRecord: AddressOfRecord | null };
  readonly toOneIndependent: {
    readonly agentCatalogedBy: Agent;
    readonly agentReceivedFrom: Agent;
    readonly createdByAgent: Agent | null;
    readonly division: Division;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: { readonly exchangeInPreps: RA<ExchangeInPrep> };
  readonly toManyIndependent: RR<never, never>;
};
export type ExchangeInPrep = {
  readonly tableName: 'ExchangeInPrep';
  readonly fields: {
    readonly comments: string | null;
    readonly descriptionOfMaterial: string | null;
    readonly number1: number | null;
    readonly quantity: number | null;
    readonly text1: string | null;
    readonly text2: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly discipline: Discipline;
    readonly exchangeIn: ExchangeIn | null;
    readonly modifiedByAgent: Agent | null;
    readonly preparation: Preparation | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type ExchangeOut = {
  readonly tableName: 'ExchangeOut';
  readonly fields: {
    readonly contents: string | null;
    readonly descriptionOfMaterial: string | null;
    readonly exchangeDate: string | null;
    readonly exchangeOutNumber: string;
    readonly number1: number | null;
    readonly number2: number | null;
    readonly quantityExchanged: number | null;
    readonly remarks: string | null;
    readonly srcGeography: string | null;
    readonly srcTaxonomy: string | null;
    readonly text1: string | null;
    readonly text2: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
    readonly yesNo1: boolean | null;
    readonly yesNo2: boolean | null;
  };
  readonly toOneDependent: { readonly addressOfRecord: AddressOfRecord | null };
  readonly toOneIndependent: {
    readonly agentCatalogedBy: Agent;
    readonly agentSentTo: Agent;
    readonly createdByAgent: Agent | null;
    readonly deaccession: Deaccession | null;
    readonly division: Division;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: { readonly exchangeOutPreps: RA<ExchangeOutPrep> };
  readonly toManyIndependent: { readonly shipments: RA<Shipment> };
};
export type ExchangeOutPrep = {
  readonly tableName: 'ExchangeOutPrep';
  readonly fields: {
    readonly comments: string | null;
    readonly descriptionOfMaterial: string | null;
    readonly number1: number | null;
    readonly quantity: number | null;
    readonly text1: string | null;
    readonly text2: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly discipline: Discipline;
    readonly exchangeOut: ExchangeOut | null;
    readonly modifiedByAgent: Agent | null;
    readonly preparation: Preparation | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type Exsiccata = {
  readonly tableName: 'Exsiccata';
  readonly fields: {
    readonly remarks: string | null;
    readonly schedae: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly title: string;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
    readonly referenceWork: ReferenceWork;
  };
  readonly toManyDependent: { readonly exsiccataItems: RA<ExsiccataItem> };
  readonly toManyIndependent: RR<never, never>;
};
export type ExsiccataItem = {
  readonly tableName: 'ExsiccataItem';
  readonly fields: {
    readonly fascicle: string | null;
    readonly number: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly collectionObject: CollectionObject;
    readonly createdByAgent: Agent | null;
    readonly exsiccata: Exsiccata;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type Extractor = {
  readonly tableName: 'Extractor';
  readonly fields: {
    readonly orderNumber: number;
    readonly remarks: string | null;
    readonly text1: string | null;
    readonly text2: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
    readonly yesNo1: boolean | null;
    readonly yesNo2: boolean | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly agent: Agent;
    readonly createdByAgent: Agent | null;
    readonly dnaSequence: DNASequence;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type FieldNotebook = {
  readonly tableName: 'FieldNotebook';
  readonly fields: {
    readonly description: string | null;
    readonly endDate: string | null;
    readonly location: string | null;
    readonly name: string | null;
    readonly startDate: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly collection: Collection;
    readonly createdByAgent: Agent | null;
    readonly discipline: Discipline;
    readonly modifiedByAgent: Agent | null;
    readonly ownerAgent: Agent;
  };
  readonly toManyDependent: {
    readonly attachments: RA<FieldNotebookAttachment>;
    readonly pageSets: RA<FieldNotebookPageSet>;
  };
  readonly toManyIndependent: RR<never, never>;
};
export type FieldNotebookAttachment = {
  readonly tableName: 'FieldNotebookAttachment';
  readonly fields: {
    readonly ordinal: number;
    readonly remarks: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: { readonly attachment: Attachment };
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly fieldNotebook: FieldNotebook;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type FieldNotebookPage = {
  readonly tableName: 'FieldNotebookPage';
  readonly fields: {
    readonly description: string | null;
    readonly pageNumber: string;
    readonly scanDate: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly discipline: Discipline;
    readonly modifiedByAgent: Agent | null;
    readonly pageSet: FieldNotebookPageSet | null;
  };
  readonly toManyDependent: {
    readonly attachments: RA<FieldNotebookPageAttachment>;
  };
  readonly toManyIndependent: {
    readonly collectionObjects: RA<CollectionObject>;
  };
};
export type FieldNotebookPageAttachment = {
  readonly tableName: 'FieldNotebookPageAttachment';
  readonly fields: {
    readonly ordinal: number;
    readonly remarks: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: { readonly attachment: Attachment };
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly fieldNotebookPage: FieldNotebookPage;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type FieldNotebookPageSet = {
  readonly tableName: 'FieldNotebookPageSet';
  readonly fields: {
    readonly description: string | null;
    readonly endDate: string | null;
    readonly method: string | null;
    readonly orderNumber: number | null;
    readonly startDate: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly discipline: Discipline;
    readonly fieldNotebook: FieldNotebook | null;
    readonly modifiedByAgent: Agent | null;
    readonly sourceAgent: Agent | null;
  };
  readonly toManyDependent: {
    readonly attachments: RA<FieldNotebookPageSetAttachment>;
    readonly pages: RA<FieldNotebookPage>;
  };
  readonly toManyIndependent: RR<never, never>;
};
export type FieldNotebookPageSetAttachment = {
  readonly tableName: 'FieldNotebookPageSetAttachment';
  readonly fields: {
    readonly ordinal: number;
    readonly remarks: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: { readonly attachment: Attachment };
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly fieldNotebookPageSet: FieldNotebookPageSet;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type FundingAgent = {
  readonly tableName: 'FundingAgent';
  readonly fields: {
    readonly isPrimary: boolean;
    readonly orderNumber: number;
    readonly remarks: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly type: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly agent: Agent;
    readonly collectingTrip: CollectingTrip;
    readonly createdByAgent: Agent | null;
    readonly division: Division | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type GeoCoordDetail = {
  readonly tableName: 'GeoCoordDetail';
  readonly fields: {
    readonly errorPolygon: string | null;
    readonly geoRefAccuracy: number | null;
    readonly geoRefAccuracyUnits: string | null;
    readonly geoRefCompiledDate: string | null;
    readonly geoRefDetDate: string | null;
    readonly geoRefDetRef: string | null;
    readonly geoRefRemarks: string | null;
    readonly geoRefVerificationStatus: string | null;
    readonly maxUncertaintyEst: number | null;
    readonly maxUncertaintyEstUnit: string | null;
    readonly namedPlaceExtent: number | null;
    readonly noGeoRefBecause: string | null;
    readonly originalCoordSystem: string | null;
    readonly protocol: string | null;
    readonly source: string | null;
    readonly text1: string | null;
    readonly text2: string | null;
    readonly text3: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly uncertaintyPolygon: string | null;
    readonly validation: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly geoRefCompiledBy: Agent | null;
    readonly geoRefDetBy: Agent | null;
    readonly locality: Locality | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type Geography = {
  readonly tableName: 'Geography';
  readonly fields: {
    readonly abbrev: string | null;
    readonly centroidLat: number | null;
    readonly centroidLon: number | null;
    readonly commonName: string | null;
    readonly fullName: string | null;
    readonly geographyCode: string | null;
    readonly gml: string | null;
    readonly guid: string | null;
    readonly highestChildNodeNumber: number | null;
    readonly isAccepted: boolean;
    readonly isCurrent: boolean | null;
    readonly name: string;
    readonly nodeNumber: number | null;
    readonly number1: number | null;
    readonly number2: number | null;
    readonly rankId: number;
    readonly remarks: string | null;
    readonly text1: string | null;
    readonly text2: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly timestampVersion: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly acceptedGeography: Geography | null;
    readonly createdByAgent: Agent | null;
    readonly definition: GeographyTreeDef;
    readonly definitionItem: GeographyTreeDefItem;
    readonly modifiedByAgent: Agent | null;
    readonly parent: Geography;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: {
    readonly acceptedChildren: RA<Geography>;
    readonly children: RA<Geography>;
    readonly localities: RA<Locality>;
  };
};
export type GeographyTreeDef = {
  readonly tableName: 'GeographyTreeDef';
  readonly fields: {
    readonly fullNameDirection: number | null;
    readonly name: string;
    readonly remarks: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: {
    readonly disciplines: RA<Discipline>;
    readonly treeDefItems: RA<GeographyTreeDefItem>;
    readonly treeEntries: RA<Geography>;
  };
};
export type GeographyTreeDefItem = {
  readonly tableName: 'GeographyTreeDefItem';
  readonly fields: {
    readonly fullNameSeparator: string | null;
    readonly isEnforced: boolean | null;
    readonly isInFullName: boolean | null;
    readonly name: string;
    readonly rankId: number;
    readonly remarks: string | null;
    readonly textAfter: string | null;
    readonly textBefore: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly title: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
    readonly parent: GeographyTreeDefItem | null;
    readonly treeDef: GeographyTreeDef;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: {
    readonly children: RA<GeographyTreeDefItem>;
    readonly treeEntries: RA<Geography>;
  };
};
export type GeologicTimePeriod = {
  readonly tableName: 'GeologicTimePeriod';
  readonly fields: {
    readonly endPeriod: number | null;
    readonly endUncertainty: number | null;
    readonly fullName: string | null;
    readonly guid: string | null;
    readonly highestChildNodeNumber: number | null;
    readonly isAccepted: boolean;
    readonly isBioStrat: boolean | null;
    readonly name: string;
    readonly nodeNumber: number | null;
    readonly rankId: number;
    readonly remarks: string | null;
    readonly standard: string | null;
    readonly startPeriod: number | null;
    readonly startUncertainty: number | null;
    readonly text1: string | null;
    readonly text2: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly acceptedGeologicTimePeriod: GeologicTimePeriod | null;
    readonly createdByAgent: Agent | null;
    readonly definition: GeologicTimePeriodTreeDef;
    readonly definitionItem: GeologicTimePeriodTreeDefItem;
    readonly modifiedByAgent: Agent | null;
    readonly parent: GeologicTimePeriod;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: {
    readonly acceptedChildren: RA<GeologicTimePeriod>;
    readonly bioStratsPaleoContext: RA<PaleoContext>;
    readonly children: RA<GeologicTimePeriod>;
    readonly chronosStratsPaleoContext: RA<PaleoContext>;
  };
};
export type GeologicTimePeriodTreeDef = {
  readonly tableName: 'GeologicTimePeriodTreeDef';
  readonly fields: {
    readonly fullNameDirection: number | null;
    readonly name: string;
    readonly remarks: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: {
    readonly disciplines: RA<Discipline>;
    readonly treeDefItems: RA<GeologicTimePeriodTreeDefItem>;
    readonly treeEntries: RA<GeologicTimePeriod>;
  };
};
export type GeologicTimePeriodTreeDefItem = {
  readonly tableName: 'GeologicTimePeriodTreeDefItem';
  readonly fields: {
    readonly fullNameSeparator: string | null;
    readonly isEnforced: boolean | null;
    readonly isInFullName: boolean | null;
    readonly name: string;
    readonly rankId: number;
    readonly remarks: string | null;
    readonly textAfter: string | null;
    readonly textBefore: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly title: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
    readonly parent: GeologicTimePeriodTreeDefItem | null;
    readonly treeDef: GeologicTimePeriodTreeDef;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: {
    readonly children: RA<GeologicTimePeriodTreeDefItem>;
    readonly treeEntries: RA<GeologicTimePeriod>;
  };
};
export type Gift = {
  readonly tableName: 'Gift';
  readonly fields: {
    readonly contents: string | null;
    readonly date1: string | null;
    readonly date1Precision: number | null;
    readonly dateReceived: string | null;
    readonly giftDate: string | null;
    readonly giftNumber: string;
    readonly integer1: number | null;
    readonly integer2: number | null;
    readonly integer3: number | null;
    readonly isFinancialResponsibility: boolean | null;
    readonly number1: number | null;
    readonly number2: number | null;
    readonly purposeOfGift: string | null;
    readonly receivedComments: string | null;
    readonly remarks: string | null;
    readonly specialConditions: string | null;
    readonly srcGeography: string | null;
    readonly srcTaxonomy: string | null;
    readonly status: string | null;
    readonly text1: string | null;
    readonly text2: string | null;
    readonly text3: string | null;
    readonly text4: string | null;
    readonly text5: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
    readonly yesNo1: boolean | null;
    readonly yesNo2: boolean | null;
  };
  readonly toOneDependent: { readonly addressOfRecord: AddressOfRecord | null };
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly deaccession: Deaccession | null;
    readonly discipline: Discipline;
    readonly division: Division | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: {
    readonly giftAgents: RA<GiftAgent>;
    readonly giftAttachments: RA<GiftAttachment>;
    readonly giftPreparations: RA<GiftPreparation>;
    readonly shipments: RA<Shipment>;
  };
  readonly toManyIndependent: RR<never, never>;
};
export type GiftAgent = {
  readonly tableName: 'GiftAgent';
  readonly fields: {
    readonly date1: string | null;
    readonly remarks: string | null;
    readonly role: string;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly agent: Agent;
    readonly createdByAgent: Agent | null;
    readonly discipline: Discipline;
    readonly gift: Gift;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type GiftAttachment = {
  readonly tableName: 'GiftAttachment';
  readonly fields: {
    readonly ordinal: number;
    readonly remarks: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: { readonly attachment: Attachment };
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly gift: Gift;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type GiftPreparation = {
  readonly tableName: 'GiftPreparation';
  readonly fields: {
    readonly descriptionOfMaterial: string | null;
    readonly inComments: string | null;
    readonly outComments: string | null;
    readonly quantity: number | null;
    readonly receivedComments: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly discipline: Discipline;
    readonly gift: Gift | null;
    readonly modifiedByAgent: Agent | null;
    readonly preparation: Preparation | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type GroupPerson = {
  readonly tableName: 'GroupPerson';
  readonly fields: {
    readonly orderNumber: number;
    readonly remarks: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly division: Division;
    readonly group: Agent;
    readonly member: Agent;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type InfoRequest = {
  readonly tableName: 'InfoRequest';
  readonly fields: {
    readonly collectionMemberId: number;
    readonly email: string | null;
    readonly firstName: string | null;
    readonly infoReqNumber: string | null;
    readonly institution: string | null;
    readonly lastName: string | null;
    readonly remarks: string | null;
    readonly replyDate: string | null;
    readonly requestDate: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly agent: Agent | null;
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: { readonly recordSets: RA<RecordSet> };
};
export type Institution = {
  readonly tableName: 'Institution';
  readonly fields: {
    readonly altName: string | null;
    readonly code: string | null;
    readonly copyright: string | null;
    readonly currentManagedRelVersion: string | null;
    readonly currentManagedSchemaVersion: string | null;
    readonly description: string | null;
    readonly disclaimer: string | null;
    readonly guid: string | null;
    readonly hasBeenAsked: boolean | null;
    readonly iconURI: string | null;
    readonly ipr: string | null;
    readonly isAccessionsGlobal: boolean;
    readonly isAnonymous: boolean | null;
    readonly isReleaseManagedGlobally: boolean | null;
    readonly isSecurityOn: boolean;
    readonly isServerBased: boolean;
    readonly isSharingLocalities: boolean;
    readonly isSingleGeographyTree: boolean;
    readonly license: string | null;
    readonly lsidAuthority: string | null;
    readonly minimumPwdLength: number | null;
    readonly name: string | null;
    readonly regNumber: string | null;
    readonly remarks: string | null;
    readonly termsOfUse: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly uri: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly address: Address | null;
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
    readonly storageTreeDef: StorageTreeDef | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: {
    readonly contentContacts: RA<Agent>;
    readonly divisions: RA<Division>;
    readonly technicalContacts: RA<Agent>;
    readonly userGroups: RA<SpPrincipal>;
  };
};
export type InstitutionNetwork = {
  readonly tableName: 'InstitutionNetwork';
  readonly fields: {
    readonly altName: string | null;
    readonly code: string | null;
    readonly copyright: string | null;
    readonly description: string | null;
    readonly disclaimer: string | null;
    readonly iconURI: string | null;
    readonly ipr: string | null;
    readonly license: string | null;
    readonly name: string | null;
    readonly remarks: string | null;
    readonly termsOfUse: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly uri: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly address: Address | null;
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: {
    readonly collections: RA<Collection>;
    readonly contacts: RA<Agent>;
  };
};
export type Journal = {
  readonly tableName: 'Journal';
  readonly fields: {
    readonly guid: string | null;
    readonly issn: string | null;
    readonly journalAbbreviation: string | null;
    readonly journalName: string | null;
    readonly remarks: string | null;
    readonly text1: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly institution: Institution;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: { readonly referenceWorks: RA<ReferenceWork> };
};
export type LatLonPolygon = {
  readonly tableName: 'LatLonPolygon';
  readonly fields: {
    readonly description: string | null;
    readonly isPolyline: boolean;
    readonly name: string;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly locality: Locality | null;
    readonly modifiedByAgent: Agent | null;
    readonly visualQuery: SpVisualQuery | null;
  };
  readonly toManyDependent: { readonly points: RA<LatLonPolygonPnt> };
  readonly toManyIndependent: RR<never, never>;
};
export type LatLonPolygonPnt = {
  readonly tableName: 'LatLonPolygonPnt';
  readonly fields: {
    readonly elevation: number | null;
    readonly latitude: number;
    readonly longitude: number;
    readonly ordinal: number;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: { readonly latLonPolygon: LatLonPolygon };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type LithoStrat = {
  readonly tableName: 'LithoStrat';
  readonly fields: {
    readonly fullName: string | null;
    readonly guid: string | null;
    readonly highestChildNodeNumber: number | null;
    readonly isAccepted: boolean;
    readonly name: string;
    readonly nodeNumber: number | null;
    readonly number1: number | null;
    readonly number2: number | null;
    readonly rankId: number;
    readonly remarks: string | null;
    readonly text1: string | null;
    readonly text2: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
    readonly yesNo1: boolean | null;
    readonly yesNo2: boolean | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly acceptedLithoStrat: LithoStrat | null;
    readonly createdByAgent: Agent | null;
    readonly definition: LithoStratTreeDef;
    readonly definitionItem: LithoStratTreeDefItem;
    readonly modifiedByAgent: Agent | null;
    readonly parent: LithoStrat;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: {
    readonly acceptedChildren: RA<LithoStrat>;
    readonly children: RA<LithoStrat>;
    readonly paleoContexts: RA<PaleoContext>;
  };
};
export type LithoStratTreeDef = {
  readonly tableName: 'LithoStratTreeDef';
  readonly fields: {
    readonly fullNameDirection: number | null;
    readonly name: string;
    readonly remarks: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: {
    readonly disciplines: RA<Discipline>;
    readonly treeDefItems: RA<LithoStratTreeDefItem>;
    readonly treeEntries: RA<LithoStrat>;
  };
};
export type LithoStratTreeDefItem = {
  readonly tableName: 'LithoStratTreeDefItem';
  readonly fields: {
    readonly fullNameSeparator: string | null;
    readonly isEnforced: boolean | null;
    readonly isInFullName: boolean | null;
    readonly name: string;
    readonly rankId: number;
    readonly remarks: string | null;
    readonly textAfter: string | null;
    readonly textBefore: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly title: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
    readonly parent: LithoStratTreeDefItem | null;
    readonly treeDef: LithoStratTreeDef;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: {
    readonly children: RA<LithoStratTreeDefItem>;
    readonly treeEntries: RA<LithoStrat>;
  };
};
export type Loan = {
  readonly tableName: 'Loan';
  readonly fields: {
    readonly contents: string | null;
    readonly currentDueDate: string | null;
    readonly dateClosed: string | null;
    readonly dateReceived: string | null;
    readonly integer1: number | null;
    readonly integer2: number | null;
    readonly integer3: number | null;
    readonly isClosed: boolean | null;
    readonly isFinancialResponsibility: boolean | null;
    readonly loanDate: string | null;
    readonly loanNumber: string;
    readonly number1: number | null;
    readonly number2: number | null;
    readonly originalDueDate: string | null;
    readonly overdueNotiSentDate: string | null;
    readonly purposeOfLoan: string | null;
    readonly receivedComments: string | null;
    readonly remarks: string | null;
    readonly specialConditions: string | null;
    readonly srcGeography: string | null;
    readonly srcTaxonomy: string | null;
    readonly status: string | null;
    readonly text1: string | null;
    readonly text2: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
    readonly yesNo1: boolean | null;
    readonly yesNo2: boolean | null;
  };
  readonly toOneDependent: { readonly addressOfRecord: AddressOfRecord | null };
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly discipline: Discipline;
    readonly division: Division | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: {
    readonly loanAgents: RA<LoanAgent>;
    readonly loanAttachments: RA<LoanAttachment>;
    readonly loanPreparations: RA<LoanPreparation>;
    readonly shipments: RA<Shipment>;
  };
  readonly toManyIndependent: RR<never, never>;
};
export type LoanAgent = {
  readonly tableName: 'LoanAgent';
  readonly fields: {
    readonly remarks: string | null;
    readonly role: string;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly agent: Agent;
    readonly createdByAgent: Agent | null;
    readonly discipline: Discipline;
    readonly loan: Loan;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type LoanAttachment = {
  readonly tableName: 'LoanAttachment';
  readonly fields: {
    readonly ordinal: number;
    readonly remarks: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: { readonly attachment: Attachment };
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly loan: Loan;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type LoanPreparation = {
  readonly tableName: 'LoanPreparation';
  readonly fields: {
    readonly descriptionOfMaterial: string | null;
    readonly inComments: string | null;
    readonly isResolved: boolean;
    readonly outComments: string | null;
    readonly quantity: number | null;
    readonly quantityResolved: number | null;
    readonly quantityReturned: number | null;
    readonly receivedComments: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly discipline: Discipline;
    readonly loan: Loan;
    readonly modifiedByAgent: Agent | null;
    readonly preparation: Preparation | null;
  };
  readonly toManyDependent: {
    readonly loanReturnPreparations: RA<LoanReturnPreparation>;
  };
  readonly toManyIndependent: RR<never, never>;
};
export type LoanReturnPreparation = {
  readonly tableName: 'LoanReturnPreparation';
  readonly fields: {
    readonly quantityResolved: number | null;
    readonly quantityReturned: number | null;
    readonly remarks: string | null;
    readonly returnedDate: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly discipline: Discipline;
    readonly loanPreparation: LoanPreparation;
    readonly modifiedByAgent: Agent | null;
    readonly receivedBy: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: {
    readonly disposalPreparations: RA<DisposalPreparation>;
  };
};
export type Locality = {
  readonly tableName: 'Locality';
  readonly fields: {
    readonly datum: string | null;
    readonly elevationAccuracy: number | null;
    readonly elevationMethod: string | null;
    readonly gml: string | null;
    readonly guid: string | null;
    readonly lat1text: string | null;
    readonly lat2text: string | null;
    readonly latLongAccuracy: number | null;
    readonly latLongMethod: string | null;
    readonly latLongType: string | null;
    readonly latitude1: number | null;
    readonly latitude2: number | null;
    readonly localityName: string;
    readonly long1text: string | null;
    readonly long2text: string | null;
    readonly longitude1: number | null;
    readonly longitude2: number | null;
    readonly maxElevation: number | null;
    readonly minElevation: number | null;
    readonly namedPlace: string | null;
    readonly originalElevationUnit: string | null;
    readonly originalLatLongUnit: number | null;
    readonly relationToNamedPlace: string | null;
    readonly remarks: string | null;
    readonly sgrStatus: number | null;
    readonly shortName: string | null;
    readonly srcLatLongUnit: number;
    readonly text1: string | null;
    readonly text2: string | null;
    readonly text3: string | null;
    readonly text4: string | null;
    readonly text5: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly uniqueIdentifier: string | null;
    readonly verbatimElevation: string | null;
    readonly verbatimLatitude: string | null;
    readonly verbatimLongitude: string | null;
    readonly version: number | null;
    readonly visibility: number | null;
    readonly yesNo1: boolean | null;
    readonly yesNo2: boolean | null;
    readonly yesNo3: boolean | null;
    readonly yesNo4: boolean | null;
    readonly yesNo5: boolean | null;
  };
  readonly toOneDependent: {
    readonly geoCoordDetails: GeoCoordDetail | null;
    readonly localityDetails: LocalityDetail | null;
  };
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly discipline: Discipline;
    readonly geography: Geography | null;
    readonly modifiedByAgent: Agent | null;
    readonly paleoContext: PaleoContext | null;
    readonly visibilitySetBy: SpecifyUser | null;
  };
  readonly toManyDependent: {
    readonly latLonpolygons: RA<LatLonPolygon>;
    readonly localityAttachments: RA<LocalityAttachment>;
    readonly localityCitations: RA<LocalityCitation>;
    readonly localityNameAliass: RA<LocalityNameAlias>;
  };
  readonly toManyIndependent: {
    readonly collectingEvents: RA<CollectingEvent>;
  };
};
export type LocalityAttachment = {
  readonly tableName: 'LocalityAttachment';
  readonly fields: {
    readonly ordinal: number;
    readonly remarks: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: { readonly attachment: Attachment };
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly locality: Locality;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type LocalityCitation = {
  readonly tableName: 'LocalityCitation';
  readonly fields: {
    readonly figureNumber: string | null;
    readonly isFigured: boolean | null;
    readonly pageNumber: string | null;
    readonly plateNumber: string | null;
    readonly remarks: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly discipline: Discipline;
    readonly locality: Locality;
    readonly modifiedByAgent: Agent | null;
    readonly referenceWork: ReferenceWork;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type LocalityDetail = {
  readonly tableName: 'LocalityDetail';
  readonly fields: {
    readonly baseMeridian: string | null;
    readonly drainage: string | null;
    readonly endDepth: number | null;
    readonly endDepthUnit: string | null;
    readonly endDepthVerbatim: string | null;
    readonly gml: string | null;
    readonly hucCode: string | null;
    readonly island: string | null;
    readonly islandGroup: string | null;
    readonly mgrsZone: string | null;
    readonly nationalParkName: string | null;
    readonly number1: number | null;
    readonly number2: number | null;
    readonly number3: number | null;
    readonly number4: number | null;
    readonly number5: number | null;
    readonly paleoLat: string | null;
    readonly paleoLng: string | null;
    readonly rangeDesc: string | null;
    readonly rangeDirection: string | null;
    readonly section: string | null;
    readonly sectionPart: string | null;
    readonly startDepth: number | null;
    readonly startDepthUnit: string | null;
    readonly startDepthVerbatim: string | null;
    readonly text1: string | null;
    readonly text2: string | null;
    readonly text3: string | null;
    readonly text4: string | null;
    readonly text5: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly township: string | null;
    readonly townshipDirection: string | null;
    readonly utmDatum: string | null;
    readonly utmEasting: number | null;
    readonly utmFalseEasting: number | null;
    readonly utmFalseNorthing: number | null;
    readonly utmNorthing: number | null;
    readonly utmOrigLatitude: number | null;
    readonly utmOrigLongitude: number | null;
    readonly utmScale: number | null;
    readonly utmZone: number | null;
    readonly version: number | null;
    readonly waterBody: string | null;
    readonly yesNo1: boolean | null;
    readonly yesNo2: boolean | null;
    readonly yesNo3: boolean | null;
    readonly yesNo4: boolean | null;
    readonly yesNo5: boolean | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly locality: Locality | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type LocalityNameAlias = {
  readonly tableName: 'LocalityNameAlias';
  readonly fields: {
    readonly name: string;
    readonly source: string;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly discipline: Discipline;
    readonly locality: Locality;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type MaterialSample = {
  readonly tableName: 'MaterialSample';
  readonly fields: {
    readonly GGBN_absorbanceRatio260_230: number | null;
    readonly GGBN_absorbanceRatio260_280: number | null;
    readonly GGBN_absorbanceRatioMethod: string | null;
    readonly GGBN_concentration: number | null;
    readonly GGBN_concentrationUnit: string | null;
    readonly GGBN_materialSampleType: string | null;
    readonly GGBN_medium: string | null;
    readonly GGBN_purificationMethod: string | null;
    readonly GGBN_quality: string | null;
    readonly GGBN_qualityCheckDate: string | null;
    readonly GGBN_qualityRemarks: string | null;
    readonly GGBN_sampleDesignation: string | null;
    readonly GGBN_sampleSize: number | null;
    readonly GGBN_volume: number | null;
    readonly GGBN_volumeUnit: string | null;
    readonly GGBN_weight: number | null;
    readonly GGBN_weightMethod: string | null;
    readonly GGBN_weightUnit: string | null;
    readonly collectionMemberId: number;
    readonly extractionDate: string | null;
    readonly guid: string | null;
    readonly integer1: number | null;
    readonly integer2: number | null;
    readonly number1: number | null;
    readonly number2: number | null;
    readonly remarks: string | null;
    readonly reservedInteger3: number | null;
    readonly reservedInteger4: number | null;
    readonly reservedNumber3: number | null;
    readonly reservedNumber4: number | null;
    readonly reservedText3: string | null;
    readonly reservedText4: string | null;
    readonly sraBioProjectID: string | null;
    readonly sraBioSampleID: string | null;
    readonly sraProjectID: string | null;
    readonly sraSampleID: string | null;
    readonly text1: string | null;
    readonly text2: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
    readonly yesNo1: boolean | null;
    readonly yesNo2: boolean | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly extractor: Agent | null;
    readonly modifiedByAgent: Agent | null;
    readonly preparation: Preparation;
  };
  readonly toManyDependent: { readonly dnaSequences: RA<DNASequence> };
  readonly toManyIndependent: RR<never, never>;
};
export type MorphBankView = {
  readonly tableName: 'MorphBankView';
  readonly fields: {
    readonly developmentState: string | null;
    readonly form: string | null;
    readonly imagingPreparationTechnique: string | null;
    readonly imagingTechnique: string | null;
    readonly morphBankExternalViewId: number | null;
    readonly sex: string | null;
    readonly specimenPart: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
    readonly viewAngle: string | null;
    readonly viewName: string | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: {
    readonly attachmentImageAttributes: RA<AttachmentImageAttribute>;
  };
};
export type OtherIdentifier = {
  readonly tableName: 'OtherIdentifier';
  readonly fields: {
    readonly collectionMemberId: number;
    readonly identifier: string;
    readonly institution: string | null;
    readonly remarks: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly collectionObject: CollectionObject;
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type PaleoContext = {
  readonly tableName: 'PaleoContext';
  readonly fields: {
    readonly number1: number | null;
    readonly number2: number | null;
    readonly number3: number | null;
    readonly number4: number | null;
    readonly number5: number | null;
    readonly paleoContextName: string | null;
    readonly remarks: string | null;
    readonly text1: string | null;
    readonly text2: string | null;
    readonly text3: string | null;
    readonly text4: string | null;
    readonly text5: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
    readonly yesNo1: boolean | null;
    readonly yesNo2: boolean | null;
    readonly yesNo3: boolean | null;
    readonly yesNo4: boolean | null;
    readonly yesNo5: boolean | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly bioStrat: GeologicTimePeriod | null;
    readonly chronosStrat: GeologicTimePeriod | null;
    readonly chronosStratEnd: GeologicTimePeriod | null;
    readonly createdByAgent: Agent | null;
    readonly discipline: Discipline;
    readonly lithoStrat: LithoStrat | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: {
    readonly collectingEvents: RA<CollectingEvent>;
    readonly collectionObjects: RA<CollectionObject>;
    readonly localities: RA<Locality>;
  };
};
export type PcrPerson = {
  readonly tableName: 'PcrPerson';
  readonly fields: {
    readonly orderNumber: number;
    readonly remarks: string | null;
    readonly text1: string | null;
    readonly text2: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
    readonly yesNo1: boolean | null;
    readonly yesNo2: boolean | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly agent: Agent;
    readonly createdByAgent: Agent | null;
    readonly dnaSequence: DNASequence;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type Permit = {
  readonly tableName: 'Permit';
  readonly fields: {
    readonly copyright: string | null;
    readonly endDate: string | null;
    readonly isAvailable: boolean | null;
    readonly isRequired: boolean | null;
    readonly issuedDate: string | null;
    readonly number1: number | null;
    readonly number2: number | null;
    readonly permitNumber: string;
    readonly permitText: string | null;
    readonly remarks: string | null;
    readonly renewalDate: string | null;
    readonly reservedInteger1: number | null;
    readonly reservedInteger2: number | null;
    readonly reservedText3: string | null;
    readonly reservedText4: string | null;
    readonly startDate: string | null;
    readonly status: string | null;
    readonly statusQualifier: string | null;
    readonly text1: string | null;
    readonly text2: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly type: string | null;
    readonly version: number | null;
    readonly yesNo1: boolean | null;
    readonly yesNo2: boolean | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly institution: Institution;
    readonly issuedBy: Agent | null;
    readonly issuedTo: Agent | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: {
    readonly permitAttachments: RA<PermitAttachment>;
  };
  readonly toManyIndependent: {
    readonly accessionAuthorizations: RA<AccessionAuthorization>;
    readonly collectingEventAuthorizations: RA<CollectingEventAuthorization>;
    readonly collectingTripAuthorizations: RA<CollectingTripAuthorization>;
  };
};
export type PermitAttachment = {
  readonly tableName: 'PermitAttachment';
  readonly fields: {
    readonly ordinal: number;
    readonly remarks: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: { readonly attachment: Attachment };
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
    readonly permit: Permit;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type PickList = {
  readonly tableName: 'PickList';
  readonly fields: {
    readonly fieldName: string | null;
    readonly filterFieldName: string | null;
    readonly filterValue: string | null;
    readonly formatter: string | null;
    readonly isSystem: boolean;
    readonly name: string;
    readonly readOnly: boolean;
    readonly sizeLimit: number | null;
    readonly sortType: number | null;
    readonly tableName: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly type: number;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly collection: Collection;
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: { readonly pickListItems: RA<PickListItem> };
  readonly toManyIndependent: RR<never, never>;
};
export type PickListItem = {
  readonly tableName: 'PickListItem';
  readonly fields: {
    readonly ordinal: number | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly title: string;
    readonly value: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
    readonly pickList: PickList;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type PrepType = {
  readonly tableName: 'PrepType';
  readonly fields: {
    readonly isLoanable: boolean;
    readonly name: string;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly collection: Collection;
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: { readonly attributeDefs: RA<AttributeDef> };
  readonly toManyIndependent: RR<never, never>;
};
export type Preparation = {
  readonly tableName: 'Preparation';
  readonly fields: {
    readonly barCode: string | null;
    readonly collectionMemberId: number;
    readonly countAmt: number | null;
    readonly date1: string | null;
    readonly date1Precision: number | null;
    readonly date2: string | null;
    readonly date2Precision: number | null;
    readonly date3: string | null;
    readonly date3Precision: number | null;
    readonly date4: string | null;
    readonly date4Precision: number | null;
    readonly description: string | null;
    readonly guid: string | null;
    readonly integer1: number | null;
    readonly integer2: number | null;
    readonly number1: number | null;
    readonly number2: number | null;
    readonly preparedDate: string | null;
    readonly preparedDatePrecision: number | null;
    readonly remarks: string | null;
    readonly reservedInteger3: number | null;
    readonly reservedInteger4: number | null;
    readonly sampleNumber: string | null;
    readonly status: string | null;
    readonly storageLocation: string | null;
    readonly text1: string | null;
    readonly text10: string | null;
    readonly text11: string | null;
    readonly text12: string | null;
    readonly text13: string | null;
    readonly text2: string | null;
    readonly text3: string | null;
    readonly text4: string | null;
    readonly text5: string | null;
    readonly text6: string | null;
    readonly text7: string | null;
    readonly text8: string | null;
    readonly text9: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
    readonly yesNo1: boolean | null;
    readonly yesNo2: boolean | null;
    readonly yesNo3: boolean | null;
  };
  readonly toOneDependent: {
    readonly preparationAttribute: PreparationAttribute | null;
  };
  readonly toOneIndependent: {
    readonly alternateStorage: Storage | null;
    readonly collectionObject: CollectionObject;
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
    readonly prepType: PrepType;
    readonly preparedByAgent: Agent | null;
    readonly storage: Storage | null;
  };
  readonly toManyDependent: {
    readonly materialSamples: RA<MaterialSample>;
    readonly preparationAttachments: RA<PreparationAttachment>;
    readonly preparationAttrs: RA<PreparationAttr>;
    readonly preparationProperties: RA<PreparationProperty>;
  };
  readonly toManyIndependent: {
    readonly conservDescriptions: RA<ConservDescription>;
    readonly disposalPreparations: RA<DisposalPreparation>;
    readonly exchangeInPreps: RA<ExchangeInPrep>;
    readonly exchangeOutPreps: RA<ExchangeOutPrep>;
    readonly giftPreparations: RA<GiftPreparation>;
    readonly loanPreparations: RA<LoanPreparation>;
  };
};
export type PreparationAttachment = {
  readonly tableName: 'PreparationAttachment';
  readonly fields: {
    readonly collectionMemberId: number;
    readonly ordinal: number;
    readonly remarks: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: { readonly attachment: Attachment };
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
    readonly preparation: Preparation;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type PreparationAttr = {
  readonly tableName: 'PreparationAttr';
  readonly fields: {
    readonly collectionMemberId: number;
    readonly dblValue: number | null;
    readonly strValue: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly definition: AttributeDef;
    readonly modifiedByAgent: Agent | null;
    readonly preparation: Preparation;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type PreparationAttribute = {
  readonly tableName: 'PreparationAttribute';
  readonly fields: {
    readonly attrDate: string | null;
    readonly collectionMemberId: number;
    readonly number1: number | null;
    readonly number2: number | null;
    readonly number3: number | null;
    readonly number4: number | null;
    readonly number5: number | null;
    readonly number6: number | null;
    readonly number7: number | null;
    readonly number8: number | null;
    readonly number9: number | null;
    readonly remarks: string | null;
    readonly text1: string | null;
    readonly text10: string | null;
    readonly text11: string | null;
    readonly text12: string | null;
    readonly text13: string | null;
    readonly text14: string | null;
    readonly text15: string | null;
    readonly text16: string | null;
    readonly text17: string | null;
    readonly text18: string | null;
    readonly text19: string | null;
    readonly text2: string | null;
    readonly text20: string | null;
    readonly text21: string | null;
    readonly text22: string | null;
    readonly text23: string | null;
    readonly text24: string | null;
    readonly text25: string | null;
    readonly text26: string | null;
    readonly text3: string | null;
    readonly text4: string | null;
    readonly text5: string | null;
    readonly text6: string | null;
    readonly text7: string | null;
    readonly text8: string | null;
    readonly text9: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
    readonly yesNo1: boolean | null;
    readonly yesNo2: boolean | null;
    readonly yesNo3: boolean | null;
    readonly yesNo4: boolean | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: { readonly preparations: RA<Preparation> };
};
export type PreparationProperty = {
  readonly tableName: 'PreparationProperty';
  readonly fields: {
    readonly collectionMemberId: number;
    readonly date1: string | null;
    readonly date10: string | null;
    readonly date11: string | null;
    readonly date12: string | null;
    readonly date13: string | null;
    readonly date14: string | null;
    readonly date15: string | null;
    readonly date16: string | null;
    readonly date17: string | null;
    readonly date18: string | null;
    readonly date19: string | null;
    readonly date2: string | null;
    readonly date20: string | null;
    readonly date3: string | null;
    readonly date4: string | null;
    readonly date5: string | null;
    readonly date6: string | null;
    readonly date7: string | null;
    readonly date8: string | null;
    readonly date9: string | null;
    readonly guid: string | null;
    readonly integer1: number | null;
    readonly integer10: number | null;
    readonly integer11: number | null;
    readonly integer12: number | null;
    readonly integer13: number | null;
    readonly integer14: number | null;
    readonly integer15: number | null;
    readonly integer16: number | null;
    readonly integer17: number | null;
    readonly integer18: number | null;
    readonly integer19: number | null;
    readonly integer2: number | null;
    readonly integer20: number | null;
    readonly integer21: number | null;
    readonly integer22: number | null;
    readonly integer23: number | null;
    readonly integer24: number | null;
    readonly integer25: number | null;
    readonly integer26: number | null;
    readonly integer27: number | null;
    readonly integer28: number | null;
    readonly integer29: number | null;
    readonly integer3: number | null;
    readonly integer30: number | null;
    readonly integer4: number | null;
    readonly integer5: number | null;
    readonly integer6: number | null;
    readonly integer7: number | null;
    readonly integer8: number | null;
    readonly integer9: number | null;
    readonly number1: number | null;
    readonly number10: number | null;
    readonly number11: number | null;
    readonly number12: number | null;
    readonly number13: number | null;
    readonly number14: number | null;
    readonly number15: number | null;
    readonly number16: number | null;
    readonly number17: number | null;
    readonly number18: number | null;
    readonly number19: number | null;
    readonly number2: number | null;
    readonly number20: number | null;
    readonly number21: number | null;
    readonly number22: number | null;
    readonly number23: number | null;
    readonly number24: number | null;
    readonly number25: number | null;
    readonly number26: number | null;
    readonly number27: number | null;
    readonly number28: number | null;
    readonly number29: number | null;
    readonly number3: number | null;
    readonly number30: number | null;
    readonly number4: number | null;
    readonly number5: number | null;
    readonly number6: number | null;
    readonly number7: number | null;
    readonly number8: number | null;
    readonly number9: number | null;
    readonly remarks: string | null;
    readonly text1: string | null;
    readonly text10: string | null;
    readonly text11: string | null;
    readonly text12: string | null;
    readonly text13: string | null;
    readonly text14: string | null;
    readonly text15: string | null;
    readonly text16: string | null;
    readonly text17: string | null;
    readonly text18: string | null;
    readonly text19: string | null;
    readonly text2: string | null;
    readonly text20: string | null;
    readonly text21: string | null;
    readonly text22: string | null;
    readonly text23: string | null;
    readonly text24: string | null;
    readonly text25: string | null;
    readonly text26: string | null;
    readonly text27: string | null;
    readonly text28: string | null;
    readonly text29: string | null;
    readonly text3: string | null;
    readonly text30: string | null;
    readonly text31: string | null;
    readonly text32: string | null;
    readonly text33: string | null;
    readonly text34: string | null;
    readonly text35: string | null;
    readonly text36: string | null;
    readonly text37: string | null;
    readonly text38: string | null;
    readonly text39: string | null;
    readonly text4: string | null;
    readonly text40: string | null;
    readonly text5: string | null;
    readonly text6: string | null;
    readonly text7: string | null;
    readonly text8: string | null;
    readonly text9: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
    readonly yesNo1: boolean | null;
    readonly yesNo10: boolean | null;
    readonly yesNo11: boolean | null;
    readonly yesNo12: boolean | null;
    readonly yesNo13: boolean | null;
    readonly yesNo14: boolean | null;
    readonly yesNo15: boolean | null;
    readonly yesNo16: boolean | null;
    readonly yesNo17: boolean | null;
    readonly yesNo18: boolean | null;
    readonly yesNo19: boolean | null;
    readonly yesNo2: boolean | null;
    readonly yesNo20: boolean | null;
    readonly yesNo3: boolean | null;
    readonly yesNo4: boolean | null;
    readonly yesNo5: boolean | null;
    readonly yesNo6: boolean | null;
    readonly yesNo7: boolean | null;
    readonly yesNo8: boolean | null;
    readonly yesNo9: boolean | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly agent1: Agent | null;
    readonly agent10: Agent | null;
    readonly agent11: Agent | null;
    readonly agent12: Agent | null;
    readonly agent13: Agent | null;
    readonly agent14: Agent | null;
    readonly agent15: Agent | null;
    readonly agent16: Agent | null;
    readonly agent17: Agent | null;
    readonly agent18: Agent | null;
    readonly agent19: Agent | null;
    readonly agent2: Agent | null;
    readonly agent20: Agent | null;
    readonly agent3: Agent | null;
    readonly agent4: Agent | null;
    readonly agent5: Agent | null;
    readonly agent6: Agent | null;
    readonly agent7: Agent | null;
    readonly agent8: Agent | null;
    readonly agent9: Agent | null;
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
    readonly preparation: Preparation;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type Project = {
  readonly tableName: 'Project';
  readonly fields: {
    readonly collectionMemberId: number;
    readonly endDate: string | null;
    readonly grantAgency: string | null;
    readonly grantNumber: string | null;
    readonly number1: number | null;
    readonly number2: number | null;
    readonly projectDescription: string | null;
    readonly projectName: string;
    readonly projectNumber: string | null;
    readonly remarks: string | null;
    readonly startDate: string | null;
    readonly text1: string | null;
    readonly text2: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly url: string | null;
    readonly version: number | null;
    readonly yesNo1: boolean | null;
    readonly yesNo2: boolean | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly agent: Agent | null;
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: {
    readonly collectionObjects: RA<CollectionObject>;
  };
};
export type RecordSet = {
  readonly tableName: 'RecordSet';
  readonly fields: {
    readonly allPermissionLevel: number | null;
    readonly collectionMemberId: number;
    readonly dbTableId: number;
    readonly groupPermissionLevel: number | null;
    readonly name: string;
    readonly ownerPermissionLevel: number | null;
    readonly remarks: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly type: number;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly group: SpPrincipal | null;
    readonly infoRequest: InfoRequest | null;
    readonly modifiedByAgent: Agent | null;
    readonly specifyUser: SpecifyUser;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: { readonly recordSetItems: RA<RecordSetItem> };
};
export type RecordSetItem = {
  readonly tableName: 'RecordSetItem';
  readonly fields: { readonly order: number | null; readonly recordId: number };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: { readonly recordSet: RecordSet };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type ReferenceWork = {
  readonly tableName: 'ReferenceWork';
  readonly fields: {
    readonly doi: string | null;
    readonly guid: string | null;
    readonly isPublished: boolean | null;
    readonly isbn: string | null;
    readonly libraryNumber: string | null;
    readonly number1: number | null;
    readonly number2: number | null;
    readonly pages: string | null;
    readonly placeOfPublication: string | null;
    readonly publisher: string | null;
    readonly referenceWorkType: number;
    readonly remarks: string | null;
    readonly text1: string | null;
    readonly text2: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly title: string;
    readonly uri: string | null;
    readonly url: string | null;
    readonly version: number | null;
    readonly volume: string | null;
    readonly workDate: string | null;
    readonly yesNo1: boolean | null;
    readonly yesNo2: boolean | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly containedRFParent: ReferenceWork | null;
    readonly createdByAgent: Agent | null;
    readonly institution: Institution;
    readonly journal: Journal | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: {
    readonly authors: RA<Author>;
    readonly referenceWorkAttachments: RA<ReferenceWorkAttachment>;
  };
  readonly toManyIndependent: {
    readonly collectionObjectCitations: RA<CollectionObjectCitation>;
    readonly containedReferenceWorks: RA<ReferenceWork>;
    readonly determinationCitations: RA<DeterminationCitation>;
    readonly exsiccatae: RA<Exsiccata>;
    readonly localityCitations: RA<LocalityCitation>;
    readonly taxonCitations: RA<TaxonCitation>;
  };
};
export type ReferenceWorkAttachment = {
  readonly tableName: 'ReferenceWorkAttachment';
  readonly fields: {
    readonly ordinal: number;
    readonly remarks: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: { readonly attachment: Attachment };
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
    readonly referenceWork: ReferenceWork;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type RepositoryAgreement = {
  readonly tableName: 'RepositoryAgreement';
  readonly fields: {
    readonly dateReceived: string | null;
    readonly endDate: string | null;
    readonly number1: number | null;
    readonly number2: number | null;
    readonly remarks: string | null;
    readonly repositoryAgreementNumber: string;
    readonly startDate: string | null;
    readonly status: string | null;
    readonly text1: string | null;
    readonly text2: string | null;
    readonly text3: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
    readonly yesNo1: boolean | null;
    readonly yesNo2: boolean | null;
  };
  readonly toOneDependent: { readonly addressOfRecord: AddressOfRecord | null };
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly division: Division;
    readonly modifiedByAgent: Agent | null;
    readonly originator: Agent;
  };
  readonly toManyDependent: {
    readonly repositoryAgreementAgents: RA<AccessionAgent>;
    readonly repositoryAgreementAttachments: RA<RepositoryAgreementAttachment>;
    readonly repositoryAgreementAuthorizations: RA<AccessionAuthorization>;
  };
  readonly toManyIndependent: { readonly accessions: RA<Accession> };
};
export type RepositoryAgreementAttachment = {
  readonly tableName: 'RepositoryAgreementAttachment';
  readonly fields: {
    readonly ordinal: number | null;
    readonly remarks: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: { readonly attachment: Attachment };
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
    readonly repositoryAgreement: RepositoryAgreement;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type Shipment = {
  readonly tableName: 'Shipment';
  readonly fields: {
    readonly insuredForAmount: string | null;
    readonly number1: number | null;
    readonly number2: number | null;
    readonly numberOfPackages: number | null;
    readonly remarks: string | null;
    readonly shipmentDate: string | null;
    readonly shipmentMethod: string | null;
    readonly shipmentNumber: string;
    readonly text1: string | null;
    readonly text2: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
    readonly weight: string | null;
    readonly yesNo1: boolean | null;
    readonly yesNo2: boolean | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly borrow: Borrow | null;
    readonly createdByAgent: Agent | null;
    readonly discipline: Discipline;
    readonly exchangeOut: ExchangeOut | null;
    readonly gift: Gift | null;
    readonly loan: Loan | null;
    readonly modifiedByAgent: Agent | null;
    readonly shippedBy: Agent | null;
    readonly shippedTo: Agent | null;
    readonly shipper: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type SpAppResource = {
  readonly tableName: 'SpAppResource';
  readonly fields: {
    readonly allPermissionLevel: number | null;
    readonly description: string | null;
    readonly groupPermissionLevel: number | null;
    readonly level: number;
    readonly metaData: string | null;
    readonly mimeType: string | null;
    readonly name: string;
    readonly ownerPermissionLevel: number | null;
    readonly timestampCreated: string;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly group: SpPrincipal | null;
    readonly modifiedByAgent: Agent | null;
    readonly spAppResourceDir: SpAppResourceDir;
    readonly specifyUser: SpecifyUser;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: {
    readonly spAppResourceDatas: RA<SpAppResourceData>;
    readonly spReports: RA<SpReport>;
  };
};
export type SpAppResourceData = {
  readonly tableName: 'SpAppResourceData';
  readonly fields: {
    readonly data: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
    readonly spAppResource: SpAppResource | null;
    readonly spViewSetObj: SpViewSetObj | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type SpAppResourceDir = {
  readonly tableName: 'SpAppResourceDir';
  readonly fields: {
    readonly disciplineType: string | null;
    readonly isPersonal: boolean;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly userType: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly collection: Collection | null;
    readonly createdByAgent: Agent | null;
    readonly discipline: Discipline | null;
    readonly modifiedByAgent: Agent | null;
    readonly specifyUser: SpecifyUser | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: {
    readonly spPersistedAppResources: RA<SpAppResource>;
    readonly spPersistedViewSets: RA<SpViewSetObj>;
  };
};
export type SpAuditLog = {
  readonly tableName: 'SpAuditLog';
  readonly fields: {
    readonly action: number;
    readonly parentRecordId: number | null;
    readonly parentTableNum: number | null;
    readonly recordId: number | null;
    readonly recordVersion: number;
    readonly tableNum: number;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: { readonly fields: RA<SpAuditLogField> };
};
export type SpAuditLogField = {
  readonly tableName: 'SpAuditLogField';
  readonly fields: {
    readonly fieldName: string;
    readonly newValue: string | null;
    readonly oldValue: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
    readonly spAuditLog: SpAuditLog | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type SpExportSchema = {
  readonly tableName: 'SpExportSchema';
  readonly fields: {
    readonly description: string | null;
    readonly schemaName: string | null;
    readonly schemaVersion: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly discipline: Discipline;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: {
    readonly spExportSchemaItems: RA<SpExportSchemaItem>;
    readonly spExportSchemaMappings: RA<SpExportSchemaMapping>;
  };
};
export type SpExportSchemaItem = {
  readonly tableName: 'SpExportSchemaItem';
  readonly fields: {
    readonly dataType: string | null;
    readonly description: string | null;
    readonly fieldName: string | null;
    readonly formatter: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
    readonly spExportSchema: SpExportSchema;
    readonly spLocaleContainerItem: SpLocaleContainerItem | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type SpExportSchemaItemMapping = {
  readonly tableName: 'SpExportSchemaItemMapping';
  readonly fields: {
    readonly exportedFieldName: string | null;
    readonly extensionItem: boolean | null;
    readonly remarks: string | null;
    readonly rowType: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly exportSchemaItem: SpExportSchemaItem | null;
    readonly exportSchemaMapping: SpExportSchemaMapping | null;
    readonly modifiedByAgent: Agent | null;
    readonly queryField: SpQueryField | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type SpExportSchemaMapping = {
  readonly tableName: 'SpExportSchemaMapping';
  readonly fields: {
    readonly collectionMemberId: number;
    readonly description: string | null;
    readonly mappingName: string | null;
    readonly timestampCreated: string;
    readonly timestampExported: string | null;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: {
    readonly mappings: RA<SpExportSchemaItemMapping>;
    readonly spExportSchemas: RA<SpExportSchema>;
    readonly symbiotaInstances: RA<SpSymbiotaInstance>;
  };
};
export type SpFieldValueDefault = {
  readonly tableName: 'SpFieldValueDefault';
  readonly fields: {
    readonly collectionMemberId: number;
    readonly fieldName: string | null;
    readonly idValue: number | null;
    readonly strValue: string | null;
    readonly tableName: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type SpLocaleContainer = {
  readonly tableName: 'SpLocaleContainer';
  readonly fields: {
    readonly aggregator: string | null;
    readonly defaultUI: string | null;
    readonly format: string | null;
    readonly isHidden: boolean;
    readonly isSystem: boolean;
    readonly isUIFormatter: boolean | null;
    readonly name: string;
    readonly pickListName: string | null;
    readonly schemaType: number;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly type: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly discipline: Discipline;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: {
    readonly descs: RA<SpLocaleItemStr>;
    readonly items: RA<SpLocaleContainerItem>;
    readonly names: RA<SpLocaleItemStr>;
  };
};
export type SpLocaleContainerItem = {
  readonly tableName: 'SpLocaleContainerItem';
  readonly fields: {
    readonly format: string | null;
    readonly isHidden: boolean;
    readonly isRequired: boolean | null;
    readonly isSystem: boolean;
    readonly isUIFormatter: boolean | null;
    readonly name: string;
    readonly pickListName: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly type: string | null;
    readonly version: number | null;
    readonly webLinkName: string | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly container: SpLocaleContainer;
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: {
    readonly descs: RA<SpLocaleItemStr>;
    readonly names: RA<SpLocaleItemStr>;
    readonly spExportSchemaItems: RA<SpExportSchemaItem>;
  };
};
export type SpLocaleItemStr = {
  readonly tableName: 'SpLocaleItemStr';
  readonly fields: {
    readonly country: string | null;
    readonly language: string;
    readonly text: string;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly variant: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly containerDesc: SpLocaleContainer | null;
    readonly containerName: SpLocaleContainer | null;
    readonly createdByAgent: Agent | null;
    readonly itemDesc: SpLocaleContainerItem | null;
    readonly itemName: SpLocaleContainerItem | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type SpPermission = {
  readonly tableName: 'SpPermission';
  readonly fields: {
    readonly actions: string | null;
    readonly name: string | null;
    readonly permissionClass: string;
    readonly targetId: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: RR<never, never>;
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: { readonly principals: RA<SpPrincipal> };
};
export type SpPrincipal = {
  readonly tableName: 'SpPrincipal';
  readonly fields: {
    readonly groupSubClass: string;
    readonly groupType: string | null;
    readonly name: string;
    readonly priority: number;
    readonly remarks: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
    // This is a -to-one relationship with collection, discipline or division
    readonly scope: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: {
    readonly permissions: RA<SpPermission>;
    readonly specifyUsers: RA<SpecifyUser>;
  };
};
export type SpQuery = {
  readonly tableName: 'SpQuery';
  readonly fields: {
    readonly contextName: string;
    readonly contextTableId: number;
    readonly countOnly: boolean | null;
    readonly formatAuditRecIds: boolean | null;
    readonly isFavorite: boolean | null;
    readonly name: string;
    readonly ordinal: number | null;
    readonly remarks: string | null;
    readonly searchSynonymy: boolean | null;
    readonly selectDistinct: boolean | null;
    readonly smushed: boolean | null;
    readonly sqlStr: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
    readonly specifyUser: SpecifyUser;
  };
  readonly toManyDependent: { readonly fields: RA<SpQueryField> };
  readonly toManyIndependent: { readonly reports: RA<SpReport> };
};
export type SpQueryField = {
  readonly tableName: 'SpQueryField';
  readonly fields: {
    readonly allowNulls: boolean | null;
    readonly alwaysFilter: boolean | null;
    readonly columnAlias: string | null;
    readonly contextTableIdent: number | null;
    readonly endValue: string | null;
    readonly fieldName: string;
    readonly formatName: string | null;
    readonly isDisplay: boolean;
    readonly isNot: boolean;
    readonly isPrompt: boolean | null;
    readonly isRelFld: boolean | null;
    readonly operEnd: number | null;
    readonly operStart: number;
    readonly position: number;
    readonly sortType: number;
    readonly startValue: string;
    readonly stringId: string;
    readonly tableList: string;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
    readonly query: SpQuery | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: {
    readonly mappings: RA<SpExportSchemaItemMapping>;
  };
};
export type SpReport = {
  readonly tableName: 'SpReport';
  readonly fields: {
    readonly name: string;
    readonly remarks: string | null;
    readonly repeatCount: number | null;
    readonly repeatField: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly appResource: SpAppResource;
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
    readonly query: SpQuery | null;
    readonly specifyUser: SpecifyUser;
    readonly workbenchTemplate: WorkbenchTemplate | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type SpSymbiotaInstance = {
  readonly tableName: 'SpSymbiotaInstance';
  readonly fields: {
    readonly collectionMemberId: number;
    readonly description: string | null;
    readonly instanceName: string | null;
    readonly lastCacheBuild: string | null;
    readonly lastPull: string | null;
    readonly lastPush: string | null;
    readonly remarks: string | null;
    readonly symbiotaKey: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
    readonly schemaMapping: SpExportSchemaMapping | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type SpTaskSemaphore = {
  readonly tableName: 'SpTaskSemaphore';
  readonly fields: {
    readonly context: string | null;
    readonly isLocked: boolean | null;
    readonly lockedTime: string | null;
    readonly machineName: string | null;
    readonly scope: number | null;
    readonly taskName: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly usageCount: number | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly collection: Collection | null;
    readonly createdByAgent: Agent | null;
    readonly discipline: Discipline | null;
    readonly modifiedByAgent: Agent | null;
    readonly owner: SpecifyUser | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type SpVersion = {
  readonly tableName: 'SpVersion';
  readonly fields: {
    readonly appName: string | null;
    readonly appVersion: string | null;
    readonly dbClosedBy: string | null;
    readonly isDBClosed: boolean | null;
    readonly schemaVersion: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
    readonly workbenchSchemaVersion: string | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type SpViewSetObj = {
  readonly tableName: 'SpViewSetObj';
  readonly fields: {
    readonly description: string | null;
    readonly fileName: string | null;
    readonly level: number;
    readonly metaData: string | null;
    readonly name: string;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
    readonly spAppResourceDir: SpAppResourceDir;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: {
    readonly spAppResourceDatas: RA<SpAppResourceData>;
  };
};
export type SpVisualQuery = {
  readonly tableName: 'SpVisualQuery';
  readonly fields: {
    readonly description: string | null;
    readonly name: string;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
    readonly specifyUser: SpecifyUser;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: { readonly polygons: RA<LatLonPolygon> };
};
export type SpecifyUser = {
  readonly tableName: 'SpecifyUser';
  readonly fields: {
    readonly accumMinLoggedIn: number | null;
    readonly email: string | null;
    readonly isLoggedIn: boolean;
    readonly isLoggedInReport: boolean;
    readonly loginCollectionName: string | null;
    readonly loginDisciplineName: string | null;
    readonly loginOutTime: string | null;
    readonly name: string;
    readonly password: string;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly userType: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: {
    readonly agents: RA<Agent>;
    readonly spAppResourceDirs: RA<SpAppResourceDir>;
    readonly spAppResources: RA<SpAppResource>;
    readonly spPrincipals: RA<SpPrincipal>;
    readonly spQuerys: RA<SpQuery>;
    readonly taskSemaphores: RA<SpTaskSemaphore>;
    readonly workbenchTemplates: RA<WorkbenchTemplate>;
    readonly workbenches: RA<Workbench>;
  };
};
export type Storage = {
  readonly tableName: 'Storage';
  readonly fields: {
    readonly abbrev: string | null;
    readonly fullName: string | null;
    readonly highestChildNodeNumber: number | null;
    readonly isAccepted: boolean;
    readonly name: string;
    readonly nodeNumber: number | null;
    readonly number1: number | null;
    readonly number2: number | null;
    readonly rankId: number;
    readonly remarks: string | null;
    readonly text1: string | null;
    readonly text2: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly timestampVersion: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly acceptedStorage: Storage | null;
    readonly createdByAgent: Agent | null;
    readonly definition: StorageTreeDef;
    readonly definitionItem: StorageTreeDefItem;
    readonly modifiedByAgent: Agent | null;
    readonly parent: Storage;
  };
  readonly toManyDependent: {
    readonly storageAttachments: RA<StorageAttachment>;
  };
  readonly toManyIndependent: {
    readonly acceptedChildren: RA<Storage>;
    readonly children: RA<Storage>;
    readonly containers: RA<Container>;
    readonly preparations: RA<Preparation>;
  };
};
export type StorageAttachment = {
  readonly tableName: 'StorageAttachment';
  readonly fields: {
    readonly ordinal: number;
    readonly remarks: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: { readonly attachment: Attachment };
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
    readonly storage: Storage;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type StorageTreeDef = {
  readonly tableName: 'StorageTreeDef';
  readonly fields: {
    readonly fullNameDirection: number | null;
    readonly name: string;
    readonly remarks: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: {
    readonly institutions: RA<Institution>;
    readonly treeDefItems: RA<StorageTreeDefItem>;
    readonly treeEntries: RA<Storage>;
  };
};
export type StorageTreeDefItem = {
  readonly tableName: 'StorageTreeDefItem';
  readonly fields: {
    readonly fullNameSeparator: string | null;
    readonly isEnforced: boolean | null;
    readonly isInFullName: boolean | null;
    readonly name: string;
    readonly rankId: number;
    readonly remarks: string | null;
    readonly textAfter: string | null;
    readonly textBefore: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly title: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
    readonly parent: StorageTreeDefItem | null;
    readonly treeDef: StorageTreeDef;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: {
    readonly children: RA<StorageTreeDefItem>;
    readonly treeEntries: RA<Storage>;
  };
};
export type Taxon = {
  readonly tableName: 'Taxon';
  readonly fields: {
    readonly author: string | null;
    readonly citesStatus: string | null;
    readonly colStatus: string | null;
    readonly commonName: string | null;
    readonly cultivarName: string | null;
    readonly environmentalProtectionStatus: string | null;
    readonly esaStatus: string | null;
    readonly fullName: string | null;
    readonly groupNumber: string | null;
    readonly guid: string | null;
    readonly highestChildNodeNumber: number | null;
    readonly integer1: number | null;
    readonly integer2: number | null;
    readonly integer3: number | null;
    readonly integer4: number | null;
    readonly integer5: number | null;
    readonly isAccepted: boolean;
    readonly isHybrid: boolean;
    readonly isisNumber: string | null;
    readonly labelFormat: string | null;
    readonly lsid: string | null;
    readonly name: string;
    readonly ncbiTaxonNumber: string | null;
    readonly nodeNumber: number | null;
    readonly number1: number | null;
    readonly number2: number | null;
    readonly number3: number | null;
    readonly number4: number | null;
    readonly number5: number | null;
    readonly rankId: number;
    readonly remarks: string | null;
    readonly source: string | null;
    readonly taxonomicSerialNumber: string | null;
    readonly text1: string | null;
    readonly text10: string | null;
    readonly text11: string | null;
    readonly text12: string | null;
    readonly text13: string | null;
    readonly text14: string | null;
    readonly text15: string | null;
    readonly text16: string | null;
    readonly text17: string | null;
    readonly text18: string | null;
    readonly text19: string | null;
    readonly text2: string | null;
    readonly text20: string | null;
    readonly text3: string | null;
    readonly text4: string | null;
    readonly text5: string | null;
    readonly text6: string | null;
    readonly text7: string | null;
    readonly text8: string | null;
    readonly text9: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly unitInd1: string | null;
    readonly unitInd2: string | null;
    readonly unitInd3: string | null;
    readonly unitInd4: string | null;
    readonly unitName1: string | null;
    readonly unitName2: string | null;
    readonly unitName3: string | null;
    readonly unitName4: string | null;
    readonly usfwsCode: string | null;
    readonly version: number | null;
    readonly visibility: number | null;
    readonly yesNo1: boolean | null;
    readonly yesNo10: boolean | null;
    readonly yesNo11: boolean | null;
    readonly yesNo12: boolean | null;
    readonly yesNo13: boolean | null;
    readonly yesNo14: boolean | null;
    readonly yesNo15: boolean | null;
    readonly yesNo16: boolean | null;
    readonly yesNo17: boolean | null;
    readonly yesNo18: boolean | null;
    readonly yesNo19: boolean | null;
    readonly yesNo2: boolean | null;
    readonly yesNo3: boolean | null;
    readonly yesNo4: boolean | null;
    readonly yesNo5: boolean | null;
    readonly yesNo6: boolean | null;
    readonly yesNo7: boolean | null;
    readonly yesNo8: boolean | null;
    readonly yesNo9: boolean | null;
  };
  readonly toOneDependent: { readonly taxonAttribute: TaxonAttribute | null };
  readonly toOneIndependent: {
    readonly acceptedTaxon: Taxon | null;
    readonly createdByAgent: Agent | null;
    readonly definition: TaxonTreeDef;
    readonly definitionItem: TaxonTreeDefItem;
    readonly hybridParent1: Taxon | null;
    readonly hybridParent2: Taxon | null;
    readonly modifiedByAgent: Agent | null;
    readonly parent: Taxon;
    readonly visibilitySetBy: SpecifyUser | null;
  };
  readonly toManyDependent: {
    readonly commonNames: RA<CommonNameTx>;
    readonly taxonAttachments: RA<TaxonAttachment>;
    readonly taxonCitations: RA<TaxonCitation>;
  };
  readonly toManyIndependent: {
    readonly acceptedChildren: RA<Taxon>;
    readonly children: RA<Taxon>;
    readonly collectingEventAttributes: RA<CollectingEventAttribute>;
    readonly determinations: RA<Determination>;
    readonly hybridChildren1: RA<Taxon>;
    readonly hybridChildren2: RA<Taxon>;
  };
};
export type TaxonAttachment = {
  readonly tableName: 'TaxonAttachment';
  readonly fields: {
    readonly ordinal: number;
    readonly remarks: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: { readonly attachment: Attachment };
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
    readonly taxon: Taxon;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type TaxonAttribute = {
  readonly tableName: 'TaxonAttribute';
  readonly fields: {
    readonly date1: string | null;
    readonly date1Precision: number | null;
    readonly number1: number | null;
    readonly number10: number | null;
    readonly number11: number | null;
    readonly number12: number | null;
    readonly number13: number | null;
    readonly number14: number | null;
    readonly number15: number | null;
    readonly number16: number | null;
    readonly number17: number | null;
    readonly number18: number | null;
    readonly number19: number | null;
    readonly number2: number | null;
    readonly number20: number | null;
    readonly number3: number | null;
    readonly number4: number | null;
    readonly number5: number | null;
    readonly number6: number | null;
    readonly number7: number | null;
    readonly number8: number | null;
    readonly number9: number | null;
    readonly remarks: string | null;
    readonly text1: string | null;
    readonly text10: string | null;
    readonly text11: string | null;
    readonly text12: string | null;
    readonly text13: string | null;
    readonly text14: string | null;
    readonly text15: string | null;
    readonly text16: string | null;
    readonly text17: string | null;
    readonly text18: string | null;
    readonly text19: string | null;
    readonly text2: string | null;
    readonly text20: string | null;
    readonly text21: string | null;
    readonly text22: string | null;
    readonly text23: string | null;
    readonly text24: string | null;
    readonly text25: string | null;
    readonly text26: string | null;
    readonly text27: string | null;
    readonly text28: string | null;
    readonly text29: string | null;
    readonly text3: string | null;
    readonly text30: string | null;
    readonly text31: string | null;
    readonly text32: string | null;
    readonly text33: string | null;
    readonly text34: string | null;
    readonly text35: string | null;
    readonly text36: string | null;
    readonly text37: string | null;
    readonly text38: string | null;
    readonly text39: string | null;
    readonly text4: string | null;
    readonly text40: string | null;
    readonly text41: string | null;
    readonly text42: string | null;
    readonly text43: string | null;
    readonly text44: string | null;
    readonly text45: string | null;
    readonly text46: string | null;
    readonly text47: string | null;
    readonly text48: string | null;
    readonly text49: string | null;
    readonly text5: string | null;
    readonly text50: string | null;
    readonly text51: string | null;
    readonly text52: string | null;
    readonly text53: string | null;
    readonly text54: string | null;
    readonly text55: string | null;
    readonly text56: string | null;
    readonly text57: string | null;
    readonly text58: string | null;
    readonly text6: string | null;
    readonly text7: string | null;
    readonly text8: string | null;
    readonly text9: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
    readonly yesNo1: boolean | null;
    readonly yesNo10: boolean | null;
    readonly yesNo11: boolean | null;
    readonly yesNo12: boolean | null;
    readonly yesNo13: boolean | null;
    readonly yesNo14: boolean | null;
    readonly yesNo15: boolean | null;
    readonly yesNo16: boolean | null;
    readonly yesNo17: boolean | null;
    readonly yesNo18: boolean | null;
    readonly yesNo19: boolean | null;
    readonly yesNo2: boolean | null;
    readonly yesNo20: boolean | null;
    readonly yesNo21: boolean | null;
    readonly yesNo22: boolean | null;
    readonly yesNo23: boolean | null;
    readonly yesNo24: boolean | null;
    readonly yesNo25: boolean | null;
    readonly yesNo26: boolean | null;
    readonly yesNo27: boolean | null;
    readonly yesNo28: boolean | null;
    readonly yesNo29: boolean | null;
    readonly yesNo3: boolean | null;
    readonly yesNo30: boolean | null;
    readonly yesNo31: boolean | null;
    readonly yesNo32: boolean | null;
    readonly yesNo33: boolean | null;
    readonly yesNo34: boolean | null;
    readonly yesNo35: boolean | null;
    readonly yesNo36: boolean | null;
    readonly yesNo37: boolean | null;
    readonly yesNo38: boolean | null;
    readonly yesNo39: boolean | null;
    readonly yesNo4: boolean | null;
    readonly yesNo40: boolean | null;
    readonly yesNo41: boolean | null;
    readonly yesNo42: boolean | null;
    readonly yesNo43: boolean | null;
    readonly yesNo44: boolean | null;
    readonly yesNo45: boolean | null;
    readonly yesNo46: boolean | null;
    readonly yesNo47: boolean | null;
    readonly yesNo48: boolean | null;
    readonly yesNo49: boolean | null;
    readonly yesNo5: boolean | null;
    readonly yesNo50: boolean | null;
    readonly yesNo51: boolean | null;
    readonly yesNo52: boolean | null;
    readonly yesNo53: boolean | null;
    readonly yesNo54: boolean | null;
    readonly yesNo55: boolean | null;
    readonly yesNo56: boolean | null;
    readonly yesNo57: boolean | null;
    readonly yesNo58: boolean | null;
    readonly yesNo59: boolean | null;
    readonly yesNo6: boolean | null;
    readonly yesNo60: boolean | null;
    readonly yesNo61: boolean | null;
    readonly yesNo62: boolean | null;
    readonly yesNo63: boolean | null;
    readonly yesNo64: boolean | null;
    readonly yesNo65: boolean | null;
    readonly yesNo66: boolean | null;
    readonly yesNo67: boolean | null;
    readonly yesNo68: boolean | null;
    readonly yesNo69: boolean | null;
    readonly yesNo7: boolean | null;
    readonly yesNo70: boolean | null;
    readonly yesNo71: boolean | null;
    readonly yesNo72: boolean | null;
    readonly yesNo73: boolean | null;
    readonly yesNo74: boolean | null;
    readonly yesNo75: boolean | null;
    readonly yesNo76: boolean | null;
    readonly yesNo77: boolean | null;
    readonly yesNo78: boolean | null;
    readonly yesNo79: boolean | null;
    readonly yesNo8: boolean | null;
    readonly yesNo80: boolean | null;
    readonly yesNo81: boolean | null;
    readonly yesNo82: boolean | null;
    readonly yesNo9: boolean | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly agent1: Agent | null;
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: { readonly taxons: RA<Taxon> };
};
export type TaxonCitation = {
  readonly tableName: 'TaxonCitation';
  readonly fields: {
    readonly figureNumber: string | null;
    readonly isFigured: boolean | null;
    readonly number1: number | null;
    readonly number2: number | null;
    readonly pageNumber: string | null;
    readonly plateNumber: string | null;
    readonly remarks: string | null;
    readonly text1: string | null;
    readonly text2: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
    readonly yesNo1: boolean | null;
    readonly yesNo2: boolean | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
    readonly referenceWork: ReferenceWork;
    readonly taxon: Taxon;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type TaxonTreeDef = {
  readonly tableName: 'TaxonTreeDef';
  readonly fields: {
    readonly fullNameDirection: number | null;
    readonly name: string;
    readonly remarks: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly discipline: Discipline | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: {
    readonly treeDefItems: RA<TaxonTreeDefItem>;
    readonly treeEntries: RA<Taxon>;
  };
};
export type TaxonTreeDefItem = {
  readonly tableName: 'TaxonTreeDefItem';
  readonly fields: {
    readonly formatToken: string | null;
    readonly fullNameSeparator: string | null;
    readonly isEnforced: boolean | null;
    readonly isInFullName: boolean | null;
    readonly name: string;
    readonly rankId: number;
    readonly remarks: string | null;
    readonly textAfter: string | null;
    readonly textBefore: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly title: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
    readonly parent: TaxonTreeDefItem | null;
    readonly treeDef: TaxonTreeDef;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: {
    readonly children: RA<TaxonTreeDefItem>;
    readonly treeEntries: RA<Taxon>;
  };
};
export type TreatmentEvent = {
  readonly tableName: 'TreatmentEvent';
  readonly fields: {
    readonly dateBoxed: string | null;
    readonly dateCleaned: string | null;
    readonly dateCompleted: string | null;
    readonly dateReceived: string | null;
    readonly dateToIsolation: string | null;
    readonly dateTreatmentEnded: string | null;
    readonly dateTreatmentStarted: string | null;
    readonly fieldNumber: string | null;
    readonly location: string | null;
    readonly number1: number | null;
    readonly number2: number | null;
    readonly number3: number | null;
    readonly number4: number | null;
    readonly number5: number | null;
    readonly remarks: string | null;
    readonly text1: string | null;
    readonly text2: string | null;
    readonly text3: string | null;
    readonly text4: string | null;
    readonly text5: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly treatmentNumber: string | null;
    readonly type: string | null;
    readonly version: number | null;
    readonly yesNo1: boolean | null;
    readonly yesNo2: boolean | null;
    readonly yesNo3: boolean | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly accession: Accession | null;
    readonly authorizedBy: Agent | null;
    readonly collectionObject: CollectionObject | null;
    readonly createdByAgent: Agent | null;
    readonly division: Division | null;
    readonly modifiedByAgent: Agent | null;
    readonly performedBy: Agent | null;
  };
  readonly toManyDependent: {
    readonly treatmentEventAttachments: RA<TreatmentEventAttachment>;
  };
  readonly toManyIndependent: RR<never, never>;
};
export type TreatmentEventAttachment = {
  readonly tableName: 'TreatmentEventAttachment';
  readonly fields: {
    readonly ordinal: number;
    readonly remarks: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: { readonly attachment: Attachment };
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
    readonly treatmentEvent: TreatmentEvent;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type VoucherRelationship = {
  readonly tableName: 'VoucherRelationship';
  readonly fields: {
    readonly collectionCode: string | null;
    readonly collectionMemberId: number;
    readonly institutionCode: string | null;
    readonly integer1: number | null;
    readonly integer2: number | null;
    readonly integer3: number | null;
    readonly number1: number | null;
    readonly number2: number | null;
    readonly number3: number | null;
    readonly remarks: string | null;
    readonly text1: string | null;
    readonly text2: string | null;
    readonly text3: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly urlLink: string | null;
    readonly version: number | null;
    readonly voucherNumber: string | null;
    readonly yesNo1: boolean | null;
    readonly yesNo2: boolean | null;
    readonly yesNo3: boolean | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly collectionObject: CollectionObject;
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type Workbench = {
  readonly tableName: 'Workbench';
  readonly fields: {
    readonly allPermissionLevel: number | null;
    readonly dbTableId: number | null;
    readonly exportInstitutionName: string | null;
    readonly exportedFromTableName: string | null;
    readonly formId: number | null;
    readonly groupPermissionLevel: number | null;
    readonly lockedByUserName: string | null;
    readonly name: string | null;
    readonly ownerPermissionLevel: number | null;
    readonly remarks: string | null;
    readonly srcFilePath: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: { readonly workbenchTemplate: WorkbenchTemplate };
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly group: SpPrincipal | null;
    readonly modifiedByAgent: Agent | null;
    readonly specifyUser: SpecifyUser;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: { readonly workbenchRows: RA<WorkbenchRow> };
};
export type WorkbenchDataItem = {
  readonly tableName: 'WorkbenchDataItem';
  readonly fields: {
    readonly cellData: string | null;
    readonly rowNumber: number | null;
    readonly validationStatus: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly workbenchRow: WorkbenchRow;
    readonly workbenchTemplateMappingItem: WorkbenchTemplateMappingItem;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type WorkbenchRow = {
  readonly tableName: 'WorkbenchRow';
  readonly fields: {
    readonly bioGeomancerResults: string | null;
    readonly cardImageData: string | null;
    readonly cardImageFullPath: string | null;
    readonly errorEstimate: number | null;
    readonly errorPolygon: string | null;
    readonly lat1Text: string | null;
    readonly lat2Text: string | null;
    readonly long1Text: string | null;
    readonly long2Text: string | null;
    readonly recordId: number | null;
    readonly rowNumber: number | null;
    readonly sgrStatus: number | null;
    readonly uploadStatus: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: { readonly workbench: Workbench };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: {
    readonly workbenchDataItems: RA<WorkbenchDataItem>;
    readonly workbenchRowExportedRelationships: RA<WorkbenchRowExportedRelationship>;
    readonly workbenchRowImages: RA<WorkbenchRowImage>;
  };
};
export type WorkbenchRowExportedRelationship = {
  readonly tableName: 'WorkbenchRowExportedRelationship';
  readonly fields: {
    readonly recordId: number | null;
    readonly relationshipName: string | null;
    readonly sequence: number | null;
    readonly tableName: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
    readonly workbenchRow: WorkbenchRow;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type WorkbenchRowImage = {
  readonly tableName: 'WorkbenchRowImage';
  readonly fields: {
    readonly attachToTableName: string | null;
    readonly cardImageData: string | null;
    readonly cardImageFullPath: string | null;
    readonly imageOrder: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: { readonly workbenchRow: WorkbenchRow };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: RR<never, never>;
};
export type WorkbenchTemplate = {
  readonly tableName: 'WorkbenchTemplate';
  readonly fields: {
    readonly name: string | null;
    readonly remarks: string | null;
    readonly srcFilePath: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
    readonly specifyUser: SpecifyUser;
  };
  readonly toManyDependent: {
    readonly workbenchTemplateMappingItems: RA<WorkbenchTemplateMappingItem>;
  };
  readonly toManyIndependent: { readonly workbenches: RA<Workbench> };
};
export type WorkbenchTemplateMappingItem = {
  readonly tableName: 'WorkbenchTemplateMappingItem';
  readonly fields: {
    readonly caption: string | null;
    readonly carryForward: boolean | null;
    readonly dataFieldLength: number | null;
    readonly fieldName: string | null;
    readonly fieldType: number | null;
    readonly importedColName: string | null;
    readonly isEditable: boolean | null;
    readonly isExportableToContent: boolean | null;
    readonly isIncludedInTitle: boolean | null;
    readonly isRequired: boolean | null;
    readonly metaData: string | null;
    readonly origImportColumnIndex: number | null;
    readonly srcTableId: number | null;
    readonly tableName: string | null;
    readonly timestampCreated: string;
    readonly timestampModified: string | null;
    readonly version: number | null;
    readonly viewOrder: number | null;
    readonly xCoord: number | null;
    readonly yCoord: number | null;
  };
  readonly toOneDependent: RR<never, never>;
  readonly toOneIndependent: {
    readonly createdByAgent: Agent | null;
    readonly modifiedByAgent: Agent | null;
    readonly workbenchTemplate: WorkbenchTemplate;
  };
  readonly toManyDependent: RR<never, never>;
  readonly toManyIndependent: {
    readonly workbenchDataItems: RA<WorkbenchDataItem>;
  };
};
