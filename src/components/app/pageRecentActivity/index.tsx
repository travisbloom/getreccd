import { RecommendationSummary } from '@/components/app/recommendationSummary'
import { getRecentRecommendations } from '@/data/subgraphs/getRecentRecommendations'

export async function PageRecentActivity() {
  const recentRecommendations = await getRecentRecommendations()
  return (
    <div className="mx-auto max-w-xl space-y-6">
      <h1 className="font-mono text-3xl font-bold sm:text-4xl">Recent Recommendations</h1>
      <h2 className="text-muted-foreground">
        See who's giving and getting Proof-Of-Recommendations.
      </h2>
      {recentRecommendations.map(r => (
        <RecommendationSummary key={r.tokenId} recommendation={r} />
      ))}
    </div>
  )
}
