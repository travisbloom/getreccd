import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

import { getLogger } from '@/utils/shared/logger'

const logger = getLogger('/api/internal/manually-revalidate-path')

const zodPayload = z.object({
  paths: z.array(z.string()),
  secret: z.string(),
})

// Note because this secret is widely shared internally, do NOT use it for anything sensitive
const INTERNAL_ENDPOINTS_SECRET = process.env.INTERNAL_ENDPOINTS_SECRET

export async function GET(request: NextRequest) {
  if (!INTERNAL_ENDPOINTS_SECRET) {
    return NextResponse.json({ error: 'INTERNAL_ENDPOINTS_SECRET not set up' }, { status: 401 })
  }
  const params = request.nextUrl.searchParams
  const { secret, paths } = zodPayload.parse({
    secret: params.get('secret'),
    paths: params.getAll('paths'),
  })

  if (INTERNAL_ENDPOINTS_SECRET !== secret) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  logger.info('Received request with updated paths', paths)
  paths.forEach(page => revalidatePath(page))
  return NextResponse.json({ paths })
}
