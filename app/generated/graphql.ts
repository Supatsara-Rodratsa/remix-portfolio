import type { GraphQLClient } from 'graphql-request'
import type * as Dom from 'graphql-request/src/types.dom'
import gql from 'graphql-tag'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Date: any
  DateTime: any
  Hex: any
  Json: any
  Long: any
  RGBAHue: any
  RGBATransparency: any
  RichTextAST: any
}

export type Aggregate = {
  count: Scalars['Int']
}

/** Asset system model */
export type Asset = Node & {
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy?: Maybe<User>
  /** Get the document in other stages */
  documentInStages: Array<Asset>
  /** The file name */
  fileName: Scalars['String']
  /** The file handle */
  handle: Scalars['String']
  /** The height of the file */
  height?: Maybe<Scalars['Float']>
  /** List of Asset versions */
  history: Array<Version>
  iconPersonalInfo: Array<PersonalInfo>
  /** The unique identifier */
  id: Scalars['ID']
  imagePersonalInfo: Array<PersonalInfo>
  imageProject: Array<Project>
  imageSoftware: Array<Software>
  imageTechnicalSkill: Array<TechnicalSkill>
  /** System Locale field */
  locale: Locale
  /** Get the other localizations for this document */
  localizations: Array<Asset>
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>
  profileImage1PersonalInfo: Array<PersonalInfo>
  profileImage2PersonalInfo: Array<PersonalInfo>
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  scheduledIn: Array<ScheduledOperation>
  /** The file size */
  size?: Maybe<Scalars['Float']>
  /** System stage field */
  stage: Stage
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String']
  videoVideo: Array<Video>
  /** The file width */
  width?: Maybe<Scalars['Float']>
}

/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation
}

/** Asset system model */
export type AssetCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: InputMaybe<Stage>
}

/** Asset system model */
export type AssetIconPersonalInfoArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<PersonalInfoOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<PersonalInfoWhereInput>
}

/** Asset system model */
export type AssetImagePersonalInfoArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<PersonalInfoOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<PersonalInfoWhereInput>
}

/** Asset system model */
export type AssetImageProjectArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<ProjectOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ProjectWhereInput>
}

/** Asset system model */
export type AssetImageSoftwareArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<SoftwareOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<SoftwareWhereInput>
}

/** Asset system model */
export type AssetImageTechnicalSkillArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<TechnicalSkillOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<TechnicalSkillWhereInput>
}

/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']
  locales?: Array<Locale>
}

/** Asset system model */
export type AssetProfileImage1PersonalInfoArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<PersonalInfoOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<PersonalInfoWhereInput>
}

/** Asset system model */
export type AssetProfileImage2PersonalInfoArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<PersonalInfoOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<PersonalInfoWhereInput>
}

/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation
}

/** Asset system model */
export type AssetPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation
}

/** Asset system model */
export type AssetUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>
}

/** Asset system model */
export type AssetVideoVideoArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<VideoOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<VideoWhereInput>
}

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: AssetWhereUniqueInput
}

/** A connection to a list of items. */
export type AssetConnection = {
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<AssetEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type AssetCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>
  fileName: Scalars['String']
  handle: Scalars['String']
  height?: InputMaybe<Scalars['Float']>
  iconPersonalInfo?: InputMaybe<PersonalInfoCreateManyInlineInput>
  imagePersonalInfo?: InputMaybe<PersonalInfoCreateManyInlineInput>
  imageProject?: InputMaybe<ProjectCreateManyInlineInput>
  imageSoftware?: InputMaybe<SoftwareCreateManyInlineInput>
  imageTechnicalSkill?: InputMaybe<TechnicalSkillCreateManyInlineInput>
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>
  mimeType?: InputMaybe<Scalars['String']>
  profileImage1PersonalInfo?: InputMaybe<PersonalInfoCreateManyInlineInput>
  profileImage2PersonalInfo?: InputMaybe<PersonalInfoCreateManyInlineInput>
  size?: InputMaybe<Scalars['Float']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  videoVideo?: InputMaybe<VideoCreateManyInlineInput>
  width?: InputMaybe<Scalars['Float']>
}

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>
  fileName: Scalars['String']
  handle: Scalars['String']
  height?: InputMaybe<Scalars['Float']>
  mimeType?: InputMaybe<Scalars['String']>
  size?: InputMaybe<Scalars['Float']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  width?: InputMaybe<Scalars['Float']>
}

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput
  locale: Locale
}

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>
}

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>
}

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>
}

/** An edge in a connection. */
export type AssetEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: Asset
}

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<AssetWhereStageInput>
  documentInStages_none?: InputMaybe<AssetWhereStageInput>
  documentInStages_some?: InputMaybe<AssetWhereStageInput>
  iconPersonalInfo_every?: InputMaybe<PersonalInfoWhereInput>
  iconPersonalInfo_none?: InputMaybe<PersonalInfoWhereInput>
  iconPersonalInfo_some?: InputMaybe<PersonalInfoWhereInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  imagePersonalInfo_every?: InputMaybe<PersonalInfoWhereInput>
  imagePersonalInfo_none?: InputMaybe<PersonalInfoWhereInput>
  imagePersonalInfo_some?: InputMaybe<PersonalInfoWhereInput>
  imageProject_every?: InputMaybe<ProjectWhereInput>
  imageProject_none?: InputMaybe<ProjectWhereInput>
  imageProject_some?: InputMaybe<ProjectWhereInput>
  imageSoftware_every?: InputMaybe<SoftwareWhereInput>
  imageSoftware_none?: InputMaybe<SoftwareWhereInput>
  imageSoftware_some?: InputMaybe<SoftwareWhereInput>
  imageTechnicalSkill_every?: InputMaybe<TechnicalSkillWhereInput>
  imageTechnicalSkill_none?: InputMaybe<TechnicalSkillWhereInput>
  imageTechnicalSkill_some?: InputMaybe<TechnicalSkillWhereInput>
  profileImage1PersonalInfo_every?: InputMaybe<PersonalInfoWhereInput>
  profileImage1PersonalInfo_none?: InputMaybe<PersonalInfoWhereInput>
  profileImage1PersonalInfo_some?: InputMaybe<PersonalInfoWhereInput>
  profileImage2PersonalInfo_every?: InputMaybe<PersonalInfoWhereInput>
  profileImage2PersonalInfo_none?: InputMaybe<PersonalInfoWhereInput>
  profileImage2PersonalInfo_some?: InputMaybe<PersonalInfoWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
  videoVideo_every?: InputMaybe<VideoWhereInput>
  videoVideo_none?: InputMaybe<VideoWhereInput>
  videoVideo_some?: InputMaybe<VideoWhereInput>
}

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>
  image?: InputMaybe<ImageTransformationInput>
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']>
}

export type AssetUpdateInput = {
  fileName?: InputMaybe<Scalars['String']>
  handle?: InputMaybe<Scalars['String']>
  height?: InputMaybe<Scalars['Float']>
  iconPersonalInfo?: InputMaybe<PersonalInfoUpdateManyInlineInput>
  imagePersonalInfo?: InputMaybe<PersonalInfoUpdateManyInlineInput>
  imageProject?: InputMaybe<ProjectUpdateManyInlineInput>
  imageSoftware?: InputMaybe<SoftwareUpdateManyInlineInput>
  imageTechnicalSkill?: InputMaybe<TechnicalSkillUpdateManyInlineInput>
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>
  mimeType?: InputMaybe<Scalars['String']>
  profileImage1PersonalInfo?: InputMaybe<PersonalInfoUpdateManyInlineInput>
  profileImage2PersonalInfo?: InputMaybe<PersonalInfoUpdateManyInlineInput>
  size?: InputMaybe<Scalars['Float']>
  videoVideo?: InputMaybe<VideoUpdateManyInlineInput>
  width?: InputMaybe<Scalars['Float']>
}

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>
  handle?: InputMaybe<Scalars['String']>
  height?: InputMaybe<Scalars['Float']>
  mimeType?: InputMaybe<Scalars['String']>
  size?: InputMaybe<Scalars['Float']>
  width?: InputMaybe<Scalars['Float']>
}

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput
  locale: Locale
}

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>
}

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>
}

export type AssetUpdateManyInput = {
  fileName?: InputMaybe<Scalars['String']>
  height?: InputMaybe<Scalars['Float']>
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>
  mimeType?: InputMaybe<Scalars['String']>
  size?: InputMaybe<Scalars['Float']>
  width?: InputMaybe<Scalars['Float']>
}

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>
  height?: InputMaybe<Scalars['Float']>
  mimeType?: InputMaybe<Scalars['String']>
  size?: InputMaybe<Scalars['Float']>
  width?: InputMaybe<Scalars['Float']>
}

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput
  locale: Locale
}

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>
}

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput
  /** Document search */
  where: AssetWhereInput
}

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']>
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']>
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>
}

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput
  /** Unique document search */
  where: AssetWhereUniqueInput
}

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput
  /** Update document if it exists */
  update: AssetUpdateInput
}

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput
  locale: Locale
  update: AssetUpdateLocalizationDataInput
}

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput
  /** Unique document search */
  where: AssetWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>
}

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<AssetWhereStageInput>
  documentInStages_none?: InputMaybe<AssetWhereStageInput>
  documentInStages_some?: InputMaybe<AssetWhereStageInput>
  fileName?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  fileName_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']>
  handle?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  handle_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']>
  height?: InputMaybe<Scalars['Float']>
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']>
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']>
  /** Any other value that exists and is not equal to the given value. */
  height_not?: InputMaybe<Scalars['Float']>
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  iconPersonalInfo_every?: InputMaybe<PersonalInfoWhereInput>
  iconPersonalInfo_none?: InputMaybe<PersonalInfoWhereInput>
  iconPersonalInfo_some?: InputMaybe<PersonalInfoWhereInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  imagePersonalInfo_every?: InputMaybe<PersonalInfoWhereInput>
  imagePersonalInfo_none?: InputMaybe<PersonalInfoWhereInput>
  imagePersonalInfo_some?: InputMaybe<PersonalInfoWhereInput>
  imageProject_every?: InputMaybe<ProjectWhereInput>
  imageProject_none?: InputMaybe<ProjectWhereInput>
  imageProject_some?: InputMaybe<ProjectWhereInput>
  imageSoftware_every?: InputMaybe<SoftwareWhereInput>
  imageSoftware_none?: InputMaybe<SoftwareWhereInput>
  imageSoftware_some?: InputMaybe<SoftwareWhereInput>
  imageTechnicalSkill_every?: InputMaybe<TechnicalSkillWhereInput>
  imageTechnicalSkill_none?: InputMaybe<TechnicalSkillWhereInput>
  imageTechnicalSkill_some?: InputMaybe<TechnicalSkillWhereInput>
  mimeType?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  mimeType_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']>
  profileImage1PersonalInfo_every?: InputMaybe<PersonalInfoWhereInput>
  profileImage1PersonalInfo_none?: InputMaybe<PersonalInfoWhereInput>
  profileImage1PersonalInfo_some?: InputMaybe<PersonalInfoWhereInput>
  profileImage2PersonalInfo_every?: InputMaybe<PersonalInfoWhereInput>
  profileImage2PersonalInfo_none?: InputMaybe<PersonalInfoWhereInput>
  profileImage2PersonalInfo_some?: InputMaybe<PersonalInfoWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  size?: InputMaybe<Scalars['Float']>
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']>
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']>
  /** Any other value that exists and is not equal to the given value. */
  size_not?: InputMaybe<Scalars['Float']>
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
  videoVideo_every?: InputMaybe<VideoWhereInput>
  videoVideo_none?: InputMaybe<VideoWhereInput>
  videoVideo_some?: InputMaybe<VideoWhereInput>
  width?: InputMaybe<Scalars['Float']>
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']>
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']>
  /** Any other value that exists and is not equal to the given value. */
  width_not?: InputMaybe<Scalars['Float']>
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AssetWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
}

export type BatchPayload = {
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long']
}

export type Certificate = Node & {
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy?: Maybe<User>
  /** Get the document in other stages */
  documentInStages: Array<Certificate>
  /** List of Certificate versions */
  history: Array<Version>
  /** The unique identifier */
  id: Scalars['ID']
  name: Scalars['String']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  scheduledIn: Array<ScheduledOperation>
  /** System stage field */
  stage: Stage
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
  year: Scalars['String']
}

export type CertificateCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type CertificateDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

export type CertificateHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: InputMaybe<Stage>
}

export type CertificatePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type CertificateScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type CertificateUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type CertificateConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: CertificateWhereUniqueInput
}

/** A connection to a list of items. */
export type CertificateConnection = {
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<CertificateEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type CertificateCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>
  name: Scalars['String']
  updatedAt?: InputMaybe<Scalars['DateTime']>
  year: Scalars['String']
}

export type CertificateCreateManyInlineInput = {
  /** Connect multiple existing Certificate documents */
  connect?: InputMaybe<Array<CertificateWhereUniqueInput>>
  /** Create and connect multiple existing Certificate documents */
  create?: InputMaybe<Array<CertificateCreateInput>>
}

export type CertificateCreateOneInlineInput = {
  /** Connect one existing Certificate document */
  connect?: InputMaybe<CertificateWhereUniqueInput>
  /** Create and connect one Certificate document */
  create?: InputMaybe<CertificateCreateInput>
}

/** An edge in a connection. */
export type CertificateEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: Certificate
}

/** Identifies documents */
export type CertificateManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CertificateWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CertificateWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CertificateWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<CertificateWhereStageInput>
  documentInStages_none?: InputMaybe<CertificateWhereStageInput>
  documentInStages_some?: InputMaybe<CertificateWhereStageInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  name?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
  year?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  year_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  year_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  year_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  year_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  year_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  year_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  year_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  year_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  year_starts_with?: InputMaybe<Scalars['String']>
}

export enum CertificateOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  YearAsc = 'year_ASC',
  YearDesc = 'year_DESC',
}

export type CertificateUpdateInput = {
  name?: InputMaybe<Scalars['String']>
  year?: InputMaybe<Scalars['String']>
}

export type CertificateUpdateManyInlineInput = {
  /** Connect multiple existing Certificate documents */
  connect?: InputMaybe<Array<CertificateConnectInput>>
  /** Create and connect multiple Certificate documents */
  create?: InputMaybe<Array<CertificateCreateInput>>
  /** Delete multiple Certificate documents */
  delete?: InputMaybe<Array<CertificateWhereUniqueInput>>
  /** Disconnect multiple Certificate documents */
  disconnect?: InputMaybe<Array<CertificateWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Certificate documents */
  set?: InputMaybe<Array<CertificateWhereUniqueInput>>
  /** Update multiple Certificate documents */
  update?: InputMaybe<Array<CertificateUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Certificate documents */
  upsert?: InputMaybe<Array<CertificateUpsertWithNestedWhereUniqueInput>>
}

export type CertificateUpdateManyInput = {
  name?: InputMaybe<Scalars['String']>
  year?: InputMaybe<Scalars['String']>
}

export type CertificateUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CertificateUpdateManyInput
  /** Document search */
  where: CertificateWhereInput
}

export type CertificateUpdateOneInlineInput = {
  /** Connect existing Certificate document */
  connect?: InputMaybe<CertificateWhereUniqueInput>
  /** Create and connect one Certificate document */
  create?: InputMaybe<CertificateCreateInput>
  /** Delete currently connected Certificate document */
  delete?: InputMaybe<Scalars['Boolean']>
  /** Disconnect currently connected Certificate document */
  disconnect?: InputMaybe<Scalars['Boolean']>
  /** Update single Certificate document */
  update?: InputMaybe<CertificateUpdateWithNestedWhereUniqueInput>
  /** Upsert single Certificate document */
  upsert?: InputMaybe<CertificateUpsertWithNestedWhereUniqueInput>
}

export type CertificateUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CertificateUpdateInput
  /** Unique document search */
  where: CertificateWhereUniqueInput
}

export type CertificateUpsertInput = {
  /** Create document if it didn't exist */
  create: CertificateCreateInput
  /** Update document if it exists */
  update: CertificateUpdateInput
}

export type CertificateUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CertificateUpsertInput
  /** Unique document search */
  where: CertificateWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type CertificateWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>
}

/** Identifies documents */
export type CertificateWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CertificateWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CertificateWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CertificateWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<CertificateWhereStageInput>
  documentInStages_none?: InputMaybe<CertificateWhereStageInput>
  documentInStages_some?: InputMaybe<CertificateWhereStageInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  name?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
  year?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  year_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  year_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  year_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  year_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  year_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  year_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  year_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  year_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  year_starts_with?: InputMaybe<Scalars['String']>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type CertificateWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CertificateWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CertificateWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CertificateWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<CertificateWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References Certificate record uniquely */
export type CertificateWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
}

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  css: Scalars['String']
  hex: Scalars['Hex']
  rgba: Rgba
}

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']>
  rgba?: InputMaybe<RgbaInput>
}

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']>
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']>
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']>
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']>
}

export type Contact = Node & {
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy?: Maybe<User>
  /** Get the document in other stages */
  documentInStages: Array<Contact>
  email?: Maybe<Scalars['String']>
  github?: Maybe<Scalars['String']>
  /** List of Contact versions */
  history: Array<Version>
  /** The unique identifier */
  id: Scalars['ID']
  linkedIn?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  scheduledIn: Array<ScheduledOperation>
  /** System stage field */
  stage: Stage
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
}

export type ContactCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type ContactDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

export type ContactHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: InputMaybe<Stage>
}

export type ContactPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type ContactScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type ContactUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type ContactConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: ContactWhereUniqueInput
}

/** A connection to a list of items. */
export type ContactConnection = {
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<ContactEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type ContactCreateInput = {
  clfr09qbo0nu901ui9gqr0lbe?: InputMaybe<PersonalInfoCreateManyInlineInput>
  createdAt?: InputMaybe<Scalars['DateTime']>
  email?: InputMaybe<Scalars['String']>
  github?: InputMaybe<Scalars['String']>
  linkedIn?: InputMaybe<Scalars['String']>
  location?: InputMaybe<Scalars['String']>
  phone?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type ContactCreateManyInlineInput = {
  /** Connect multiple existing Contact documents */
  connect?: InputMaybe<Array<ContactWhereUniqueInput>>
  /** Create and connect multiple existing Contact documents */
  create?: InputMaybe<Array<ContactCreateInput>>
}

export type ContactCreateOneInlineInput = {
  /** Connect one existing Contact document */
  connect?: InputMaybe<ContactWhereUniqueInput>
  /** Create and connect one Contact document */
  create?: InputMaybe<ContactCreateInput>
}

/** An edge in a connection. */
export type ContactEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: Contact
}

/** Identifies documents */
export type ContactManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ContactWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ContactWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ContactWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<ContactWhereStageInput>
  documentInStages_none?: InputMaybe<ContactWhereStageInput>
  documentInStages_some?: InputMaybe<ContactWhereStageInput>
  email?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']>
  github?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  github_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  github_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  github_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  github_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  github_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  github_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  github_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  github_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  github_starts_with?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  linkedIn?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  linkedIn_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  linkedIn_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  linkedIn_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  linkedIn_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  linkedIn_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  linkedIn_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  linkedIn_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  linkedIn_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  linkedIn_starts_with?: InputMaybe<Scalars['String']>
  location?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  location_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  location_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  location_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  location_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  location_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  location_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  location_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  location_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  location_starts_with?: InputMaybe<Scalars['String']>
  phone?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  phone_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  phone_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  phone_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  phone_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  phone_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  phone_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  phone_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  phone_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  phone_starts_with?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum ContactOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  GithubAsc = 'github_ASC',
  GithubDesc = 'github_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LinkedInAsc = 'linkedIn_ASC',
  LinkedInDesc = 'linkedIn_DESC',
  LocationAsc = 'location_ASC',
  LocationDesc = 'location_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type ContactUpdateInput = {
  clfr09qbo0nu901ui9gqr0lbe?: InputMaybe<PersonalInfoUpdateManyInlineInput>
  email?: InputMaybe<Scalars['String']>
  github?: InputMaybe<Scalars['String']>
  linkedIn?: InputMaybe<Scalars['String']>
  location?: InputMaybe<Scalars['String']>
  phone?: InputMaybe<Scalars['String']>
}

