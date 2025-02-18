import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";
import CustomTimePicker from "./timePicker";
import PhoneInput from "./phoneInput";

const getRandomDisabledDate = (start)=> {
  const count = 9
  let dates = new Set();
  dates.add(start.toDateString());

  while (dates.size < count) {
    let randomOffset = Math.floor(Math.random() * 30);
    let randomDate = new Date(start);
    randomDate.setDate(start.getDate() + randomOffset);
    dates.add(randomDate.toDateString());
  }
  
  return Array.from(dates).map(date => new Date(date));
}

const CalendarComponent = () => {
  const today = new Date();

  const [disabledDates, setDisabledDate] = useState([]);
  const [startDate, setStartDate] = useState(null)
  
  useEffect(()=> {
    const disabled = getRandomDisabledDate(today)
    setDisabledDate(disabled);
    
    const getFirstAvailable = () => {
      let date =new Date(today);
      while (date < today || disabled.some(d => d.toDateString() === date.toDateString()) || date.getDay() === 0) {
        date.setDate(date.getDate() + 1);
      }
      return date
    } 
    setStartDate(getFirstAvailable());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isDisabled = (date) => {
    return date < today || disabledDates.some(d => d.toDateString() === date.toDateString()) || date.getDay() === 0;
  }

  return (
    <DatePicker
      showIcon
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      filterDates={(date) => !isDisabled(date)}
      excludeDates={disabledDates}
      minDate={today}
    />
  );
};

const InformationCard = ({title, description}) => {
  return (
  <>
    <h3 className="text-lg font-medium text-gray-800">{title}</h3>
    <p className="text-gray-600 font-normal ">
      {description}
    </p>
  </>

  )
}

const InformationAppointment = () => {
  return (
    <div className="px-4">
      <InformationCard title="Diagnosis" description="Supporting line text lorem ipsum dolor sit amet, consectetur." />
      <div className="pt-5 grid grid-cols-3 gap-4">
        <div>
          <InformationCard title="Model" description="Harley Davidson" />
        </div>
        <div>
          <InformationCard title="Owner" description="John Doe" />
        </div>
        <div>
          <InformationCard title="Membership" description="123456-789" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 pt-6">
        <div>
          <InformationCard title="Date" />
          <CalendarComponent />
        </div>
        <div className="w-[10rem]">
          <InformationCard title="Time" />
          <CustomTimePicker />
        </div>
        <div className="text-lg font-medium text-gray-800">
          <InformationCard title="Phone" />
          <PhoneInput />
        </div>
      </div>
    </div>
  );
};

export default InformationAppointment;
