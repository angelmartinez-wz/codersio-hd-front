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

      <button onClick={() => setShowAppointment(true)} className="fixed bottom-4 right-4 transition-all duration-300 bg-primary_1 rounded-xl w-16 h-16 p-4  hover:bg-primary_1/75">
        <CalendarIcon />
      </button>
    </div>
  )
}

export default Home;