export type ContactUpdateManyInlineInput = {
  /** Connect multiple existing Contact documents */
  connect?: InputMaybe<Array<ContactConnectInput>>
  /** Create and connect multiple Contact documents */
  create?: InputMaybe<Array<ContactCreateInput>>
  /** Delete multiple Contact documents */
  delete?: InputMaybe<Array<ContactWhereUniqueInput>>
  /** Disconnect multiple Contact documents */
  disconnect?: InputMaybe<Array<ContactWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Contact documents */
  set?: InputMaybe<Array<ContactWhereUniqueInput>>
  /** Update multiple Contact documents */
  update?: InputMaybe<Array<ContactUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Contact documents */
  upsert?: InputMaybe<Array<ContactUpsertWithNestedWhereUniqueInput>>
}

export type ContactUpdateManyInput = {
  email?: InputMaybe<Scalars['String']>
  github?: InputMaybe<Scalars['String']>
  linkedIn?: InputMaybe<Scalars['String']>
  location?: InputMaybe<Scalars['String']>
  phone?: InputMaybe<Scalars['String']>
}

export type ContactUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ContactUpdateManyInput
  /** Document search */
  where: ContactWhereInput
}

export type ContactUpdateOneInlineInput = {
  /** Connect existing Contact document */
  connect?: InputMaybe<ContactWhereUniqueInput>
  /** Create and connect one Contact document */
  create?: InputMaybe<ContactCreateInput>
  /** Delete currently connected Contact document */
  delete?: InputMaybe<Scalars['Boolean']>
  /** Disconnect currently connected Contact document */
  disconnect?: InputMaybe<Scalars['Boolean']>
  /** Update single Contact document */
  update?: InputMaybe<ContactUpdateWithNestedWhereUniqueInput>
  /** Upsert single Contact document */
  upsert?: InputMaybe<ContactUpsertWithNestedWhereUniqueInput>
}

export type ContactUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ContactUpdateInput
  /** Unique document search */
  where: ContactWhereUniqueInput
}

export type ContactUpsertInput = {
  /** Create document if it didn't exist */
  create: ContactCreateInput
  /** Update document if it exists */
  update: ContactUpdateInput
}

export type ContactUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ContactUpsertInput
  /** Unique document search */
  where: ContactWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type ContactWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>
}

/** Identifies documents */
export type ContactWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ContactWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ContactWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ContactWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<ContactWhereStageInput>
  documentInStages_none?: InputMaybe<ContactWhereStageInput>
  documentInStages_some?: InputMaybe<ContactWhereStageInput>
  email?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']>
  github?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  github_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  github_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  github_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  github_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  github_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  github_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  github_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  github_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  github_starts_with?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  linkedIn?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  linkedIn_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  linkedIn_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  linkedIn_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  linkedIn_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  linkedIn_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  linkedIn_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  linkedIn_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  linkedIn_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  linkedIn_starts_with?: InputMaybe<Scalars['String']>
  location?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  location_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  location_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  location_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  location_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  location_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  location_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  location_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  location_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  location_starts_with?: InputMaybe<Scalars['String']>
  phone?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  phone_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  phone_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  phone_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  phone_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  phone_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  phone_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  phone_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  phone_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  phone_starts_with?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ContactWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ContactWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ContactWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ContactWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ContactWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References Contact record uniquely */
export type ContactWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
}

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx',
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>
}

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>
}

export type DocumentVersion = {
  createdAt: Scalars['DateTime']
  data?: Maybe<Scalars['Json']>
  id: Scalars['ID']
  revision: Scalars['Int']
  stage: Stage
}

export type Education = Node & {
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy?: Maybe<User>
  /** Get the document in other stages */
  documentInStages: Array<Education>
  grade?: Maybe<Scalars['String']>
  /** List of Education versions */
  history: Array<Version>
  /** The unique identifier */
  id: Scalars['ID']
  isFirstClassHonours?: Maybe<Scalars['Boolean']>
  link?: Maybe<Scalars['String']>
  location: Scalars['String']
  period?: Maybe<Scalars['String']>
  program: Scalars['String']
  programs: Array<Program>
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  scheduledIn: Array<ScheduledOperation>
  sequence: Scalars['Int']
  /** System stage field */
  stage: Stage
  universityName: Scalars['String']
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
}

export type EducationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type EducationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

export type EducationHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: InputMaybe<Stage>
}

export type EducationProgramsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<ProgramOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ProgramWhereInput>
}

export type EducationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type EducationScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type EducationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type EducationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: EducationWhereUniqueInput
}

/** A connection to a list of items. */
export type EducationConnection = {
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<EducationEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type EducationCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>
  grade?: InputMaybe<Scalars['String']>
  isFirstClassHonours?: InputMaybe<Scalars['Boolean']>
  link?: InputMaybe<Scalars['String']>
  location: Scalars['String']
  period?: InputMaybe<Scalars['String']>
  program: Scalars['String']
  programs?: InputMaybe<ProgramCreateManyInlineInput>
  sequence: Scalars['Int']
  universityName: Scalars['String']
  updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type EducationCreateManyInlineInput = {
  /** Connect multiple existing Education documents */
  connect?: InputMaybe<Array<EducationWhereUniqueInput>>
  /** Create and connect multiple existing Education documents */
  create?: InputMaybe<Array<EducationCreateInput>>
}

export type EducationCreateOneInlineInput = {
  /** Connect one existing Education document */
  connect?: InputMaybe<EducationWhereUniqueInput>
  /** Create and connect one Education document */
  create?: InputMaybe<EducationCreateInput>
}

/** An edge in a connection. */
export type EducationEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: Education
}

/** Identifies documents */
export type EducationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<EducationWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<EducationWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<EducationWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<EducationWhereStageInput>
  documentInStages_none?: InputMaybe<EducationWhereStageInput>
  documentInStages_some?: InputMaybe<EducationWhereStageInput>
  grade?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  grade_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  grade_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  grade_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  grade_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  grade_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  grade_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  grade_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  grade_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  grade_starts_with?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  isFirstClassHonours?: InputMaybe<Scalars['Boolean']>
  /** Any other value that exists and is not equal to the given value. */
  isFirstClassHonours_not?: InputMaybe<Scalars['Boolean']>
  link?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  link_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  link_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  link_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  link_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  link_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  link_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  link_starts_with?: InputMaybe<Scalars['String']>
  location?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  location_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  location_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  location_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  location_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  location_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  location_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  location_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  location_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  location_starts_with?: InputMaybe<Scalars['String']>
  period?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  period_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  period_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  period_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  period_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  period_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  period_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  period_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  period_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  period_starts_with?: InputMaybe<Scalars['String']>
  program?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  program_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  program_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  program_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  program_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  program_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  program_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  program_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  program_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  program_starts_with?: InputMaybe<Scalars['String']>
  programs_every?: InputMaybe<ProgramWhereInput>
  programs_none?: InputMaybe<ProgramWhereInput>
  programs_some?: InputMaybe<ProgramWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  sequence?: InputMaybe<Scalars['Int']>
  /** All values greater than the given value. */
  sequence_gt?: InputMaybe<Scalars['Int']>
  /** All values greater than or equal the given value. */
  sequence_gte?: InputMaybe<Scalars['Int']>
  /** All values that are contained in given list. */
  sequence_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  /** All values less than the given value. */
  sequence_lt?: InputMaybe<Scalars['Int']>
  /** All values less than or equal the given value. */
  sequence_lte?: InputMaybe<Scalars['Int']>
  /** Any other value that exists and is not equal to the given value. */
  sequence_not?: InputMaybe<Scalars['Int']>
  /** All values that are not contained in given list. */
  sequence_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  universityName?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  universityName_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  universityName_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  universityName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  universityName_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  universityName_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  universityName_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  universityName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  universityName_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  universityName_starts_with?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum EducationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  GradeAsc = 'grade_ASC',
  GradeDesc = 'grade_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsFirstClassHonoursAsc = 'isFirstClassHonours_ASC',
  IsFirstClassHonoursDesc = 'isFirstClassHonours_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  LocationAsc = 'location_ASC',
  LocationDesc = 'location_DESC',
  PeriodAsc = 'period_ASC',
  PeriodDesc = 'period_DESC',
  ProgramAsc = 'program_ASC',
  ProgramDesc = 'program_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SequenceAsc = 'sequence_ASC',
  SequenceDesc = 'sequence_DESC',
  UniversityNameAsc = 'universityName_ASC',
  UniversityNameDesc = 'universityName_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type EducationUpdateInput = {
  grade?: InputMaybe<Scalars['String']>
  isFirstClassHonours?: InputMaybe<Scalars['Boolean']>
  link?: InputMaybe<Scalars['String']>
  location?: InputMaybe<Scalars['String']>
  period?: InputMaybe<Scalars['String']>
  program?: InputMaybe<Scalars['String']>
  programs?: InputMaybe<ProgramUpdateManyInlineInput>
  sequence?: InputMaybe<Scalars['Int']>
  universityName?: InputMaybe<Scalars['String']>
}

export type EducationUpdateManyInlineInput = {
  /** Connect multiple existing Education documents */
  connect?: InputMaybe<Array<EducationConnectInput>>
  /** Create and connect multiple Education documents */
  create?: InputMaybe<Array<EducationCreateInput>>
  /** Delete multiple Education documents */
  delete?: InputMaybe<Array<EducationWhereUniqueInput>>
  /** Disconnect multiple Education documents */
  disconnect?: InputMaybe<Array<EducationWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Education documents */
  set?: InputMaybe<Array<EducationWhereUniqueInput>>
  /** Update multiple Education documents */
  update?: InputMaybe<Array<EducationUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Education documents */
  upsert?: InputMaybe<Array<EducationUpsertWithNestedWhereUniqueInput>>
}

export type EducationUpdateManyInput = {
  grade?: InputMaybe<Scalars['String']>
  isFirstClassHonours?: InputMaybe<Scalars['Boolean']>
  link?: InputMaybe<Scalars['String']>
  location?: InputMaybe<Scalars['String']>
  period?: InputMaybe<Scalars['String']>
  program?: InputMaybe<Scalars['String']>
  sequence?: InputMaybe<Scalars['Int']>
  universityName?: InputMaybe<Scalars['String']>
}

export type EducationUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: EducationUpdateManyInput
  /** Document search */
  where: EducationWhereInput
}

export type EducationUpdateOneInlineInput = {
  /** Connect existing Education document */
  connect?: InputMaybe<EducationWhereUniqueInput>
  /** Create and connect one Education document */
  create?: InputMaybe<EducationCreateInput>
  /** Delete currently connected Education document */
  delete?: InputMaybe<Scalars['Boolean']>
  /** Disconnect currently connected Education document */
  disconnect?: InputMaybe<Scalars['Boolean']>
  /** Update single Education document */
  update?: InputMaybe<EducationUpdateWithNestedWhereUniqueInput>
  /** Upsert single Education document */
  upsert?: InputMaybe<EducationUpsertWithNestedWhereUniqueInput>
}

export type EducationUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: EducationUpdateInput
  /** Unique document search */
  where: EducationWhereUniqueInput
}

export type EducationUpsertInput = {
  /** Create document if it didn't exist */
  create: EducationCreateInput
  /** Update document if it exists */
  update: EducationUpdateInput
}

export type EducationUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: EducationUpsertInput
  /** Unique document search */
  where: EducationWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type EducationWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>
}

/** Identifies documents */
export type EducationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<EducationWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<EducationWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<EducationWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<EducationWhereStageInput>
  documentInStages_none?: InputMaybe<EducationWhereStageInput>
  documentInStages_some?: InputMaybe<EducationWhereStageInput>
  grade?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  grade_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  grade_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  grade_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  grade_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  grade_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  grade_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  grade_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  grade_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  grade_starts_with?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  isFirstClassHonours?: InputMaybe<Scalars['Boolean']>
  /** Any other value that exists and is not equal to the given value. */
  isFirstClassHonours_not?: InputMaybe<Scalars['Boolean']>
  link?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  link_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  link_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  link_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  link_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  link_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  link_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  link_starts_with?: InputMaybe<Scalars['String']>
  location?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  location_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  location_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  location_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  location_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  location_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  location_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  location_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  location_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  location_starts_with?: InputMaybe<Scalars['String']>
  period?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  period_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  period_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  period_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  period_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  period_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  period_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  period_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  period_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  period_starts_with?: InputMaybe<Scalars['String']>
  program?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  program_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  program_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  program_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  program_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  program_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  program_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  program_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  program_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  program_starts_with?: InputMaybe<Scalars['String']>
  programs_every?: InputMaybe<ProgramWhereInput>
  programs_none?: InputMaybe<ProgramWhereInput>
  programs_some?: InputMaybe<ProgramWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  sequence?: InputMaybe<Scalars['Int']>
  /** All values greater than the given value. */
  sequence_gt?: InputMaybe<Scalars['Int']>
  /** All values greater than or equal the given value. */
  sequence_gte?: InputMaybe<Scalars['Int']>
  /** All values that are contained in given list. */
  sequence_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  /** All values less than the given value. */
  sequence_lt?: InputMaybe<Scalars['Int']>
  /** All values less than or equal the given value. */
  sequence_lte?: InputMaybe<Scalars['Int']>
  /** Any other value that exists and is not equal to the given value. */
  sequence_not?: InputMaybe<Scalars['Int']>
  /** All values that are not contained in given list. */
  sequence_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  universityName?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  universityName_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  universityName_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  universityName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  universityName_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  universityName_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  universityName_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  universityName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  universityName_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  universityName_starts_with?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type EducationWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<EducationWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<EducationWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<EducationWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<EducationWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References Education record uniquely */
export type EducationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
}

export type Experience = Node & {
  companyName?: Maybe<Scalars['String']>
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy?: Maybe<User>
  /** Get the document in other stages */
  documentInStages: Array<Experience>
  hideDash?: Maybe<Scalars['Boolean']>
  hideName?: Maybe<Scalars['Boolean']>
  /** List of Experience versions */
  history: Array<Version>
  /** The unique identifier */
  id: Scalars['ID']
  link?: Maybe<Scalars['String']>
  location: Scalars['String']
  position?: Maybe<Position>
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  scheduledIn: Array<ScheduledOperation>
  sequence: Scalars['Int']
  /** System stage field */
  stage: Stage
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
}

export type ExperienceCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type ExperienceDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

export type ExperienceHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: InputMaybe<Stage>
}

export type ExperiencePositionArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type ExperiencePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type ExperienceScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type ExperienceUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type ExperienceConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: ExperienceWhereUniqueInput
}

/** A connection to a list of items. */
export type ExperienceConnection = {
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<ExperienceEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type ExperienceCreateInput = {
  companyName?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  hideDash?: InputMaybe<Scalars['Boolean']>
  hideName?: InputMaybe<Scalars['Boolean']>
  link?: InputMaybe<Scalars['String']>
  location: Scalars['String']
  position?: InputMaybe<PositionCreateOneInlineInput>
  sequence: Scalars['Int']
  updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type ExperienceCreateManyInlineInput = {
  /** Connect multiple existing Experience documents */
  connect?: InputMaybe<Array<ExperienceWhereUniqueInput>>
  /** Create and connect multiple existing Experience documents */
  create?: InputMaybe<Array<ExperienceCreateInput>>
}

export type ExperienceCreateOneInlineInput = {
  /** Connect one existing Experience document */
  connect?: InputMaybe<ExperienceWhereUniqueInput>
  /** Create and connect one Experience document */
  create?: InputMaybe<ExperienceCreateInput>
}

/** An edge in a connection. */
export type ExperienceEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: Experience
}

/** Identifies documents */
export type ExperienceManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ExperienceWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ExperienceWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ExperienceWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  companyName?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  companyName_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  companyName_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  companyName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  companyName_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  companyName_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  companyName_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  companyName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  companyName_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  companyName_starts_with?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<ExperienceWhereStageInput>
  documentInStages_none?: InputMaybe<ExperienceWhereStageInput>
  documentInStages_some?: InputMaybe<ExperienceWhereStageInput>
  hideDash?: InputMaybe<Scalars['Boolean']>
  /** Any other value that exists and is not equal to the given value. */
  hideDash_not?: InputMaybe<Scalars['Boolean']>
  hideName?: InputMaybe<Scalars['Boolean']>
  /** Any other value that exists and is not equal to the given value. */
  hideName_not?: InputMaybe<Scalars['Boolean']>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  link?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  link_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  link_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  link_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  link_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  link_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  link_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  link_starts_with?: InputMaybe<Scalars['String']>
  location?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  location_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  location_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  location_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  location_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  location_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  location_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  location_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  location_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  location_starts_with?: InputMaybe<Scalars['String']>
  position?: InputMaybe<PositionWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  sequence?: InputMaybe<Scalars['Int']>
  /** All values greater than the given value. */
  sequence_gt?: InputMaybe<Scalars['Int']>
  /** All values greater than or equal the given value. */
  sequence_gte?: InputMaybe<Scalars['Int']>
  /** All values that are contained in given list. */
  sequence_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  /** All values less than the given value. */
  sequence_lt?: InputMaybe<Scalars['Int']>
  /** All values less than or equal the given value. */
  sequence_lte?: InputMaybe<Scalars['Int']>
  /** Any other value that exists and is not equal to the given value. */
  sequence_not?: InputMaybe<Scalars['Int']>
  /** All values that are not contained in given list. */
  sequence_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum ExperienceOrderByInput {
  CompanyNameAsc = 'companyName_ASC',
  CompanyNameDesc = 'companyName_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  HideDashAsc = 'hideDash_ASC',
  HideDashDesc = 'hideDash_DESC',
  HideNameAsc = 'hideName_ASC',
  HideNameDesc = 'hideName_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  LocationAsc = 'location_ASC',
  LocationDesc = 'location_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SequenceAsc = 'sequence_ASC',
  SequenceDesc = 'sequence_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type ExperienceUpdateInput = {
  companyName?: InputMaybe<Scalars['String']>
  hideDash?: InputMaybe<Scalars['Boolean']>
  hideName?: InputMaybe<Scalars['Boolean']>
  link?: InputMaybe<Scalars['String']>
  location?: InputMaybe<Scalars['String']>
  position?: InputMaybe<PositionUpdateOneInlineInput>
  sequence?: InputMaybe<Scalars['Int']>
}

export type ExperienceUpdateManyInlineInput = {
  /** Connect multiple existing Experience documents */
  connect?: InputMaybe<Array<ExperienceConnectInput>>
  /** Create and connect multiple Experience documents */
  create?: InputMaybe<Array<ExperienceCreateInput>>
  /** Delete multiple Experience documents */
  delete?: InputMaybe<Array<ExperienceWhereUniqueInput>>
  /** Disconnect multiple Experience documents */
  disconnect?: InputMaybe<Array<ExperienceWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Experience documents */
  set?: InputMaybe<Array<ExperienceWhereUniqueInput>>
  /** Update multiple Experience documents */
  update?: InputMaybe<Array<ExperienceUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Experience documents */
  upsert?: InputMaybe<Array<ExperienceUpsertWithNestedWhereUniqueInput>>
}

export type ExperienceUpdateManyInput = {
  companyName?: InputMaybe<Scalars['String']>
  hideDash?: InputMaybe<Scalars['Boolean']>
  hideName?: InputMaybe<Scalars['Boolean']>
  link?: InputMaybe<Scalars['String']>
  location?: InputMaybe<Scalars['String']>
  sequence?: InputMaybe<Scalars['Int']>
}

export type ExperienceUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ExperienceUpdateManyInput
  /** Document search */
  where: ExperienceWhereInput
}

export type ExperienceUpdateOneInlineInput = {
  /** Connect existing Experience document */
  connect?: InputMaybe<ExperienceWhereUniqueInput>
  /** Create and connect one Experience document */
  create?: InputMaybe<ExperienceCreateInput>
  /** Delete currently connected Experience document */
  delete?: InputMaybe<Scalars['Boolean']>
  /** Disconnect currently connected Experience document */
  disconnect?: InputMaybe<Scalars['Boolean']>
  /** Update single Experience document */
  update?: InputMaybe<ExperienceUpdateWithNestedWhereUniqueInput>
  /** Upsert single Experience document */
  upsert?: InputMaybe<ExperienceUpsertWithNestedWhereUniqueInput>
}

