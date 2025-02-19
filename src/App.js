import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./graphql";
import Providers from "./contexts/contexts";
import Home from "./pages/home";
import NavBar from "./components/navBar/navBar";

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <Providers>
        <NavBar />
        <Home />
      </Providers>
    </ApolloProvider>
  );
};

export default App;
