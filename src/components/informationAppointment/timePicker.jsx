import { useState } from "react";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const CustomTimePicker = () => {
  const [selectedTime, setSelectedTime] = useState(null);
  const [error, setError] = useState(false);

  const minTime = new Date();
  minTime.setHours(9,0,0);
  const maxTime = new Date();
  maxTime.setHours(17, 30, 0);

  const generateRandomTime= () => {
    const randomHour = new Date(minTime.getTime() + Math.random() * (maxTime.getTime() - minTime.getTime()));
    const randomMinutes = Math.random() < 0.5 ? 0 : 30;
    randomHour.setMinutes(randomMinutes);
    
    return randomHour;
  }

  useState(() => {
    const randomTime = generateRandomTime();
    setSelectedTime(randomTime);
  }, []);

  const handleTime = (newValue) => {
    if(newValue && (newValue >= minTime && newValue <= maxTime)){
      setSelectedTime(newValue);
      setError(false);
    } else {
      setError(true);
    }
  }
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
          TextField={{
            variant: "outlined"
          }}
        />
        {error && (
          <p className="text-red-500 text-sm mt-2">Please add a valid hour</p>
        )}
      </LocalizationProvider>
    </div>
  );
}

export default CustomTimePicker;