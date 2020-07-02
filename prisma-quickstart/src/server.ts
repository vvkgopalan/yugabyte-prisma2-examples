import { ApolloServer } from 'apollo-server'
import { schema } from './schema'
import { createContext } from './context'

new ApolloServer({ schema, context: createContext }).listen(
  { port: 4040 },
  () =>
    console.log(
      `🚀 Server ready at: http://localhost:4040\n⭐️ See sample queries: http://pris.ly/e/ts/graphql-apollo-server#using-the-graphql-api`,
    ),
)