import { GraphQLClient } from 'graphql-request'

import { getSdk } from '~/generated/graphql'

export const GRAPHQL_ENDPOINT =
  'https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clfqnkorq071j01up7p7z5xgw/master'

const client = new GraphQLClient(GRAPHQL_ENDPOINT, {
  headers: {
    'Content-Type': 'application/json',
  },
})

export const sdk = getSdk(client)
