import { Skeleton } from '@/components/ui/skeleton'

export async function PageProfileLoading() {
  return (
    <div>
      <div className="mb-12 text-center">
        <Skeleton className="inline-block h-32 w-32" />
        <h1 className="text-2xl text-purple-400">
          <Skeleton className="inline-block h-6 w-56">Person's Name</Skeleton>
        </h1>
      </div>
      <div className="mx-auto grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <h2 className="mb-4 border-b-2 pb-4 text-lg">
            <Skeleton>Sent</Skeleton>
          </h2>
        </div>
        <div>
          <h2 className="mb-4 border-b-2 pb-4 text-lg">
            <Skeleton>Received</Skeleton>
          </h2>
        </div>
      </div>
    </div>
  )
}
