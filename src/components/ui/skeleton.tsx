import { cn } from '@/utils/web/cn'

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('animate-pulse rounded-md bg-muted ', className)} {...props}>
      <span className="invisible">{props.children}</span>
    </div>
  )
}

export { Skeleton }
