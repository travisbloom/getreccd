import { encodeObjectForUrl } from '@/utils/shared/encodeObjectForUrl'
import { RecommendationNFTMetadata } from '@/utils/shared/nftMetadata'
import { requiredOutsideLocalEnv } from '@/utils/shared/requiredEnv'
import { NEXT_PUBLIC_ENVIRONMENT } from '@/utils/shared/sharedEnv'

const NEXT_PUBLIC_VERCEL_URL = requiredOutsideLocalEnv(
  process.env.NEXT_PUBLIC_VERCEL_URL,
  'NEXT_PUBLIC_VERCEL_URL',
  null,
)

export const fullUrl = (path: string) => {
  switch (NEXT_PUBLIC_ENVIRONMENT) {
    case 'local':
      return `http://localhost:3000${path}`
    case 'testing':
      return `https://testing.getreccd.com${path}`
    case 'preview':
      return `https://${NEXT_PUBLIC_VERCEL_URL!}${path}`
    case 'production':
      return `https://www.getreccd.com${path}`
  }
}

export const urls = {
  mint: () => '/mint',
  home: () => '/',
  profile: (address: string) => `/profile/${address}`,
  recommendation: (tokenId: number) => `/recommendation/${tokenId}`,
  mockNFTImage: (props: RecommendationNFTMetadata) =>
    `/nft/recommendation/v1/mock/${encodeObjectForUrl(props)}`,
}
