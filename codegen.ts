import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  generates: {
    'subgraphs/recommendation-testing/introspection.json': {
      plugins: ['introspection'],
      config: {
        minify: true,
      },
      schema: 'subgraphs/recommendation-testing/schema.graphql',
    },
    'src/types/subgraphs/generated.ts': {
      documents: 'src/data/**/*.ts',
      plugins: ['typescript', 'typescript-operations', 'typescript-resolvers'],
      config: {
        scalars: {
          DateTime: 'string',
          BigInt: 'number',
          Bytes: 'unknown',
          Decimal: 'number',
          Json: 'unknown',
        },
        maybeValue: 'T | null | undefined',
        avoidOptionals: true,
        namingConvention: {
          enumValues: 'change-case-all#upperCase',
        },
      },
      schema: 'subgraphs/recommendation-testing/schema.graphql',
    },
  },
}

export default config
