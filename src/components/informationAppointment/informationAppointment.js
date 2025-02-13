const InformationAppointment = ({ title, description }) => {
  return (
    <div className="px-4">
      <h3 className="text-lg font-medium text-gray-800">Diagnosis</h3>
      <p className="text-gray-600 font-normal ">
        Supporting line text lorem ipsum dolor sit amet, consectetur.
      </p>
      <div className="flex pt-4 gap-x-20">
        <div>
          <h3 className="text-lg font-medium text-gray-800">Model</h3>
          <p className="text-gray-600 font-normal ">Harley Davidson</p>
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-800">Owner</h3>
          <p className="text-gray-600 font-normal ">John Doe</p>
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-800">Membership</h3>
          <p className="text-gray-600 font-normal ">123-456-789</p>
        </div>
      </div>
    </div>
  );
};

export default InformationAppointment;
