import Alert from "../alert/alert";
import AlertType from "../alert/alert.types";
import { useErrors } from "../../hooks/useErrors";

const Notification = () => {
  const severity = {
    High: AlertType.ERROR,
    Medium: AlertType.WARNING,
    Low: AlertType.INFO,
  };
  const { errors } = useErrors();
  const handleNotificationClick = (item) => {
    console.log("Notification", item);
  };
  return (
    <div className="fixed top-4 right-4 space-y-4 z-50">
      {errors.map((error, index) => (
        <Alert
          key={index}
          type={severity[error.severity]}
          content={`${error.code} - ${error.fault}`}
          onClick={() => handleNotificationClick(error)}
        />
      ))}
    </div>
  );
};

export default Notification;
