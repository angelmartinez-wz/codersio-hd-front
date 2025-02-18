import Alert from "../alert/alert";
import AlertType from "../alert/alert.types";
import { useAlerts } from "../../hooks/useAlerts";

const Notification = () => {
  const severity = {
    High: AlertType.ERROR,
    Medium: AlertType.WARNING,
    Low: AlertType.INFO,
  };
  const { alerts } = useAlerts();
  const handleNotificationClick = (item) => {
    console.log('Notification', item);
  }
  return (
    <div className="fixed top-4 right-4 space-y-4 z-50">
      {alerts.map((alert, index) => (
        <Alert
          key={index}
          type={severity[alert.severity]}
          content={`${alert.alertCode} - ${alert.alertFault}`}
          onClick={() => handleNotificationClick(alert)}
        />
      ))}
    </div>
  );
};

export default Notification;