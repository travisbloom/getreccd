import Cookies from 'js-cookie'

import { isBrowser } from '@/utils/shared/executionEnvironment'
import {
  CurrentSessionLocalUser,
  LOCAL_USER_CURRENT_SESSION_KEY,
  LOCAL_USER_PERSISTED_KEY,
  LocalUser,
  PersistedLocalUser,
} from '@/utils/shared/localUser'
import { getLogger } from '@/utils/shared/logger'

const getPersistedLocalUser = () => {
  const val = Cookies.get(LOCAL_USER_PERSISTED_KEY)
  if (val) {
    return JSON.parse(val) as PersistedLocalUser
  }
  return null
}

const getDefaultCurrentSessionLocalUser = (): CurrentSessionLocalUser => ({
  datetimeOnLoad: new Date().toISOString(),
  refererOnLoad: window.document.referrer || undefined,
  searchParamsOnLoad: Object.fromEntries(new URLSearchParams(window.location.search)),
})

const getDefaultPersistedLocalUser = (): PersistedLocalUser => ({
  initialReferer: window.document.referrer || undefined,
  datetimeFirstSeen: new Date().toISOString(),
  initialSearchParams: Object.fromEntries(new URLSearchParams(window.location.search)),
})

let localUser: LocalUser | null = null

// util to signify you want to set up the local user but don't need the value
export const bootstrapLocalUser = () => {
  getLocalUser()
}

const logger = getLogger('getLocalUser')

export const getLocalUser = (): LocalUser => {
  if (!isBrowser) {
    return {
      currentSession: {
        refererOnLoad: undefined,
        datetimeOnLoad: new Date().toISOString(),
        searchParamsOnLoad: {},
      },
      persisted: undefined,
    }
  }
  if (localUser) {
    return localUser
  }
  const currentSession: CurrentSessionLocalUser = getDefaultCurrentSessionLocalUser()
  Cookies.set(LOCAL_USER_CURRENT_SESSION_KEY, JSON.stringify(currentSession), {
    expires: 1,
  })
  const persisted = getPersistedLocalUser()
  if (persisted) {
    return { currentSession, persisted }
  }
  logger.info('no data, setting new persisted data')
  const newPersisted = getDefaultPersistedLocalUser()
  Cookies.set(LOCAL_USER_PERSISTED_KEY, JSON.stringify(newPersisted), {
    expires: 365,
  })
  localUser = { currentSession, persisted: newPersisted }
  return localUser
}

export function setLocalUserPersistedValues(values: Partial<PersistedLocalUser>) {
  const newPersisted = { ...getLocalUser().persisted, ...values }
  Cookies.set(LOCAL_USER_PERSISTED_KEY, JSON.stringify(newPersisted), {
    expires: 365,
  })
}
