import { gql } from "@apollo/client";

export const errorAddedSubscription = gql`
  subscription {
    errorAdded {
      code
      fault
      severity
    }
  }
`;
