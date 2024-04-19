import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql'
export type Maybe<T> = T | null | undefined
export type InputMaybe<T> = T | null | undefined
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never
}
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  BigDecimal: { input: any; output: any }
  BigInt: { input: number; output: number }
  Bytes: { input: unknown; output: unknown }
  /**
   * 8 bytes signed integer
   *
   */
  Int8: { input: any; output: any }
}

export type Approval = {
  __typename?: 'Approval'
  approved: Maybe<Scalars['String']['output']>
  block_number: Scalars['BigInt']['output']
  contractId_: Scalars['String']['output']
  id: Scalars['ID']['output']
  owner: Maybe<Scalars['String']['output']>
  timestamp_: Scalars['BigInt']['output']
  tokenId: Maybe<Scalars['BigInt']['output']>
  transactionHash_: Scalars['String']['output']
}

export type ApprovalForAll = {
  __typename?: 'ApprovalForAll'
  approved: Maybe<Scalars['Boolean']['output']>
  block_number: Scalars['BigInt']['output']
  contractId_: Scalars['String']['output']
  id: Scalars['ID']['output']
  operator: Maybe<Scalars['String']['output']>
  owner: Maybe<Scalars['String']['output']>
  timestamp_: Scalars['BigInt']['output']
  transactionHash_: Scalars['String']['output']
}

export type ApprovalForAll_Filter = {
  /** Filter for the block changed event. */
  _change_block: InputMaybe<BlockChangedFilter>
  and: InputMaybe<Array<InputMaybe<ApprovalForAll_Filter>>>
  approved: InputMaybe<Scalars['Boolean']['input']>
  approved_in: InputMaybe<Array<Scalars['Boolean']['input']>>
  approved_not: InputMaybe<Scalars['Boolean']['input']>
  approved_not_in: InputMaybe<Array<Scalars['Boolean']['input']>>
  block_number: InputMaybe<Scalars['BigInt']['input']>
  block_number_gt: InputMaybe<Scalars['BigInt']['input']>
  block_number_gte: InputMaybe<Scalars['BigInt']['input']>
  block_number_in: InputMaybe<Array<Scalars['BigInt']['input']>>
  block_number_lt: InputMaybe<Scalars['BigInt']['input']>
  block_number_lte: InputMaybe<Scalars['BigInt']['input']>
  block_number_not: InputMaybe<Scalars['BigInt']['input']>
  block_number_not_in: InputMaybe<Array<Scalars['BigInt']['input']>>
  contractId_: InputMaybe<Scalars['String']['input']>
  contractId__contains: InputMaybe<Scalars['String']['input']>
  contractId__contains_nocase: InputMaybe<Scalars['String']['input']>
  contractId__ends_with: InputMaybe<Scalars['String']['input']>
  contractId__ends_with_nocase: InputMaybe<Scalars['String']['input']>
  contractId__gt: InputMaybe<Scalars['String']['input']>
  contractId__gte: InputMaybe<Scalars['String']['input']>
  contractId__in: InputMaybe<Array<Scalars['String']['input']>>
  contractId__lt: InputMaybe<Scalars['String']['input']>
  contractId__lte: InputMaybe<Scalars['String']['input']>
  contractId__not: InputMaybe<Scalars['String']['input']>
  contractId__not_contains: InputMaybe<Scalars['String']['input']>
  contractId__not_contains_nocase: InputMaybe<Scalars['String']['input']>
  contractId__not_ends_with: InputMaybe<Scalars['String']['input']>
  contractId__not_ends_with_nocase: InputMaybe<Scalars['String']['input']>
  contractId__not_in: InputMaybe<Array<Scalars['String']['input']>>
  contractId__not_starts_with: InputMaybe<Scalars['String']['input']>
  contractId__not_starts_with_nocase: InputMaybe<Scalars['String']['input']>
  contractId__starts_with: InputMaybe<Scalars['String']['input']>
  contractId__starts_with_nocase: InputMaybe<Scalars['String']['input']>
  id: InputMaybe<Scalars['ID']['input']>
  id_gt: InputMaybe<Scalars['ID']['input']>
  id_gte: InputMaybe<Scalars['ID']['input']>
  id_in: InputMaybe<Array<Scalars['ID']['input']>>
  id_lt: InputMaybe<Scalars['ID']['input']>
  id_lte: InputMaybe<Scalars['ID']['input']>
  id_not: InputMaybe<Scalars['ID']['input']>
  id_not_in: InputMaybe<Array<Scalars['ID']['input']>>
  operator: InputMaybe<Scalars['String']['input']>
  operator_contains: InputMaybe<Scalars['String']['input']>
  operator_contains_nocase: InputMaybe<Scalars['String']['input']>
  operator_ends_with: InputMaybe<Scalars['String']['input']>
  operator_ends_with_nocase: InputMaybe<Scalars['String']['input']>
  operator_gt: InputMaybe<Scalars['String']['input']>
  operator_gte: InputMaybe<Scalars['String']['input']>
  operator_in: InputMaybe<Array<Scalars['String']['input']>>
  operator_lt: InputMaybe<Scalars['String']['input']>
  operator_lte: InputMaybe<Scalars['String']['input']>
  operator_not: InputMaybe<Scalars['String']['input']>
  operator_not_contains: InputMaybe<Scalars['String']['input']>
  operator_not_contains_nocase: InputMaybe<Scalars['String']['input']>
  operator_not_ends_with: InputMaybe<Scalars['String']['input']>
  operator_not_ends_with_nocase: InputMaybe<Scalars['String']['input']>
  operator_not_in: InputMaybe<Array<Scalars['String']['input']>>
  operator_not_starts_with: InputMaybe<Scalars['String']['input']>
  operator_not_starts_with_nocase: InputMaybe<Scalars['String']['input']>
  operator_starts_with: InputMaybe<Scalars['String']['input']>
  operator_starts_with_nocase: InputMaybe<Scalars['String']['input']>
  or: InputMaybe<Array<InputMaybe<ApprovalForAll_Filter>>>
  owner: InputMaybe<Scalars['String']['input']>
  owner_contains: InputMaybe<Scalars['String']['input']>
  owner_contains_nocase: InputMaybe<Scalars['String']['input']>
  owner_ends_with: InputMaybe<Scalars['String']['input']>
  owner_ends_with_nocase: InputMaybe<Scalars['String']['input']>
  owner_gt: InputMaybe<Scalars['String']['input']>
  owner_gte: InputMaybe<Scalars['String']['input']>
  owner_in: InputMaybe<Array<Scalars['String']['input']>>
  owner_lt: InputMaybe<Scalars['String']['input']>
  owner_lte: InputMaybe<Scalars['String']['input']>
  owner_not: InputMaybe<Scalars['String']['input']>
  owner_not_contains: InputMaybe<Scalars['String']['input']>
  owner_not_contains_nocase: InputMaybe<Scalars['String']['input']>
  owner_not_ends_with: InputMaybe<Scalars['String']['input']>
  owner_not_ends_with_nocase: InputMaybe<Scalars['String']['input']>
  owner_not_in: InputMaybe<Array<Scalars['String']['input']>>
  owner_not_starts_with: InputMaybe<Scalars['String']['input']>
  owner_not_starts_with_nocase: InputMaybe<Scalars['String']['input']>
  owner_starts_with: InputMaybe<Scalars['String']['input']>
  owner_starts_with_nocase: InputMaybe<Scalars['String']['input']>
  timestamp_: InputMaybe<Scalars['BigInt']['input']>
  timestamp__gt: InputMaybe<Scalars['BigInt']['input']>
  timestamp__gte: InputMaybe<Scalars['BigInt']['input']>
  timestamp__in: InputMaybe<Array<Scalars['BigInt']['input']>>
  timestamp__lt: InputMaybe<Scalars['BigInt']['input']>
  timestamp__lte: InputMaybe<Scalars['BigInt']['input']>
  timestamp__not: InputMaybe<Scalars['BigInt']['input']>
  timestamp__not_in: InputMaybe<Array<Scalars['BigInt']['input']>>
  transactionHash_: InputMaybe<Scalars['String']['input']>
  transactionHash__contains: InputMaybe<Scalars['String']['input']>
  transactionHash__contains_nocase: InputMaybe<Scalars['String']['input']>
  transactionHash__ends_with: InputMaybe<Scalars['String']['input']>
  transactionHash__ends_with_nocase: InputMaybe<Scalars['String']['input']>
  transactionHash__gt: InputMaybe<Scalars['String']['input']>
  transactionHash__gte: InputMaybe<Scalars['String']['input']>
  transactionHash__in: InputMaybe<Array<Scalars['String']['input']>>
  transactionHash__lt: InputMaybe<Scalars['String']['input']>
  transactionHash__lte: InputMaybe<Scalars['String']['input']>
  transactionHash__not: InputMaybe<Scalars['String']['input']>
  transactionHash__not_contains: InputMaybe<Scalars['String']['input']>
  transactionHash__not_contains_nocase: InputMaybe<Scalars['String']['input']>
  transactionHash__not_ends_with: InputMaybe<Scalars['String']['input']>
  transactionHash__not_ends_with_nocase: InputMaybe<Scalars['String']['input']>
  transactionHash__not_in: InputMaybe<Array<Scalars['String']['input']>>
  transactionHash__not_starts_with: InputMaybe<Scalars['String']['input']>
  transactionHash__not_starts_with_nocase: InputMaybe<Scalars['String']['input']>
  transactionHash__starts_with: InputMaybe<Scalars['String']['input']>
  transactionHash__starts_with_nocase: InputMaybe<Scalars['String']['input']>
}

