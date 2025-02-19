import { useState } from "react";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./graphql";
import TabsProvider from "./contexts/tabContext";
import Home from "./pages/home";
import Notification from "./components/notification/notification";
import AppointmentCard from "./components/appointmentCard/appointmentCard";
import NavBar from "./components/navBar/navBar";
import { logout } from "./lib/auth";

const App = () => {
  const [activeTab, setActiveTab] = useState(0);

  const [user, setUser] = useState();

  const handleLogout = () => {
    logout();
    setUser(null);
  };

  return (
    <ApolloProvider client={apolloClient}>
      <TabsProvider activeTab={activeTab} setActiveTab={setActiveTab}>
        <NavBar user={user} onLogout={handleLogout} onLogin={setUser} />
        {user && <Home />}
      </TabsProvider>

      {/* return (
    <ApolloProvider client={apolloClient}>
      <div className="bg-[url(../public/hd-map.png)] bg-center bg-no-repeat bg-cover h-screen">
        <NavBar user={user} onLogout={handleLogout} onLogin={setUser} />
        {user && (
          <>
            <Notification />
            <AppointmentCard />
          </>
        )}
      </div> */}
    </ApolloProvider>
  );
};

export default App;
