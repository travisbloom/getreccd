const { withSentryConfig } = require('@sentry/nextjs')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const isDev = process.env.NEXT_PUBLIC_ENVIRONMENT === 'local'

function getSiteImageRemotePattern() {
  switch (process.env.NEXT_PUBLIC_ENVIRONMENT) {
    case 'local':
      return {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
      }
    case 'testing':
      return {
        protocol: 'https',
        hostname: '**.getreccd.com',
        port: '',
      }
    default:
      return {
        protocol: 'https',
        hostname: '**.getreccd.com',
        port: '',
      }
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false,
    remotePatterns: [getSiteImageRemotePattern()],
  },
}

/** @type {import('@sentry/nextjs').SentryWebpackPluginOptions} */
const sentryWebpackPluginOptions = {
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options

  // Suppresses source map uploading logs during build
  silent: true,
  org: 'travis-bloom',
  project: 'getreccd',
}
/** @type {import('@sentry/nextjs/types/config/types').UserSentryOptions} */
const userSentryOptions = {
  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Transpiles SDK to be compatible with IE11 (increases bundle size)
  transpileClientSDK: false,

  // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
  tunnelRoute: '/api/monitoring',

  // Hides source maps from generated client bundles
  hideSourceMaps: true,

  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,

  // Enables automatic instrumentation of Vercel Cron Monitors.
  // See the following for more information:
  // https://docs.sentry.io/product/crons/
  // https://vercel.com/docs/cron-jobs
  automaticVercelMonitors: true,
}
// Injected content via Sentry wizard below
module.exports = withBundleAnalyzer(
  withSentryConfig(nextConfig, sentryWebpackPluginOptions, userSentryOptions),
)
