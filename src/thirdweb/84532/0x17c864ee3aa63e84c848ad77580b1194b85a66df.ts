import {
  type AbiParameterToPrimitiveType,
  type BaseTransactionOptions,
  prepareContractCall,
  prepareEvent,
  readContract,
} from 'thirdweb'

/**
 * Contract events
 */

/**
 * Represents the filters for the "Approval" event.
 */
export type ApprovalEventFilters = Partial<{
  owner: AbiParameterToPrimitiveType<{
    indexed: true
    internalType: 'address'
    name: 'owner'
    type: 'address'
  }>
  approved: AbiParameterToPrimitiveType<{
    indexed: true
    internalType: 'address'
    name: 'approved'
    type: 'address'
  }>
  tokenId: AbiParameterToPrimitiveType<{
    indexed: true
    internalType: 'uint256'
    name: 'tokenId'
    type: 'uint256'
  }>
}>

/**
 * Creates an event object for the Approval event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { approvalEvent } from "TODO";
 *
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  approvalEvent({
 *  owner: ...,
 *  approved: ...,
 *  tokenId: ...,
 * })
 * ],
 * });
 * ```
 */
export function approvalEvent(filters: ApprovalEventFilters = {}) {
  return prepareEvent({
    signature:
      'event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId)',
    filters,
  })
}

/**
 * Represents the filters for the "ApprovalForAll" event.
 */
export type ApprovalForAllEventFilters = Partial<{
  owner: AbiParameterToPrimitiveType<{
    indexed: true
    internalType: 'address'
    name: 'owner'
    type: 'address'
  }>
  operator: AbiParameterToPrimitiveType<{
    indexed: true
    internalType: 'address'
    name: 'operator'
    type: 'address'
  }>
}>

/**
 * Creates an event object for the ApprovalForAll event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { approvalForAllEvent } from "TODO";
 *
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  approvalForAllEvent({
 *  owner: ...,
 *  operator: ...,
 * })
 * ],
 * });
 * ```
 */
export function approvalForAllEvent(filters: ApprovalForAllEventFilters = {}) {
  return prepareEvent({
    signature:
      'event ApprovalForAll(address indexed owner, address indexed operator, bool approved)',
    filters,
  })
}

/**
 * Creates an event object for the Recommended event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { recommendedEvent } from "TODO";
 *
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  recommendedEvent()
 * ],
 * });
 * ```
 */
export function recommendedEvent() {
  return prepareEvent({
    signature:
      'event Recommended(uint256 tokenId, (address senderAddress, address receiverAddress, string senderName, string receiverName, string description) data)',
  })
}

/**
 * Represents the filters for the "Transfer" event.
 */
export type TransferEventFilters = Partial<{
  from: AbiParameterToPrimitiveType<{
    indexed: true
    internalType: 'address'
    name: 'from'
    type: 'address'
  }>
  to: AbiParameterToPrimitiveType<{
    indexed: true
    internalType: 'address'
    name: 'to'
    type: 'address'
  }>
  tokenId: AbiParameterToPrimitiveType<{
    indexed: true
    internalType: 'uint256'
    name: 'tokenId'
    type: 'uint256'
  }>
}>

/**
 * Creates an event object for the Transfer event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { transferEvent } from "TODO";
 *
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  transferEvent({
 *  from: ...,
 *  to: ...,
 *  tokenId: ...,
 * })
 * ],
 * });
 * ```
 */
export function transferEvent(filters: TransferEventFilters = {}) {
  return prepareEvent({
    signature: 'event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)',
    filters,
  })
}

/**
 * Contract read functions
 */

/**
 * Represents the parameters for the "balanceOf" function.
 */
export type BalanceOfParams = {
  owner: AbiParameterToPrimitiveType<{ internalType: 'address'; name: 'owner'; type: 'address' }>
}

/**
 * Calls the "balanceOf" function on the contract.
 * @param options - The options for the balanceOf function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { balanceOf } from "TODO";
 *
 * const result = await balanceOf({
 *  owner: ...,
 * });
 *
 * ```
 */
