import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

import { OPEN_GRAPH_IMAGE_DIMENSIONS } from '@/utils/server/generateOpenGraphImageUrl'

export const dynamic = 'error'
export const revalidate = 60 * 60 * 24

export async function GET(
  _request: NextRequest,
  { params: _params }: { params: { tokenId: string } },
) {
  return new ImageResponse(
    (
      <div tw="flex text-black p-8 w-full h-full flex-col justify-between items-center">
        Hello World
      </div>
    ),
    OPEN_GRAPH_IMAGE_DIMENSIONS,
  )
}
