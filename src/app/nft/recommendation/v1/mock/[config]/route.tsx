import { NextRequest } from 'next/server'

import { generateNFTImage } from '@/utils/server/generateNFTImage'
import { decodeObjectForUrl } from '@/utils/shared/encodeObjectForUrl'
import { RecommendationNFTMetadata } from '@/utils/shared/nftMetadata'

export const dynamic = 'error'
export const revalidate = 60 * 60 * 24

export async function GET(_request: NextRequest, { params }: { params: { config: string } }) {
  const data = decodeObjectForUrl<RecommendationNFTMetadata>(params.config)
  return generateNFTImage(data)
}
