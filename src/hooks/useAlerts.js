import { useState } from "react";
import { useSubscription } from "@apollo/client";
import { alertAddedSubscription } from "../graphql/subscriptions/alerts";

export function useAlerts() {
  const [alerts, setAlerts] = useState([]);

  const { data } = useSubscription(alertAddedSubscription, {
    onData: ({ data }) => {
      console.log("Received data:", data);
      const newAlert = data?.data?.alertAdded;
      console.log("new1", data?.data); // Log entire data
      console.log("new", newAlert); // Log specific new alert

      if (newAlert) {
        setAlerts((prevAlerts) => [...prevAlerts, newAlert]);
      }
    },
    onError: (error) => {
      console.error("Subscription error:", error); // Add error logging
    },
  });

  return {
    alerts,
  };
}
