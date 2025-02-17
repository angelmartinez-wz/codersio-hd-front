import { ApolloProvider } from "@apollo/client";
import Alert from "./components/alert/alert";
import AlertType from "./components/alert/alert.types";
import AppointmentCard from "./components/appointmentCard/appointmentCard";
import { apolloClient } from "./graphql";
import { useAlerts } from "./hooks/useAlerts";

const MyComponent = () => {
  const alertsToShow = [];
  const severity = {
    High: AlertType.ERROR,
    Medium: AlertType.WARNING,
    Low: AlertType.INFO,
  };
  const { alerts } = useAlerts();
  console.log("LALAL", alerts);
  alerts.map((alert, index) => {
    console.log("alert", alert);
    return alertsToShow.push(
      <Alert
        key={index}
        type={severity[alert.severity]}
        content={`${alert.alertCode} - ${alert.alertFault}`}
      />
    );
  });

  return <>{alertsToShow}</>;
};

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <div className="bg-[url(../public/hd-map.png)] bg-center bg-no-repeat bg-cover h-screen">
        {/* <Alert
        type={AlertType.ERROR}
        content="B1900: Air Bag Circuit Short to Battery"
      />
      <Alert
        type={AlertType.INFO}
        content="B1000:Instrument Panel Warning Lamp Circuit"
      />
      <Alert
        type={AlertType.WARNING}
        content="P0115:Engine Coolant Temperature"
      /> */}
        <MyComponent />
        <AppointmentCard />
      </div>
    </ApolloProvider>
  );
};

export default App;
