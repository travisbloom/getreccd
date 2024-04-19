/* eslint-disable @next/next/no-img-element */
import { ImageWithFallbackOnError } from '@/components/imageWithFallbackOnError'
import { UserENSData } from '@/utils/server/thirdweb/getENSDataFromCryptoAddresses'
import { deterministicArraySelection } from '@/utils/shared/deterministicArraySelection'
import { cn } from '@/utils/web/cn'

const genericImages = [
  '/userAvatars/blue.svg',
  '/userAvatars/green.svg',
  '/userAvatars/orange.svg',
  '/userAvatars/purple.svg',
  '/userAvatars/red.svg',
  '/userAvatars/yellow.svg',
]

export function MaybeENSAvatar({
  userAddress,
  ensData,
  sharedClassName,
}: {
  userAddress: string
  ensData: UserENSData | null
  sharedClassName?: string
}) {
  if (ensData?.ensAvatarUrl) {
    return (
      <div className="inline-block overflow-hidden rounded-full">
        <ImageWithFallbackOnError
          alt={`ENS Avatar for ${ensData.ensName}`}
          className={cn('h-32 w-32', sharedClassName)}
          fallbackSrc={deterministicArraySelection(genericImages, userAddress)}
          src={ensData.ensAvatarUrl}
        />
      </div>
    )
  }
  return (
    <div className="inline-block overflow-hidden rounded-full">
      <img
        alt="Generic profile picture for anonymous user"
        className={cn('h-32 w-32', sharedClassName)}
        src={deterministicArraySelection(genericImages, userAddress)}
      />
    </div>
  )
}
