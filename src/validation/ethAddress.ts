import { string } from 'zod'

import { normalizeETHAddress } from '@/utils/shared/normalizedETHAddress'

export const zodEthereumAddress = string()
  .regex(/^0x[a-fA-F0-9]{40}$/, 'Must be an ethereum address (starts with "0x")')
  .transform(str => normalizeETHAddress(str))

export const ZOD_ETH_ADDRESS_OR_ENS_ERROR_MESSAGE =
  'Must be an ethereum address (starts with "0x") or a valid ENS name'

export const zodEthereumAddressOrENS = string()
  .regex(/^0x[a-fA-F0-9]{40}$/, ZOD_ETH_ADDRESS_OR_ENS_ERROR_MESSAGE)
  .transform(str => normalizeETHAddress(str))
  .or(string().regex(/.*\./, ZOD_ETH_ADDRESS_OR_ENS_ERROR_MESSAGE))
