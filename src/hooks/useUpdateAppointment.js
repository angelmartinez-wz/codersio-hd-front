import { useMutation } from "@apollo/client";
import { updateAppointmentMutation } from "../graphql/mutations/appointment";

export const useUpdateMutation = () => {
  const [mutate, { loading }] = useMutation(updateAppointmentMutation);

  const updateAppointment = async ({ date, time, phone }) => {
    const {
      data: { appointment },
    } = await mutate({
      variables: { input: { date, time, phone } },
    });

    return appointment;
  };

  return { updateAppointment, loading };
};
