import { createPublicClient, http } from 'viem'
import { base, mainnet } from 'viem/chains'

import { THIRD_WEB_CLIENT_SECRET } from '@/utils/server/thirdweb/thirdwebClientSecret'
import { CHAIN_ENVIRONMENT } from '@/utils/shared/sharedEnv'

const headers = { 'x-secret-key': THIRD_WEB_CLIENT_SECRET }

export const ethRPCClient = createPublicClient({
  chain: mainnet,
  transport: http('https://ethereum.rpc.thirdweb.com', {
    batch: {
      wait: 100,
    },
    timeout: 4000,
    fetchOptions: { headers },
  }),
})

export const baseRPCClient =
  CHAIN_ENVIRONMENT === 'production'
    ? createPublicClient({
        chain: base,
        transport: http('https://base.rpc.thirdweb.com', {
          batch: {
            wait: 100,
          },
          timeout: 4000,
          fetchOptions: { headers },
        }),
      })
    : createPublicClient({
        chain: base,
        transport: http('https://84532.rpc.thirdweb.com', {
          batch: {
            wait: 100,
          },
          timeout: 4000,
          fetchOptions: { headers },
        }),
      })
