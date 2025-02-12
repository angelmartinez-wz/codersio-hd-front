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
const Alert = ({ type = AlertType.INFO, content }) => {
  return (
    <div className="flex pt-10 pr-6 justify-end">
      <div
        className={cn(
          alertTypeClassName[type].container,
          "flex rounded-xl p-6 w-[24rem] border-b-8 border-b-trueGray-700/70"
        )}
      >
        <p className="text-stone-50 truncate">{content}</p>
      </div>
    </div>
  );
};

export default Alert;