export type ExperienceUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ExperienceUpdateInput
  /** Unique document search */
  where: ExperienceWhereUniqueInput
}

export type ExperienceUpsertInput = {
  /** Create document if it didn't exist */
  create: ExperienceCreateInput
  /** Update document if it exists */
  update: ExperienceUpdateInput
}

export type ExperienceUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ExperienceUpsertInput
  /** Unique document search */
  where: ExperienceWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type ExperienceWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>
}

/** Identifies documents */
export type ExperienceWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ExperienceWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ExperienceWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ExperienceWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  companyName?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  companyName_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  companyName_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  companyName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  companyName_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  companyName_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  companyName_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  companyName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  companyName_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  companyName_starts_with?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<ExperienceWhereStageInput>
  documentInStages_none?: InputMaybe<ExperienceWhereStageInput>
  documentInStages_some?: InputMaybe<ExperienceWhereStageInput>
  hideDash?: InputMaybe<Scalars['Boolean']>
  /** Any other value that exists and is not equal to the given value. */
  hideDash_not?: InputMaybe<Scalars['Boolean']>
  hideName?: InputMaybe<Scalars['Boolean']>
  /** Any other value that exists and is not equal to the given value. */
  hideName_not?: InputMaybe<Scalars['Boolean']>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  link?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  link_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  link_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  link_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  link_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  link_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  link_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  link_starts_with?: InputMaybe<Scalars['String']>
  location?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  location_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  location_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  location_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  location_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  location_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  location_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  location_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  location_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  location_starts_with?: InputMaybe<Scalars['String']>
  position?: InputMaybe<PositionWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  sequence?: InputMaybe<Scalars['Int']>
  /** All values greater than the given value. */
  sequence_gt?: InputMaybe<Scalars['Int']>
  /** All values greater than or equal the given value. */
  sequence_gte?: InputMaybe<Scalars['Int']>
  /** All values that are contained in given list. */
  sequence_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  /** All values less than the given value. */
  sequence_lt?: InputMaybe<Scalars['Int']>
  /** All values less than or equal the given value. */
  sequence_lte?: InputMaybe<Scalars['Int']>
  /** Any other value that exists and is not equal to the given value. */
  sequence_not?: InputMaybe<Scalars['Int']>
  /** All values that are not contained in given list. */
  sequence_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ExperienceWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ExperienceWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ExperienceWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ExperienceWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ExperienceWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References Experience record uniquely */
export type ExperienceWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
}

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale',
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']>
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']>
}

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>
}

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en',
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  distance: Scalars['Float']
  latitude: Scalars['Float']
  longitude: Scalars['Float']
}

/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput
}

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float']
  longitude: Scalars['Float']
}

export type Mutation = {
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>
  /** Create one certificate */
  createCertificate?: Maybe<Certificate>
  /** Create one contact */
  createContact?: Maybe<Contact>
  /** Create one education */
  createEducation?: Maybe<Education>
  /** Create one experience */
  createExperience?: Maybe<Experience>
  /** Create one personalInfo */
  createPersonalInfo?: Maybe<PersonalInfo>
  /** Create one position */
  createPosition?: Maybe<Position>
  /** Create one positionDetail */
  createPositionDetail?: Maybe<PositionDetail>
  /** Create one program */
  createProgram?: Maybe<Program>
  /** Create one project */
  createProject?: Maybe<Project>
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>
  /** Create one software */
  createSoftware?: Maybe<Software>
  /** Create one technicalSkill */
  createTechnicalSkill?: Maybe<TechnicalSkill>
  /** Create one video */
  createVideo?: Maybe<Video>
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>
  /** Delete one certificate from _all_ existing stages. Returns deleted document. */
  deleteCertificate?: Maybe<Certificate>
  /** Delete one contact from _all_ existing stages. Returns deleted document. */
  deleteContact?: Maybe<Contact>
  /** Delete one education from _all_ existing stages. Returns deleted document. */
  deleteEducation?: Maybe<Education>
  /** Delete one experience from _all_ existing stages. Returns deleted document. */
  deleteExperience?: Maybe<Experience>
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection
  /**
   * Delete many Certificate documents
   * @deprecated Please use the new paginated many mutation (deleteManyCertificatesConnection)
   */
  deleteManyCertificates: BatchPayload
  /** Delete many Certificate documents, return deleted documents */
  deleteManyCertificatesConnection: CertificateConnection
  /**
   * Delete many Contact documents
   * @deprecated Please use the new paginated many mutation (deleteManyContactsConnection)
   */
  deleteManyContacts: BatchPayload
  /** Delete many Contact documents, return deleted documents */
  deleteManyContactsConnection: ContactConnection
  /**
   * Delete many Education documents
   * @deprecated Please use the new paginated many mutation (deleteManyEducationsConnection)
   */
  deleteManyEducations: BatchPayload
  /** Delete many Education documents, return deleted documents */
  deleteManyEducationsConnection: EducationConnection
  /**
   * Delete many Experience documents
   * @deprecated Please use the new paginated many mutation (deleteManyExperiencesConnection)
   */
  deleteManyExperiences: BatchPayload
  /** Delete many Experience documents, return deleted documents */
  deleteManyExperiencesConnection: ExperienceConnection
  /**
   * Delete many PersonalInfo documents
   * @deprecated Please use the new paginated many mutation (deleteManyPersonalInfosConnection)
   */
  deleteManyPersonalInfos: BatchPayload
  /** Delete many PersonalInfo documents, return deleted documents */
  deleteManyPersonalInfosConnection: PersonalInfoConnection
  /**
   * Delete many PositionDetail documents
   * @deprecated Please use the new paginated many mutation (deleteManyPositionDetailsConnection)
   */
  deleteManyPositionDetails: BatchPayload
  /** Delete many PositionDetail documents, return deleted documents */
  deleteManyPositionDetailsConnection: PositionDetailConnection
  /**
   * Delete many Position documents
   * @deprecated Please use the new paginated many mutation (deleteManyPositionsConnection)
   */
  deleteManyPositions: BatchPayload
  /** Delete many Position documents, return deleted documents */
  deleteManyPositionsConnection: PositionConnection
  /**
   * Delete many Program documents
   * @deprecated Please use the new paginated many mutation (deleteManyProgramsConnection)
   */
  deleteManyPrograms: BatchPayload
  /** Delete many Program documents, return deleted documents */
  deleteManyProgramsConnection: ProgramConnection
  /**
   * Delete many Project documents
   * @deprecated Please use the new paginated many mutation (deleteManyProjectsConnection)
   */
  deleteManyProjects: BatchPayload
  /** Delete many Project documents, return deleted documents */
  deleteManyProjectsConnection: ProjectConnection
  /**
   * Delete many Software documents
   * @deprecated Please use the new paginated many mutation (deleteManySoftwaresConnection)
   */
  deleteManySoftwares: BatchPayload
  /** Delete many Software documents, return deleted documents */
  deleteManySoftwaresConnection: SoftwareConnection
  /**
   * Delete many TechnicalSkill documents
   * @deprecated Please use the new paginated many mutation (deleteManyTechnicalSkillsConnection)
   */
  deleteManyTechnicalSkills: BatchPayload
  /** Delete many TechnicalSkill documents, return deleted documents */
  deleteManyTechnicalSkillsConnection: TechnicalSkillConnection
  /**
   * Delete many Video documents
   * @deprecated Please use the new paginated many mutation (deleteManyVideosConnection)
   */
  deleteManyVideos: BatchPayload
  /** Delete many Video documents, return deleted documents */
  deleteManyVideosConnection: VideoConnection
  /** Delete one personalInfo from _all_ existing stages. Returns deleted document. */
  deletePersonalInfo?: Maybe<PersonalInfo>
  /** Delete one position from _all_ existing stages. Returns deleted document. */
  deletePosition?: Maybe<Position>
  /** Delete one positionDetail from _all_ existing stages. Returns deleted document. */
  deletePositionDetail?: Maybe<PositionDetail>
  /** Delete one program from _all_ existing stages. Returns deleted document. */
  deleteProgram?: Maybe<Program>
  /** Delete one project from _all_ existing stages. Returns deleted document. */
  deleteProject?: Maybe<Project>
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>
  /** Delete one software from _all_ existing stages. Returns deleted document. */
  deleteSoftware?: Maybe<Software>
  /** Delete one technicalSkill from _all_ existing stages. Returns deleted document. */
  deleteTechnicalSkill?: Maybe<TechnicalSkill>
  /** Delete one video from _all_ existing stages. Returns deleted document. */
  deleteVideo?: Maybe<Video>
  /** Publish one asset */
  publishAsset?: Maybe<Asset>
  /** Publish one certificate */
  publishCertificate?: Maybe<Certificate>
  /** Publish one contact */
  publishContact?: Maybe<Contact>
  /** Publish one education */
  publishEducation?: Maybe<Education>
  /** Publish one experience */
  publishExperience?: Maybe<Experience>
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection
  /**
   * Publish many Certificate documents
   * @deprecated Please use the new paginated many mutation (publishManyCertificatesConnection)
   */
  publishManyCertificates: BatchPayload
  /** Publish many Certificate documents */
  publishManyCertificatesConnection: CertificateConnection
  /**
   * Publish many Contact documents
   * @deprecated Please use the new paginated many mutation (publishManyContactsConnection)
   */
  publishManyContacts: BatchPayload
  /** Publish many Contact documents */
  publishManyContactsConnection: ContactConnection
  /**
   * Publish many Education documents
   * @deprecated Please use the new paginated many mutation (publishManyEducationsConnection)
   */
  publishManyEducations: BatchPayload
  /** Publish many Education documents */
  publishManyEducationsConnection: EducationConnection
  /**
   * Publish many Experience documents
   * @deprecated Please use the new paginated many mutation (publishManyExperiencesConnection)
   */
  publishManyExperiences: BatchPayload
  /** Publish many Experience documents */
  publishManyExperiencesConnection: ExperienceConnection
  /**
   * Publish many PersonalInfo documents
   * @deprecated Please use the new paginated many mutation (publishManyPersonalInfosConnection)
   */
  publishManyPersonalInfos: BatchPayload
  /** Publish many PersonalInfo documents */
  publishManyPersonalInfosConnection: PersonalInfoConnection
  /**
   * Publish many PositionDetail documents
   * @deprecated Please use the new paginated many mutation (publishManyPositionDetailsConnection)
   */
  publishManyPositionDetails: BatchPayload
  /** Publish many PositionDetail documents */
  publishManyPositionDetailsConnection: PositionDetailConnection
  /**
   * Publish many Position documents
   * @deprecated Please use the new paginated many mutation (publishManyPositionsConnection)
   */
  publishManyPositions: BatchPayload
  /** Publish many Position documents */
  publishManyPositionsConnection: PositionConnection
  /**
   * Publish many Program documents
   * @deprecated Please use the new paginated many mutation (publishManyProgramsConnection)
   */
  publishManyPrograms: BatchPayload
  /** Publish many Program documents */
  publishManyProgramsConnection: ProgramConnection
  /**
   * Publish many Project documents
   * @deprecated Please use the new paginated many mutation (publishManyProjectsConnection)
   */
  publishManyProjects: BatchPayload
  /** Publish many Project documents */
  publishManyProjectsConnection: ProjectConnection
  /**
   * Publish many Software documents
   * @deprecated Please use the new paginated many mutation (publishManySoftwaresConnection)
   */
  publishManySoftwares: BatchPayload
  /** Publish many Software documents */
  publishManySoftwaresConnection: SoftwareConnection
  /**
   * Publish many TechnicalSkill documents
   * @deprecated Please use the new paginated many mutation (publishManyTechnicalSkillsConnection)
   */
  publishManyTechnicalSkills: BatchPayload
  /** Publish many TechnicalSkill documents */
  publishManyTechnicalSkillsConnection: TechnicalSkillConnection
  /**
   * Publish many Video documents
   * @deprecated Please use the new paginated many mutation (publishManyVideosConnection)
   */
  publishManyVideos: BatchPayload
  /** Publish many Video documents */
  publishManyVideosConnection: VideoConnection
  /** Publish one personalInfo */
  publishPersonalInfo?: Maybe<PersonalInfo>
  /** Publish one position */
  publishPosition?: Maybe<Position>
  /** Publish one positionDetail */
  publishPositionDetail?: Maybe<PositionDetail>
  /** Publish one program */
  publishProgram?: Maybe<Program>
  /** Publish one project */
  publishProject?: Maybe<Project>
  /** Publish one software */
  publishSoftware?: Maybe<Software>
  /** Publish one technicalSkill */
  publishTechnicalSkill?: Maybe<TechnicalSkill>
  /** Publish one video */
  publishVideo?: Maybe<Video>
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>
  /** Schedule to publish one certificate */
  schedulePublishCertificate?: Maybe<Certificate>
  /** Schedule to publish one contact */
  schedulePublishContact?: Maybe<Contact>
  /** Schedule to publish one education */
  schedulePublishEducation?: Maybe<Education>
  /** Schedule to publish one experience */
  schedulePublishExperience?: Maybe<Experience>
  /** Schedule to publish one personalInfo */
  schedulePublishPersonalInfo?: Maybe<PersonalInfo>
  /** Schedule to publish one position */
  schedulePublishPosition?: Maybe<Position>
  /** Schedule to publish one positionDetail */
  schedulePublishPositionDetail?: Maybe<PositionDetail>
  /** Schedule to publish one program */
  schedulePublishProgram?: Maybe<Program>
  /** Schedule to publish one project */
  schedulePublishProject?: Maybe<Project>
  /** Schedule to publish one software */
  schedulePublishSoftware?: Maybe<Software>
  /** Schedule to publish one technicalSkill */
  schedulePublishTechnicalSkill?: Maybe<TechnicalSkill>
  /** Schedule to publish one video */
  schedulePublishVideo?: Maybe<Video>
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>
  /** Unpublish one certificate from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishCertificate?: Maybe<Certificate>
  /** Unpublish one contact from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishContact?: Maybe<Contact>
  /** Unpublish one education from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishEducation?: Maybe<Education>
  /** Unpublish one experience from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishExperience?: Maybe<Experience>
  /** Unpublish one personalInfo from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPersonalInfo?: Maybe<PersonalInfo>
  /** Unpublish one position from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPosition?: Maybe<Position>
  /** Unpublish one positionDetail from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPositionDetail?: Maybe<PositionDetail>
  /** Unpublish one program from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishProgram?: Maybe<Program>
  /** Unpublish one project from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishProject?: Maybe<Project>
  /** Unpublish one software from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishSoftware?: Maybe<Software>
  /** Unpublish one technicalSkill from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishTechnicalSkill?: Maybe<TechnicalSkill>
  /** Unpublish one video from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishVideo?: Maybe<Video>
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>
  /** Unpublish one certificate from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCertificate?: Maybe<Certificate>
  /** Unpublish one contact from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishContact?: Maybe<Contact>
  /** Unpublish one education from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishEducation?: Maybe<Education>
  /** Unpublish one experience from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishExperience?: Maybe<Experience>
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection
  /**
   * Unpublish many Certificate documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCertificatesConnection)
   */
  unpublishManyCertificates: BatchPayload
  /** Find many Certificate documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCertificatesConnection: CertificateConnection
  /**
   * Unpublish many Contact documents
   * @deprecated Please use the new paginated many mutation (unpublishManyContactsConnection)
   */
  unpublishManyContacts: BatchPayload
  /** Find many Contact documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyContactsConnection: ContactConnection
  /**
   * Unpublish many Education documents
   * @deprecated Please use the new paginated many mutation (unpublishManyEducationsConnection)
   */
  unpublishManyEducations: BatchPayload
  /** Find many Education documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyEducationsConnection: EducationConnection
  /**
   * Unpublish many Experience documents
   * @deprecated Please use the new paginated many mutation (unpublishManyExperiencesConnection)
   */
  unpublishManyExperiences: BatchPayload
  /** Find many Experience documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyExperiencesConnection: ExperienceConnection
  /**
   * Unpublish many PersonalInfo documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPersonalInfosConnection)
   */
  unpublishManyPersonalInfos: BatchPayload
  /** Find many PersonalInfo documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPersonalInfosConnection: PersonalInfoConnection
  /**
   * Unpublish many PositionDetail documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPositionDetailsConnection)
   */
  unpublishManyPositionDetails: BatchPayload
  /** Find many PositionDetail documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPositionDetailsConnection: PositionDetailConnection
  /**
   * Unpublish many Position documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPositionsConnection)
   */
  unpublishManyPositions: BatchPayload
  /** Find many Position documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPositionsConnection: PositionConnection
  /**
   * Unpublish many Program documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProgramsConnection)
   */
  unpublishManyPrograms: BatchPayload
  /** Find many Program documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyProgramsConnection: ProgramConnection
  /**
   * Unpublish many Project documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProjectsConnection)
   */
  unpublishManyProjects: BatchPayload
  /** Find many Project documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyProjectsConnection: ProjectConnection
  /**
   * Unpublish many Software documents
   * @deprecated Please use the new paginated many mutation (unpublishManySoftwaresConnection)
   */
  unpublishManySoftwares: BatchPayload
  /** Find many Software documents that match criteria in specified stage and unpublish from target stages */
  unpublishManySoftwaresConnection: SoftwareConnection
  /**
   * Unpublish many TechnicalSkill documents
   * @deprecated Please use the new paginated many mutation (unpublishManyTechnicalSkillsConnection)
   */
  unpublishManyTechnicalSkills: BatchPayload
  /** Find many TechnicalSkill documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyTechnicalSkillsConnection: TechnicalSkillConnection
  /**
   * Unpublish many Video documents
   * @deprecated Please use the new paginated many mutation (unpublishManyVideosConnection)
   */
  unpublishManyVideos: BatchPayload
  /** Find many Video documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyVideosConnection: VideoConnection
  /** Unpublish one personalInfo from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPersonalInfo?: Maybe<PersonalInfo>
  /** Unpublish one position from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPosition?: Maybe<Position>
  /** Unpublish one positionDetail from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPositionDetail?: Maybe<PositionDetail>
  /** Unpublish one program from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishProgram?: Maybe<Program>
  /** Unpublish one project from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishProject?: Maybe<Project>
  /** Unpublish one software from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishSoftware?: Maybe<Software>
  /** Unpublish one technicalSkill from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishTechnicalSkill?: Maybe<TechnicalSkill>
  /** Unpublish one video from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishVideo?: Maybe<Video>
  /** Update one asset */
  updateAsset?: Maybe<Asset>
  /** Update one certificate */
  updateCertificate?: Maybe<Certificate>
  /** Update one contact */
  updateContact?: Maybe<Contact>
  /** Update one education */
  updateEducation?: Maybe<Education>
  /** Update one experience */
  updateExperience?: Maybe<Experience>
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection
  /**
   * Update many certificates
   * @deprecated Please use the new paginated many mutation (updateManyCertificatesConnection)
   */
  updateManyCertificates: BatchPayload
  /** Update many Certificate documents */
  updateManyCertificatesConnection: CertificateConnection
  /**
   * Update many contacts
   * @deprecated Please use the new paginated many mutation (updateManyContactsConnection)
   */
  updateManyContacts: BatchPayload
  /** Update many Contact documents */
  updateManyContactsConnection: ContactConnection
  /**
   * Update many educations
   * @deprecated Please use the new paginated many mutation (updateManyEducationsConnection)
   */
  updateManyEducations: BatchPayload
  /** Update many Education documents */
  updateManyEducationsConnection: EducationConnection
  /**
   * Update many experiences
   * @deprecated Please use the new paginated many mutation (updateManyExperiencesConnection)
   */
  updateManyExperiences: BatchPayload
  /** Update many Experience documents */
  updateManyExperiencesConnection: ExperienceConnection
  /**
   * Update many personalInfos
   * @deprecated Please use the new paginated many mutation (updateManyPersonalInfosConnection)
   */
  updateManyPersonalInfos: BatchPayload
  /** Update many PersonalInfo documents */
  updateManyPersonalInfosConnection: PersonalInfoConnection
  /**
   * Update many positionDetails
   * @deprecated Please use the new paginated many mutation (updateManyPositionDetailsConnection)
   */
  updateManyPositionDetails: BatchPayload
  /** Update many PositionDetail documents */
  updateManyPositionDetailsConnection: PositionDetailConnection
  /**
   * Update many positions
   * @deprecated Please use the new paginated many mutation (updateManyPositionsConnection)
   */
  updateManyPositions: BatchPayload
  /** Update many Position documents */
  updateManyPositionsConnection: PositionConnection
  /**
   * Update many programs
   * @deprecated Please use the new paginated many mutation (updateManyProgramsConnection)
   */
  updateManyPrograms: BatchPayload
  /** Update many Program documents */
  updateManyProgramsConnection: ProgramConnection
  /**
   * Update many projects
   * @deprecated Please use the new paginated many mutation (updateManyProjectsConnection)
   */
  updateManyProjects: BatchPayload
  /** Update many Project documents */
  updateManyProjectsConnection: ProjectConnection
  /**
   * Update many softwares
   * @deprecated Please use the new paginated many mutation (updateManySoftwaresConnection)
   */
  updateManySoftwares: BatchPayload
  /** Update many Software documents */
  updateManySoftwaresConnection: SoftwareConnection
  /**
   * Update many technicalSkills
   * @deprecated Please use the new paginated many mutation (updateManyTechnicalSkillsConnection)
   */
  updateManyTechnicalSkills: BatchPayload
  /** Update many TechnicalSkill documents */
  updateManyTechnicalSkillsConnection: TechnicalSkillConnection
  /**
   * Update many videos
   * @deprecated Please use the new paginated many mutation (updateManyVideosConnection)
   */
  updateManyVideos: BatchPayload
  /** Update many Video documents */
  updateManyVideosConnection: VideoConnection
  /** Update one personalInfo */
  updatePersonalInfo?: Maybe<PersonalInfo>
  /** Update one position */
  updatePosition?: Maybe<Position>
  /** Update one positionDetail */
  updatePositionDetail?: Maybe<PositionDetail>
  /** Update one program */
  updateProgram?: Maybe<Program>
  /** Update one project */
  updateProject?: Maybe<Project>
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>
  /** Update one software */
  updateSoftware?: Maybe<Software>
  /** Update one technicalSkill */
  updateTechnicalSkill?: Maybe<TechnicalSkill>
  /** Update one video */
  updateVideo?: Maybe<Video>
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>
  /** Upsert one certificate */
  upsertCertificate?: Maybe<Certificate>
  /** Upsert one contact */
  upsertContact?: Maybe<Contact>
  /** Upsert one education */
  upsertEducation?: Maybe<Education>
  /** Upsert one experience */
  upsertExperience?: Maybe<Experience>
  /** Upsert one personalInfo */
  upsertPersonalInfo?: Maybe<PersonalInfo>
  /** Upsert one position */
  upsertPosition?: Maybe<Position>
  /** Upsert one positionDetail */
  upsertPositionDetail?: Maybe<PositionDetail>
  /** Upsert one program */
  upsertProgram?: Maybe<Program>
  /** Upsert one project */
  upsertProject?: Maybe<Project>
  /** Upsert one software */
  upsertSoftware?: Maybe<Software>
  /** Upsert one technicalSkill */
  upsertTechnicalSkill?: Maybe<TechnicalSkill>
  /** Upsert one video */
  upsertVideo?: Maybe<Video>
}