export enum ApprovalForAll_OrderBy {
  APPROVED = 'approved',
  BLOCK_NUMBER = 'block_number',
  CONTRACTID_ = 'contractId_',
  ID = 'id',
  OPERATOR = 'operator',
  OWNER = 'owner',
  TIMESTAMP_ = 'timestamp_',
  TRANSACTIONHASH_ = 'transactionHash_',
}

export type Approval_Filter = {
  /** Filter for the block changed event. */
  _change_block: InputMaybe<BlockChangedFilter>
  and: InputMaybe<Array<InputMaybe<Approval_Filter>>>
  approved: InputMaybe<Scalars['String']['input']>
  approved_contains: InputMaybe<Scalars['String']['input']>
  approved_contains_nocase: InputMaybe<Scalars['String']['input']>
  approved_ends_with: InputMaybe<Scalars['String']['input']>
  approved_ends_with_nocase: InputMaybe<Scalars['String']['input']>
  approved_gt: InputMaybe<Scalars['String']['input']>
  approved_gte: InputMaybe<Scalars['String']['input']>
  approved_in: InputMaybe<Array<Scalars['String']['input']>>
  approved_lt: InputMaybe<Scalars['String']['input']>
  approved_lte: InputMaybe<Scalars['String']['input']>
  approved_not: InputMaybe<Scalars['String']['input']>
  approved_not_contains: InputMaybe<Scalars['String']['input']>
  approved_not_contains_nocase: InputMaybe<Scalars['String']['input']>
  approved_not_ends_with: InputMaybe<Scalars['String']['input']>
  approved_not_ends_with_nocase: InputMaybe<Scalars['String']['input']>
  approved_not_in: InputMaybe<Array<Scalars['String']['input']>>
  approved_not_starts_with: InputMaybe<Scalars['String']['input']>
  approved_not_starts_with_nocase: InputMaybe<Scalars['String']['input']>
  approved_starts_with: InputMaybe<Scalars['String']['input']>
  approved_starts_with_nocase: InputMaybe<Scalars['String']['input']>
  block_number: InputMaybe<Scalars['BigInt']['input']>
  block_number_gt: InputMaybe<Scalars['BigInt']['input']>
  block_number_gte: InputMaybe<Scalars['BigInt']['input']>
  block_number_in: InputMaybe<Array<Scalars['BigInt']['input']>>
  block_number_lt: InputMaybe<Scalars['BigInt']['input']>
  block_number_lte: InputMaybe<Scalars['BigInt']['input']>
  block_number_not: InputMaybe<Scalars['BigInt']['input']>
  block_number_not_in: InputMaybe<Array<Scalars['BigInt']['input']>>
  contractId_: InputMaybe<Scalars['String']['input']>
  contractId__contains: InputMaybe<Scalars['String']['input']>
  contractId__contains_nocase: InputMaybe<Scalars['String']['input']>
  contractId__ends_with: InputMaybe<Scalars['String']['input']>
  contractId__ends_with_nocase: InputMaybe<Scalars['String']['input']>
  contractId__gt: InputMaybe<Scalars['String']['input']>
  contractId__gte: InputMaybe<Scalars['String']['input']>
  contractId__in: InputMaybe<Array<Scalars['String']['input']>>
  contractId__lt: InputMaybe<Scalars['String']['input']>
  contractId__lte: InputMaybe<Scalars['String']['input']>
  contractId__not: InputMaybe<Scalars['String']['input']>
  contractId__not_contains: InputMaybe<Scalars['String']['input']>
  contractId__not_contains_nocase: InputMaybe<Scalars['String']['input']>
  contractId__not_ends_with: InputMaybe<Scalars['String']['input']>
  contractId__not_ends_with_nocase: InputMaybe<Scalars['String']['input']>
  contractId__not_in: InputMaybe<Array<Scalars['String']['input']>>
  contractId__not_starts_with: InputMaybe<Scalars['String']['input']>
  contractId__not_starts_with_nocase: InputMaybe<Scalars['String']['input']>
  contractId__starts_with: InputMaybe<Scalars['String']['input']>
  contractId__starts_with_nocase: InputMaybe<Scalars['String']['input']>
  id: InputMaybe<Scalars['ID']['input']>
  id_gt: InputMaybe<Scalars['ID']['input']>
  id_gte: InputMaybe<Scalars['ID']['input']>
  id_in: InputMaybe<Array<Scalars['ID']['input']>>
  id_lt: InputMaybe<Scalars['ID']['input']>
  id_lte: InputMaybe<Scalars['ID']['input']>
  id_not: InputMaybe<Scalars['ID']['input']>
  id_not_in: InputMaybe<Array<Scalars['ID']['input']>>
  or: InputMaybe<Array<InputMaybe<Approval_Filter>>>
  owner: InputMaybe<Scalars['String']['input']>
  owner_contains: InputMaybe<Scalars['String']['input']>
  owner_contains_nocase: InputMaybe<Scalars['String']['input']>
  owner_ends_with: InputMaybe<Scalars['String']['input']>
  owner_ends_with_nocase: InputMaybe<Scalars['String']['input']>
  owner_gt: InputMaybe<Scalars['String']['input']>
  owner_gte: InputMaybe<Scalars['String']['input']>
  owner_in: InputMaybe<Array<Scalars['String']['input']>>
  owner_lt: InputMaybe<Scalars['String']['input']>
  owner_lte: InputMaybe<Scalars['String']['input']>
  owner_not: InputMaybe<Scalars['String']['input']>
  owner_not_contains: InputMaybe<Scalars['String']['input']>
  owner_not_contains_nocase: InputMaybe<Scalars['String']['input']>
  owner_not_ends_with: InputMaybe<Scalars['String']['input']>
  owner_not_ends_with_nocase: InputMaybe<Scalars['String']['input']>
  owner_not_in: InputMaybe<Array<Scalars['String']['input']>>
  owner_not_starts_with: InputMaybe<Scalars['String']['input']>
  owner_not_starts_with_nocase: InputMaybe<Scalars['String']['input']>
  owner_starts_with: InputMaybe<Scalars['String']['input']>
  owner_starts_with_nocase: InputMaybe<Scalars['String']['input']>
  timestamp_: InputMaybe<Scalars['BigInt']['input']>
  timestamp__gt: InputMaybe<Scalars['BigInt']['input']>
  timestamp__gte: InputMaybe<Scalars['BigInt']['input']>
  timestamp__in: InputMaybe<Array<Scalars['BigInt']['input']>>
  timestamp__lt: InputMaybe<Scalars['BigInt']['input']>
  timestamp__lte: InputMaybe<Scalars['BigInt']['input']>
  timestamp__not: InputMaybe<Scalars['BigInt']['input']>
  timestamp__not_in: InputMaybe<Array<Scalars['BigInt']['input']>>
  tokenId: InputMaybe<Scalars['BigInt']['input']>
  tokenId_gt: InputMaybe<Scalars['BigInt']['input']>
  tokenId_gte: InputMaybe<Scalars['BigInt']['input']>
  tokenId_in: InputMaybe<Array<Scalars['BigInt']['input']>>
  tokenId_lt: InputMaybe<Scalars['BigInt']['input']>
  tokenId_lte: InputMaybe<Scalars['BigInt']['input']>
  tokenId_not: InputMaybe<Scalars['BigInt']['input']>
  tokenId_not_in: InputMaybe<Array<Scalars['BigInt']['input']>>
  transactionHash_: InputMaybe<Scalars['String']['input']>
  transactionHash__contains: InputMaybe<Scalars['String']['input']>
  transactionHash__contains_nocase: InputMaybe<Scalars['String']['input']>
  transactionHash__ends_with: InputMaybe<Scalars['String']['input']>
  transactionHash__ends_with_nocase: InputMaybe<Scalars['String']['input']>
  transactionHash__gt: InputMaybe<Scalars['String']['input']>
  transactionHash__gte: InputMaybe<Scalars['String']['input']>
  transactionHash__in: InputMaybe<Array<Scalars['String']['input']>>
  transactionHash__lt: InputMaybe<Scalars['String']['input']>
  transactionHash__lte: InputMaybe<Scalars['String']['input']>
  transactionHash__not: InputMaybe<Scalars['String']['input']>
  transactionHash__not_contains: InputMaybe<Scalars['String']['input']>
  transactionHash__not_contains_nocase: InputMaybe<Scalars['String']['input']>
  transactionHash__not_ends_with: InputMaybe<Scalars['String']['input']>
  transactionHash__not_ends_with_nocase: InputMaybe<Scalars['String']['input']>
  transactionHash__not_in: InputMaybe<Array<Scalars['String']['input']>>
  transactionHash__not_starts_with: InputMaybe<Scalars['String']['input']>
  transactionHash__not_starts_with_nocase: InputMaybe<Scalars['String']['input']>
  transactionHash__starts_with: InputMaybe<Scalars['String']['input']>
  transactionHash__starts_with_nocase: InputMaybe<Scalars['String']['input']>
}

