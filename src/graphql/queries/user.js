import { gql } from "@apollo/client";

export const getUserQuery = gql`
  query {
    user {
      id
      email
      name
      password
      phone
      membership
      motorcycle {
        id
        model
        color
        plate
        registration
      }
      appointments {
        id
        diagnosis
        date
        time
        status
      }
    }
  }
`;

export const getUserByEmailQuery = gql`
  query {
    userByEmail {
      id
      email
      name
      password
      phone
      membership
      motorcycle {
        id
        model
        color
        plate
        registration
      }
      appointments {
        id
        diagnosis
        date
        time
        status
      }
    }
  }
`;
