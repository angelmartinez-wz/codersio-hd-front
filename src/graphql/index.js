import { HEADERS, URI } from "../constants";
import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  concat,
  createHttpLink,
} from "@apollo/client";

const httpLink = createHttpLink({ uri: URI });

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext(HEADERS);
  return forward(operation);
});

export const apolloClient = new ApolloClient({
  link: concat(authLink, httpLink),
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: "network-only",
    },
    watchQuery: {
      fetchPolicy: "network-only",
    },
  },
});
