import { useState } from "react";
import { useSubscription } from "@apollo/client";
import { alertAddedSubscription } from "../graphql/subscriptions/alerts";

export function useAlerts() {
  const [alerts, setAlerts] = useState([]);

  useSubscription(alertAddedSubscription, {
    onData: ({ data }) => {
      const newAlert = data?.data?.alertAdded;

      if (newAlert) {
        setAlerts((prevAlerts) => [...prevAlerts, newAlert]);
      }
    },
    onError: (error) => {
      console.error("Subscription error:", error);
    },
  });

  return {
    alerts,
  };
}
