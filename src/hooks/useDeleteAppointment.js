import { useMutation } from "@apollo/client";
import { deleteAppointmentMutation } from "../graphql/mutations/appointment";

export const useDeleteMutation = () => {
  const [mutate, { loading }] = useMutation(deleteAppointmentMutation);

  const deleteAppointment = async () => {
    const {
      data: { appointment },
    } = await mutate();

    return appointment;
  };

  return { deleteAppointment, loading };
};
