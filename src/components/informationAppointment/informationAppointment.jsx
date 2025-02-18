import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";
import CustomTimePicker from "./timePicker";
import PhoneInput from "./phoneInput";
import CalendarIcon from "../../img/calendar";

const CalendarComponent = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker showIcon selected={startDate} onChange={(date) => setStartDate(date)} icon={CalendarIcon}/>
  );
};

const InformationCard = ({title, description, image }) => {
  return (
  <>
    <h3 className="text-lg font-medium text-gray-800">{title}</h3>
    <p className="text-gray-600 font-normal">
      {description}
    </p>
    { image && <img src={image} alt={image} className="w-30 h-20"/>}
  </>

  )
}

const InformationAppointment = ({ user }) => {
  return (
    <div className="px-4">
      <InformationCard title="Diagnosis" description="Supporting line text lorem ipsum dolor sit amet, consectetur." />
      <div className="pt-5 grid grid-cols-4 gap-4">
        <div>
          <InformationCard title="Motorcycle" image={user?.motorcycle?.image} />
        </div>
        <div>
          <InformationCard title="Model" description={user?.motorcycle?.model} />
        </div>
        <div>
          <InformationCard title="Owner" description={user?.name} />
        </div>
        <div>
          <InformationCard title="Membership" description={user?.membership} />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 pt-6 items-center">
        <div>
          <InformationCard title="Date" />
          <CalendarComponent />
        </div>
        <div className="w-[9rem]">
          <InformationCard title="Time" />
          <CustomTimePicker />
        </div>
        <div className="text-lg font-medium text-gray-800">
          <InformationCard title="Phone" />
          <PhoneInput value={user?.phone} />
        </div>
      </div>
    </div>
  );
};

export default InformationAppointment;
