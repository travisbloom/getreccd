import { NextRequest } from 'next/server'

import { generateNFTImage } from '@/utils/server/generateNFTImage'
import { getReccdGetRecommendationData } from '@/utils/shared/thirdweb/getReccdGetRecommendationData'

export const dynamic = 'error'
export const revalidate = 60 * 60 * 24

export async function GET(_request: NextRequest, { params }: { params: { tokenId: string } }) {
  const data = await getReccdGetRecommendationData({
    tokenId: parseInt(params.tokenId, 10) as any,
  })
  return generateNFTImage(data)
}
