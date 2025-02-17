import { createContext } from "react";

export const TabsContext = createContext(null);

const TabsProvider = ({children, activeTab, setActiveTab}) => {
  return (
    <TabsContext.Provider value={[activeTab, setActiveTab]}>
        {children}
    </TabsContext.Provider>
  )
}

export default TabsProvider