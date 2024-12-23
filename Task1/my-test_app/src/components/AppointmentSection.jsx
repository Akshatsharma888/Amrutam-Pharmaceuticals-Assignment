const AppointmentSection = () => (
  <section className="bg-white shadow-md rounded p-4  w-full md:w-3/4 lg:w-[600px] lg:-ml-24">
    <div className="flex flex-col md:flex-row items-center justify-between border rounded-lg h-16">
      <h3 className="text-lg ml-4">Appointment Fee</h3>
      <p className="mr-4 text-lg font-bold text-customGreen">₹699.00</p>
    </div>
    <div className="mt-4">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <h4 className="text-lg font-bold ml-2">Select your mode of session</h4>
        <img src="/assets/Images/small.png" alt="" className="mt-2 md:mt-0" />
      </div>
      <div className="flex flex-col md:flex-row justify-between mt-8">
        <img src="/assets/Images/clinic.png" alt="" className="mb-2 md:mb-0" />
        <img src="/assets/Images/Video.png" alt="" className="mb-2 md:mb-0" />
        <img src="/assets/Images/Chat.png" alt="" className="mb-2 md:mb-0" />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between mt-8">
        <h4 className="text-lg font-bold ml-4">Pick a time slot</h4>
        <img src="/assets/Images/small-1.png" className="ml-0 md:ml-20 w-full md:w-1/2 mt-2 md:mt-0" alt="" />
        <img src="/assets/Images/Calender.png" alt="" className="mt-2 md:mt-0" />
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center mt-8 border rounded-xl h-auto sm:h-32 p-4">
        <img src="/assets/Images/Right-D.png" alt="" className="mb-4 sm:mb-0 sm:mr-2" />
        <img src="/assets/Images/Date-1.png" alt="" className="mb-4 sm:mb-0 sm:mr-2" />
        <img src="/assets/Images/Date-2.png" alt="" className="mb-4 sm:mb-0 sm:mr-2" />
        <img src="/assets/Images/Date-3.png" alt="" className="mb-4 sm:mb-0 sm:mr-2" />
        <img src="/assets/Images/Left-D.png" alt="" className="sm:ml-2" />
      </div>
      <div className="flex flex-col items-center mt-8">
        <img src="/assets/Images/M.png" alt="" className="mt-10" />
        <img src="/assets/Images/E.png" alt="" className="mt-10" />
      </div>
      <div className="flex items-center justify-center mt-10 mb-8">
        <button className="px-4 py-2 text-sm md:text-base lg:text-lg font-bold bg-customGreen text-white rounded whitespace-nowrap w-full md:w-auto max-w-[250px] md:max-w-[300px] lg:max-w-[350px] hover:bg-green-600 ">
          Make An Appointment
        </button>
      </div>
    </div>
  </section>
);

export default AppointmentSection;