import TabComponent from "../tabComponent/tabComponent";

const AppointmentCard = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[37.5rem] rounded overflow-hidden shadow-lg bg-slate-100">
        <div className="flex py-5 px-6 items-center justify-between">
          <h1 className="font-normal text-2xl">Create Maintenance Appointment</h1>
          <button className="hover:bg-gray-200 rounded">
            <svg
              className="fill-current h-6 w-6 text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </button>
        </div>
        <div className="border-b-2 border-gray-300 w-full h-[19rem]">
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
