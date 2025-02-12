import Alert from "./components/alert/alert";
import AlertType from "./components/alert/alert.types";

const App = () => {
  return (
    <div className="bg-[url(../public/hd-map.png)] bg-center bg-no-repeat bg-cover h-screen">
      <Alert
        type={AlertType.ERROR}
        content="B1900: Air Bag Circuit Short to Battery"
      />
      <Alert
        type={AlertType.INFO}
        content="B1000:Instrument Panel Warning Lamp Circuit"
      />
      <Alert
        type={AlertType.WARNING}
        content="P0115:Engine Coolant Temperature"
      />
      <Alert
        type={AlertType.SUCCESS}
        content="Your next maintenance will be in 15 days!"
      />
    </div>
  );
};

export default App;
