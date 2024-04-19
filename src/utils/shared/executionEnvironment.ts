export const isBrowser = typeof window !== 'undefined'

export const isJest = typeof jest !== 'undefined'

export const IS_DEVELOPING_OFFLINE = process.env.IS_DEVELOPING_OFFLINE
