import { string } from 'zod'

export const zodEthereumAddress = string().regex(
  /^0x[a-fA-F0-9]{40}$/,
  'Must be an ethereum address (starts with "0x") or a valid ENS',
)
