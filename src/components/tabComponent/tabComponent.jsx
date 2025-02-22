import { useContext } from "react";
import DealershipCard from "../dealershipCard/dealershipCard";
import InformationAppointment from "../informationAppointment/informationAppointment";
import { TabsContext, UserContext } from "../../contexts/contexts";
import cn from "classnames";

const TabComponent = ({ errors, hasErrors }) => {
  const [user] = useContext(UserContext);
  const [activeTab, setActiveTab] = useContext(TabsContext);

  const tabs = [
    {
      id: 0,
      label: "Dealership",
      content: <DealershipCard />,
    },  
    {
      id: 1,
      label: "Information",
      content: <InformationAppointment user={user} errors={errors} hasErrors={hasErrors} />,
    },
  ];

  return (
    <div className="">
      <div className="flex border-b border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => !tab.disabled && setActiveTab(tab.id)}
            className={cn(
              "flex-1 py-2 text-center font-medium transition-all",
              `${
                activeTab === tab.id
                  ? "border-b-2 border-primary_1 text-primary_1"
                  : "text-gray-800 hover:text-primary_2"
              }`
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-4 min-h-[20rem] max-h-[35rem] overflow-y-auto">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default TabComponent;