export type MutationCreateAssetArgs = {
  data: AssetCreateInput
}

export type MutationCreateCertificateArgs = {
  data: CertificateCreateInput
}

export type MutationCreateContactArgs = {
  data: ContactCreateInput
}

export type MutationCreateEducationArgs = {
  data: EducationCreateInput
}

export type MutationCreateExperienceArgs = {
  data: ExperienceCreateInput
}

export type MutationCreatePersonalInfoArgs = {
  data: PersonalInfoCreateInput
}

export type MutationCreatePositionArgs = {
  data: PositionCreateInput
}

export type MutationCreatePositionDetailArgs = {
  data: PositionDetailCreateInput
}

export type MutationCreateProgramArgs = {
  data: ProgramCreateInput
}

export type MutationCreateProjectArgs = {
  data: ProjectCreateInput
}

export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput
}

export type MutationCreateSoftwareArgs = {
  data: SoftwareCreateInput
}

export type MutationCreateTechnicalSkillArgs = {
  data: TechnicalSkillCreateInput
}

export type MutationCreateVideoArgs = {
  data: VideoCreateInput
}

export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput
}

export type MutationDeleteCertificateArgs = {
  where: CertificateWhereUniqueInput
}

export type MutationDeleteContactArgs = {
  where: ContactWhereUniqueInput
}

export type MutationDeleteEducationArgs = {
  where: EducationWhereUniqueInput
}

export type MutationDeleteExperienceArgs = {
  where: ExperienceWhereUniqueInput
}

export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationDeleteManyCertificatesArgs = {
  where?: InputMaybe<CertificateManyWhereInput>
}

export type MutationDeleteManyCertificatesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<CertificateManyWhereInput>
}

export type MutationDeleteManyContactsArgs = {
  where?: InputMaybe<ContactManyWhereInput>
}

export type MutationDeleteManyContactsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ContactManyWhereInput>
}

export type MutationDeleteManyEducationsArgs = {
  where?: InputMaybe<EducationManyWhereInput>
}

export type MutationDeleteManyEducationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<EducationManyWhereInput>
}

export type MutationDeleteManyExperiencesArgs = {
  where?: InputMaybe<ExperienceManyWhereInput>
}

export type MutationDeleteManyExperiencesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ExperienceManyWhereInput>
}

export type MutationDeleteManyPersonalInfosArgs = {
  where?: InputMaybe<PersonalInfoManyWhereInput>
}

export type MutationDeleteManyPersonalInfosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<PersonalInfoManyWhereInput>
}

export type MutationDeleteManyPositionDetailsArgs = {
  where?: InputMaybe<PositionDetailManyWhereInput>
}

export type MutationDeleteManyPositionDetailsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<PositionDetailManyWhereInput>
}

export type MutationDeleteManyPositionsArgs = {
  where?: InputMaybe<PositionManyWhereInput>
}

export type MutationDeleteManyPositionsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<PositionManyWhereInput>
}

export type MutationDeleteManyProgramsArgs = {
  where?: InputMaybe<ProgramManyWhereInput>
}

export type MutationDeleteManyProgramsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ProgramManyWhereInput>
}

export type MutationDeleteManyProjectsArgs = {
  where?: InputMaybe<ProjectManyWhereInput>
}

export type MutationDeleteManyProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ProjectManyWhereInput>
}

export type MutationDeleteManySoftwaresArgs = {
  where?: InputMaybe<SoftwareManyWhereInput>
}

export type MutationDeleteManySoftwaresConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<SoftwareManyWhereInput>
}

export type MutationDeleteManyTechnicalSkillsArgs = {
  where?: InputMaybe<TechnicalSkillManyWhereInput>
}

export type MutationDeleteManyTechnicalSkillsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<TechnicalSkillManyWhereInput>
}

export type MutationDeleteManyVideosArgs = {
  where?: InputMaybe<VideoManyWhereInput>
}

export type MutationDeleteManyVideosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<VideoManyWhereInput>
}

export type MutationDeletePersonalInfoArgs = {
  where: PersonalInfoWhereUniqueInput
}

export type MutationDeletePositionArgs = {
  where: PositionWhereUniqueInput
}

export type MutationDeletePositionDetailArgs = {
  where: PositionDetailWhereUniqueInput
}

export type MutationDeleteProgramArgs = {
  where: ProgramWhereUniqueInput
}

export type MutationDeleteProjectArgs = {
  where: ProjectWhereUniqueInput
}

export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput
}

export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput
}

export type MutationDeleteSoftwareArgs = {
  where: SoftwareWhereUniqueInput
}

export type MutationDeleteTechnicalSkillArgs = {
  where: TechnicalSkillWhereUniqueInput
}

export type MutationDeleteVideoArgs = {
  where: VideoWhereUniqueInput
}

export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>
  publishBase?: InputMaybe<Scalars['Boolean']>
  to?: Array<Stage>
  where: AssetWhereUniqueInput
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>
}

export type MutationPublishCertificateArgs = {
  to?: Array<Stage>
  where: CertificateWhereUniqueInput
}

export type MutationPublishContactArgs = {
  to?: Array<Stage>
  where: ContactWhereUniqueInput
}

export type MutationPublishEducationArgs = {
  to?: Array<Stage>
  where: EducationWhereUniqueInput
}

export type MutationPublishExperienceArgs = {
  to?: Array<Stage>
  where: ExperienceWhereUniqueInput
}

export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>
  publishBase?: InputMaybe<Scalars['Boolean']>
  to?: Array<Stage>
  where?: InputMaybe<AssetManyWhereInput>
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>
}

export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  publishBase?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
  to?: Array<Stage>
  where?: InputMaybe<AssetManyWhereInput>
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>
}

export type MutationPublishManyCertificatesArgs = {
  to?: Array<Stage>
  where?: InputMaybe<CertificateManyWhereInput>
}

export type MutationPublishManyCertificatesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  to?: Array<Stage>
  where?: InputMaybe<CertificateManyWhereInput>
}

export type MutationPublishManyContactsArgs = {
  to?: Array<Stage>
  where?: InputMaybe<ContactManyWhereInput>
}

export type MutationPublishManyContactsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  to?: Array<Stage>
  where?: InputMaybe<ContactManyWhereInput>
}

export type MutationPublishManyEducationsArgs = {
  to?: Array<Stage>
  where?: InputMaybe<EducationManyWhereInput>
}

export type MutationPublishManyEducationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  to?: Array<Stage>
  where?: InputMaybe<EducationManyWhereInput>
}

export type MutationPublishManyExperiencesArgs = {
  to?: Array<Stage>
  where?: InputMaybe<ExperienceManyWhereInput>
}

export type MutationPublishManyExperiencesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  to?: Array<Stage>
  where?: InputMaybe<ExperienceManyWhereInput>
}

export type MutationPublishManyPersonalInfosArgs = {
  to?: Array<Stage>
  where?: InputMaybe<PersonalInfoManyWhereInput>
}

export type MutationPublishManyPersonalInfosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  to?: Array<Stage>
  where?: InputMaybe<PersonalInfoManyWhereInput>
}

export type MutationPublishManyPositionDetailsArgs = {
  to?: Array<Stage>
  where?: InputMaybe<PositionDetailManyWhereInput>
}

export type MutationPublishManyPositionDetailsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  to?: Array<Stage>
  where?: InputMaybe<PositionDetailManyWhereInput>
}

export type MutationPublishManyPositionsArgs = {
  to?: Array<Stage>
  where?: InputMaybe<PositionManyWhereInput>
}

export type MutationPublishManyPositionsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  to?: Array<Stage>
  where?: InputMaybe<PositionManyWhereInput>
}

export type MutationPublishManyProgramsArgs = {
  to?: Array<Stage>
  where?: InputMaybe<ProgramManyWhereInput>
}

export type MutationPublishManyProgramsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  to?: Array<Stage>
  where?: InputMaybe<ProgramManyWhereInput>
}

export type MutationPublishManyProjectsArgs = {
  to?: Array<Stage>
  where?: InputMaybe<ProjectManyWhereInput>
}

export type MutationPublishManyProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  to?: Array<Stage>
  where?: InputMaybe<ProjectManyWhereInput>
}

export type MutationPublishManySoftwaresArgs = {
  to?: Array<Stage>
  where?: InputMaybe<SoftwareManyWhereInput>
}

export type MutationPublishManySoftwaresConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  to?: Array<Stage>
  where?: InputMaybe<SoftwareManyWhereInput>
}

export type MutationPublishManyTechnicalSkillsArgs = {
  to?: Array<Stage>
  where?: InputMaybe<TechnicalSkillManyWhereInput>
}

export type MutationPublishManyTechnicalSkillsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  to?: Array<Stage>
  where?: InputMaybe<TechnicalSkillManyWhereInput>
}

export type MutationPublishManyVideosArgs = {
  to?: Array<Stage>
  where?: InputMaybe<VideoManyWhereInput>
}

export type MutationPublishManyVideosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  to?: Array<Stage>
  where?: InputMaybe<VideoManyWhereInput>
}

export type MutationPublishPersonalInfoArgs = {
  to?: Array<Stage>
  where: PersonalInfoWhereUniqueInput
}

export type MutationPublishPositionArgs = {
  to?: Array<Stage>
  where: PositionWhereUniqueInput
}

export type MutationPublishPositionDetailArgs = {
  to?: Array<Stage>
  where: PositionDetailWhereUniqueInput
}

export type MutationPublishProgramArgs = {
  to?: Array<Stage>
  where: ProgramWhereUniqueInput
}

export type MutationPublishProjectArgs = {
  to?: Array<Stage>
  where: ProjectWhereUniqueInput
}

export type MutationPublishSoftwareArgs = {
  to?: Array<Stage>
  where: SoftwareWhereUniqueInput
}

export type MutationPublishTechnicalSkillArgs = {
  to?: Array<Stage>
  where: TechnicalSkillWhereUniqueInput
}

export type MutationPublishVideoArgs = {
  to?: Array<Stage>
  where: VideoWhereUniqueInput
}

export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>
  publishBase?: InputMaybe<Scalars['Boolean']>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  to?: Array<Stage>
  where: AssetWhereUniqueInput
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>
}

export type MutationSchedulePublishCertificateArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  to?: Array<Stage>
  where: CertificateWhereUniqueInput
}

export type MutationSchedulePublishContactArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  to?: Array<Stage>
  where: ContactWhereUniqueInput
}

export type MutationSchedulePublishEducationArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  to?: Array<Stage>
  where: EducationWhereUniqueInput
}

export type MutationSchedulePublishExperienceArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  to?: Array<Stage>
  where: ExperienceWhereUniqueInput
}

export type MutationSchedulePublishPersonalInfoArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  to?: Array<Stage>
  where: PersonalInfoWhereUniqueInput
}

export type MutationSchedulePublishPositionArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  to?: Array<Stage>
  where: PositionWhereUniqueInput
}

export type MutationSchedulePublishPositionDetailArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  to?: Array<Stage>
  where: PositionDetailWhereUniqueInput
}

export type MutationSchedulePublishProgramArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  to?: Array<Stage>
  where: ProgramWhereUniqueInput
}

export type MutationSchedulePublishProjectArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  to?: Array<Stage>
  where: ProjectWhereUniqueInput
}

export type MutationSchedulePublishSoftwareArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  to?: Array<Stage>
  where: SoftwareWhereUniqueInput
}

export type MutationSchedulePublishTechnicalSkillArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  to?: Array<Stage>
  where: TechnicalSkillWhereUniqueInput
}

export type MutationSchedulePublishVideoArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  to?: Array<Stage>
  where: VideoWhereUniqueInput
}

export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>
  locales?: InputMaybe<Array<Locale>>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  unpublishBase?: InputMaybe<Scalars['Boolean']>
  where: AssetWhereUniqueInput
}

export type MutationScheduleUnpublishCertificateArgs = {
  from?: Array<Stage>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  where: CertificateWhereUniqueInput
}

export type MutationScheduleUnpublishContactArgs = {
  from?: Array<Stage>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  where: ContactWhereUniqueInput
}

export type MutationScheduleUnpublishEducationArgs = {
  from?: Array<Stage>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  where: EducationWhereUniqueInput
}

export type MutationScheduleUnpublishExperienceArgs = {
  from?: Array<Stage>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  where: ExperienceWhereUniqueInput
}

export type MutationScheduleUnpublishPersonalInfoArgs = {
  from?: Array<Stage>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  where: PersonalInfoWhereUniqueInput
}

export type MutationScheduleUnpublishPositionArgs = {
  from?: Array<Stage>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  where: PositionWhereUniqueInput
}

export type MutationScheduleUnpublishPositionDetailArgs = {
  from?: Array<Stage>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  where: PositionDetailWhereUniqueInput
}

export type MutationScheduleUnpublishProgramArgs = {
  from?: Array<Stage>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  where: ProgramWhereUniqueInput
}

export type MutationScheduleUnpublishProjectArgs = {
  from?: Array<Stage>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  where: ProjectWhereUniqueInput
}

export type MutationScheduleUnpublishSoftwareArgs = {
  from?: Array<Stage>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  where: SoftwareWhereUniqueInput
}

export type MutationScheduleUnpublishTechnicalSkillArgs = {
  from?: Array<Stage>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  where: TechnicalSkillWhereUniqueInput
}

export type MutationScheduleUnpublishVideoArgs = {
  from?: Array<Stage>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  where: VideoWhereUniqueInput
}

export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>
  locales?: InputMaybe<Array<Locale>>
  unpublishBase?: InputMaybe<Scalars['Boolean']>
  where: AssetWhereUniqueInput
}

export type MutationUnpublishCertificateArgs = {
  from?: Array<Stage>
  where: CertificateWhereUniqueInput
}

export type MutationUnpublishContactArgs = {
  from?: Array<Stage>
  where: ContactWhereUniqueInput
}

export type MutationUnpublishEducationArgs = {
  from?: Array<Stage>
  where: EducationWhereUniqueInput
}

export type MutationUnpublishExperienceArgs = {
  from?: Array<Stage>
  where: ExperienceWhereUniqueInput
}

export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>
  locales?: InputMaybe<Array<Locale>>
  unpublishBase?: InputMaybe<Scalars['Boolean']>
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']>
  stage?: InputMaybe<Stage>
  unpublishBase?: InputMaybe<Scalars['Boolean']>
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationUnpublishManyCertificatesArgs = {
  from?: Array<Stage>
  where?: InputMaybe<CertificateManyWhereInput>
}

export type MutationUnpublishManyCertificatesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  stage?: InputMaybe<Stage>
  where?: InputMaybe<CertificateManyWhereInput>
}

export type MutationUnpublishManyContactsArgs = {
  from?: Array<Stage>
  where?: InputMaybe<ContactManyWhereInput>
}

export type MutationUnpublishManyContactsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  stage?: InputMaybe<Stage>
  where?: InputMaybe<ContactManyWhereInput>
}

export type MutationUnpublishManyEducationsArgs = {
  from?: Array<Stage>
  where?: InputMaybe<EducationManyWhereInput>
}

export type MutationUnpublishManyEducationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  stage?: InputMaybe<Stage>
  where?: InputMaybe<EducationManyWhereInput>
}

export type MutationUnpublishManyExperiencesArgs = {
  from?: Array<Stage>
  where?: InputMaybe<ExperienceManyWhereInput>
}

export type MutationUnpublishManyExperiencesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  stage?: InputMaybe<Stage>
  where?: InputMaybe<ExperienceManyWhereInput>
}

export type MutationUnpublishManyPersonalInfosArgs = {
  from?: Array<Stage>
  where?: InputMaybe<PersonalInfoManyWhereInput>
}

export type MutationUnpublishManyPersonalInfosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  stage?: InputMaybe<Stage>
  where?: InputMaybe<PersonalInfoManyWhereInput>
}

export type MutationUnpublishManyPositionDetailsArgs = {
  from?: Array<Stage>
  where?: InputMaybe<PositionDetailManyWhereInput>
}

export type MutationUnpublishManyPositionDetailsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  stage?: InputMaybe<Stage>
  where?: InputMaybe<PositionDetailManyWhereInput>
}

export type MutationUnpublishManyPositionsArgs = {
  from?: Array<Stage>
  where?: InputMaybe<PositionManyWhereInput>
}

export type MutationUnpublishManyPositionsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  stage?: InputMaybe<Stage>
  where?: InputMaybe<PositionManyWhereInput>
}

export type MutationUnpublishManyProgramsArgs = {
  from?: Array<Stage>
  where?: InputMaybe<ProgramManyWhereInput>
}

export type MutationUnpublishManyProgramsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  stage?: InputMaybe<Stage>
  where?: InputMaybe<ProgramManyWhereInput>
}

export type MutationUnpublishManyProjectsArgs = {
  from?: Array<Stage>
  where?: InputMaybe<ProjectManyWhereInput>
}

