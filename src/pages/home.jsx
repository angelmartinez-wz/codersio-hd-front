import { useState } from "react";
import Alert from "../components/alert/alert";
import AlertType from "../components/alert/alert.types";
import AppointmentCard from "../components/appointmentCard/appointmentCard";
import CalendarIcon from "../img/calendar";



const Home = () => {
  const [showAppointment, setShowAppointment] = useState(false);
  

  const handleClose = () => {
    setShowAppointment(false);
  }
  return (
    <div className="bg-[url(../public/hd-map.png)] bg-center bg-no-repeat bg-cover h-screen">
    {/* <Alert
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
    /> */}
    <Alert
      type={AlertType.SUCCESS}
      content="Your next maintenance will be in 15 days!"
    />

    {showAppointment && (
      <AppointmentCard handleClose={handleClose}/>
    )}

    <button onClick={() => setShowAppointment(true)} className="fixed bottom-4 right-4 transition-all duration-300 bg-info_blue rounded-xl w-10 h-10 p-2 hover:bg-info_blue/75">
      <CalendarIcon />
    </button>
  </div>
  )
}

export default Home;