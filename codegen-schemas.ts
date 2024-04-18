import 'dotenv/config'

import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  generates: {
    'subgraphs/recommendation-testing/schema.graphql': {
      plugins: ['schema-ast'],
      schema: {
        ['https://api.goldsky.com/api/public/project_clv5n6dbek7v101zj51lr5n21/subgraphs/getreccd-testing-base-sepolia/2/gn']:
          {},
      },
    },
  },
}

export default config
