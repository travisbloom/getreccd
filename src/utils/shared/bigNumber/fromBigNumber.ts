import { BigNumber, FixedNumber } from 'ethers'

/**
 * Convert a big number with a custom number of decimals to a stringified fixed-point number.
 */
export function fromBigNumber(x: BigNumber, decimals: number = 18): string {
  if (x === undefined) {
    throw new Error('Input must not be undefined')
  }

  if (decimals < 1 || decimals > 77) {
    throw new Error('Decimals must be between 1 and 77')
  }

  const result: string = FixedNumber.fromValue(x, decimals, `fixed256x${decimals}`).toString()
  return result.replace(/.0$/, '')
}