export async function balanceOf(options: BaseTransactionOptions<BalanceOfParams>) {
  return readContract({
    contract: options.contract,
    method: [
      '0x70a08231',
      [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
    ],
    params: [options.owner],
  })
}

/**
 * Represents the parameters for the "getApproved" function.
 */
export type GetApprovedParams = {
  tokenId: AbiParameterToPrimitiveType<{
    internalType: 'uint256'
    name: 'tokenId'
    type: 'uint256'
  }>
}

/**
 * Calls the "getApproved" function on the contract.
 * @param options - The options for the getApproved function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getApproved } from "TODO";
 *
 * const result = await getApproved({
 *  tokenId: ...,
 * });
 *
 * ```
 */
export async function getApproved(options: BaseTransactionOptions<GetApprovedParams>) {
  return readContract({
    contract: options.contract,
    method: [
      '0x081812fc',
      [
        {
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256',
        },
      ],
      [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
    ],
    params: [options.tokenId],
  })
}

/**
 * Represents the parameters for the "getNFTImage" function.
 */
export type GetNFTImageParams = {
  tokenId: AbiParameterToPrimitiveType<{
    internalType: 'uint256'
    name: 'tokenId'
    type: 'uint256'
  }>
}

/**
 * Calls the "getNFTImage" function on the contract.
 * @param options - The options for the getNFTImage function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getNFTImage } from "TODO";
 *
 * const result = await getNFTImage({
 *  tokenId: ...,
 * });
 *
 * ```
 */
export async function getNFTImage(options: BaseTransactionOptions<GetNFTImageParams>) {
  return readContract({
    contract: options.contract,
    method: [
      '0xbfe39698',
      [
        {
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256',
        },
      ],
      [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
    ],
    params: [options.tokenId],
  })
}

/**
 * Represents the parameters for the "getRecommendationData" function.
 */
export type GetRecommendationDataParams = {
  tokenId: AbiParameterToPrimitiveType<{
    internalType: 'uint256'
    name: 'tokenId'
    type: 'uint256'
  }>
}

/**
 * Calls the "getRecommendationData" function on the contract.
 * @param options - The options for the getRecommendationData function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getRecommendationData } from "TODO";
 *
 * const result = await getRecommendationData({
 *  tokenId: ...,
 * });
 *
 * ```
 */
export async function getRecommendationData(
  options: BaseTransactionOptions<GetRecommendationDataParams>,
) {
  return readContract({
    contract: options.contract,
    method: [
      '0x2405d008',
      [
        {
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256',
        },
      ],
      [
        {
          components: [
            {
              internalType: 'address',
              name: 'senderAddress',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'receiverAddress',
              type: 'address',
            },
            {
              internalType: 'string',
              name: 'senderName',
              type: 'string',
            },
            {
              internalType: 'string',
              name: 'receiverName',
              type: 'string',
            },
            {
              internalType: 'string',
              name: 'description',
              type: 'string',
            },
          ],
          internalType: 'struct Recommendation.NFTData',
          name: '',
          type: 'tuple',
        },
      ],
    ],
    params: [options.tokenId],
  })
}

/**
 * Represents the parameters for the "isApprovedForAll" function.
 */
export type IsApprovedForAllParams = {
  owner: AbiParameterToPrimitiveType<{ internalType: 'address'; name: 'owner'; type: 'address' }>
  operator: AbiParameterToPrimitiveType<{
    internalType: 'address'
    name: 'operator'
    type: 'address'
  }>
}

/**
 * Calls the "isApprovedForAll" function on the contract.
 * @param options - The options for the isApprovedForAll function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { isApprovedForAll } from "TODO";
 *
 * const result = await isApprovedForAll({
 *  owner: ...,
 *  operator: ...,
 * });
 *
 * ```
 */
export async function isApprovedForAll(options: BaseTransactionOptions<IsApprovedForAllParams>) {
  return readContract({
    contract: options.contract,
    method: [
      '0xe985e9c5',
      [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'operator',
          type: 'address',
        },
      ],
      [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
    ],
    params: [options.owner, options.operator],
  })
}

/**
 * Calls the "name" function on the contract.
 * @param options - The options for the name function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { name } from "TODO";
 *
 * const result = await name();
 *
 * ```
 */
export async function name(options: BaseTransactionOptions) {
  return readContract({
    contract: options.contract,
    method: [
      '0x06fdde03',
      [],
      [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
    ],
    params: [],
  })
}

/**
 * Represents the parameters for the "nftData" function.
 */
export type NftDataParams = {
  arg_0: AbiParameterToPrimitiveType<{ internalType: 'uint256'; name: ''; type: 'uint256' }>
}

/**
 * Calls the "nftData" function on the contract.
 * @param options - The options for the nftData function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { nftData } from "TODO";
 *
 * const result = await nftData({
 *  arg_0: ...,
 * });
 *
 * ```
 */
export async function nftData(options: BaseTransactionOptions<NftDataParams>) {
  return readContract({
    contract: options.contract,
    method: [
      '0x8c210975',
      [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      [
        {
          internalType: 'address',
          name: 'senderAddress',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'receiverAddress',
          type: 'address',
        },
        {
          internalType: 'string',
          name: 'senderName',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'receiverName',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'description',
          type: 'string',
        },
      ],
    ],
    params: [options.arg_0],
  })
}

/**
 * Represents the parameters for the "ownerOf" function.
 */
export type OwnerOfParams = {
  tokenId: AbiParameterToPrimitiveType<{
    internalType: 'uint256'
    name: 'tokenId'
    type: 'uint256'
  }>
}

/**
 * Calls the "ownerOf" function on the contract.
 * @param options - The options for the ownerOf function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { ownerOf } from "TODO";
 *
 * const result = await ownerOf({
 *  tokenId: ...,
 * });
 *
 * ```
 */
export async function ownerOf(options: BaseTransactionOptions<OwnerOfParams>) {
  return readContract({
    contract: options.contract,
    method: [
      '0x6352211e',
      [
        {
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256',
        },
      ],
      [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
    ],
    params: [options.tokenId],
  })
}

/**
 * Represents the parameters for the "supportsInterface" function.
 */
export type SupportsInterfaceParams = {
  interfaceId: AbiParameterToPrimitiveType<{
    internalType: 'bytes4'
    name: 'interfaceId'
    type: 'bytes4'
  }>
}

/**
 * Calls the "supportsInterface" function on the contract.
 * @param options - The options for the supportsInterface function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { supportsInterface } from "TODO";
 *
 * const result = await supportsInterface({
 *  interfaceId: ...,
 * });
 *
 * ```
 */
export async function supportsInterface(options: BaseTransactionOptions<SupportsInterfaceParams>) {
  return readContract({
    contract: options.contract,
    method: [
      '0x01ffc9a7',
      [
        {
          internalType: 'bytes4',
          name: 'interfaceId',
          type: 'bytes4',
        },
      ],
      [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
    ],
    params: [options.interfaceId],
  })
}

/**
 * Calls the "symbol" function on the contract.
 * @param options - The options for the symbol function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { symbol } from "TODO";
 *
 * const result = await symbol();
 *
 * ```
 */
export async function symbol(options: BaseTransactionOptions) {
  return readContract({
    contract: options.contract,
    method: [
      '0x95d89b41',
      [],
      [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
    ],
    params: [],
  })
}

/**
 * Represents the parameters for the "tokenURI" function.
 */
export type TokenURIParams = {
  tokenId: AbiParameterToPrimitiveType<{
    internalType: 'uint256'
    name: 'tokenId'
    type: 'uint256'
  }>
}

/**
 * Calls the "tokenURI" function on the contract.
 * @param options - The options for the tokenURI function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { tokenURI } from "TODO";
 *
 * const result = await tokenURI({
 *  tokenId: ...,
 * });
 *
 * ```
 */
export async function tokenURI(options: BaseTransactionOptions<TokenURIParams>) {
  return readContract({
    contract: options.contract,
    method: [
      '0xc87b56dd',
      [
        {
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256',
        },
      ],
      [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
    ],
    params: [options.tokenId],
  })
}

/**
 * Contract write functions
 */

/**
 * Represents the parameters for the "approve" function.
 */
export type ApproveParams = {
  to: AbiParameterToPrimitiveType<{ internalType: 'address'; name: 'to'; type: 'address' }>
  tokenId: AbiParameterToPrimitiveType<{
    internalType: 'uint256'
    name: 'tokenId'
    type: 'uint256'
  }>
}

/**
 * Calls the "approve" function on the contract.
 * @param options - The options for the "approve" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { approve } from "TODO";
 *
 * const transaction = approve({
 *  to: ...,
 *  tokenId: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function approve(options: BaseTransactionOptions<ApproveParams>) {
  return prepareContractCall({
    contract: options.contract,
    method: [
      '0x095ea7b3',
      [
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256',
        },
      ],
      [],
    ],
    params: [options.to, options.tokenId],
  })
}

/**
 * Represents the parameters for the "mintAndSend" function.
 */
export type MintAndSendParams = {
  receiverAddress: AbiParameterToPrimitiveType<{
    internalType: 'address'
    name: 'receiverAddress'
    type: 'address'
  }>
  senderName: AbiParameterToPrimitiveType<{
    internalType: 'string'
    name: 'senderName'
    type: 'string'
  }>
  receiverName: AbiParameterToPrimitiveType<{
    internalType: 'string'
    name: 'receiverName'
    type: 'string'
  }>
  description: AbiParameterToPrimitiveType<{
    internalType: 'string'
    name: 'description'
    type: 'string'
  }>
}

/**
 * Calls the "mintAndSend" function on the contract.
 * @param options - The options for the "mintAndSend" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { mintAndSend } from "TODO";
 *
 * const transaction = mintAndSend({
 *  receiverAddress: ...,
 *  senderName: ...,
 *  receiverName: ...,
 *  description: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function mintAndSend(options: BaseTransactionOptions<MintAndSendParams>) {
  return prepareContractCall({
    contract: options.contract,
    method: [
      '0x7beb8347',
      [
        {
          internalType: 'address',
          name: 'receiverAddress',
          type: 'address',
        },
        {
          internalType: 'string',
          name: 'senderName',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'receiverName',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'description',
          type: 'string',
        },
      ],
      [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
    ],
    params: [
      options.receiverAddress,
      options.senderName,
      options.receiverName,
      options.description,
    ],
  })
}

/**
 * Represents the parameters for the "safeTransferFrom" function.
 */
export type SafeTransferFromParams = {
  from: AbiParameterToPrimitiveType<{ internalType: 'address'; name: 'from'; type: 'address' }>
  to: AbiParameterToPrimitiveType<{ internalType: 'address'; name: 'to'; type: 'address' }>
  tokenId: AbiParameterToPrimitiveType<{
    internalType: 'uint256'
    name: 'tokenId'
    type: 'uint256'
  }>
}

/**
 * Calls the "safeTransferFrom" function on the contract.
 * @param options - The options for the "safeTransferFrom" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { safeTransferFrom } from "TODO";
 *
 * const transaction = safeTransferFrom({
 *  from: ...,
 *  to: ...,
 *  tokenId: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function safeTransferFrom(options: BaseTransactionOptions<SafeTransferFromParams>) {
  return prepareContractCall({
    contract: options.contract,
    method: [
      '0x42842e0e',
      [
        {
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256',
        },
      ],
      [],
    ],
    params: [options.from, options.to, options.tokenId],
  })
}

/**
 * Represents the parameters for the "setApprovalForAll" function.
 */
export type SetApprovalForAllParams = {
  operator: AbiParameterToPrimitiveType<{
    internalType: 'address'
    name: 'operator'
    type: 'address'
  }>
  approved: AbiParameterToPrimitiveType<{ internalType: 'bool'; name: 'approved'; type: 'bool' }>
}

/**
 * Calls the "setApprovalForAll" function on the contract.
 * @param options - The options for the "setApprovalForAll" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { setApprovalForAll } from "TODO";
 *
 * const transaction = setApprovalForAll({
 *  operator: ...,
 *  approved: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function setApprovalForAll(options: BaseTransactionOptions<SetApprovalForAllParams>) {
  return prepareContractCall({
    contract: options.contract,
    method: [
      '0xa22cb465',
      [
        {
          internalType: 'address',
          name: 'operator',
          type: 'address',
        },
        {
          internalType: 'bool',
          name: 'approved',
          type: 'bool',
        },
      ],
      [],
    ],
    params: [options.operator, options.approved],
  })
}

/**
 * Represents the parameters for the "transferFrom" function.
 */
export type TransferFromParams = {
  from: AbiParameterToPrimitiveType<{ internalType: 'address'; name: 'from'; type: 'address' }>
  to: AbiParameterToPrimitiveType<{ internalType: 'address'; name: 'to'; type: 'address' }>
  tokenId: AbiParameterToPrimitiveType<{
    internalType: 'uint256'
    name: 'tokenId'
    type: 'uint256'
  }>
}

/**
 * Calls the "transferFrom" function on the contract.
 * @param options - The options for the "transferFrom" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { transferFrom } from "TODO";
 *
 * const transaction = transferFrom({
 *  from: ...,
 *  to: ...,
 *  tokenId: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function transferFrom(options: BaseTransactionOptions<TransferFromParams>) {
  return prepareContractCall({
    contract: options.contract,
    method: [
      '0x23b872dd',
      [
        {
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256',
        },
      ],
      [],
    ],
    params: [options.from, options.to, options.tokenId],
  })
}
