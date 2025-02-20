import { createContext, useEffect, useState } from "react";

export const TabsContext = createContext(null);
export const UserContext = createContext(null);
export const SelectedRadio = createContext(null);
export const DetailsContext = createContext(null);

const Providers = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedDealership, setSelectedDealership] = useState(null);
  const [user, setUser] = useState(null);
  const [details, setDetails] = useState({});

  //const valueRadio = useMemo(() => {selectedDealership, setSelectedDealership}), [selectedDealership];
  useEffect(() => {
    if (user && user.dealership) {
      setSelectedDealership(user.dealership.id);
    }
  }, [user]);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <TabsContext.Provider value={[activeTab, setActiveTab]}>
        <SelectedRadio.Provider
          value={[selectedDealership, setSelectedDealership]}
        >
          <DetailsContext.Provider
            value={[details, setDetails]}
          >
            {children}  
          </DetailsContext.Provider>
        </SelectedRadio.Provider>
      </TabsContext.Provider>
    </UserContext.Provider>
  );
};

export default Providers;
