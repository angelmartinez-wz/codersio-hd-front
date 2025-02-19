import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";
import CustomTimePicker from "./timePicker";
import PhoneInput from "./phoneInput";
import { useGetUserByEmail } from "../../hooks/useGetUser";

const getRandomDisabledDate = (start) => {
  const count = 9;
  let dates = new Set();
  dates.add(start.toDateString());

  while (dates.size < count) {
    let randomOffset = Math.floor(Math.random() * 30);
    let randomDate = new Date(start);
    randomDate.setDate(start.getDate() + randomOffset);
    dates.add(randomDate.toDateString());
  }

  return Array.from(dates).map((date) => new Date(date));
};

const CalendarComponent = () => {
  const today = new Date();

  const [disabledDates, setDisabledDate] = useState([]);
  const [startDate, setStartDate] = useState(null);

  useEffect(() => {
    const disabled = getRandomDisabledDate(today);
    setDisabledDate(disabled);

    const getFirstAvailable = () => {
      let date = new Date(today);
      while (
        date < today ||
        disabled.some((d) => d.toDateString() === date.toDateString()) ||
        date.getDay() === 0
      ) {
        date.setDate(date.getDate() + 1);
      }
      return date;
    };
    setStartDate(getFirstAvailable());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isDisabled = (date) => {
    return (
      date < today ||
      disabledDates.some((d) => d.toDateString() === date.toDateString()) ||
      date.getDay() === 0
    );
  };

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

const InformationCard = ({ title, description, image, content }) => {
  return (
    <>
      <h3 className="text-lg font-medium text-gray-800">{title}</h3>
      {description && (
        <p className="text-gray-600 font-normal">{description}</p>
      )}
      {content && content}
      {image && <img src={image} alt={image} className="w-30 h-20" />}
    </>
  );
};

const renderErrors = (errors) => {
  if (!errors) return null;
  return errors.map((error) => (
    <p className="text-gray-600 font-normal">
      <strong>{`${error.code} (${error.severity}):`}</strong>
      {error.fault}
    </p>
  ));
};

const InformationAppointment = () => {
  const { user } = useGetUserByEmail();
  console.log("User:", user);

  return (
    <div className="px-4">
      <InformationCard
        title="Diagnosis"
        description={user?.appointments?.[0]?.diagnosis}
      />
      <div className="pt-4">
        <InformationCard
          title="Error(s)"
          content={renderErrors(user?.appointments?.[0]?.errors)}
        />
      </div>
      <div className="pt-5 grid grid-cols-4 gap-4">
        <div>
          <InformationCard title="Motorcycle" image={user?.motorcycle?.image} />
        </div>
        <div>
          <InformationCard
            title="Model"
            description={user?.motorcycle?.model}
          />
        </div>
        <div>
          <InformationCard title="Owner" description={user?.name} />
        </div>
        <div>
          <InformationCard title="Membership" description={user?.membership} />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 pt-6">
        <div className="grid grid-cols-4 gap-4 pt-6 items-center">
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
            <PhoneInput value={user?.phone} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationAppointment;
