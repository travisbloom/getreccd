/* eslint-disable @next/next/no-img-element */

import * as Sentry from '@sentry/nextjs'
import { ImageResponse } from 'next/og'

import {
  getENSDataMapFromCryptoAddresses,
  UserENSData,
} from '@/utils/server/thirdweb/getENSDataFromCryptoAddresses'
import { getLogger } from '@/utils/shared/logger'
import {
  RECOMMENDATION_NFT_IMAGE_DIMENSIONS,
  RecommendationNFTMetadata,
} from '@/utils/shared/nftMetadata'

const logo = (
  <svg fill="none" height="38" viewBox="0 0 88 19" width="172" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14.12 19L8.912 12.784H13.064L17.576 18.112V19H14.12ZM0.344 19V1.744H14.264C14.872 1.744 15.432 1.896 15.944 2.2C16.456 2.504 16.864 2.912 17.168 3.424C17.472 3.92 17.624 4.472 17.624 5.08V9.736C17.624 10.344 17.472 10.904 17.168 11.416C16.864 11.928 16.456 12.336 15.944 12.64C15.432 12.928 14.872 13.072 14.264 13.072L3.512 13.096V19H0.344ZM3.8 9.88H14.12C14.2 9.88 14.272 9.856 14.336 9.808C14.4 9.76 14.432 9.696 14.432 9.616V5.2C14.432 5.12 14.4 5.056 14.336 5.008C14.272 4.944 14.2 4.912 14.12 4.912H3.8C3.72 4.912 3.648 4.944 3.584 5.008C3.536 5.056 3.512 5.12 3.512 5.2V9.616C3.512 9.696 3.536 9.76 3.584 9.808C3.648 9.856 3.72 9.88 3.8 9.88ZM23.3407 19C22.7327 19 22.1807 18.848 21.6847 18.544C21.1887 18.24 20.7887 17.84 20.4847 17.344C20.1807 16.848 20.0287 16.296 20.0287 15.688V8.392C20.0287 7.784 20.1807 7.232 20.4847 6.736C20.7887 6.24 21.1887 5.84 21.6847 5.536C22.1807 5.232 22.7327 5.08 23.3407 5.08H30.8527C31.4607 5.08 32.0127 5.232 32.5087 5.536C33.0207 5.84 33.4207 6.24 33.7087 6.736C34.0127 7.232 34.1647 7.784 34.1647 8.392V13.624H23.1727V15.568C23.1727 15.648 23.1967 15.72 23.2447 15.784C23.3087 15.832 23.3807 15.856 23.4607 15.856H34.1647V19H23.3407ZM23.1727 10.792H31.0207V8.512C31.0207 8.432 30.9887 8.368 30.9247 8.32C30.8767 8.256 30.8127 8.224 30.7327 8.224H23.4607C23.3807 8.224 23.3087 8.256 23.2447 8.32C23.1967 8.368 23.1727 8.432 23.1727 8.512V10.792ZM39.3954 19C38.7874 19 38.2354 18.848 37.7394 18.544C37.2434 18.24 36.8434 17.84 36.5394 17.344C36.2354 16.848 36.0834 16.296 36.0834 15.688V8.392C36.0834 7.784 36.2354 7.232 36.5394 6.736C36.8434 6.24 37.2434 5.84 37.7394 5.536C38.2354 5.232 38.7874 5.08 39.3954 5.08H50.1954V8.224H39.5154C39.4354 8.224 39.3634 8.256 39.2994 8.32C39.2514 8.368 39.2274 8.432 39.2274 8.512V15.568C39.2274 15.648 39.2514 15.72 39.2994 15.784C39.3634 15.832 39.4354 15.856 39.5154 15.856H50.2194V19H39.3954ZM55.9188 19C55.3108 19 54.7588 18.848 54.2628 18.544C53.7668 18.24 53.3668 17.84 53.0628 17.344C52.7588 16.848 52.6068 16.296 52.6068 15.688V8.392C52.6068 7.784 52.7588 7.232 53.0628 6.736C53.3668 6.24 53.7668 5.84 54.2628 5.536C54.7588 5.232 55.3108 5.08 55.9188 5.08H66.7188V8.224H56.0388C55.9588 8.224 55.8868 8.256 55.8228 8.32C55.7748 8.368 55.7508 8.432 55.7508 8.512V15.568C55.7508 15.648 55.7748 15.72 55.8228 15.784C55.8868 15.832 55.9588 15.856 56.0388 15.856H66.7428V19H55.9188ZM69.3663 8.056V1.936H72.5103V4.744C72.5103 5.272 72.3743 5.768 72.1023 6.232C71.8303 6.696 71.4543 7.088 70.9743 7.408C70.4943 7.728 69.9583 7.944 69.3663 8.056ZM77.114 19C76.49 19 75.93 18.848 75.434 18.544C74.938 18.24 74.538 17.84 74.234 17.344C73.946 16.848 73.802 16.296 73.802 15.688V8.392C73.802 7.784 73.946 7.232 74.234 6.736C74.538 6.24 74.938 5.84 75.434 5.536C75.93 5.232 76.49 5.08 77.114 5.08H84.818V0.519999H87.962V19H77.114ZM77.258 15.856H84.53C84.61 15.856 84.674 15.832 84.722 15.784C84.786 15.72 84.818 15.648 84.818 15.568V8.512C84.818 8.432 84.786 8.368 84.722 8.32C84.674 8.256 84.61 8.224 84.53 8.224H77.258C77.178 8.224 77.106 8.256 77.042 8.32C76.994 8.368 76.97 8.432 76.97 8.512V15.568C76.97 15.648 76.994 15.72 77.042 15.784C77.106 15.832 77.178 15.856 77.258 15.856Z"
      fill="white"
    />
  </svg>
)