export enum Approval_OrderBy {
  APPROVED = 'approved',
  BLOCK_NUMBER = 'block_number',
  CONTRACTID_ = 'contractId_',
  ID = 'id',
  OWNER = 'owner',
  TIMESTAMP_ = 'timestamp_',
  TOKENID = 'tokenId',
  TRANSACTIONHASH_ = 'transactionHash_',
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input']
}

export type Block_Height = {
  hash: InputMaybe<Scalars['Bytes']['input']>
  number: InputMaybe<Scalars['Int']['input']>
  number_gte: InputMaybe<Scalars['Int']['input']>
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  ASC = 'asc',
  DESC = 'desc',
}

export type Query = {
  __typename?: 'Query'
  /** Access to subgraph metadata */
  _meta: Maybe<_Meta_>
  approval: Maybe<Approval>
  approvalForAll: Maybe<ApprovalForAll>
  approvalForAlls: Array<ApprovalForAll>
  approvals: Array<Approval>
  recommended: Maybe<Recommended>
  recommendeds: Array<Recommended>
  transfer: Maybe<Transfer>
  transfers: Array<Transfer>
}

export type Query_MetaArgs = {
  block: InputMaybe<Block_Height>
}

export type QueryApprovalArgs = {
  block: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryApprovalForAllArgs = {
  block: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryApprovalForAllsArgs = {
  block: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy: InputMaybe<ApprovalForAll_OrderBy>
  orderDirection: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where: InputMaybe<ApprovalForAll_Filter>
}

export type QueryApprovalsArgs = {
  block: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy: InputMaybe<Approval_OrderBy>
  orderDirection: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where: InputMaybe<Approval_Filter>
}

export type QueryRecommendedArgs = {
  block: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryRecommendedsArgs = {
  block: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy: InputMaybe<Recommended_OrderBy>
  orderDirection: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where: InputMaybe<Recommended_Filter>
}

export type QueryTransferArgs = {
  block: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryTransfersArgs = {
  block: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy: InputMaybe<Transfer_OrderBy>
  orderDirection: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where: InputMaybe<Transfer_Filter>
}

export type Recommended = {
  __typename?: 'Recommended'
  block_number: Scalars['BigInt']['output']
  contractId_: Scalars['String']['output']
  data_description: Maybe<Scalars['String']['output']>
  data_receiverAddress: Maybe<Scalars['String']['output']>
  data_receiverName: Maybe<Scalars['String']['output']>
  data_senderAddress: Maybe<Scalars['String']['output']>
  data_senderName: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  timestamp_: Scalars['BigInt']['output']
  tokenId: Maybe<Scalars['BigInt']['output']>
  transactionHash_: Scalars['String']['output']
}

export type Recommended_Filter = {
  /** Filter for the block changed event. */
  _change_block: InputMaybe<BlockChangedFilter>
  and: InputMaybe<Array<InputMaybe<Recommended_Filter>>>
  block_number: InputMaybe<Scalars['BigInt']['input']>
  block_number_gt: InputMaybe<Scalars['BigInt']['input']>
  block_number_gte: InputMaybe<Scalars['BigInt']['input']>
  block_number_in: InputMaybe<Array<Scalars['BigInt']['input']>>
  block_number_lt: InputMaybe<Scalars['BigInt']['input']>
  block_number_lte: InputMaybe<Scalars['BigInt']['input']>
  block_number_not: InputMaybe<Scalars['BigInt']['input']>
  block_number_not_in: InputMaybe<Array<Scalars['BigInt']['input']>>
  contractId_: InputMaybe<Scalars['String']['input']>
  contractId__contains: InputMaybe<Scalars['String']['input']>
  contractId__contains_nocase: InputMaybe<Scalars['String']['input']>
  contractId__ends_with: InputMaybe<Scalars['String']['input']>
  contractId__ends_with_nocase: InputMaybe<Scalars['String']['input']>
  contractId__gt: InputMaybe<Scalars['String']['input']>
  contractId__gte: InputMaybe<Scalars['String']['input']>
  contractId__in: InputMaybe<Array<Scalars['String']['input']>>
  contractId__lt: InputMaybe<Scalars['String']['input']>
  contractId__lte: InputMaybe<Scalars['String']['input']>
  contractId__not: InputMaybe<Scalars['String']['input']>
  contractId__not_contains: InputMaybe<Scalars['String']['input']>
  contractId__not_contains_nocase: InputMaybe<Scalars['String']['input']>
  contractId__not_ends_with: InputMaybe<Scalars['String']['input']>
  contractId__not_ends_with_nocase: InputMaybe<Scalars['String']['input']>
  contractId__not_in: InputMaybe<Array<Scalars['String']['input']>>
  contractId__not_starts_with: InputMaybe<Scalars['String']['input']>
  contractId__not_starts_with_nocase: InputMaybe<Scalars['String']['input']>
  contractId__starts_with: InputMaybe<Scalars['String']['input']>
  contractId__starts_with_nocase: InputMaybe<Scalars['String']['input']>
  data_description: InputMaybe<Scalars['String']['input']>
  data_description_contains: InputMaybe<Scalars['String']['input']>
  data_description_contains_nocase: InputMaybe<Scalars['String']['input']>
  data_description_ends_with: InputMaybe<Scalars['String']['input']>
  data_description_ends_with_nocase: InputMaybe<Scalars['String']['input']>
  data_description_gt: InputMaybe<Scalars['String']['input']>
  data_description_gte: InputMaybe<Scalars['String']['input']>
  data_description_in: InputMaybe<Array<Scalars['String']['input']>>
  data_description_lt: InputMaybe<Scalars['String']['input']>
  data_description_lte: InputMaybe<Scalars['String']['input']>
  data_description_not: InputMaybe<Scalars['String']['input']>
  data_description_not_contains: InputMaybe<Scalars['String']['input']>
  data_description_not_contains_nocase: InputMaybe<Scalars['String']['input']>
  data_description_not_ends_with: InputMaybe<Scalars['String']['input']>
  data_description_not_ends_with_nocase: InputMaybe<Scalars['String']['input']>
  data_description_not_in: InputMaybe<Array<Scalars['String']['input']>>
  data_description_not_starts_with: InputMaybe<Scalars['String']['input']>
  data_description_not_starts_with_nocase: InputMaybe<Scalars['String']['input']>
  data_description_starts_with: InputMaybe<Scalars['String']['input']>
  data_description_starts_with_nocase: InputMaybe<Scalars['String']['input']>
  data_receiverAddress: InputMaybe<Scalars['String']['input']>
  data_receiverAddress_contains: InputMaybe<Scalars['String']['input']>
  data_receiverAddress_contains_nocase: InputMaybe<Scalars['String']['input']>
  data_receiverAddress_ends_with: InputMaybe<Scalars['String']['input']>
  data_receiverAddress_ends_with_nocase: InputMaybe<Scalars['String']['input']>
  data_receiverAddress_gt: InputMaybe<Scalars['String']['input']>
  data_receiverAddress_gte: InputMaybe<Scalars['String']['input']>
  data_receiverAddress_in: InputMaybe<Array<Scalars['String']['input']>>
  data_receiverAddress_lt: InputMaybe<Scalars['String']['input']>
  data_receiverAddress_lte: InputMaybe<Scalars['String']['input']>
  data_receiverAddress_not: InputMaybe<Scalars['String']['input']>
  data_receiverAddress_not_contains: InputMaybe<Scalars['String']['input']>
  data_receiverAddress_not_contains_nocase: InputMaybe<Scalars['String']['input']>
  data_receiverAddress_not_ends_with: InputMaybe<Scalars['String']['input']>
  data_receiverAddress_not_ends_with_nocase: InputMaybe<Scalars['String']['input']>
  data_receiverAddress_not_in: InputMaybe<Array<Scalars['String']['input']>>
  data_receiverAddress_not_starts_with: InputMaybe<Scalars['String']['input']>
  data_receiverAddress_not_starts_with_nocase: InputMaybe<Scalars['String']['input']>
  data_receiverAddress_starts_with: InputMaybe<Scalars['String']['input']>
  data_receiverAddress_starts_with_nocase: InputMaybe<Scalars['String']['input']>
  data_receiverName: InputMaybe<Scalars['String']['input']>
  data_receiverName_contains: InputMaybe<Scalars['String']['input']>
  data_receiverName_contains_nocase: InputMaybe<Scalars['String']['input']>
  data_receiverName_ends_with: InputMaybe<Scalars['String']['input']>
  data_receiverName_ends_with_nocase: InputMaybe<Scalars['String']['input']>
  data_receiverName_gt: InputMaybe<Scalars['String']['input']>
  data_receiverName_gte: InputMaybe<Scalars['String']['input']>
  data_receiverName_in: InputMaybe<Array<Scalars['String']['input']>>
  data_receiverName_lt: InputMaybe<Scalars['String']['input']>
  data_receiverName_lte: InputMaybe<Scalars['String']['input']>
  data_receiverName_not: InputMaybe<Scalars['String']['input']>
  data_receiverName_not_contains: InputMaybe<Scalars['String']['input']>
  data_receiverName_not_contains_nocase: InputMaybe<Scalars['String']['input']>
  data_receiverName_not_ends_with: InputMaybe<Scalars['String']['input']>
  data_receiverName_not_ends_with_nocase: InputMaybe<Scalars['String']['input']>
  data_receiverName_not_in: InputMaybe<Array<Scalars['String']['input']>>
  data_receiverName_not_starts_with: InputMaybe<Scalars['String']['input']>
  data_receiverName_not_starts_with_nocase: InputMaybe<Scalars['String']['input']>
  data_receiverName_starts_with: InputMaybe<Scalars['String']['input']>
  data_receiverName_starts_with_nocase: InputMaybe<Scalars['String']['input']>
  data_senderAddress: InputMaybe<Scalars['String']['input']>
  data_senderAddress_contains: InputMaybe<Scalars['String']['input']>
  data_senderAddress_contains_nocase: InputMaybe<Scalars['String']['input']>
  data_senderAddress_ends_with: InputMaybe<Scalars['String']['input']>
  data_senderAddress_ends_with_nocase: InputMaybe<Scalars['String']['input']>
  data_senderAddress_gt: InputMaybe<Scalars['String']['input']>
  data_senderAddress_gte: InputMaybe<Scalars['String']['input']>
  data_senderAddress_in: InputMaybe<Array<Scalars['String']['input']>>
  data_senderAddress_lt: InputMaybe<Scalars['String']['input']>
  data_senderAddress_lte: InputMaybe<Scalars['String']['input']>
  data_senderAddress_not: InputMaybe<Scalars['String']['input']>
  data_senderAddress_not_contains: InputMaybe<Scalars['String']['input']>
  data_senderAddress_not_contains_nocase: InputMaybe<Scalars['String']['input']>
  data_senderAddress_not_ends_with: InputMaybe<Scalars['String']['input']>
  data_senderAddress_not_ends_with_nocase: InputMaybe<Scalars['String']['input']>
  data_senderAddress_not_in: InputMaybe<Array<Scalars['String']['input']>>
  data_senderAddress_not_starts_with: InputMaybe<Scalars['String']['input']>
  data_senderAddress_not_starts_with_nocase: InputMaybe<Scalars['String']['input']>
  data_senderAddress_starts_with: InputMaybe<Scalars['String']['input']>
  data_senderAddress_starts_with_nocase: InputMaybe<Scalars['String']['input']>
  data_senderName: InputMaybe<Scalars['String']['input']>
  data_senderName_contains: InputMaybe<Scalars['String']['input']>
  data_senderName_contains_nocase: InputMaybe<Scalars['String']['input']>
  data_senderName_ends_with: InputMaybe<Scalars['String']['input']>
  data_senderName_ends_with_nocase: InputMaybe<Scalars['String']['input']>
  data_senderName_gt: InputMaybe<Scalars['String']['input']>
  data_senderName_gte: InputMaybe<Scalars['String']['input']>
  data_senderName_in: InputMaybe<Array<Scalars['String']['input']>>
  data_senderName_lt: InputMaybe<Scalars['String']['input']>
  data_senderName_lte: InputMaybe<Scalars['String']['input']>
  data_senderName_not: InputMaybe<Scalars['String']['input']>
  data_senderName_not_contains: InputMaybe<Scalars['String']['input']>
  data_senderName_not_contains_nocase: InputMaybe<Scalars['String']['input']>
  data_senderName_not_ends_with: InputMaybe<Scalars['String']['input']>
  data_senderName_not_ends_with_nocase: InputMaybe<Scalars['String']['input']>
  data_senderName_not_in: InputMaybe<Array<Scalars['String']['input']>>
  data_senderName_not_starts_with: InputMaybe<Scalars['String']['input']>
  data_senderName_not_starts_with_nocase: InputMaybe<Scalars['String']['input']>
  data_senderName_starts_with: InputMaybe<Scalars['String']['input']>
  data_senderName_starts_with_nocase: InputMaybe<Scalars['String']['input']>
  id: InputMaybe<Scalars['ID']['input']>
  id_gt: InputMaybe<Scalars['ID']['input']>
  id_gte: InputMaybe<Scalars['ID']['input']>
  id_in: InputMaybe<Array<Scalars['ID']['input']>>
  id_lt: InputMaybe<Scalars['ID']['input']>
  id_lte: InputMaybe<Scalars['ID']['input']>
  id_not: InputMaybe<Scalars['ID']['input']>
  id_not_in: InputMaybe<Array<Scalars['ID']['input']>>
  or: InputMaybe<Array<InputMaybe<Recommended_Filter>>>
  timestamp_: InputMaybe<Scalars['BigInt']['input']>
  timestamp__gt: InputMaybe<Scalars['BigInt']['input']>
  timestamp__gte: InputMaybe<Scalars['BigInt']['input']>
  timestamp__in: InputMaybe<Array<Scalars['BigInt']['input']>>
  timestamp__lt: InputMaybe<Scalars['BigInt']['input']>
  timestamp__lte: InputMaybe<Scalars['BigInt']['input']>
  timestamp__not: InputMaybe<Scalars['BigInt']['input']>
  timestamp__not_in: InputMaybe<Array<Scalars['BigInt']['input']>>
  tokenId: InputMaybe<Scalars['BigInt']['input']>
  tokenId_gt: InputMaybe<Scalars['BigInt']['input']>
  tokenId_gte: InputMaybe<Scalars['BigInt']['input']>
  tokenId_in: InputMaybe<Array<Scalars['BigInt']['input']>>
  tokenId_lt: InputMaybe<Scalars['BigInt']['input']>
  tokenId_lte: InputMaybe<Scalars['BigInt']['input']>
  tokenId_not: InputMaybe<Scalars['BigInt']['input']>
  tokenId_not_in: InputMaybe<Array<Scalars['BigInt']['input']>>
  transactionHash_: InputMaybe<Scalars['String']['input']>
  transactionHash__contains: InputMaybe<Scalars['String']['input']>
  transactionHash__contains_nocase: InputMaybe<Scalars['String']['input']>
  transactionHash__ends_with: InputMaybe<Scalars['String']['input']>
  transactionHash__ends_with_nocase: InputMaybe<Scalars['String']['input']>
  transactionHash__gt: InputMaybe<Scalars['String']['input']>
  transactionHash__gte: InputMaybe<Scalars['String']['input']>
  transactionHash__in: InputMaybe<Array<Scalars['String']['input']>>
  transactionHash__lt: InputMaybe<Scalars['String']['input']>
  transactionHash__lte: InputMaybe<Scalars['String']['input']>
  transactionHash__not: InputMaybe<Scalars['String']['input']>
  transactionHash__not_contains: InputMaybe<Scalars['String']['input']>
  transactionHash__not_contains_nocase: InputMaybe<Scalars['String']['input']>
  transactionHash__not_ends_with: InputMaybe<Scalars['String']['input']>
  transactionHash__not_ends_with_nocase: InputMaybe<Scalars['String']['input']>
  transactionHash__not_in: InputMaybe<Array<Scalars['String']['input']>>
  transactionHash__not_starts_with: InputMaybe<Scalars['String']['input']>
  transactionHash__not_starts_with_nocase: InputMaybe<Scalars['String']['input']>
  transactionHash__starts_with: InputMaybe<Scalars['String']['input']>
  transactionHash__starts_with_nocase: InputMaybe<Scalars['String']['input']>
}

export enum Recommended_OrderBy {
  BLOCK_NUMBER = 'block_number',
  CONTRACTID_ = 'contractId_',
  DATA_DESCRIPTION = 'data_description',
  DATA_RECEIVERADDRESS = 'data_receiverAddress',
  DATA_RECEIVERNAME = 'data_receiverName',
  DATA_SENDERADDRESS = 'data_senderAddress',
  DATA_SENDERNAME = 'data_senderName',
  ID = 'id',
  TIMESTAMP_ = 'timestamp_',
  TOKENID = 'tokenId',
  TRANSACTIONHASH_ = 'transactionHash_',
}

export type Subscription = {
  __typename?: 'Subscription'
  /** Access to subgraph metadata */
  _meta: Maybe<_Meta_>
  approval: Maybe<Approval>
  approvalForAll: Maybe<ApprovalForAll>
  approvalForAlls: Array<ApprovalForAll>
  approvals: Array<Approval>
  recommended: Maybe<Recommended>
  recommendeds: Array<Recommended>
  transfer: Maybe<Transfer>
  transfers: Array<Transfer>
}

export type Subscription_MetaArgs = {
  block: InputMaybe<Block_Height>
}

export type SubscriptionApprovalArgs = {
  block: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionApprovalForAllArgs = {
  block: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionApprovalForAllsArgs = {
  block: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy: InputMaybe<ApprovalForAll_OrderBy>
  orderDirection: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where: InputMaybe<ApprovalForAll_Filter>
}

export type SubscriptionApprovalsArgs = {
  block: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy: InputMaybe<Approval_OrderBy>
  orderDirection: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where: InputMaybe<Approval_Filter>
}

export type SubscriptionRecommendedArgs = {
  block: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionRecommendedsArgs = {
  block: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy: InputMaybe<Recommended_OrderBy>
  orderDirection: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where: InputMaybe<Recommended_Filter>
}

export type SubscriptionTransferArgs = {
  block: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionTransfersArgs = {
  block: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy: InputMaybe<Transfer_OrderBy>
  orderDirection: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where: InputMaybe<Transfer_Filter>
}

export type Transfer = {
  __typename?: 'Transfer'
  block_number: Scalars['BigInt']['output']
  contractId_: Scalars['String']['output']
  from: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  timestamp_: Scalars['BigInt']['output']
  to: Maybe<Scalars['String']['output']>
  tokenId: Maybe<Scalars['BigInt']['output']>
  transactionHash_: Scalars['String']['output']
}

export type Transfer_Filter = {
  /** Filter for the block changed event. */
  _change_block: InputMaybe<BlockChangedFilter>
  and: InputMaybe<Array<InputMaybe<Transfer_Filter>>>
  block_number: InputMaybe<Scalars['BigInt']['input']>
  block_number_gt: InputMaybe<Scalars['BigInt']['input']>
  block_number_gte: InputMaybe<Scalars['BigInt']['input']>
  block_number_in: InputMaybe<Array<Scalars['BigInt']['input']>>
  block_number_lt: InputMaybe<Scalars['BigInt']['input']>
  block_number_lte: InputMaybe<Scalars['BigInt']['input']>
  block_number_not: InputMaybe<Scalars['BigInt']['input']>
  block_number_not_in: InputMaybe<Array<Scalars['BigInt']['input']>>
  contractId_: InputMaybe<Scalars['String']['input']>
  contractId__contains: InputMaybe<Scalars['String']['input']>
  contractId__contains_nocase: InputMaybe<Scalars['String']['input']>
  contractId__ends_with: InputMaybe<Scalars['String']['input']>
  contractId__ends_with_nocase: InputMaybe<Scalars['String']['input']>
  contractId__gt: InputMaybe<Scalars['String']['input']>
  contractId__gte: InputMaybe<Scalars['String']['input']>
  contractId__in: InputMaybe<Array<Scalars['String']['input']>>
  contractId__lt: InputMaybe<Scalars['String']['input']>
  contractId__lte: InputMaybe<Scalars['String']['input']>
  contractId__not: InputMaybe<Scalars['String']['input']>
  contractId__not_contains: InputMaybe<Scalars['String']['input']>
  contractId__not_contains_nocase: InputMaybe<Scalars['String']['input']>
  contractId__not_ends_with: InputMaybe<Scalars['String']['input']>
  contractId__not_ends_with_nocase: InputMaybe<Scalars['String']['input']>
  contractId__not_in: InputMaybe<Array<Scalars['String']['input']>>
  contractId__not_starts_with: InputMaybe<Scalars['String']['input']>
  contractId__not_starts_with_nocase: InputMaybe<Scalars['String']['input']>
  contractId__starts_with: InputMaybe<Scalars['String']['input']>
  contractId__starts_with_nocase: InputMaybe<Scalars['String']['input']>
  from: InputMaybe<Scalars['String']['input']>
  from_contains: InputMaybe<Scalars['String']['input']>
  from_contains_nocase: InputMaybe<Scalars['String']['input']>
  from_ends_with: InputMaybe<Scalars['String']['input']>
  from_ends_with_nocase: InputMaybe<Scalars['String']['input']>
  from_gt: InputMaybe<Scalars['String']['input']>
  from_gte: InputMaybe<Scalars['String']['input']>
  from_in: InputMaybe<Array<Scalars['String']['input']>>
  from_lt: InputMaybe<Scalars['String']['input']>
  from_lte: InputMaybe<Scalars['String']['input']>
  from_not: InputMaybe<Scalars['String']['input']>
  from_not_contains: InputMaybe<Scalars['String']['input']>
  from_not_contains_nocase: InputMaybe<Scalars['String']['input']>
  from_not_ends_with: InputMaybe<Scalars['String']['input']>
  from_not_ends_with_nocase: InputMaybe<Scalars['String']['input']>
  from_not_in: InputMaybe<Array<Scalars['String']['input']>>
  from_not_starts_with: InputMaybe<Scalars['String']['input']>
  from_not_starts_with_nocase: InputMaybe<Scalars['String']['input']>
  from_starts_with: InputMaybe<Scalars['String']['input']>
  from_starts_with_nocase: InputMaybe<Scalars['String']['input']>
  id: InputMaybe<Scalars['ID']['input']>
  id_gt: InputMaybe<Scalars['ID']['input']>
  id_gte: InputMaybe<Scalars['ID']['input']>
  id_in: InputMaybe<Array<Scalars['ID']['input']>>
  id_lt: InputMaybe<Scalars['ID']['input']>
  id_lte: InputMaybe<Scalars['ID']['input']>
  id_not: InputMaybe<Scalars['ID']['input']>
  id_not_in: InputMaybe<Array<Scalars['ID']['input']>>
  or: InputMaybe<Array<InputMaybe<Transfer_Filter>>>
  timestamp_: InputMaybe<Scalars['BigInt']['input']>
  timestamp__gt: InputMaybe<Scalars['BigInt']['input']>
  timestamp__gte: InputMaybe<Scalars['BigInt']['input']>
  timestamp__in: InputMaybe<Array<Scalars['BigInt']['input']>>
  timestamp__lt: InputMaybe<Scalars['BigInt']['input']>
  timestamp__lte: InputMaybe<Scalars['BigInt']['input']>
  timestamp__not: InputMaybe<Scalars['BigInt']['input']>
  timestamp__not_in: InputMaybe<Array<Scalars['BigInt']['input']>>
  to: InputMaybe<Scalars['String']['input']>
  to_contains: InputMaybe<Scalars['String']['input']>
  to_contains_nocase: InputMaybe<Scalars['String']['input']>
  to_ends_with: InputMaybe<Scalars['String']['input']>
  to_ends_with_nocase: InputMaybe<Scalars['String']['input']>
  to_gt: InputMaybe<Scalars['String']['input']>
  to_gte: InputMaybe<Scalars['String']['input']>
  to_in: InputMaybe<Array<Scalars['String']['input']>>
  to_lt: InputMaybe<Scalars['String']['input']>
  to_lte: InputMaybe<Scalars['String']['input']>
  to_not: InputMaybe<Scalars['String']['input']>
  to_not_contains: InputMaybe<Scalars['String']['input']>
  to_not_contains_nocase: InputMaybe<Scalars['String']['input']>
  to_not_ends_with: InputMaybe<Scalars['String']['input']>
  to_not_ends_with_nocase: InputMaybe<Scalars['String']['input']>
  to_not_in: InputMaybe<Array<Scalars['String']['input']>>
  to_not_starts_with: InputMaybe<Scalars['String']['input']>
  to_not_starts_with_nocase: InputMaybe<Scalars['String']['input']>
  to_starts_with: InputMaybe<Scalars['String']['input']>
  to_starts_with_nocase: InputMaybe<Scalars['String']['input']>
  tokenId: InputMaybe<Scalars['BigInt']['input']>
  tokenId_gt: InputMaybe<Scalars['BigInt']['input']>
  tokenId_gte: InputMaybe<Scalars['BigInt']['input']>
  tokenId_in: InputMaybe<Array<Scalars['BigInt']['input']>>
  tokenId_lt: InputMaybe<Scalars['BigInt']['input']>
  tokenId_lte: InputMaybe<Scalars['BigInt']['input']>
  tokenId_not: InputMaybe<Scalars['BigInt']['input']>
  tokenId_not_in: InputMaybe<Array<Scalars['BigInt']['input']>>
  transactionHash_: InputMaybe<Scalars['String']['input']>
  transactionHash__contains: InputMaybe<Scalars['String']['input']>
  transactionHash__contains_nocase: InputMaybe<Scalars['String']['input']>
  transactionHash__ends_with: InputMaybe<Scalars['String']['input']>
  transactionHash__ends_with_nocase: InputMaybe<Scalars['String']['input']>
  transactionHash__gt: InputMaybe<Scalars['String']['input']>
  transactionHash__gte: InputMaybe<Scalars['String']['input']>
  transactionHash__in: InputMaybe<Array<Scalars['String']['input']>>
  transactionHash__lt: InputMaybe<Scalars['String']['input']>
  transactionHash__lte: InputMaybe<Scalars['String']['input']>
  transactionHash__not: InputMaybe<Scalars['String']['input']>
  transactionHash__not_contains: InputMaybe<Scalars['String']['input']>
  transactionHash__not_contains_nocase: InputMaybe<Scalars['String']['input']>
  transactionHash__not_ends_with: InputMaybe<Scalars['String']['input']>
  transactionHash__not_ends_with_nocase: InputMaybe<Scalars['String']['input']>
  transactionHash__not_in: InputMaybe<Array<Scalars['String']['input']>>
  transactionHash__not_starts_with: InputMaybe<Scalars['String']['input']>
  transactionHash__not_starts_with_nocase: InputMaybe<Scalars['String']['input']>
  transactionHash__starts_with: InputMaybe<Scalars['String']['input']>
  transactionHash__starts_with_nocase: InputMaybe<Scalars['String']['input']>
}

export enum Transfer_OrderBy {
  BLOCK_NUMBER = 'block_number',
  CONTRACTID_ = 'contractId_',
  FROM = 'from',
  ID = 'id',
  TIMESTAMP_ = 'timestamp_',
  TO = 'to',
  TOKENID = 'tokenId',
  TRANSACTIONHASH_ = 'transactionHash_',
}

export type _Block_ = {
  __typename?: '_Block_'
  /** The hash of the block */
  hash: Maybe<Scalars['Bytes']['output']>
  /** The block number */
  number: Scalars['Int']['output']
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp: Maybe<Scalars['Int']['output']>
}

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_'
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_
  /** The deployment ID */
  deployment: Scalars['String']['output']
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output']
}

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  ALLOW = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  DENY = 'deny',
}

export type GetRecentRecommendationsQueryVariables = Exact<{ [key: string]: never }>

export type GetRecentRecommendationsQuery = {
  __typename?: 'Query'
  recent: Array<{
    __typename?: 'Recommended'
    tokenId: number | null | undefined
    data_senderName: string | null | undefined
    data_description: string | null | undefined
    data_receiverName: string | null | undefined
    data_senderAddress: string | null | undefined
    data_receiverAddress: string | null | undefined
  }>
}

export type GetUsersRecommendationsQueryVariables = Exact<{
  userAddress: Scalars['String']['input']
}>

export type GetUsersRecommendationsQuery = {
  __typename?: 'Query'
  recommendationsSent: Array<{
    __typename?: 'Recommended'
    tokenId: number | null | undefined
    data_senderName: string | null | undefined
    data_description: string | null | undefined
    data_receiverName: string | null | undefined
    data_senderAddress: string | null | undefined
    data_receiverAddress: string | null | undefined
  }>
  recommendationsReceived: Array<{
    __typename?: 'Recommended'
    tokenId: number | null | undefined
    data_senderName: string | null | undefined
    data_description: string | null | undefined
    data_receiverName: string | null | undefined
    data_senderAddress: string | null | undefined
    data_receiverAddress: string | null | undefined
  }>
}

export type ResolverTypeWrapper<T> = Promise<T> | T

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Approval: ResolverTypeWrapper<Approval>
  ApprovalForAll: ResolverTypeWrapper<ApprovalForAll>
  ApprovalForAll_filter: ApprovalForAll_Filter
  ApprovalForAll_orderBy: ApprovalForAll_OrderBy
  Approval_filter: Approval_Filter
  Approval_orderBy: Approval_OrderBy
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']['output']>
  BigInt: ResolverTypeWrapper<Scalars['BigInt']['output']>
  BlockChangedFilter: BlockChangedFilter
  Block_height: Block_Height
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>
  Bytes: ResolverTypeWrapper<Scalars['Bytes']['output']>
  ID: ResolverTypeWrapper<Scalars['ID']['output']>
  Int: ResolverTypeWrapper<Scalars['Int']['output']>
  Int8: ResolverTypeWrapper<Scalars['Int8']['output']>
  OrderDirection: OrderDirection
  Query: ResolverTypeWrapper<{}>
  Recommended: ResolverTypeWrapper<Recommended>
  Recommended_filter: Recommended_Filter
  Recommended_orderBy: Recommended_OrderBy
  String: ResolverTypeWrapper<Scalars['String']['output']>
  Subscription: ResolverTypeWrapper<{}>
  Transfer: ResolverTypeWrapper<Transfer>
  Transfer_filter: Transfer_Filter
  Transfer_orderBy: Transfer_OrderBy
  _Block_: ResolverTypeWrapper<_Block_>
  _Meta_: ResolverTypeWrapper<_Meta_>
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_
}

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Approval: Approval
  ApprovalForAll: ApprovalForAll
  ApprovalForAll_filter: ApprovalForAll_Filter
  Approval_filter: Approval_Filter
  BigDecimal: Scalars['BigDecimal']['output']
  BigInt: Scalars['BigInt']['output']
  BlockChangedFilter: BlockChangedFilter
  Block_height: Block_Height
  Boolean: Scalars['Boolean']['output']
  Bytes: Scalars['Bytes']['output']
  ID: Scalars['ID']['output']
  Int: Scalars['Int']['output']
  Int8: Scalars['Int8']['output']
  Query: {}
  Recommended: Recommended
  Recommended_filter: Recommended_Filter
  String: Scalars['String']['output']
  Subscription: {}
  Transfer: Transfer
  Transfer_filter: Transfer_Filter
  _Block_: _Block_
  _Meta_: _Meta_
}

export type DerivedFromDirectiveArgs = {
  field: Scalars['String']['input']
}

export type DerivedFromDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = DerivedFromDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type EntityDirectiveArgs = {}

export type EntityDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = EntityDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type SubgraphIdDirectiveArgs = {
  id: Scalars['String']['input']
}

export type SubgraphIdDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = SubgraphIdDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type ApprovalResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Approval'] = ResolversParentTypes['Approval'],
> = {
  approved: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  block_number: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  contractId_: Resolver<ResolversTypes['String'], ParentType, ContextType>
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  owner: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  timestamp_: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  tokenId: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>
  transactionHash_: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ApprovalForAllResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ApprovalForAll'] = ResolversParentTypes['ApprovalForAll'],
> = {
  approved: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  block_number: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  contractId_: Resolver<ResolversTypes['String'], ParentType, ContextType>
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  operator: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  owner: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  timestamp_: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  transactionHash_: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface BigDecimalScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal'
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt'
}

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes'
}

export interface Int8ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Int8'], any> {
  name: 'Int8'
}

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
  _meta: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Query_MetaArgs>
  approval: Resolver<
    Maybe<ResolversTypes['Approval']>,
    ParentType,
    ContextType,
    RequireFields<QueryApprovalArgs, 'id' | 'subgraphError'>
  >
  approvalForAll: Resolver<
    Maybe<ResolversTypes['ApprovalForAll']>,
    ParentType,
    ContextType,
    RequireFields<QueryApprovalForAllArgs, 'id' | 'subgraphError'>
  >
  approvalForAlls: Resolver<
    Array<ResolversTypes['ApprovalForAll']>,
    ParentType,
    ContextType,
    RequireFields<QueryApprovalForAllsArgs, 'first' | 'skip' | 'subgraphError'>
  >
  approvals: Resolver<
    Array<ResolversTypes['Approval']>,
    ParentType,
    ContextType,
    RequireFields<QueryApprovalsArgs, 'first' | 'skip' | 'subgraphError'>
  >
  recommended: Resolver<
    Maybe<ResolversTypes['Recommended']>,
    ParentType,
    ContextType,
    RequireFields<QueryRecommendedArgs, 'id' | 'subgraphError'>
  >
  recommendeds: Resolver<
    Array<ResolversTypes['Recommended']>,
    ParentType,
    ContextType,
    RequireFields<QueryRecommendedsArgs, 'first' | 'skip' | 'subgraphError'>
  >
  transfer: Resolver<
    Maybe<ResolversTypes['Transfer']>,
    ParentType,
    ContextType,
    RequireFields<QueryTransferArgs, 'id' | 'subgraphError'>
  >
  transfers: Resolver<
    Array<ResolversTypes['Transfer']>,
    ParentType,
    ContextType,
    RequireFields<QueryTransfersArgs, 'first' | 'skip' | 'subgraphError'>
  >
}

export type RecommendedResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Recommended'] = ResolversParentTypes['Recommended'],
> = {
  block_number: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  contractId_: Resolver<ResolversTypes['String'], ParentType, ContextType>
  data_description: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  data_receiverAddress: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  data_receiverName: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  data_senderAddress: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  data_senderName: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  timestamp_: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  tokenId: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>
  transactionHash_: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type SubscriptionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription'],
> = {
  _meta: SubscriptionResolver<
    Maybe<ResolversTypes['_Meta_']>,
    '_meta',
    ParentType,
    ContextType,
    Subscription_MetaArgs
  >
  approval: SubscriptionResolver<
    Maybe<ResolversTypes['Approval']>,
    'approval',
    ParentType,
    ContextType,
    RequireFields<SubscriptionApprovalArgs, 'id' | 'subgraphError'>
  >
  approvalForAll: SubscriptionResolver<
    Maybe<ResolversTypes['ApprovalForAll']>,
    'approvalForAll',
    ParentType,
    ContextType,
    RequireFields<SubscriptionApprovalForAllArgs, 'id' | 'subgraphError'>
  >
  approvalForAlls: SubscriptionResolver<
    Array<ResolversTypes['ApprovalForAll']>,
    'approvalForAlls',
    ParentType,
    ContextType,
    RequireFields<SubscriptionApprovalForAllsArgs, 'first' | 'skip' | 'subgraphError'>
  >
  approvals: SubscriptionResolver<
    Array<ResolversTypes['Approval']>,
    'approvals',
    ParentType,
    ContextType,
    RequireFields<SubscriptionApprovalsArgs, 'first' | 'skip' | 'subgraphError'>
  >
  recommended: SubscriptionResolver<
    Maybe<ResolversTypes['Recommended']>,
    'recommended',
    ParentType,
    ContextType,
    RequireFields<SubscriptionRecommendedArgs, 'id' | 'subgraphError'>
  >
  recommendeds: SubscriptionResolver<
    Array<ResolversTypes['Recommended']>,
    'recommendeds',
    ParentType,
    ContextType,
    RequireFields<SubscriptionRecommendedsArgs, 'first' | 'skip' | 'subgraphError'>
  >
  transfer: SubscriptionResolver<
    Maybe<ResolversTypes['Transfer']>,
    'transfer',
    ParentType,
    ContextType,
    RequireFields<SubscriptionTransferArgs, 'id' | 'subgraphError'>
  >
  transfers: SubscriptionResolver<
    Array<ResolversTypes['Transfer']>,
    'transfers',
    ParentType,
    ContextType,
    RequireFields<SubscriptionTransfersArgs, 'first' | 'skip' | 'subgraphError'>
  >
}

export type TransferResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Transfer'] = ResolversParentTypes['Transfer'],
> = {
  block_number: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  contractId_: Resolver<ResolversTypes['String'], ParentType, ContextType>
  from: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  timestamp_: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  to: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  tokenId: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>
  transactionHash_: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type _Block_Resolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_'],
> = {
  hash: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>
  number: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  timestamp: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type _Meta_Resolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_'],
> = {
  block: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>
  deployment: Resolver<ResolversTypes['String'], ParentType, ContextType>
  hasIndexingErrors: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type Resolvers<ContextType = any> = {
  Approval: ApprovalResolvers<ContextType>
  ApprovalForAll: ApprovalForAllResolvers<ContextType>
  BigDecimal: GraphQLScalarType
  BigInt: GraphQLScalarType
  Bytes: GraphQLScalarType
  Int8: GraphQLScalarType
  Query: QueryResolvers<ContextType>
  Recommended: RecommendedResolvers<ContextType>
  Subscription: SubscriptionResolvers<ContextType>
  Transfer: TransferResolvers<ContextType>
  _Block_: _Block_Resolvers<ContextType>
  _Meta_: _Meta_Resolvers<ContextType>
}

export type DirectiveResolvers<ContextType = any> = {
  derivedFrom: DerivedFromDirectiveResolver<any, any, ContextType>
  entity: EntityDirectiveResolver<any, any, ContextType>
  subgraphId: SubgraphIdDirectiveResolver<any, any, ContextType>
}