export type MutationUnpublishManyProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  stage?: InputMaybe<Stage>
  where?: InputMaybe<ProjectManyWhereInput>
}

export type MutationUnpublishManySoftwaresArgs = {
  from?: Array<Stage>
  where?: InputMaybe<SoftwareManyWhereInput>
}

export type MutationUnpublishManySoftwaresConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  stage?: InputMaybe<Stage>
  where?: InputMaybe<SoftwareManyWhereInput>
}

export type MutationUnpublishManyTechnicalSkillsArgs = {
  from?: Array<Stage>
  where?: InputMaybe<TechnicalSkillManyWhereInput>
}

export type MutationUnpublishManyTechnicalSkillsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  stage?: InputMaybe<Stage>
  where?: InputMaybe<TechnicalSkillManyWhereInput>
}

export type MutationUnpublishManyVideosArgs = {
  from?: Array<Stage>
  where?: InputMaybe<VideoManyWhereInput>
}

export type MutationUnpublishManyVideosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  stage?: InputMaybe<Stage>
  where?: InputMaybe<VideoManyWhereInput>
}

export type MutationUnpublishPersonalInfoArgs = {
  from?: Array<Stage>
  where: PersonalInfoWhereUniqueInput
}

export type MutationUnpublishPositionArgs = {
  from?: Array<Stage>
  where: PositionWhereUniqueInput
}

export type MutationUnpublishPositionDetailArgs = {
  from?: Array<Stage>
  where: PositionDetailWhereUniqueInput
}

export type MutationUnpublishProgramArgs = {
  from?: Array<Stage>
  where: ProgramWhereUniqueInput
}

export type MutationUnpublishProjectArgs = {
  from?: Array<Stage>
  where: ProjectWhereUniqueInput
}

export type MutationUnpublishSoftwareArgs = {
  from?: Array<Stage>
  where: SoftwareWhereUniqueInput
}

export type MutationUnpublishTechnicalSkillArgs = {
  from?: Array<Stage>
  where: TechnicalSkillWhereUniqueInput
}

export type MutationUnpublishVideoArgs = {
  from?: Array<Stage>
  where: VideoWhereUniqueInput
}

export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput
  where: AssetWhereUniqueInput
}

export type MutationUpdateCertificateArgs = {
  data: CertificateUpdateInput
  where: CertificateWhereUniqueInput
}

export type MutationUpdateContactArgs = {
  data: ContactUpdateInput
  where: ContactWhereUniqueInput
}

export type MutationUpdateEducationArgs = {
  data: EducationUpdateInput
  where: EducationWhereUniqueInput
}

export type MutationUpdateExperienceArgs = {
  data: ExperienceUpdateInput
  where: ExperienceWhereUniqueInput
}

export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  data: AssetUpdateManyInput
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationUpdateManyCertificatesArgs = {
  data: CertificateUpdateManyInput
  where?: InputMaybe<CertificateManyWhereInput>
}

export type MutationUpdateManyCertificatesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  data: CertificateUpdateManyInput
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<CertificateManyWhereInput>
}

export type MutationUpdateManyContactsArgs = {
  data: ContactUpdateManyInput
  where?: InputMaybe<ContactManyWhereInput>
}

export type MutationUpdateManyContactsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  data: ContactUpdateManyInput
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ContactManyWhereInput>
}

export type MutationUpdateManyEducationsArgs = {
  data: EducationUpdateManyInput
  where?: InputMaybe<EducationManyWhereInput>
}

export type MutationUpdateManyEducationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  data: EducationUpdateManyInput
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<EducationManyWhereInput>
}

export type MutationUpdateManyExperiencesArgs = {
  data: ExperienceUpdateManyInput
  where?: InputMaybe<ExperienceManyWhereInput>
}

export type MutationUpdateManyExperiencesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  data: ExperienceUpdateManyInput
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ExperienceManyWhereInput>
}

export type MutationUpdateManyPersonalInfosArgs = {
  data: PersonalInfoUpdateManyInput
  where?: InputMaybe<PersonalInfoManyWhereInput>
}

export type MutationUpdateManyPersonalInfosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  data: PersonalInfoUpdateManyInput
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<PersonalInfoManyWhereInput>
}

export type MutationUpdateManyPositionDetailsArgs = {
  data: PositionDetailUpdateManyInput
  where?: InputMaybe<PositionDetailManyWhereInput>
}

export type MutationUpdateManyPositionDetailsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  data: PositionDetailUpdateManyInput
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<PositionDetailManyWhereInput>
}

export type MutationUpdateManyPositionsArgs = {
  data: PositionUpdateManyInput
  where?: InputMaybe<PositionManyWhereInput>
}

export type MutationUpdateManyPositionsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  data: PositionUpdateManyInput
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<PositionManyWhereInput>
}

export type MutationUpdateManyProgramsArgs = {
  data: ProgramUpdateManyInput
  where?: InputMaybe<ProgramManyWhereInput>
}

export type MutationUpdateManyProgramsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  data: ProgramUpdateManyInput
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ProgramManyWhereInput>
}

export type MutationUpdateManyProjectsArgs = {
  data: ProjectUpdateManyInput
  where?: InputMaybe<ProjectManyWhereInput>
}

export type MutationUpdateManyProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  data: ProjectUpdateManyInput
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ProjectManyWhereInput>
}

export type MutationUpdateManySoftwaresArgs = {
  data: SoftwareUpdateManyInput
  where?: InputMaybe<SoftwareManyWhereInput>
}

export type MutationUpdateManySoftwaresConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  data: SoftwareUpdateManyInput
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<SoftwareManyWhereInput>
}

export type MutationUpdateManyTechnicalSkillsArgs = {
  data: TechnicalSkillUpdateManyInput
  where?: InputMaybe<TechnicalSkillManyWhereInput>
}

export type MutationUpdateManyTechnicalSkillsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  data: TechnicalSkillUpdateManyInput
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<TechnicalSkillManyWhereInput>
}

export type MutationUpdateManyVideosArgs = {
  data: VideoUpdateManyInput
  where?: InputMaybe<VideoManyWhereInput>
}

export type MutationUpdateManyVideosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  data: VideoUpdateManyInput
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<VideoManyWhereInput>
}

export type MutationUpdatePersonalInfoArgs = {
  data: PersonalInfoUpdateInput
  where: PersonalInfoWhereUniqueInput
}

export type MutationUpdatePositionArgs = {
  data: PositionUpdateInput
  where: PositionWhereUniqueInput
}

export type MutationUpdatePositionDetailArgs = {
  data: PositionDetailUpdateInput
  where: PositionDetailWhereUniqueInput
}

export type MutationUpdateProgramArgs = {
  data: ProgramUpdateInput
  where: ProgramWhereUniqueInput
}

export type MutationUpdateProjectArgs = {
  data: ProjectUpdateInput
  where: ProjectWhereUniqueInput
}

export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput
  where: ScheduledReleaseWhereUniqueInput
}

export type MutationUpdateSoftwareArgs = {
  data: SoftwareUpdateInput
  where: SoftwareWhereUniqueInput
}

export type MutationUpdateTechnicalSkillArgs = {
  data: TechnicalSkillUpdateInput
  where: TechnicalSkillWhereUniqueInput
}

export type MutationUpdateVideoArgs = {
  data: VideoUpdateInput
  where: VideoWhereUniqueInput
}

export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput
  where: AssetWhereUniqueInput
}

export type MutationUpsertCertificateArgs = {
  upsert: CertificateUpsertInput
  where: CertificateWhereUniqueInput
}

export type MutationUpsertContactArgs = {
  upsert: ContactUpsertInput
  where: ContactWhereUniqueInput
}

export type MutationUpsertEducationArgs = {
  upsert: EducationUpsertInput
  where: EducationWhereUniqueInput
}

export type MutationUpsertExperienceArgs = {
  upsert: ExperienceUpsertInput
  where: ExperienceWhereUniqueInput
}

export type MutationUpsertPersonalInfoArgs = {
  upsert: PersonalInfoUpsertInput
  where: PersonalInfoWhereUniqueInput
}

export type MutationUpsertPositionArgs = {
  upsert: PositionUpsertInput
  where: PositionWhereUniqueInput
}

export type MutationUpsertPositionDetailArgs = {
  upsert: PositionDetailUpsertInput
  where: PositionDetailWhereUniqueInput
}

export type MutationUpsertProgramArgs = {
  upsert: ProgramUpsertInput
  where: ProgramWhereUniqueInput
}

export type MutationUpsertProjectArgs = {
  upsert: ProjectUpsertInput
  where: ProjectWhereUniqueInput
}

export type MutationUpsertSoftwareArgs = {
  upsert: SoftwareUpsertInput
  where: SoftwareWhereUniqueInput
}

export type MutationUpsertTechnicalSkillArgs = {
  upsert: TechnicalSkillUpsertInput
  where: TechnicalSkillWhereUniqueInput
}

export type MutationUpsertVideoArgs = {
  upsert: VideoUpsertInput
  where: VideoWhereUniqueInput
}

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID']
  /** The Stage of an object */
  stage: Stage
}

/** Information about pagination in a connection. */
export type PageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>
}

export type PersonalInfo = Node & {
  about?: Maybe<Scalars['String']>
  age: Scalars['Int']
  contact?: Maybe<Contact>
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy?: Maybe<User>
  currentPosition?: Maybe<Scalars['String']>
  dob: Scalars['String']
  /** Get the document in other stages */
  documentInStages: Array<PersonalInfo>
  /** List of PersonalInfo versions */
  history: Array<Version>
  icon?: Maybe<Asset>
  /** The unique identifier */
  id: Scalars['ID']
  image: Asset
  introduction?: Maybe<Scalars['String']>
  name: Scalars['String']
  profileImage1: Asset
  profileImage2: Asset
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  scheduledIn: Array<ScheduledOperation>
  /** System stage field */
  stage: Stage
  surname: Scalars['String']
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
}

export type PersonalInfoContactArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type PersonalInfoCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type PersonalInfoDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

export type PersonalInfoHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: InputMaybe<Stage>
}

export type PersonalInfoIconArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type PersonalInfoImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type PersonalInfoProfileImage1Args = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type PersonalInfoProfileImage2Args = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type PersonalInfoPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type PersonalInfoScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type PersonalInfoUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type PersonalInfoConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: PersonalInfoWhereUniqueInput
}

/** A connection to a list of items. */
export type PersonalInfoConnection = {
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<PersonalInfoEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type PersonalInfoCreateInput = {
  about?: InputMaybe<Scalars['String']>
  age: Scalars['Int']
  contact?: InputMaybe<ContactCreateOneInlineInput>
  createdAt?: InputMaybe<Scalars['DateTime']>
  currentPosition?: InputMaybe<Scalars['String']>
  dob: Scalars['String']
  icon?: InputMaybe<AssetCreateOneInlineInput>
  image: AssetCreateOneInlineInput
  introduction?: InputMaybe<Scalars['String']>
  name: Scalars['String']
  profileImage1: AssetCreateOneInlineInput
  profileImage2: AssetCreateOneInlineInput
  surname: Scalars['String']
  updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type PersonalInfoCreateManyInlineInput = {
  /** Connect multiple existing PersonalInfo documents */
  connect?: InputMaybe<Array<PersonalInfoWhereUniqueInput>>
  /** Create and connect multiple existing PersonalInfo documents */
  create?: InputMaybe<Array<PersonalInfoCreateInput>>
}

export type PersonalInfoCreateOneInlineInput = {
  /** Connect one existing PersonalInfo document */
  connect?: InputMaybe<PersonalInfoWhereUniqueInput>
  /** Create and connect one PersonalInfo document */
  create?: InputMaybe<PersonalInfoCreateInput>
}

/** An edge in a connection. */
export type PersonalInfoEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: PersonalInfo
}

/** Identifies documents */
export type PersonalInfoManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PersonalInfoWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PersonalInfoWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PersonalInfoWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  about?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  about_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  about_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  about_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  about_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  about_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  about_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  about_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  about_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  about_starts_with?: InputMaybe<Scalars['String']>
  age?: InputMaybe<Scalars['Int']>
  /** All values greater than the given value. */
  age_gt?: InputMaybe<Scalars['Int']>
  /** All values greater than or equal the given value. */
  age_gte?: InputMaybe<Scalars['Int']>
  /** All values that are contained in given list. */
  age_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  /** All values less than the given value. */
  age_lt?: InputMaybe<Scalars['Int']>
  /** All values less than or equal the given value. */
  age_lte?: InputMaybe<Scalars['Int']>
  /** Any other value that exists and is not equal to the given value. */
  age_not?: InputMaybe<Scalars['Int']>
  /** All values that are not contained in given list. */
  age_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  contact?: InputMaybe<ContactWhereInput>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  currentPosition?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  currentPosition_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  currentPosition_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  currentPosition_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  currentPosition_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  currentPosition_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  currentPosition_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  currentPosition_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  currentPosition_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  currentPosition_starts_with?: InputMaybe<Scalars['String']>
  dob?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  dob_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  dob_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  dob_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  dob_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  dob_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  dob_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  dob_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  dob_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  dob_starts_with?: InputMaybe<Scalars['String']>
  documentInStages_every?: InputMaybe<PersonalInfoWhereStageInput>
  documentInStages_none?: InputMaybe<PersonalInfoWhereStageInput>
  documentInStages_some?: InputMaybe<PersonalInfoWhereStageInput>
  icon?: InputMaybe<AssetWhereInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  image?: InputMaybe<AssetWhereInput>
  introduction?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  introduction_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  introduction_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  introduction_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  introduction_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  introduction_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  introduction_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  introduction_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  introduction_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  introduction_starts_with?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>
  profileImage1?: InputMaybe<AssetWhereInput>
  profileImage2?: InputMaybe<AssetWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  surname?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  surname_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  surname_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  surname_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  surname_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  surname_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  surname_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  surname_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  surname_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  surname_starts_with?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum PersonalInfoOrderByInput {
  AboutAsc = 'about_ASC',
  AboutDesc = 'about_DESC',
  AgeAsc = 'age_ASC',
  AgeDesc = 'age_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CurrentPositionAsc = 'currentPosition_ASC',
  CurrentPositionDesc = 'currentPosition_DESC',
  DobAsc = 'dob_ASC',
  DobDesc = 'dob_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IntroductionAsc = 'introduction_ASC',
  IntroductionDesc = 'introduction_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SurnameAsc = 'surname_ASC',
  SurnameDesc = 'surname_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type PersonalInfoUpdateInput = {
  about?: InputMaybe<Scalars['String']>
  age?: InputMaybe<Scalars['Int']>
  contact?: InputMaybe<ContactUpdateOneInlineInput>
  currentPosition?: InputMaybe<Scalars['String']>
  dob?: InputMaybe<Scalars['String']>
  icon?: InputMaybe<AssetUpdateOneInlineInput>
  image?: InputMaybe<AssetUpdateOneInlineInput>
  introduction?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  profileImage1?: InputMaybe<AssetUpdateOneInlineInput>
  profileImage2?: InputMaybe<AssetUpdateOneInlineInput>
  surname?: InputMaybe<Scalars['String']>
}

export type PersonalInfoUpdateManyInlineInput = {
  /** Connect multiple existing PersonalInfo documents */
  connect?: InputMaybe<Array<PersonalInfoConnectInput>>
  /** Create and connect multiple PersonalInfo documents */
  create?: InputMaybe<Array<PersonalInfoCreateInput>>
  /** Delete multiple PersonalInfo documents */
  delete?: InputMaybe<Array<PersonalInfoWhereUniqueInput>>
  /** Disconnect multiple PersonalInfo documents */
  disconnect?: InputMaybe<Array<PersonalInfoWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing PersonalInfo documents */
  set?: InputMaybe<Array<PersonalInfoWhereUniqueInput>>
  /** Update multiple PersonalInfo documents */
  update?: InputMaybe<Array<PersonalInfoUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple PersonalInfo documents */
  upsert?: InputMaybe<Array<PersonalInfoUpsertWithNestedWhereUniqueInput>>
}

export type PersonalInfoUpdateManyInput = {
  about?: InputMaybe<Scalars['String']>
  age?: InputMaybe<Scalars['Int']>
  currentPosition?: InputMaybe<Scalars['String']>
  dob?: InputMaybe<Scalars['String']>
  introduction?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  surname?: InputMaybe<Scalars['String']>
}

export type PersonalInfoUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PersonalInfoUpdateManyInput
  /** Document search */
  where: PersonalInfoWhereInput
}

export type PersonalInfoUpdateOneInlineInput = {
  /** Connect existing PersonalInfo document */
  connect?: InputMaybe<PersonalInfoWhereUniqueInput>
  /** Create and connect one PersonalInfo document */
  create?: InputMaybe<PersonalInfoCreateInput>
  /** Delete currently connected PersonalInfo document */
  delete?: InputMaybe<Scalars['Boolean']>
  /** Disconnect currently connected PersonalInfo document */
  disconnect?: InputMaybe<Scalars['Boolean']>
  /** Update single PersonalInfo document */
  update?: InputMaybe<PersonalInfoUpdateWithNestedWhereUniqueInput>
  /** Upsert single PersonalInfo document */
  upsert?: InputMaybe<PersonalInfoUpsertWithNestedWhereUniqueInput>
}

export type PersonalInfoUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PersonalInfoUpdateInput
  /** Unique document search */
  where: PersonalInfoWhereUniqueInput
}

export type PersonalInfoUpsertInput = {
  /** Create document if it didn't exist */
  create: PersonalInfoCreateInput
  /** Update document if it exists */
  update: PersonalInfoUpdateInput
}

export type PersonalInfoUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PersonalInfoUpsertInput
  /** Unique document search */
  where: PersonalInfoWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type PersonalInfoWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>
}

/** Identifies documents */
export type PersonalInfoWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PersonalInfoWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PersonalInfoWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PersonalInfoWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  about?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  about_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  about_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  about_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  about_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  about_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  about_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  about_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  about_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  about_starts_with?: InputMaybe<Scalars['String']>
  age?: InputMaybe<Scalars['Int']>
  /** All values greater than the given value. */
  age_gt?: InputMaybe<Scalars['Int']>
  /** All values greater than or equal the given value. */
  age_gte?: InputMaybe<Scalars['Int']>
  /** All values that are contained in given list. */
  age_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  /** All values less than the given value. */
  age_lt?: InputMaybe<Scalars['Int']>
  /** All values less than or equal the given value. */
  age_lte?: InputMaybe<Scalars['Int']>
  /** Any other value that exists and is not equal to the given value. */
  age_not?: InputMaybe<Scalars['Int']>
  /** All values that are not contained in given list. */
  age_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  contact?: InputMaybe<ContactWhereInput>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  currentPosition?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  currentPosition_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  currentPosition_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  currentPosition_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  currentPosition_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  currentPosition_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  currentPosition_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  currentPosition_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  currentPosition_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  currentPosition_starts_with?: InputMaybe<Scalars['String']>
  dob?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  dob_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  dob_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  dob_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  dob_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  dob_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  dob_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  dob_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  dob_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  dob_starts_with?: InputMaybe<Scalars['String']>
  documentInStages_every?: InputMaybe<PersonalInfoWhereStageInput>
  documentInStages_none?: InputMaybe<PersonalInfoWhereStageInput>
  documentInStages_some?: InputMaybe<PersonalInfoWhereStageInput>
  icon?: InputMaybe<AssetWhereInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  image?: InputMaybe<AssetWhereInput>
  introduction?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  introduction_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  introduction_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  introduction_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  introduction_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  introduction_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  introduction_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  introduction_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  introduction_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  introduction_starts_with?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>
  profileImage1?: InputMaybe<AssetWhereInput>
  profileImage2?: InputMaybe<AssetWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  surname?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  surname_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  surname_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  surname_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  surname_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  surname_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  surname_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  surname_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  surname_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  surname_starts_with?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type PersonalInfoWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PersonalInfoWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PersonalInfoWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PersonalInfoWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<PersonalInfoWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References PersonalInfo record uniquely */
export type PersonalInfoWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
}