async function parseEnsAvatarUrl(url: string | null | undefined) {
  if (!url) {
    return undefined
  }
  return fetch(new URL(url, import.meta.url))
    .then(res => res.arrayBuffer() as any)
    .catch(e => {
      Sentry.captureException(e, { tags: { domain: 'parseENSAvatarUrl' } })
    })
}

const logger = getLogger('generateNFTImage')

export async function generateNFTImage(metadata: RecommendationNFTMetadata) {
  logger.info('triggered', metadata)
  const results = await getENSDataMapFromCryptoAddresses([
    metadata.senderAddress,
    metadata.receiverAddress,
  ])
  logger.info('ens data returned')
  const senderEnsData = (results[metadata.senderAddress] || null) as UserENSData | null
  const receiverEnsData = (results[metadata.receiverAddress] || null) as UserENSData | null
  const [senderAvatar, receiverAvatar] = await Promise.all([
    parseEnsAvatarUrl(senderEnsData?.ensAvatarUrl),
    parseEnsAvatarUrl(receiverEnsData?.ensAvatarUrl),
  ])
  logger.info('ens image buffer returned', {
    senderAvatar: senderEnsData?.ensAvatarUrl,
    receiverAvatar: receiverEnsData?.ensAvatarUrl,
  })
  const senderName = senderEnsData?.ensName || metadata.senderName || ''
  const receiverName = receiverEnsData?.ensName || metadata.receiverName || ''
  return new ImageResponse(
    (
      <div tw="flex bg-[#6d28d9] text-white p-8 w-full h-full flex-col justify-center items-center">
        <div tw="flex flex-col items-center">
          <div tw="flex">{logo}</div>
          <div tw="flex mt-20 mb-20">
            <div tw="relative left-5 flex">
              {senderAvatar ? (
                <div tw="overflow-hidden rounded-full flex">
                  <img alt="logo" src={senderAvatar} tw="w-52 h-52" />
                </div>
              ) : (
                <div tw="w-52 flex h-52 bg-slate-300 overflow-hidden rounded-full border border-slate-800 items-center justify-center">
                  <div tw="text-black text-5xl">{senderName.slice(0, 1).toUpperCase()}</div>
                </div>
              )}
            </div>

            <div tw="relative left-right flex">
              {receiverAvatar ? (
                <div tw="overflow-hidden rounded-full flex">
                  <img alt="logo" src={senderAvatar} tw="w-52 h-52" />
                </div>
              ) : (
                <div tw="w-52 flex h-52 bg-slate-300 overflow-hidden rounded-full border border-slate-800 items-center justify-center">
                  <div tw="text-black text-5xl">{receiverName.slice(0, 1).toUpperCase()}</div>
                </div>
              )}
            </div>
          </div>
          <div tw="flex flex-col items-center text-center">
            <div tw="text-3xl">{`${senderName} recommended ${receiverName}`}</div>
          </div>
        </div>
      </div>
    ),
    RECOMMENDATION_NFT_IMAGE_DIMENSIONS,
  )
}
