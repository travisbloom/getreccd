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
