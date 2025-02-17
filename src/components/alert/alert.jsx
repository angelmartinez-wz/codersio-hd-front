import { useEffect, useState } from "react";
import AlertType from "./alert.types";
import cn from "classnames";

const alertTypeClassName = {
  [AlertType.INFO]: {
    container: "bg-info",
  },
  [AlertType.SUCCESS]: {
    container: "bg-success",
  },
  [AlertType.WARNING]: {
    container: "bg-warning",
  },
  [AlertType.ERROR]: {
    container: "bg-error",
  },
};

const Alert = ({ type = AlertType.INFO, content, onClick }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <button onClick={onClick} className="flex">
      <div className="flex pt-10 pr-6 justify-end" role="alert">
        <div
          className={cn(
            alertTypeClassName[type].container,
            "flex rounded-xl p-6 w-[24rem] shadow-xl shadow-gray-700/50"
          )}
        >
          <p className="text-stone-50 truncate">{content}</p>
        </div>
      </div>
    </button>
  );
};

export default Alert;
