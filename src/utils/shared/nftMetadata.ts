import { CHAIN_ENVIRONMENT } from '@/utils/shared/sharedEnv'

export type RecommendationNFTSubmissionMetadata = {
  senderName: string
  description: string
  receiverName: string
  receiverAddress: string
}

export type RecommendationNFTMetadata = RecommendationNFTSubmissionMetadata & {
  senderAddress: string
  tokenId: number
  id: string
}

export const RECOMMENDATION_NFT_IMAGE_DIMENSIONS = {
  width: 600,
  height: 600,
}

export const CONTRACT_ADDRESS =
  CHAIN_ENVIRONMENT === 'production'
    ? '0xc984fB30bA5f139CB84d2a4308bc092605e15F55'
    : '0x17c864EE3aA63E84C848AD77580B1194b85a66Df'
