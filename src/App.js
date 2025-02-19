import { useState } from "react";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./graphql";
import TabsProvider from "./contexts/tabContext";
import Home from "./pages/home";
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
        {user ? (
          <Home />
        ) : (
          <div className="bg-[url(../public/harley-logo.png)] bg-center bg-no-repeat bg-contain h-[500px] mt-20" />
        )}
      </TabsProvider>
    </ApolloProvider>
  );
};

export default App;
