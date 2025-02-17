import { useState } from "react";
import { ApolloProvider } from "@apollo/client";

import { apolloClient } from "./graphql";
import TabsProvider from "./contexts/tabContext";
import Home from "./pages/home";

const App = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <ApolloProvider client={apolloClient}>
      <TabsProvider activeTab={activeTab} setActiveTab={setActiveTab}>
        <Home />
      </TabsProvider>
    </ApolloProvider>
  );
};

export default App;
