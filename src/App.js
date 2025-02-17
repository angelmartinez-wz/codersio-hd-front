import { ApolloProvider } from "@apollo/client";

import Notification from "./components/notification/notification";
import AppointmentCard from "./components/appointmentCard/appointmentCard";
import { apolloClient } from "./graphql";

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <div className="bg-[url(../public/hd-map.png)] bg-center bg-no-repeat bg-cover h-screen">
        <Notification />
        <AppointmentCard />
      </div>
    </ApolloProvider>
  );
};

export default App;