export type Position = Node & {
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy?: Maybe<User>
  /** Get the document in other stages */
  documentInStages: Array<Position>
  endDate?: Maybe<Scalars['Date']>
  /** List of Position versions */
  history: Array<Version>
  /** The unique identifier */
  id: Scalars['ID']
  isFinished?: Maybe<Scalars['Boolean']>
  period?: Maybe<Scalars['String']>
  positionDetails: Array<PositionDetail>
  positionName: Scalars['String']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  scheduledIn: Array<ScheduledOperation>
  /** System stage field */
  stage: Stage
  startDate?: Maybe<Scalars['Date']>
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
}

export type PositionCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type PositionDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

export type PositionHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: InputMaybe<Stage>
}

export type PositionPositionDetailsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<PositionDetailOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<PositionDetailWhereInput>
}

export type PositionPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type PositionScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type PositionUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type PositionConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: PositionWhereUniqueInput
}

/** A connection to a list of items. */
export type PositionConnection = {
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<PositionEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type PositionCreateInput = {
  clftu0jf532j701up83cy8ibf?: InputMaybe<ExperienceCreateManyInlineInput>
  createdAt?: InputMaybe<Scalars['DateTime']>
  endDate?: InputMaybe<Scalars['Date']>
  isFinished?: InputMaybe<Scalars['Boolean']>
  period?: InputMaybe<Scalars['String']>
  positionDetails?: InputMaybe<PositionDetailCreateManyInlineInput>
  positionName: Scalars['String']
  startDate?: InputMaybe<Scalars['Date']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type PositionCreateManyInlineInput = {
  /** Connect multiple existing Position documents */
  connect?: InputMaybe<Array<PositionWhereUniqueInput>>
  /** Create and connect multiple existing Position documents */
  create?: InputMaybe<Array<PositionCreateInput>>
}

export type PositionCreateOneInlineInput = {
  /** Connect one existing Position document */
  connect?: InputMaybe<PositionWhereUniqueInput>
  /** Create and connect one Position document */
  create?: InputMaybe<PositionCreateInput>
}

export type PositionDetail = Node & {
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy?: Maybe<User>
  detail?: Maybe<Scalars['String']>
  /** Get the document in other stages */
  documentInStages: Array<PositionDetail>
  /** List of PositionDetail versions */
  history: Array<Version>
  /** The unique identifier */
  id: Scalars['ID']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  scheduledIn: Array<ScheduledOperation>
  /** System stage field */
  stage: Stage
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
}

export type PositionDetailCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type PositionDetailDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

export type PositionDetailHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: InputMaybe<Stage>
}

export type PositionDetailPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type PositionDetailScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type PositionDetailUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type PositionDetailConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: PositionDetailWhereUniqueInput
}

/** A connection to a list of items. */
export type PositionDetailConnection = {
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<PositionDetailEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type PositionDetailCreateInput = {
  clfr830rd0tql01ueh2sj9dlc?: InputMaybe<PositionCreateManyInlineInput>
  createdAt?: InputMaybe<Scalars['DateTime']>
  detail?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type PositionDetailCreateManyInlineInput = {
  /** Connect multiple existing PositionDetail documents */
  connect?: InputMaybe<Array<PositionDetailWhereUniqueInput>>
  /** Create and connect multiple existing PositionDetail documents */
  create?: InputMaybe<Array<PositionDetailCreateInput>>
}

export type PositionDetailCreateOneInlineInput = {
  /** Connect one existing PositionDetail document */
  connect?: InputMaybe<PositionDetailWhereUniqueInput>
  /** Create and connect one PositionDetail document */
  create?: InputMaybe<PositionDetailCreateInput>
}

/** An edge in a connection. */
export type PositionDetailEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: PositionDetail
}

/** Identifies documents */
export type PositionDetailManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PositionDetailWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PositionDetailWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PositionDetailWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  detail?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  detail_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  detail_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  detail_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  detail_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  detail_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  detail_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  detail_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  detail_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  detail_starts_with?: InputMaybe<Scalars['String']>
  documentInStages_every?: InputMaybe<PositionDetailWhereStageInput>
  documentInStages_none?: InputMaybe<PositionDetailWhereStageInput>
  documentInStages_some?: InputMaybe<PositionDetailWhereStageInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum PositionDetailOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DetailAsc = 'detail_ASC',
  DetailDesc = 'detail_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type PositionDetailUpdateInput = {
  clfr830rd0tql01ueh2sj9dlc?: InputMaybe<PositionUpdateManyInlineInput>
  detail?: InputMaybe<Scalars['String']>
}

export type PositionDetailUpdateManyInlineInput = {
  /** Connect multiple existing PositionDetail documents */
  connect?: InputMaybe<Array<PositionDetailConnectInput>>
  /** Create and connect multiple PositionDetail documents */
  create?: InputMaybe<Array<PositionDetailCreateInput>>
  /** Delete multiple PositionDetail documents */
  delete?: InputMaybe<Array<PositionDetailWhereUniqueInput>>
  /** Disconnect multiple PositionDetail documents */
  disconnect?: InputMaybe<Array<PositionDetailWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing PositionDetail documents */
  set?: InputMaybe<Array<PositionDetailWhereUniqueInput>>
  /** Update multiple PositionDetail documents */
  update?: InputMaybe<Array<PositionDetailUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple PositionDetail documents */
  upsert?: InputMaybe<Array<PositionDetailUpsertWithNestedWhereUniqueInput>>
}

export type PositionDetailUpdateManyInput = {
  detail?: InputMaybe<Scalars['String']>
}

export type PositionDetailUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PositionDetailUpdateManyInput
  /** Document search */
  where: PositionDetailWhereInput
}

export type PositionDetailUpdateOneInlineInput = {
  /** Connect existing PositionDetail document */
  connect?: InputMaybe<PositionDetailWhereUniqueInput>
  /** Create and connect one PositionDetail document */
  create?: InputMaybe<PositionDetailCreateInput>
  /** Delete currently connected PositionDetail document */
  delete?: InputMaybe<Scalars['Boolean']>
  /** Disconnect currently connected PositionDetail document */
  disconnect?: InputMaybe<Scalars['Boolean']>
  /** Update single PositionDetail document */
  update?: InputMaybe<PositionDetailUpdateWithNestedWhereUniqueInput>
  /** Upsert single PositionDetail document */
  upsert?: InputMaybe<PositionDetailUpsertWithNestedWhereUniqueInput>
}

export type PositionDetailUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PositionDetailUpdateInput
  /** Unique document search */
  where: PositionDetailWhereUniqueInput
}

export type PositionDetailUpsertInput = {
  /** Create document if it didn't exist */
  create: PositionDetailCreateInput
  /** Update document if it exists */
  update: PositionDetailUpdateInput
}

export type PositionDetailUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PositionDetailUpsertInput
  /** Unique document search */
  where: PositionDetailWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type PositionDetailWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>
}

/** Identifies documents */
export type PositionDetailWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PositionDetailWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PositionDetailWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PositionDetailWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  detail?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  detail_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  detail_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  detail_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  detail_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  detail_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  detail_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  detail_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  detail_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  detail_starts_with?: InputMaybe<Scalars['String']>
  documentInStages_every?: InputMaybe<PositionDetailWhereStageInput>
  documentInStages_none?: InputMaybe<PositionDetailWhereStageInput>
  documentInStages_some?: InputMaybe<PositionDetailWhereStageInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type PositionDetailWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PositionDetailWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PositionDetailWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PositionDetailWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<PositionDetailWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References PositionDetail record uniquely */
export type PositionDetailWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
}

/** An edge in a connection. */
export type PositionEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: Position
}

/** Identifies documents */
export type PositionManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PositionWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PositionWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PositionWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<PositionWhereStageInput>
  documentInStages_none?: InputMaybe<PositionWhereStageInput>
  documentInStages_some?: InputMaybe<PositionWhereStageInput>
  endDate?: InputMaybe<Scalars['Date']>
  /** All values greater than the given value. */
  endDate_gt?: InputMaybe<Scalars['Date']>
  /** All values greater than or equal the given value. */
  endDate_gte?: InputMaybe<Scalars['Date']>
  /** All values that are contained in given list. */
  endDate_in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>
  /** All values less than the given value. */
  endDate_lt?: InputMaybe<Scalars['Date']>
  /** All values less than or equal the given value. */
  endDate_lte?: InputMaybe<Scalars['Date']>
  /** Any other value that exists and is not equal to the given value. */
  endDate_not?: InputMaybe<Scalars['Date']>
  /** All values that are not contained in given list. */
  endDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  isFinished?: InputMaybe<Scalars['Boolean']>
  /** Any other value that exists and is not equal to the given value. */
  isFinished_not?: InputMaybe<Scalars['Boolean']>
  period?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  period_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  period_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  period_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  period_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  period_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  period_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  period_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  period_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  period_starts_with?: InputMaybe<Scalars['String']>
  positionDetails_every?: InputMaybe<PositionDetailWhereInput>
  positionDetails_none?: InputMaybe<PositionDetailWhereInput>
  positionDetails_some?: InputMaybe<PositionDetailWhereInput>
  positionName?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  positionName_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  positionName_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  positionName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  positionName_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  positionName_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  positionName_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  positionName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  positionName_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  positionName_starts_with?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  startDate?: InputMaybe<Scalars['Date']>
  /** All values greater than the given value. */
  startDate_gt?: InputMaybe<Scalars['Date']>
  /** All values greater than or equal the given value. */
  startDate_gte?: InputMaybe<Scalars['Date']>
  /** All values that are contained in given list. */
  startDate_in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>
  /** All values less than the given value. */
  startDate_lt?: InputMaybe<Scalars['Date']>
  /** All values less than or equal the given value. */
  startDate_lte?: InputMaybe<Scalars['Date']>
  /** Any other value that exists and is not equal to the given value. */
  startDate_not?: InputMaybe<Scalars['Date']>
  /** All values that are not contained in given list. */
  startDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum PositionOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EndDateAsc = 'endDate_ASC',
  EndDateDesc = 'endDate_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsFinishedAsc = 'isFinished_ASC',
  IsFinishedDesc = 'isFinished_DESC',
  PeriodAsc = 'period_ASC',
  PeriodDesc = 'period_DESC',
  PositionNameAsc = 'positionName_ASC',
  PositionNameDesc = 'positionName_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type PositionUpdateInput = {
  clftu0jf532j701up83cy8ibf?: InputMaybe<ExperienceUpdateManyInlineInput>
  endDate?: InputMaybe<Scalars['Date']>
  isFinished?: InputMaybe<Scalars['Boolean']>
  period?: InputMaybe<Scalars['String']>
  positionDetails?: InputMaybe<PositionDetailUpdateManyInlineInput>
  positionName?: InputMaybe<Scalars['String']>
  startDate?: InputMaybe<Scalars['Date']>
}

export type PositionUpdateManyInlineInput = {
  /** Connect multiple existing Position documents */
  connect?: InputMaybe<Array<PositionConnectInput>>
  /** Create and connect multiple Position documents */
  create?: InputMaybe<Array<PositionCreateInput>>
  /** Delete multiple Position documents */
  delete?: InputMaybe<Array<PositionWhereUniqueInput>>
  /** Disconnect multiple Position documents */
  disconnect?: InputMaybe<Array<PositionWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Position documents */
  set?: InputMaybe<Array<PositionWhereUniqueInput>>
  /** Update multiple Position documents */
  update?: InputMaybe<Array<PositionUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Position documents */
  upsert?: InputMaybe<Array<PositionUpsertWithNestedWhereUniqueInput>>
}

export type PositionUpdateManyInput = {
  endDate?: InputMaybe<Scalars['Date']>
  isFinished?: InputMaybe<Scalars['Boolean']>
  period?: InputMaybe<Scalars['String']>
  positionName?: InputMaybe<Scalars['String']>
  startDate?: InputMaybe<Scalars['Date']>
}

export type PositionUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PositionUpdateManyInput
  /** Document search */
  where: PositionWhereInput
}

export type PositionUpdateOneInlineInput = {
  /** Connect existing Position document */
  connect?: InputMaybe<PositionWhereUniqueInput>
  /** Create and connect one Position document */
  create?: InputMaybe<PositionCreateInput>
  /** Delete currently connected Position document */
  delete?: InputMaybe<Scalars['Boolean']>
  /** Disconnect currently connected Position document */
  disconnect?: InputMaybe<Scalars['Boolean']>
  /** Update single Position document */
  update?: InputMaybe<PositionUpdateWithNestedWhereUniqueInput>
  /** Upsert single Position document */
  upsert?: InputMaybe<PositionUpsertWithNestedWhereUniqueInput>
}

export type PositionUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PositionUpdateInput
  /** Unique document search */
  where: PositionWhereUniqueInput
}

export type PositionUpsertInput = {
  /** Create document if it didn't exist */
  create: PositionCreateInput
  /** Update document if it exists */
  update: PositionUpdateInput
}

export type PositionUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PositionUpsertInput
  /** Unique document search */
  where: PositionWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type PositionWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>
}

/** Identifies documents */
export type PositionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PositionWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PositionWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PositionWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<PositionWhereStageInput>
  documentInStages_none?: InputMaybe<PositionWhereStageInput>
  documentInStages_some?: InputMaybe<PositionWhereStageInput>
  endDate?: InputMaybe<Scalars['Date']>
  /** All values greater than the given value. */
  endDate_gt?: InputMaybe<Scalars['Date']>
  /** All values greater than or equal the given value. */
  endDate_gte?: InputMaybe<Scalars['Date']>
  /** All values that are contained in given list. */
  endDate_in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>
  /** All values less than the given value. */
  endDate_lt?: InputMaybe<Scalars['Date']>
  /** All values less than or equal the given value. */
  endDate_lte?: InputMaybe<Scalars['Date']>
  /** Any other value that exists and is not equal to the given value. */
  endDate_not?: InputMaybe<Scalars['Date']>
  /** All values that are not contained in given list. */
  endDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  isFinished?: InputMaybe<Scalars['Boolean']>
  /** Any other value that exists and is not equal to the given value. */
  isFinished_not?: InputMaybe<Scalars['Boolean']>
  period?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  period_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  period_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  period_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  period_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  period_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  period_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  period_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  period_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  period_starts_with?: InputMaybe<Scalars['String']>
  positionDetails_every?: InputMaybe<PositionDetailWhereInput>
  positionDetails_none?: InputMaybe<PositionDetailWhereInput>
  positionDetails_some?: InputMaybe<PositionDetailWhereInput>
  positionName?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  positionName_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  positionName_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  positionName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  positionName_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  positionName_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  positionName_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  positionName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  positionName_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  positionName_starts_with?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  startDate?: InputMaybe<Scalars['Date']>
  /** All values greater than the given value. */
  startDate_gt?: InputMaybe<Scalars['Date']>
  /** All values greater than or equal the given value. */
  startDate_gte?: InputMaybe<Scalars['Date']>
  /** All values that are contained in given list. */
  startDate_in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>
  /** All values less than the given value. */
  startDate_lt?: InputMaybe<Scalars['Date']>
  /** All values less than or equal the given value. */
  startDate_lte?: InputMaybe<Scalars['Date']>
  /** Any other value that exists and is not equal to the given value. */
  startDate_not?: InputMaybe<Scalars['Date']>
  /** All values that are not contained in given list. */
  startDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type PositionWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PositionWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PositionWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PositionWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<PositionWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References Position record uniquely */
export type PositionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
}

export type Program = Node & {
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy?: Maybe<User>
  /** Get the document in other stages */
  documentInStages: Array<Program>
  /** List of Program versions */
  history: Array<Version>
  /** The unique identifier */
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  scheduledIn: Array<ScheduledOperation>
  /** System stage field */
  stage: Stage
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
}

export type ProgramCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type ProgramDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

export type ProgramHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: InputMaybe<Stage>
}

export type ProgramPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type ProgramScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type ProgramUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type ProgramConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: ProgramWhereUniqueInput
}

/** A connection to a list of items. */
export type ProgramConnection = {
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<ProgramEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type ProgramCreateInput = {
  clfr6y5bg0tvc01uo7h4sagln?: InputMaybe<EducationCreateManyInlineInput>
  createdAt?: InputMaybe<Scalars['DateTime']>
  name?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type ProgramCreateManyInlineInput = {
  /** Connect multiple existing Program documents */
  connect?: InputMaybe<Array<ProgramWhereUniqueInput>>
  /** Create and connect multiple existing Program documents */
  create?: InputMaybe<Array<ProgramCreateInput>>
}

export type ProgramCreateOneInlineInput = {
  /** Connect one existing Program document */
  connect?: InputMaybe<ProgramWhereUniqueInput>
  /** Create and connect one Program document */
  create?: InputMaybe<ProgramCreateInput>
}

/** An edge in a connection. */
export type ProgramEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: Program
}

/** Identifies documents */
export type ProgramManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProgramWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProgramWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProgramWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<ProgramWhereStageInput>
  documentInStages_none?: InputMaybe<ProgramWhereStageInput>
  documentInStages_some?: InputMaybe<ProgramWhereStageInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  name?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum ProgramOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type ProgramUpdateInput = {
  clfr6y5bg0tvc01uo7h4sagln?: InputMaybe<EducationUpdateManyInlineInput>
  name?: InputMaybe<Scalars['String']>
}

export type ProgramUpdateManyInlineInput = {
  /** Connect multiple existing Program documents */
  connect?: InputMaybe<Array<ProgramConnectInput>>
  /** Create and connect multiple Program documents */
  create?: InputMaybe<Array<ProgramCreateInput>>
  /** Delete multiple Program documents */
  delete?: InputMaybe<Array<ProgramWhereUniqueInput>>
  /** Disconnect multiple Program documents */
  disconnect?: InputMaybe<Array<ProgramWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Program documents */
  set?: InputMaybe<Array<ProgramWhereUniqueInput>>
  /** Update multiple Program documents */
  update?: InputMaybe<Array<ProgramUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Program documents */
  upsert?: InputMaybe<Array<ProgramUpsertWithNestedWhereUniqueInput>>
}

export type ProgramUpdateManyInput = {
  name?: InputMaybe<Scalars['String']>
}

export type ProgramUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ProgramUpdateManyInput
  /** Document search */
  where: ProgramWhereInput
}

export type ProgramUpdateOneInlineInput = {
  /** Connect existing Program document */
  connect?: InputMaybe<ProgramWhereUniqueInput>
  /** Create and connect one Program document */
  create?: InputMaybe<ProgramCreateInput>
  /** Delete currently connected Program document */
  delete?: InputMaybe<Scalars['Boolean']>
  /** Disconnect currently connected Program document */
  disconnect?: InputMaybe<Scalars['Boolean']>
  /** Update single Program document */
  update?: InputMaybe<ProgramUpdateWithNestedWhereUniqueInput>
  /** Upsert single Program document */
  upsert?: InputMaybe<ProgramUpsertWithNestedWhereUniqueInput>
}

export type ProgramUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ProgramUpdateInput
  /** Unique document search */
  where: ProgramWhereUniqueInput
}

export type ProgramUpsertInput = {
  /** Create document if it didn't exist */
  create: ProgramCreateInput
  /** Update document if it exists */
  update: ProgramUpdateInput
}

export type ProgramUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ProgramUpsertInput
  /** Unique document search */
  where: ProgramWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type ProgramWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>
}

/** Identifies documents */
export type ProgramWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProgramWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProgramWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProgramWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<ProgramWhereStageInput>
  documentInStages_none?: InputMaybe<ProgramWhereStageInput>
  documentInStages_some?: InputMaybe<ProgramWhereStageInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  name?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ProgramWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProgramWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProgramWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProgramWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ProgramWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References Program record uniquely */
export type ProgramWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
}

export type Project = Node & {
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy?: Maybe<User>
  description?: Maybe<Scalars['String']>
  /** Get the document in other stages */
  documentInStages: Array<Project>
  /** List of Project versions */
  history: Array<Version>
  /** The unique identifier */
  id: Scalars['ID']
  image?: Maybe<Asset>
  link?: Maybe<Scalars['String']>
  name: Scalars['String']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  scheduledIn: Array<ScheduledOperation>
  sequence: Scalars['Int']
  /** System stage field */
  stage: Stage
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
}

export type ProjectCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type ProjectDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

