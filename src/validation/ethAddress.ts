import { string } from 'zod'

import { normalizeETHAddress } from '@/utils/shared/normalizedETHAddress'

export const zodEthereumAddress = string()
  .regex(
    /^0x[a-fA-F0-9]{40}$/,
    'Must be an ethereum address (starts with "0x"). We\'re working to add support for ENS soon!',
  )
  .transform(str => normalizeETHAddress(str))
