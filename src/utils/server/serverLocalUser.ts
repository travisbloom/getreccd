import * as Sentry from '@sentry/nextjs'
import { NextApiRequest } from 'next'
import { cookies } from 'next/headers'
import { any, object, record, string } from 'zod'

import {
  CurrentSessionLocalUser,
  LOCAL_USER_CURRENT_SESSION_KEY,
  LOCAL_USER_PERSISTED_KEY,
  PersistedLocalUser,
} from '@/utils/shared/localUser'

export type ServerLocalUser = {
  persisted: PersistedLocalUser
  currentSession: CurrentSessionLocalUser
}

const zodServerLocalUser = object({
  persisted: object({
    initialSearchParams: record(string(), string()),
    initialReferer: string().optional(),
    datetimeFirstSeen: string(),
    experiments: any(),
  }),
  currentSession: object({
    datetimeOnLoad: string(),
    refererOnLoad: string().optional(),
    searchParamsOnLoad: record(string(), string()),
  }),
})

function parseFromCookieStrings({
  persistedStr,
  currentSessionStr,
  source,
}: {
  source: string
  persistedStr: string | undefined
  currentSessionStr: string | undefined
}) {
  if (!currentSessionStr || !persistedStr) {
    return null
  }
  try {
    const persisted = JSON.parse(persistedStr)
    const currentSession = JSON.parse(currentSessionStr)
    try {
      const localUser: ServerLocalUser = zodServerLocalUser.parse({ persisted, currentSession })
      return localUser
    } catch (e) {
      Sentry.captureMessage('serverLocalUser: JSON failed to validate', {
        extra: { persistedStr, currentSessionStr },
        tags: { source },
      })
      return null
    }
  } catch (e) {
    Sentry.captureMessage('serverLocalUser: cookie contained invalid JSON', {
      extra: { persistedStr, currentSessionStr },
      tags: { source },
    })
    return null
  }
}

export function parseLocalUserFromCookies() {
  const cookieObj = cookies()
  const persistedStr = cookieObj.get(LOCAL_USER_PERSISTED_KEY)?.value
  const currentSessionStr = cookieObj.get(LOCAL_USER_CURRENT_SESSION_KEY)?.value
  return parseFromCookieStrings({
    persistedStr,
    currentSessionStr,
    source: 'app-router',
  })
}

export function parseLocalUserFromCookiesForPageRouter(req: NextApiRequest) {
  const persistedStr = req.cookies[LOCAL_USER_PERSISTED_KEY]
  const currentSessionStr = req.cookies[LOCAL_USER_CURRENT_SESSION_KEY]
  return parseFromCookieStrings({
    persistedStr,
    currentSessionStr,
    source: 'page-router',
  })
}