export type ProjectHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: InputMaybe<Stage>
}

export type ProjectImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type ProjectPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type ProjectScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type ProjectUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type ProjectConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: ProjectWhereUniqueInput
}

/** A connection to a list of items. */
export type ProjectConnection = {
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<ProjectEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type ProjectCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>
  description?: InputMaybe<Scalars['String']>
  image?: InputMaybe<AssetCreateOneInlineInput>
  link?: InputMaybe<Scalars['String']>
  name: Scalars['String']
  sequence: Scalars['Int']
  updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type ProjectCreateManyInlineInput = {
  /** Connect multiple existing Project documents */
  connect?: InputMaybe<Array<ProjectWhereUniqueInput>>
  /** Create and connect multiple existing Project documents */
  create?: InputMaybe<Array<ProjectCreateInput>>
}

export type ProjectCreateOneInlineInput = {
  /** Connect one existing Project document */
  connect?: InputMaybe<ProjectWhereUniqueInput>
  /** Create and connect one Project document */
  create?: InputMaybe<ProjectCreateInput>
}

/** An edge in a connection. */
export type ProjectEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: Project
}

/** Identifies documents */
export type ProjectManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProjectWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProjectWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProjectWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>
  documentInStages_every?: InputMaybe<ProjectWhereStageInput>
  documentInStages_none?: InputMaybe<ProjectWhereStageInput>
  documentInStages_some?: InputMaybe<ProjectWhereStageInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  image?: InputMaybe<AssetWhereInput>
  link?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  link_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  link_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  link_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  link_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  link_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  link_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  link_starts_with?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  sequence?: InputMaybe<Scalars['Int']>
  /** All values greater than the given value. */
  sequence_gt?: InputMaybe<Scalars['Int']>
  /** All values greater than or equal the given value. */
  sequence_gte?: InputMaybe<Scalars['Int']>
  /** All values that are contained in given list. */
  sequence_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  /** All values less than the given value. */
  sequence_lt?: InputMaybe<Scalars['Int']>
  /** All values less than or equal the given value. */
  sequence_lte?: InputMaybe<Scalars['Int']>
  /** Any other value that exists and is not equal to the given value. */
  sequence_not?: InputMaybe<Scalars['Int']>
  /** All values that are not contained in given list. */
  sequence_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum ProjectOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SequenceAsc = 'sequence_ASC',
  SequenceDesc = 'sequence_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type ProjectUpdateInput = {
  description?: InputMaybe<Scalars['String']>
  image?: InputMaybe<AssetUpdateOneInlineInput>
  link?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  sequence?: InputMaybe<Scalars['Int']>
}

export type ProjectUpdateManyInlineInput = {
  /** Connect multiple existing Project documents */
  connect?: InputMaybe<Array<ProjectConnectInput>>
  /** Create and connect multiple Project documents */
  create?: InputMaybe<Array<ProjectCreateInput>>
  /** Delete multiple Project documents */
  delete?: InputMaybe<Array<ProjectWhereUniqueInput>>
  /** Disconnect multiple Project documents */
  disconnect?: InputMaybe<Array<ProjectWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Project documents */
  set?: InputMaybe<Array<ProjectWhereUniqueInput>>
  /** Update multiple Project documents */
  update?: InputMaybe<Array<ProjectUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Project documents */
  upsert?: InputMaybe<Array<ProjectUpsertWithNestedWhereUniqueInput>>
}

export type ProjectUpdateManyInput = {
  description?: InputMaybe<Scalars['String']>
  link?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  sequence?: InputMaybe<Scalars['Int']>
}

export type ProjectUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ProjectUpdateManyInput
  /** Document search */
  where: ProjectWhereInput
}

export type ProjectUpdateOneInlineInput = {
  /** Connect existing Project document */
  connect?: InputMaybe<ProjectWhereUniqueInput>
  /** Create and connect one Project document */
  create?: InputMaybe<ProjectCreateInput>
  /** Delete currently connected Project document */
  delete?: InputMaybe<Scalars['Boolean']>
  /** Disconnect currently connected Project document */
  disconnect?: InputMaybe<Scalars['Boolean']>
  /** Update single Project document */
  update?: InputMaybe<ProjectUpdateWithNestedWhereUniqueInput>
  /** Upsert single Project document */
  upsert?: InputMaybe<ProjectUpsertWithNestedWhereUniqueInput>
}

export type ProjectUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ProjectUpdateInput
  /** Unique document search */
  where: ProjectWhereUniqueInput
}

export type ProjectUpsertInput = {
  /** Create document if it didn't exist */
  create: ProjectCreateInput
  /** Update document if it exists */
  update: ProjectUpdateInput
}

export type ProjectUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ProjectUpsertInput
  /** Unique document search */
  where: ProjectWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type ProjectWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>
}

/** Identifies documents */
export type ProjectWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProjectWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProjectWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProjectWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>
  documentInStages_every?: InputMaybe<ProjectWhereStageInput>
  documentInStages_none?: InputMaybe<ProjectWhereStageInput>
  documentInStages_some?: InputMaybe<ProjectWhereStageInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  image?: InputMaybe<AssetWhereInput>
  link?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  link_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  link_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  link_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  link_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  link_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  link_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  link_starts_with?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  sequence?: InputMaybe<Scalars['Int']>
  /** All values greater than the given value. */
  sequence_gt?: InputMaybe<Scalars['Int']>
  /** All values greater than or equal the given value. */
  sequence_gte?: InputMaybe<Scalars['Int']>
  /** All values that are contained in given list. */
  sequence_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  /** All values less than the given value. */
  sequence_lt?: InputMaybe<Scalars['Int']>
  /** All values less than or equal the given value. */
  sequence_lte?: InputMaybe<Scalars['Int']>
  /** Any other value that exists and is not equal to the given value. */
  sequence_not?: InputMaybe<Scalars['Int']>
  /** All values that are not contained in given list. */
  sequence_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ProjectWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProjectWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProjectWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProjectWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ProjectWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References Project record uniquely */
export type ProjectWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
}

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale
  /** Stages to publish selected locales to */
  stages: Array<Stage>
}

export type Query = {
  /** Retrieve a single asset */
  asset?: Maybe<Asset>
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple assets */
  assets: Array<Asset>
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection
  /** Retrieve a single certificate */
  certificate?: Maybe<Certificate>
  /** Retrieve document version */
  certificateVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple certificates */
  certificates: Array<Certificate>
  /** Retrieve multiple certificates using the Relay connection interface */
  certificatesConnection: CertificateConnection
  /** Retrieve a single contact */
  contact?: Maybe<Contact>
  /** Retrieve document version */
  contactVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple contacts */
  contacts: Array<Contact>
  /** Retrieve multiple contacts using the Relay connection interface */
  contactsConnection: ContactConnection
  /** Retrieve a single education */
  education?: Maybe<Education>
  /** Retrieve document version */
  educationVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple educations */
  educations: Array<Education>
  /** Retrieve multiple educations using the Relay connection interface */
  educationsConnection: EducationConnection
  /** Retrieve a single experience */
  experience?: Maybe<Experience>
  /** Retrieve document version */
  experienceVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple experiences */
  experiences: Array<Experience>
  /** Retrieve multiple experiences using the Relay connection interface */
  experiencesConnection: ExperienceConnection
  /** Fetches an object given its ID */
  node?: Maybe<Node>
  /** Retrieve a single personalInfo */
  personalInfo?: Maybe<PersonalInfo>
  /** Retrieve document version */
  personalInfoVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple personalInfos */
  personalInfos: Array<PersonalInfo>
  /** Retrieve multiple personalInfos using the Relay connection interface */
  personalInfosConnection: PersonalInfoConnection
  /** Retrieve a single position */
  position?: Maybe<Position>
  /** Retrieve a single positionDetail */
  positionDetail?: Maybe<PositionDetail>
  /** Retrieve document version */
  positionDetailVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple positionDetails */
  positionDetails: Array<PositionDetail>
  /** Retrieve multiple positionDetails using the Relay connection interface */
  positionDetailsConnection: PositionDetailConnection
  /** Retrieve document version */
  positionVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple positions */
  positions: Array<Position>
  /** Retrieve multiple positions using the Relay connection interface */
  positionsConnection: PositionConnection
  /** Retrieve a single program */
  program?: Maybe<Program>
  /** Retrieve document version */
  programVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple programs */
  programs: Array<Program>
  /** Retrieve multiple programs using the Relay connection interface */
  programsConnection: ProgramConnection
  /** Retrieve a single project */
  project?: Maybe<Project>
  /** Retrieve document version */
  projectVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple projects */
  projects: Array<Project>
  /** Retrieve multiple projects using the Relay connection interface */
  projectsConnection: ProjectConnection
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection
  /** Retrieve a single software */
  software?: Maybe<Software>
  /** Retrieve document version */
  softwareVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple softwares */
  softwares: Array<Software>
  /** Retrieve multiple softwares using the Relay connection interface */
  softwaresConnection: SoftwareConnection
  /** Retrieve a single technicalSkill */
  technicalSkill?: Maybe<TechnicalSkill>
  /** Retrieve document version */
  technicalSkillVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple technicalSkills */
  technicalSkills: Array<TechnicalSkill>
  /** Retrieve multiple technicalSkills using the Relay connection interface */
  technicalSkillsConnection: TechnicalSkillConnection
  /** Retrieve a single user */
  user?: Maybe<User>
  /** Retrieve multiple users */
  users: Array<User>
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection
  /** Retrieve a single video */
  video?: Maybe<Video>
  /** Retrieve document version */
  videoVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple videos */
  videos: Array<Video>
  /** Retrieve multiple videos using the Relay connection interface */
  videosConnection: VideoConnection
}

export type QueryAssetArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: AssetWhereUniqueInput
}

export type QueryAssetVersionArgs = {
  where: VersionWhereInput
}

export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<AssetOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<AssetWhereInput>
}

export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<AssetOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<AssetWhereInput>
}

export type QueryCertificateArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: CertificateWhereUniqueInput
}

export type QueryCertificateVersionArgs = {
  where: VersionWhereInput
}

export type QueryCertificatesArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<CertificateOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<CertificateWhereInput>
}

export type QueryCertificatesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<CertificateOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<CertificateWhereInput>
}

export type QueryContactArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: ContactWhereUniqueInput
}

export type QueryContactVersionArgs = {
  where: VersionWhereInput
}

export type QueryContactsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ContactOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<ContactWhereInput>
}

export type QueryContactsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ContactOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<ContactWhereInput>
}

export type QueryEducationArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: EducationWhereUniqueInput
}

export type QueryEducationVersionArgs = {
  where: VersionWhereInput
}

export type QueryEducationsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<EducationOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<EducationWhereInput>
}

export type QueryEducationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<EducationOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<EducationWhereInput>
}

export type QueryExperienceArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: ExperienceWhereUniqueInput
}

export type QueryExperienceVersionArgs = {
  where: VersionWhereInput
}

export type QueryExperiencesArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ExperienceOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<ExperienceWhereInput>
}

export type QueryExperiencesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ExperienceOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<ExperienceWhereInput>
}

export type QueryNodeArgs = {
  id: Scalars['ID']
  locales?: Array<Locale>
  stage?: Stage
}

export type QueryPersonalInfoArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: PersonalInfoWhereUniqueInput
}

export type QueryPersonalInfoVersionArgs = {
  where: VersionWhereInput
}

export type QueryPersonalInfosArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<PersonalInfoOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<PersonalInfoWhereInput>
}

export type QueryPersonalInfosConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<PersonalInfoOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<PersonalInfoWhereInput>
}

export type QueryPositionArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: PositionWhereUniqueInput
}

export type QueryPositionDetailArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: PositionDetailWhereUniqueInput
}

export type QueryPositionDetailVersionArgs = {
  where: VersionWhereInput
}

export type QueryPositionDetailsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<PositionDetailOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<PositionDetailWhereInput>
}

export type QueryPositionDetailsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<PositionDetailOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<PositionDetailWhereInput>
}

export type QueryPositionVersionArgs = {
  where: VersionWhereInput
}

export type QueryPositionsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<PositionOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<PositionWhereInput>
}

export type QueryPositionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<PositionOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<PositionWhereInput>
}

export type QueryProgramArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: ProgramWhereUniqueInput
}

export type QueryProgramVersionArgs = {
  where: VersionWhereInput
}

export type QueryProgramsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ProgramOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<ProgramWhereInput>
}

export type QueryProgramsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ProgramOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<ProgramWhereInput>
}

export type QueryProjectArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: ProjectWhereUniqueInput
}

export type QueryProjectVersionArgs = {
  where: VersionWhereInput
}

export type QueryProjectsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ProjectOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<ProjectWhereInput>
}

export type QueryProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ProjectOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<ProjectWhereInput>
}

export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: ScheduledOperationWhereUniqueInput
}

export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: ScheduledReleaseWhereUniqueInput
}

export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<ScheduledReleaseWhereInput>
}

export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<ScheduledReleaseWhereInput>
}

export type QuerySoftwareArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: SoftwareWhereUniqueInput
}

export type QuerySoftwareVersionArgs = {
  where: VersionWhereInput
}

export type QuerySoftwaresArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<SoftwareOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<SoftwareWhereInput>
}

export type QuerySoftwaresConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<SoftwareOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<SoftwareWhereInput>
}

export type QueryTechnicalSkillArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: TechnicalSkillWhereUniqueInput
}

export type QueryTechnicalSkillVersionArgs = {
  where: VersionWhereInput
}

export type QueryTechnicalSkillsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<TechnicalSkillOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<TechnicalSkillWhereInput>
}

export type QueryTechnicalSkillsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<TechnicalSkillOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<TechnicalSkillWhereInput>
}

export type QueryUserArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: UserWhereUniqueInput
}

export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<UserOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<UserWhereInput>
}

export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<UserOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<UserWhereInput>
}

export type QueryVideoArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: VideoWhereUniqueInput
}

export type QueryVideoVersionArgs = {
  where: VersionWhereInput
}

export type QueryVideosArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<VideoOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<VideoWhereInput>
}

export type QueryVideosConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<VideoOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<VideoWhereInput>
}

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  a: Scalars['RGBATransparency']
  b: Scalars['RGBAHue']
  g: Scalars['RGBAHue']
  r: Scalars['RGBAHue']
}

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency']
  b: Scalars['RGBAHue']
  g: Scalars['RGBAHue']
  r: Scalars['RGBAHue']
}

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  /** Returns HTMl representation */
  html: Scalars['String']
  /** Returns Markdown representation */
  markdown: Scalars['String']
  /** Returns AST representation */
  raw: Scalars['RichTextAST']
  /** Returns plain-text contents of RichText */
  text: Scalars['String']
}

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
  affectedDocuments: Array<ScheduledOperationAffectedDocument>
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy?: Maybe<User>
  /** Operation description */
  description?: Maybe<Scalars['String']>
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']>
  /** The unique identifier */
  id: Scalars['ID']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json']
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>
  /** System stage field */
  stage: Stage
  /** operation Status */
  status: ScheduledOperationStatus
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
}

/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']>
}

/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type ScheduledOperationAffectedDocument =
  | Asset
  | Certificate
  | Contact
  | Education
  | Experience
  | PersonalInfo
  | Position
  | PositionDetail
  | Program
  | Project
  | Software
  | TechnicalSkill
  | Video

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput
}

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>
}

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>
}

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: ScheduledOperation
}

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>
  errorMessage?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']>
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']>
  release?: InputMaybe<ScheduledReleaseWhereInput>
  status?: InputMaybe<ScheduledOperationStatus>
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING',
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>
}

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']>
}

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>
  errorMessage?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']>
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']>
  release?: InputMaybe<ScheduledReleaseWhereInput>
  status?: InputMaybe<ScheduledOperationStatus>
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
}

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy?: Maybe<User>
  /** Release description */
  description?: Maybe<Scalars['String']>
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']>
  /** The unique identifier */
  id: Scalars['ID']
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean']
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean']
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']>
  /** System stage field */
  stage: Stage
  /** Release Status */
  status: ScheduledReleaseStatus
  /** Release Title */
  title?: Maybe<Scalars['String']>
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
}

/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput
}

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>
  description?: InputMaybe<Scalars['String']>
  errorMessage?: InputMaybe<Scalars['String']>
  isActive?: InputMaybe<Scalars['Boolean']>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  title?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>
}

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>
}

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: ScheduledRelease
}

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>
  errorMessage?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  isActive?: InputMaybe<Scalars['Boolean']>
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>
  isImplicit?: InputMaybe<Scalars['Boolean']>
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>
  operations_every?: InputMaybe<ScheduledOperationWhereInput>
  operations_none?: InputMaybe<ScheduledOperationWhereInput>
  operations_some?: InputMaybe<ScheduledOperationWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  status?: InputMaybe<ScheduledReleaseStatus>
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>
  title?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING',
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']>
  errorMessage?: InputMaybe<Scalars['String']>
  isActive?: InputMaybe<Scalars['Boolean']>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  title?: InputMaybe<Scalars['String']>
}

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>
}

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']>
  errorMessage?: InputMaybe<Scalars['String']>
  isActive?: InputMaybe<Scalars['Boolean']>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  title?: InputMaybe<Scalars['String']>
}

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput
  /** Document search */
  where: ScheduledReleaseWhereInput
}

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']>
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']>
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>
}

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput
}

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput
}

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput
}

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>
  errorMessage?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  isActive?: InputMaybe<Scalars['Boolean']>
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>
  isImplicit?: InputMaybe<Scalars['Boolean']>
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>
  operations_every?: InputMaybe<ScheduledOperationWhereInput>
  operations_none?: InputMaybe<ScheduledOperationWhereInput>
  operations_some?: InputMaybe<ScheduledOperationWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  status?: InputMaybe<ScheduledReleaseStatus>
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>
  title?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
}

export type Software = Node & {
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy?: Maybe<User>
  /** Get the document in other stages */
  documentInStages: Array<Software>
  /** List of Software versions */
  history: Array<Version>
  /** The unique identifier */
  id: Scalars['ID']
  image?: Maybe<Asset>
  name: Scalars['String']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  scheduledIn: Array<ScheduledOperation>
  /** System stage field */
  stage: Stage
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
}

export type SoftwareCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type SoftwareDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

export type SoftwareHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: InputMaybe<Stage>
}

export type SoftwareImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type SoftwarePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type SoftwareScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type SoftwareUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type SoftwareConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: SoftwareWhereUniqueInput
}

/** A connection to a list of items. */
export type SoftwareConnection = {
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<SoftwareEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type SoftwareCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>
  image?: InputMaybe<AssetCreateOneInlineInput>
  name: Scalars['String']
  updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type SoftwareCreateManyInlineInput = {
  /** Connect multiple existing Software documents */
  connect?: InputMaybe<Array<SoftwareWhereUniqueInput>>
  /** Create and connect multiple existing Software documents */
  create?: InputMaybe<Array<SoftwareCreateInput>>
}

export type SoftwareCreateOneInlineInput = {
  /** Connect one existing Software document */
  connect?: InputMaybe<SoftwareWhereUniqueInput>
  /** Create and connect one Software document */
  create?: InputMaybe<SoftwareCreateInput>
}

/** An edge in a connection. */
export type SoftwareEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: Software
}

/** Identifies documents */
export type SoftwareManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SoftwareWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SoftwareWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SoftwareWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<SoftwareWhereStageInput>
  documentInStages_none?: InputMaybe<SoftwareWhereStageInput>
  documentInStages_some?: InputMaybe<SoftwareWhereStageInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  image?: InputMaybe<AssetWhereInput>
  name?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum SoftwareOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type SoftwareUpdateInput = {
  image?: InputMaybe<AssetUpdateOneInlineInput>
  name?: InputMaybe<Scalars['String']>
}

