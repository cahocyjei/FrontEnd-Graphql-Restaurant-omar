import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri:"https://nestgraphql-restaurant-develop.up.railway.app/graphql",
  connectToDevTools: true,
  cache:new InMemoryCache(
    {
      typePolicies: {
        Query: {
          fields: {
            userFindById(_, { args, toReference }) {
              return toReference({
                __typename: 'UserType',
                id: args?.id,
              });
            },
          },
        },
      },
    }
  )
}
)

export default client;