import { useContext, useState } from "react";
import Close from "../../img/close";
import TabComponent from "../tabComponent/tabComponent";
import { DetailsContext, TabsContext } from "../../contexts/contexts";
import { useGetUserByEmail } from "../../hooks/useGetUser";
import { useUpdateMutation } from "../../hooks/useUpdateAppointment";
import Alert from "../alert/alert";
import AlertType from "../alert/alert.types";

export const primaryButtonStyle =
  "bg-primary_1 hover:bg-primary_2 text-white font-bold py-2 px-4 rounded-full w-40";

export const primaryButtonStyleDisabled =
  "bg-gray-300 hover:bg-gray-300 text-white font-bold py-2 px-4 rounded-full w-40";

const AppointmentCard = ({ handleClose }) => {
  const { userData } = useGetUserByEmail();
  const [details] = useContext(DetailsContext);
  const [showNotification, setShowNotification] = useState(false);
  const errors = userData?.appointments?.[0]?.errors;
  const hasErrors = !!errors?.length;
  const disabled = !hasErrors;
  const { updateAppointment, loading } = useUpdateMutation();
  const [activeTab, setActiveTab] = useContext(TabsContext);

  return (
    <div className="flex justify-center pt-9">
      {showNotification && (
        <div className="fixed top-4 right-4 space-y-4 z-50">
          <Alert
            key={"alert-appointment-update"}
            type={AlertType.SUCCESS}
            content={"Appointment Updated!"}
          />
        </div>
      )}
      <div className="w-[48.5rem] rounded overflow-hidden shadow-lg bg-slate-100">
        <div className="flex py-5 px-6 items-center justify-between">
          <h1 className="font-normal text-2xl">Maintenance Appointment</h1>
          <button
            data-testid="btn-close"
            className="hover:bg-gray-200 rounded"
            onClick={() => {
              handleClose();
              setActiveTab(0);
            }}
          >
            <Close />
          </button>
        </div>
        <div className="border-b-2 border-gray-300 w-full min-h-[25rem] max-h-[40rem]">
          <TabComponent errors={errors} hasErrors={hasErrors} />
        </div>

        <div className="flex px-6 py-6 gap-x-2">
          {activeTab === 1 ? (
            <button
              className={
                disabled ? primaryButtonStyleDisabled : primaryButtonStyle
              }
              onClick={async () => {
                await updateAppointment({
                  date: details?.date,
                  time: details?.time,
                  phone: details?.phone,
                });
                setShowNotification(true);
                setTimeout(() => {
                  setShowNotification(false);
                  handleClose();
                  setActiveTab(0);
                }, 1000);
              }}
              disabled={disabled || loading}
              data-testid="btn-save-appointment"
            >
              Save
            </button>
          ) : (
            <button
              className={primaryButtonStyle}
              onClick={() => setActiveTab(1)}
              data-testid="btn-next"
            >
              Next
            </button>
          )}
          <button
            data-testid="btn-cancel"
            onClick={() => {
              handleClose();
              setActiveTab(0);
            }}
            className="bg-transparent hover:bg-slate-200 text-primary_1 font-bold py-2 px-4 rounded-full border-2 border-primary_1 w-40"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
