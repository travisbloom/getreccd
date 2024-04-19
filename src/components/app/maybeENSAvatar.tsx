/* eslint-disable @next/next/no-img-element */
import { UserENSData } from '@/utils/server/thirdweb/getENSDataFromCryptoAddresses'
import { cn } from '@/utils/web/cn'

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
        <img
          alt={`ENS Avatar for ${ensData.ensName}`}
          className={cn('h-32 w-32', sharedClassName)}
          src={ensData.ensAvatarUrl}
        />
      </div>
    )
  }
  return (
    <div
      className={cn(
        'inline-block flex h-32 w-32 items-center justify-center rounded-full bg-primary text-primary-foreground',
        sharedClassName,
      )}
    >
      <div>{`${userAddress.slice(0, 2)}...${userAddress.slice(-5)}`}</div>
    </div>
  )
}
