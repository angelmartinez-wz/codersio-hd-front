import { HEADERS, URI } from "../constants";
import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  concat,
  createHttpLink,
  split,
} from "@apollo/client";
import { Kind, OperationTypeNode } from "graphql";
import { createClient as createWsClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext(HEADERS);
  return forward(operation);
});

const httpLink = concat(authLink, createHttpLink({ uri: URI }));

const wsLink = new GraphQLWsLink(
  createWsClient({
    url: "ws://localhost:9000/graphql",
    reconnect: true,
    connectionParams: () => ({
      accessToken: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBY01KcEw3YjQxM1oiLCJlbWFpbCI6ImFuZ2VsQGhkLmNvbSIsImlhdCI6MTczOTgxNTQ0M30.z0HZDhwDf8dq_vvlE5xk6hwONEsaiQf-eKdyyuNmHH0`,
    }),
    on: {
      connected: () => console.log("WebSocket connected"),
      closed: (event) => {
        console.error("WebSocket closed", event);
        console.log("Event details:", event);
      },
      error: (error) => {
        console.error("WebSocket error", error);
        console.log("Error details:", error);
      },
    },
  })
);

const isSubscription = (operation) => {
  const definition = getMainDefinition(operation.query);
  return (
    definition.kind === Kind.OPERATION_DEFINITION &&
    definition.operation === OperationTypeNode.SUBSCRIPTION
  );
};

export const apolloClient = new ApolloClient({
  link: split(isSubscription, wsLink, httpLink),
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