export type SoftwareUpdateManyInlineInput = {
  /** Connect multiple existing Software documents */
  connect?: InputMaybe<Array<SoftwareConnectInput>>
  /** Create and connect multiple Software documents */
  create?: InputMaybe<Array<SoftwareCreateInput>>
  /** Delete multiple Software documents */
  delete?: InputMaybe<Array<SoftwareWhereUniqueInput>>
  /** Disconnect multiple Software documents */
  disconnect?: InputMaybe<Array<SoftwareWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Software documents */
  set?: InputMaybe<Array<SoftwareWhereUniqueInput>>
  /** Update multiple Software documents */
  update?: InputMaybe<Array<SoftwareUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Software documents */
  upsert?: InputMaybe<Array<SoftwareUpsertWithNestedWhereUniqueInput>>
}

export type SoftwareUpdateManyInput = {
  name?: InputMaybe<Scalars['String']>
}

export type SoftwareUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: SoftwareUpdateManyInput
  /** Document search */
  where: SoftwareWhereInput
}

export type SoftwareUpdateOneInlineInput = {
  /** Connect existing Software document */
  connect?: InputMaybe<SoftwareWhereUniqueInput>
  /** Create and connect one Software document */
  create?: InputMaybe<SoftwareCreateInput>
  /** Delete currently connected Software document */
  delete?: InputMaybe<Scalars['Boolean']>
  /** Disconnect currently connected Software document */
  disconnect?: InputMaybe<Scalars['Boolean']>
  /** Update single Software document */
  update?: InputMaybe<SoftwareUpdateWithNestedWhereUniqueInput>
  /** Upsert single Software document */
  upsert?: InputMaybe<SoftwareUpsertWithNestedWhereUniqueInput>
}

export type SoftwareUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: SoftwareUpdateInput
  /** Unique document search */
  where: SoftwareWhereUniqueInput
}

export type SoftwareUpsertInput = {
  /** Create document if it didn't exist */
  create: SoftwareCreateInput
  /** Update document if it exists */
  update: SoftwareUpdateInput
}

export type SoftwareUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: SoftwareUpsertInput
  /** Unique document search */
  where: SoftwareWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type SoftwareWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>
}

/** Identifies documents */
export type SoftwareWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SoftwareWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SoftwareWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SoftwareWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<SoftwareWhereStageInput>
  documentInStages_none?: InputMaybe<SoftwareWhereStageInput>
  documentInStages_some?: InputMaybe<SoftwareWhereStageInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  image?: InputMaybe<AssetWhereInput>
  name?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type SoftwareWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SoftwareWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SoftwareWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SoftwareWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<SoftwareWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References Software record uniquely */
export type SoftwareWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
}

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED',
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION',
}

export type TechnicalSkill = Node & {
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy?: Maybe<User>
  /** Get the document in other stages */
  documentInStages: Array<TechnicalSkill>
  /** List of TechnicalSkill versions */
  history: Array<Version>
  /** The unique identifier */
  id: Scalars['ID']
  image?: Maybe<Asset>
  programmingLanguage: Scalars['String']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  scheduledIn: Array<ScheduledOperation>
  /** System stage field */
  stage: Stage
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
}

export type TechnicalSkillCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type TechnicalSkillDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

export type TechnicalSkillHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: InputMaybe<Stage>
}

export type TechnicalSkillImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type TechnicalSkillPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type TechnicalSkillScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type TechnicalSkillUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type TechnicalSkillConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: TechnicalSkillWhereUniqueInput
}

/** A connection to a list of items. */
export type TechnicalSkillConnection = {
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<TechnicalSkillEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type TechnicalSkillCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>
  image?: InputMaybe<AssetCreateOneInlineInput>
  programmingLanguage: Scalars['String']
  updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type TechnicalSkillCreateManyInlineInput = {
  /** Connect multiple existing TechnicalSkill documents */
  connect?: InputMaybe<Array<TechnicalSkillWhereUniqueInput>>
  /** Create and connect multiple existing TechnicalSkill documents */
  create?: InputMaybe<Array<TechnicalSkillCreateInput>>
}

export type TechnicalSkillCreateOneInlineInput = {
  /** Connect one existing TechnicalSkill document */
  connect?: InputMaybe<TechnicalSkillWhereUniqueInput>
  /** Create and connect one TechnicalSkill document */
  create?: InputMaybe<TechnicalSkillCreateInput>
}

/** An edge in a connection. */
export type TechnicalSkillEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: TechnicalSkill
}

/** Identifies documents */
export type TechnicalSkillManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TechnicalSkillWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TechnicalSkillWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TechnicalSkillWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<TechnicalSkillWhereStageInput>
  documentInStages_none?: InputMaybe<TechnicalSkillWhereStageInput>
  documentInStages_some?: InputMaybe<TechnicalSkillWhereStageInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  image?: InputMaybe<AssetWhereInput>
  programmingLanguage?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  programmingLanguage_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  programmingLanguage_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  programmingLanguage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  programmingLanguage_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  programmingLanguage_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  programmingLanguage_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  programmingLanguage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  programmingLanguage_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  programmingLanguage_starts_with?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum TechnicalSkillOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ProgrammingLanguageAsc = 'programmingLanguage_ASC',
  ProgrammingLanguageDesc = 'programmingLanguage_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type TechnicalSkillUpdateInput = {
  image?: InputMaybe<AssetUpdateOneInlineInput>
  programmingLanguage?: InputMaybe<Scalars['String']>
}

export type TechnicalSkillUpdateManyInlineInput = {
  /** Connect multiple existing TechnicalSkill documents */
  connect?: InputMaybe<Array<TechnicalSkillConnectInput>>
  /** Create and connect multiple TechnicalSkill documents */
  create?: InputMaybe<Array<TechnicalSkillCreateInput>>
  /** Delete multiple TechnicalSkill documents */
  delete?: InputMaybe<Array<TechnicalSkillWhereUniqueInput>>
  /** Disconnect multiple TechnicalSkill documents */
  disconnect?: InputMaybe<Array<TechnicalSkillWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing TechnicalSkill documents */
  set?: InputMaybe<Array<TechnicalSkillWhereUniqueInput>>
  /** Update multiple TechnicalSkill documents */
  update?: InputMaybe<Array<TechnicalSkillUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple TechnicalSkill documents */
  upsert?: InputMaybe<Array<TechnicalSkillUpsertWithNestedWhereUniqueInput>>
}

export type TechnicalSkillUpdateManyInput = {
  programmingLanguage?: InputMaybe<Scalars['String']>
}

export type TechnicalSkillUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: TechnicalSkillUpdateManyInput
  /** Document search */
  where: TechnicalSkillWhereInput
}

export type TechnicalSkillUpdateOneInlineInput = {
  /** Connect existing TechnicalSkill document */
  connect?: InputMaybe<TechnicalSkillWhereUniqueInput>
  /** Create and connect one TechnicalSkill document */
  create?: InputMaybe<TechnicalSkillCreateInput>
  /** Delete currently connected TechnicalSkill document */
  delete?: InputMaybe<Scalars['Boolean']>
  /** Disconnect currently connected TechnicalSkill document */
  disconnect?: InputMaybe<Scalars['Boolean']>
  /** Update single TechnicalSkill document */
  update?: InputMaybe<TechnicalSkillUpdateWithNestedWhereUniqueInput>
  /** Upsert single TechnicalSkill document */
  upsert?: InputMaybe<TechnicalSkillUpsertWithNestedWhereUniqueInput>
}

export type TechnicalSkillUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: TechnicalSkillUpdateInput
  /** Unique document search */
  where: TechnicalSkillWhereUniqueInput
}

export type TechnicalSkillUpsertInput = {
  /** Create document if it didn't exist */
  create: TechnicalSkillCreateInput
  /** Update document if it exists */
  update: TechnicalSkillUpdateInput
}

export type TechnicalSkillUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: TechnicalSkillUpsertInput
  /** Unique document search */
  where: TechnicalSkillWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type TechnicalSkillWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>
}

/** Identifies documents */
export type TechnicalSkillWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TechnicalSkillWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TechnicalSkillWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TechnicalSkillWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<TechnicalSkillWhereStageInput>
  documentInStages_none?: InputMaybe<TechnicalSkillWhereStageInput>
  documentInStages_some?: InputMaybe<TechnicalSkillWhereStageInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  image?: InputMaybe<AssetWhereInput>
  programmingLanguage?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  programmingLanguage_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  programmingLanguage_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  programmingLanguage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  programmingLanguage_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  programmingLanguage_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  programmingLanguage_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  programmingLanguage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  programmingLanguage_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  programmingLanguage_starts_with?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type TechnicalSkillWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TechnicalSkillWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TechnicalSkillWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TechnicalSkillWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<TechnicalSkillWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References TechnicalSkill record uniquely */
export type TechnicalSkillWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>
}

/** User system model */
export type User = Node & {
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** Get the document in other stages */
  documentInStages: Array<User>
  /** The unique identifier */
  id: Scalars['ID']
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean']
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind
  /** The username */
  name: Scalars['String']
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** System stage field */
  stage: Stage
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
}

/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: UserWhereUniqueInput
}

/** A connection to a list of items. */
export type UserConnection = {
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<UserEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>
}

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>
}

/** An edge in a connection. */
export type UserEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: User
}

/** System User Kind */
export enum UserKind {
  AppToken = 'APP_TOKEN',
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK',
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  documentInStages_every?: InputMaybe<UserWhereStageInput>
  documentInStages_none?: InputMaybe<UserWhereStageInput>
  documentInStages_some?: InputMaybe<UserWhereStageInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  isActive?: InputMaybe<Scalars['Boolean']>
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>
  kind?: InputMaybe<UserKind>
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>
  name?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>
  picture?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
}

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>
}

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']>
}

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>
}

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  documentInStages_every?: InputMaybe<UserWhereStageInput>
  documentInStages_none?: InputMaybe<UserWhereStageInput>
  documentInStages_some?: InputMaybe<UserWhereStageInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  isActive?: InputMaybe<Scalars['Boolean']>
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>
  kind?: InputMaybe<UserKind>
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>
  name?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>
  picture?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<UserWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
}

export type Version = {
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  revision: Scalars['Int']
  stage: Stage
}

export type VersionWhereInput = {
  id: Scalars['ID']
  revision: Scalars['Int']
  stage: Stage
}

export type Video = Node & {
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy?: Maybe<User>
  /** Get the document in other stages */
  documentInStages: Array<Video>
  /** List of Video versions */
  history: Array<Version>
  /** The unique identifier */
  id: Scalars['ID']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  scheduledIn: Array<ScheduledOperation>
  /** System stage field */
  stage: Stage
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
  video?: Maybe<Asset>
}

export type VideoCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type VideoDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

export type VideoHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: InputMaybe<Stage>
}

export type VideoPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type VideoScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type VideoUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type VideoVideoArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type VideoConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: VideoWhereUniqueInput
}

/** A connection to a list of items. */
export type VideoConnection = {
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<VideoEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type VideoCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  video?: InputMaybe<AssetCreateOneInlineInput>
}

export type VideoCreateManyInlineInput = {
  /** Connect multiple existing Video documents */
  connect?: InputMaybe<Array<VideoWhereUniqueInput>>
  /** Create and connect multiple existing Video documents */
  create?: InputMaybe<Array<VideoCreateInput>>
}

export type VideoCreateOneInlineInput = {
  /** Connect one existing Video document */
  connect?: InputMaybe<VideoWhereUniqueInput>
  /** Create and connect one Video document */
  create?: InputMaybe<VideoCreateInput>
}

/** An edge in a connection. */
export type VideoEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: Video
}

/** Identifies documents */
export type VideoManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<VideoWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<VideoWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<VideoWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<VideoWhereStageInput>
  documentInStages_none?: InputMaybe<VideoWhereStageInput>
  documentInStages_some?: InputMaybe<VideoWhereStageInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
  video?: InputMaybe<AssetWhereInput>
}

export enum VideoOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type VideoUpdateInput = {
  video?: InputMaybe<AssetUpdateOneInlineInput>
}

export type VideoUpdateManyInlineInput = {
  /** Connect multiple existing Video documents */
  connect?: InputMaybe<Array<VideoConnectInput>>
  /** Create and connect multiple Video documents */
  create?: InputMaybe<Array<VideoCreateInput>>
  /** Delete multiple Video documents */
  delete?: InputMaybe<Array<VideoWhereUniqueInput>>
  /** Disconnect multiple Video documents */
  disconnect?: InputMaybe<Array<VideoWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Video documents */
  set?: InputMaybe<Array<VideoWhereUniqueInput>>
  /** Update multiple Video documents */
  update?: InputMaybe<Array<VideoUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Video documents */
  upsert?: InputMaybe<Array<VideoUpsertWithNestedWhereUniqueInput>>
}

export type VideoUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']>
}

export type VideoUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: VideoUpdateManyInput
  /** Document search */
  where: VideoWhereInput
}

export type VideoUpdateOneInlineInput = {
  /** Connect existing Video document */
  connect?: InputMaybe<VideoWhereUniqueInput>
  /** Create and connect one Video document */
  create?: InputMaybe<VideoCreateInput>
  /** Delete currently connected Video document */
  delete?: InputMaybe<Scalars['Boolean']>
  /** Disconnect currently connected Video document */
  disconnect?: InputMaybe<Scalars['Boolean']>
  /** Update single Video document */
  update?: InputMaybe<VideoUpdateWithNestedWhereUniqueInput>
  /** Upsert single Video document */
  upsert?: InputMaybe<VideoUpsertWithNestedWhereUniqueInput>
}

export type VideoUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: VideoUpdateInput
  /** Unique document search */
  where: VideoWhereUniqueInput
}

export type VideoUpsertInput = {
  /** Create document if it didn't exist */
  create: VideoCreateInput
  /** Update document if it exists */
  update: VideoUpdateInput
}

export type VideoUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: VideoUpsertInput
  /** Unique document search */
  where: VideoWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type VideoWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>
}

/** Identifies documents */
export type VideoWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<VideoWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<VideoWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<VideoWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<VideoWhereStageInput>
  documentInStages_none?: InputMaybe<VideoWhereStageInput>
  documentInStages_some?: InputMaybe<VideoWhereStageInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
  video?: InputMaybe<AssetWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type VideoWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<VideoWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<VideoWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<VideoWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<VideoWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References Video record uniquely */
export type VideoWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
}

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  JsonPathExists = 'json_path_exists',
  JsonValueRecursive = 'json_value_recursive',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with',
  UnionEmpty = 'union_empty',
  UnionEvery = 'union_every',
  UnionNone = 'union_none',
  UnionSingle = 'union_single',
  UnionSome = 'union_some',
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual',
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert',
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc',
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one',
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update',
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union',
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization',
}

export type GetVideoMemeQueryVariables = Exact<{ [key: string]: never }>

export type GetVideoMemeQuery = {
  videos: Array<{ video?: { url: string } | null }>
}

export type GetEducationInfoQueryVariables = Exact<{ [key: string]: never }>

export type GetEducationInfoQuery = {
  educations: Array<{
    id: string
    grade?: string | null
    location: string
    isFirstClassHonours?: boolean | null
    period?: string | null
    program: string
    universityName: string
    link?: string | null
    programs: Array<{ id: string; name?: string | null }>
  }>
}

export type GetExperienceInfoQueryVariables = Exact<{ [key: string]: never }>

export type GetExperienceInfoQuery = {
  experiences: Array<{
    id: string
    companyName?: string | null
    location: string
    hideName?: boolean | null
    hideDash?: boolean | null
    position?: {
      id: string
      endDate?: any | null
      period?: string | null
      isFinished?: boolean | null
      positionName: string
      startDate?: any | null
      positionDetails: Array<{ id: string; detail?: string | null }>
    } | null
  }>
}

export type GetPersonalInfoQueryVariables = Exact<{ [key: string]: never }>

export type GetPersonalInfoQuery = {
  personalInfos: Array<{
    id: string
    name: string
    surname: string
    age: number
    dob: string
    introduction?: string | null
    about?: string | null
    currentPosition?: string | null
    image: { url: string }
    contact?: {
      id: string
      phone?: string | null
      email?: string | null
      github?: string | null
      linkedIn?: string | null
    } | null
    profileImage1: { url: string }
    profileImage2: { url: string }
    icon?: { url: string } | null
  }>
}

export type GetProjectListQueryVariables = Exact<{ [key: string]: never }>

export type GetProjectListQuery = {
  projects: Array<{
    id: string
    name: string
    link?: string | null
    description?: string | null
    image?: { url: string } | null
  }>
}

export type GetSoftwareDetailQueryVariables = Exact<{ [key: string]: never }>

export type GetSoftwareDetailQuery = {
  softwares: Array<{ id: string; name: string; image?: { url: string } | null }>
}

export type GetTechnicalSkillQueryVariables = Exact<{ [key: string]: never }>

export type GetTechnicalSkillQuery = {
  technicalSkills: Array<{
    id: string
    programmingLanguage: string
    image?: { url: string; stage: Stage } | null
  }>
}

export const GetVideoMemeDocument = /*#__PURE__*/ gql`
  query GetVideoMeme {
    videos {
      video {
        url
      }
    }
  }
`
export const GetEducationInfoDocument = /*#__PURE__*/ gql`
  query GetEducationInfo {
    educations(orderBy: sequence_DESC) {
      id
      grade
      location
      isFirstClassHonours
      period
      program
      programs {
        id
        name
      }
      universityName
      link
    }
  }
`
export const GetExperienceInfoDocument = /*#__PURE__*/ gql`
  query GetExperienceInfo {
    experiences(orderBy: sequence_ASC) {
      id
      companyName
      location
      hideName
      position {
        id
        endDate
        period
        isFinished
        positionName
        startDate
        positionDetails {
          id
          detail
        }
      }
      hideDash
    }
  }
`
export const GetPersonalInfoDocument = /*#__PURE__*/ gql`
  query GetPersonalInfo {
    personalInfos {
      id
      name
      surname
      age
      dob
      introduction
      about
      currentPosition
      image {
        url
      }
      contact {
        id
        phone
        email
        github
        linkedIn
      }
      profileImage1 {
        url
      }
      profileImage2 {
        url
      }
      icon {
        url
      }
    }
  }
`
export const GetProjectListDocument = /*#__PURE__*/ gql`
  query GetProjectList {
    projects(orderBy: sequence_ASC) {
      id
      name
      link
      image {
        url
      }
      description
    }
  }
`
export const GetSoftwareDetailDocument = /*#__PURE__*/ gql`
  query GetSoftwareDetail {
    softwares {
      id
      name
      image {
        url
      }
    }
  }
`
export const GetTechnicalSkillDocument = /*#__PURE__*/ gql`
  query GetTechnicalSkill {
    technicalSkills {
      id
      programmingLanguage
      image {
        url
        stage
      }
    }
  }
`

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string
) => Promise<T>

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType
) => action()

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  return {
    GetVideoMeme(
      variables?: GetVideoMemeQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GetVideoMemeQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetVideoMemeQuery>(GetVideoMemeDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'GetVideoMeme',
        'query'
      )
    },
    GetEducationInfo(
      variables?: GetEducationInfoQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GetEducationInfoQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetEducationInfoQuery>(
            GetEducationInfoDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'GetEducationInfo',
        'query'
      )
    },
    GetExperienceInfo(
      variables?: GetExperienceInfoQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GetExperienceInfoQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetExperienceInfoQuery>(
            GetExperienceInfoDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'GetExperienceInfo',
        'query'
      )
    },
    GetPersonalInfo(
      variables?: GetPersonalInfoQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GetPersonalInfoQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetPersonalInfoQuery>(
            GetPersonalInfoDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'GetPersonalInfo',
        'query'
      )
    },
    GetProjectList(
      variables?: GetProjectListQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GetProjectListQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetProjectListQuery>(
            GetProjectListDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'GetProjectList',
        'query'
      )
    },
    GetSoftwareDetail(
      variables?: GetSoftwareDetailQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GetSoftwareDetailQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetSoftwareDetailQuery>(
            GetSoftwareDetailDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'GetSoftwareDetail',
        'query'
      )
    },
    GetTechnicalSkill(
      variables?: GetTechnicalSkillQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GetTechnicalSkillQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetTechnicalSkillQuery>(
            GetTechnicalSkillDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'GetTechnicalSkill',
        'query'
      )
    },
  }
}
export type Sdk = ReturnType<typeof getSdk>
