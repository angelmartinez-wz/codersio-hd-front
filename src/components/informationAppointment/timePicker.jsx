import { useState } from "react";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const CustomTimePicker = () => {
    const [selectedTime, setSelectedTime] = useState(null);

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <TimePicker
          value={selectedTime}
          onChange={(newValue) => setSelectedTime(newValue)}
          ampm
          TextField={{
            variant: "outlined",
          }}
        />
      </LocalizationProvider>
    </div>
  );
}

export default CustomTimePicker;