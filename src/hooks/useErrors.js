import { useState } from "react";
import { useSubscription } from "@apollo/client";
import { errorAddedSubscription } from "../graphql/subscriptions/errors";

export function useErrors() {
  const [errors, setErrors] = useState([]);

  useSubscription(errorAddedSubscription, {
    onData: ({ data }) => {
      const newError = data?.data?.errorAdded;

      if (newError) {
        setErrors((prevErrors) => [...prevErrors, newError]);
      }
    },
    onError: (error) => {
      console.error("Subscription error:", error);
    },
  });

  return {
    errors,
  };
}
