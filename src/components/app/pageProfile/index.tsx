import { MaybeENSAvatar } from '@/components/app/maybeENSAvatar'
import { MaybeRecentMint } from '@/components/app/pageProfile/recentMint'
import { RecommendationSummary } from '@/components/app/recommendationSummary'
import { getUsersRecommendations } from '@/data/subgraphs/getUsersRecommendations'
import { getENSDataFromCryptoAddress } from '@/utils/server/thirdweb/getENSDataFromCryptoAddresses'

export async function PageProfile({ userAddress }: { userAddress: string }) {
  const [{ recommendationsReceived, recommendationsSent }, ensData] = await Promise.all([
    getUsersRecommendations({ userAddress }),
    getENSDataFromCryptoAddress(userAddress),
  ])
  const name = recommendationsReceived[0]?.receiverName || recommendationsSent[0]?.senderName
  return (
    <div>
      <div className="mb-12 text-center">
        {ensData ? <MaybeENSAvatar ensData={ensData} userAddress={userAddress} /> : null}
        <h1 className="text-2xl text-purple-400">
          {ensData ? ensData.ensName : name || userAddress}
        </h1>
      </div>
      <MaybeRecentMint recommendationsSent={recommendationsSent} />
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <h2 className="mb-4 border-b-2 pb-4 text-lg">Sent</h2>
          {recommendationsSent.length ? (
            <div className="space-y-6">
              {recommendationsSent.map(recommendation => (
                <RecommendationSummary
                  key={recommendation.tokenId}
                  recommendation={recommendation}
                />
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">No recommendations sent</p>
          )}
        </div>
        <div>
          <h2 className="mb-4 border-b-2 pb-4 text-lg">Received</h2>
          {recommendationsReceived.length ? (
            <div className="space-y-6">
              {recommendationsReceived.map(recommendation => (
                <RecommendationSummary
                  key={recommendation.tokenId}
                  recommendation={recommendation}
                />
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">No recommendations received</p>
          )}
        </div>
      </div>
    </div>
  )
}
