import { gql } from "@apollo/client";

export const getDealershipQuery = gql`
  query {
    dealerships {
      id
      name
      direction
      phone
      image
      distance
    }
  }
`;
