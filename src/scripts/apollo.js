import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'
import { ApolloProvider } from '@apollo/client/react'

const link = new HttpLink({
  uri: 'http://localhost:1337/graphql',
})

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
})