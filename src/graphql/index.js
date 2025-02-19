import { URI, WS_URI } from "../constants";
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
import { getAccessToken } from "../lib/auth";

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      "content-type": "application/json",
    },
  });
  return forward(operation);
});

const httpLink = concat(authLink, createHttpLink({ uri: URI }));

const wsLink = new GraphQLWsLink(
  createWsClient({
    url: WS_URI,
    reconnect: true,
    connectionParams: () => ({
      accessToken: getAccessToken(),
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
