import { Metadata } from 'next'

import { getOpenGraphImageUrl } from '@/utils/server/generateOpenGraphImageUrl'

export const sharedOpenGraphMetadata = {
  siteName: "Get Recc'd",
  locale: 'en_US',
  type: 'website',
} satisfies Partial<Metadata['openGraph']>

export const sharedTwitterMetadata = {
  card: 'summary_large_image',
  // creator: '@getreccd', // TODO create twitter
} satisfies Partial<Metadata['twitter']>

export const generateMetadataDetails = ({
  title,
  description,
  ogImage,
}: {
  title: string
  description?: string
  ogImage?: {
    url: string | URL
    secureUrl?: string | URL
    alt?: string
    type?: string
    width?: string | number
    height?: string | number
  }
}) => {
  const useImage = ogImage || getOpenGraphImageUrl({ title, description })
  return {
    title,
    description,
    openGraph: {
      ...sharedOpenGraphMetadata,
      title,
      description,
      images: [useImage],
    },
    twitter: {
      ...sharedTwitterMetadata,
      title,
      description,
      images: [useImage],
    },
  } satisfies Metadata
}
