import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema:
    'https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clfqnkorq071j01up7p7z5xgw/master',
  documents: ['app/**/*.graphql'],
  generates: {
    './app/generated/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request',
      ],
      config: {
        pureMagicComment: true,
        skipTypename: true,
      },
    },
  },
}
export default config
