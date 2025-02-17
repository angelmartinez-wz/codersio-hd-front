import Close from "../../img/close";
import TabComponent from "../tabComponent/tabComponent";

const AppointmentCard = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[48.5rem] rounded overflow-hidden shadow-lg bg-slate-100">
        <div className="flex py-5 px-6 items-center justify-between">
          <h1 className="font-normal text-2xl">Create Maintenance Appointment</h1>
          <button className="hover:bg-gray-200 rounded">
            <Close />
          </button>
        </div>
        <div className="border-b-2 border-gray-300 w-full h-[22rem]">
          <TabComponent />
        </div>

        <div className="flex px-6 py-6 gap-x-2">
          <button className="bg-primary_1 hover:bg-primary_2 text-white font-bold py-2 px-4 rounded-full w-40">
            Next
          </button>
          <button className="bg-transparent hover:bg-slate-200 text-primary_1 font-bold py-2 px-4 rounded-full border-2 border-primary_1 w-40">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
