import { useState } from "react";
import DealershipCard from "../dealershipCard/dealershipCard";
import InformationAppointment from "../informationAppointment/informationAppointment";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      label: "Dealership",
      content: (
        <DealershipCard />
      ),
    },
    {
      id: 1,
      label: "Information",
      content: (
        <InformationAppointment />
      ),
    },
  ];

  return (
    <div className="">
      <div className="flex border-b border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-2 text-center font-medium transition-all 
              ${
                activeTab === tab.id
                  ? "border-b-2 border-primary_1 text-primary_1"
                  : "text-gray-800 hover:text-primary_2"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-4 max-h-[16rem] overflow-y-auto">{tabs[activeTab].content}</div>
    </div>
  );
};

export default TabComponent;
