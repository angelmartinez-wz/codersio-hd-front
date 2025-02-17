import { gql } from "@apollo/client";

export const alertAddedSubscription = gql`
  subscription {
    alertAdded {
      alertCode
      alertDescription
      alertFault
      severity
    }
  }
`;
