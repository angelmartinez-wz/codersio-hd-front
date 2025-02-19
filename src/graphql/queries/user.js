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
        errors {
          id
          code
          fault
          severity
        }
      }
      dealership {
        id
        name
        direction
        phone
        image
        distance
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
        image
      }
      appointments {
        id
        diagnosis
        date
        time
        status
        errors {
          id
          code
          fault
          severity
        }
      }
      dealership {
        id
        name
        direction
        phone
        image
        distance
      }
    }
  }
`;
