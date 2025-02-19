import { ApolloProvider } from "@apollo/client";
import { useState } from "react";

import { apolloClient } from "./graphql";
import Notification from "./components/notification/notification";
import AppointmentCard from "./components/appointmentCard/appointmentCard";
import NavBar from "./components/navBar/navBar";
import { logout } from "./lib/auth";

const App = () => {
  const [user, setUser] = useState();

  const handleLogout = () => {
    logout();
    setUser(null);
  };

  return (
    <ApolloProvider client={apolloClient}>
      <div className="bg-[url(../public/hd-map.png)] bg-center bg-no-repeat bg-cover h-screen">
        <NavBar user={user} onLogout={handleLogout} onLogin={setUser} />
        {user && (
          <>
            <Notification />
            <AppointmentCard />
          </>
        )}
      </div>
    </ApolloProvider>
  );
};

export default App;
