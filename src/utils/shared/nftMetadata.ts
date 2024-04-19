import { CHAIN_ENVIRONMENT } from '@/utils/shared/sharedEnv'

export type RecommendationNFTSubmissionMetadata = {
  senderName: string
  description: string
  receiverName: string
  receiverAddress: string
}

export type RecommendationNFTMetadata = RecommendationNFTSubmissionMetadata & {
  senderAddress: string
}

export const RECOMMENDATION_NFT_IMAGE_DIMENSIONS = {
  width: 600,
  height: 600,
}

export const CONTRACT_ADDRESS =
  CHAIN_ENVIRONMENT === 'production'
    ? '0x71B6f46Fb5c9529098bfEb3afC710aFE81460AC7'
    : '0x17c864EE3aA63E84C848AD77580B1194b85a66Df'
