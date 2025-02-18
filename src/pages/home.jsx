import { useState } from "react";
import AppointmentCard from "../components/appointmentCard/appointmentCard";
import CalendarIcon from "../img/calendar";
import Notification from "../components/notification/notification";



const Home = () => {
  const [showAppointment, setShowAppointment] = useState(false);
  

  const handleClose = () => {
    setShowAppointment(false);
  }
  return (
    <div className="bg-[url(../public/hd-map.png)] bg-center bg-no-repeat bg-cover h-screen">
    <Notification />

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