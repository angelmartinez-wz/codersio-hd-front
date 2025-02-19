/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const CustomTimePicker = () => {
  const [selectedTime, setSelectedTime] = useState(null);
  const [error, setError] = useState(false);
  const [disabledTimes, setDisabledTimes] = useState([]);

  const minTime = new Date();
  minTime.setHours(9, 0, 0);
  const maxTime = new Date();
  maxTime.setHours(17, 31, 0);

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
    setSelectedTime(generateRandomTime());
  }, [disabledTimes]);

  const handleTime = (newValue) => {
    if (newValue && newValue >= minTime && newValue <= maxTime) {
      setSelectedTime(newValue);
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
          ampm
          minutesStep={30}
          minTime={minTime}
          maxTime={maxTime}
          views={["hours", "minutes"]}
          timeSteps={{ hours: 1, minutes: 30 }}
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
