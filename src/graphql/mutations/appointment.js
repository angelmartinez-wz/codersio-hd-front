import { gql } from "@apollo/client";

export const updateAppointmentMutation = gql`
  mutation updateAppointment($input: UpdateAppointmentInput!) {
    appointment: updateAppointment(input: $input) {
      id
    }
  }
`;

export const deleteAppointmentMutation = gql`
  mutation deleteAppointment {
    appointment: deleteAppointment {
      id
    }
  }
`;
