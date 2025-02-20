/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const parseTime = (timeString) => {
  const cleanedTimeString = timeString
    .trim()
    .replace(/(AM|PM)/i, "")
    .trim();
  let [hours, minutes] = cleanedTimeString.split(":").map(Number);
  const validMinutes = [0, 15, 30, 45];
  minutes = validMinutes.reduce((prev, curr) =>
    Math.abs(curr - minutes) < Math.abs(prev - minutes) ? curr : prev
  );

  const date = new Date();
  date.setHours(hours, minutes, 0, 0);

  return date;
};

const extractTime = (date) => {
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${hours}:${minutes}`;
};

const CustomTimePicker = ({ value, setDetails }) => {
  const [selectedTime, setSelectedTime] = useState(null);
  const [error, setError] = useState(false);
  const [disabledTimes, setDisabledTimes] = useState([]);

  const minTime = new Date();
  minTime.setHours(9, 0, 0, 0);
  const maxTime = new Date();
  maxTime.setHours(17, 46, 0, 0);

  const getAvailableHours = () => {
    return Array.from({ length: 9 }, (_, i) => i + 9);
  };

  const getRandomDisabledHours = () => {
    const availableHours = getAvailableHours();
    const shuffled = availableHours.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3);
  };

  useEffect(() => {
    setDisabledTimes(getRandomDisabledHours());
  }, []);

  useEffect(() => {
    setSelectedTime(parseTime(value));
  }, [value]);

  const generateRandomTime = () => {
    let randomTime;
    do {
      randomTime = new Date(
        minTime.getTime() +
          Math.random() * (maxTime.getTime() - minTime.getTime())
      );
      randomTime.setMinutes(Math.random() < 0.5 ? 0 : 30);
    } while (disabledTimes.includes(randomTime.getHours()));

    return randomTime;
  };

  useState(() => {
    if (!value) {
      setSelectedTime(generateRandomTime());
    }
  }, [disabledTimes]);

  const handleTime = (newValue) => {
    if (
      newValue instanceof Date &&
      newValue >= minTime &&
      newValue <= maxTime
    ) {
      const date = extractTime(newValue);
      setSelectedTime(newValue);
      setDetails((prev) => ({
        ...prev,
        time: date,
      }));
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <TimePicker
          value={selectedTime}
          onChange={handleTime}
          ampm={false}
          minTime={minTime}
          maxTime={maxTime}
          views={["hours", "minutes"]}
          timeSteps={{ hours: 1, minutes: 15 }}
          TextField={{
            variant: "outlined",
          }}
        />
        {error && (
          <p className="text-red-500 text-sm mt-2">Please add a valid hour</p>
        )}
      </LocalizationProvider>
    </div>
  );
};

export default CustomTimePicker;
