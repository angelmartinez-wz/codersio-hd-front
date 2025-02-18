import { useState } from "react";

const PhoneInput = ({ value }) => {
  const [phone, setPhone] = useState(value || "");
  const [error, setError] = useState(false);

  const formatPhoneNumber = (input) => {
  let cleaned = input.replace(/\D/g, "");

   if (cleaned.length > 10) cleaned = cleaned.substring(0, 10);

    let formatted = cleaned;
    if (cleaned.length > 6) {
      formatted = `(${cleaned.substring(0, 3)}) ${cleaned.substring(3, 6)}-${cleaned.substring(6, 10)}`;
    } else if (cleaned.length > 3) {
      formatted = `(${cleaned.substring(0, 3)}) ${cleaned.substring(3)}`;
    } else if (cleaned.length > 0) {
      formatted = `(${cleaned}`;
    }

    return formatted;
  };

  const validatePhoneNumber = (input) => {
    const cleaned = String(input).replace(/\D/g, "");
    return cleaned.length === 10;
  }
  const handleChange = (e) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);

    if(validatePhoneNumber(formatted)){
      setError("")
    } else{
      setError("Please add a correct number");
    }
  };

  return (
    <div className="w-full max-w-sm">
      <input
        type="text"
        value={phone}
        onChange={handleChange}
        placeholder="(123) 456-7890"
        className="w-full bg-transparent focus:ring-2 focus:ring-primary_1 focus:border-primary_1 outline-none"
      />
      {error && (
        <p className="text-red-500 text-sm mt-2">{error}</p>
      )}
    </div>
  );
}

export default PhoneInput;
