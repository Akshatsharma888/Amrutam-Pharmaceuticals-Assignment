const ExperienceSection = () => {
  return (
    <section className="bg-white shadow-lg rounded-xl lg:-mt-[42%]  mt-6 sm:-mt-24 sm:h-[65%] lg:w-[75%] ">
      <div className="flex justify-between items-center bg-customLight w-full h-16 px-4">
        <h3 className="text-lg font-bold text-customGreen ml-4">My Work Experience</h3>
      </div>
      <p className="mt-4 ml-6 mb-4 text-customGreen font-bold">I HAVE BEEN IN PRACTICE FOR: 7+ YEARS</p>
      <img src="/assets/Images/l.png" alt="" className="mb-3 mx-auto sm:mx-0"/>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <img src="/assets/Images/h.png" alt="" className="ml-8 mb-2 sm:mb-0"/>
        <div className="text-center sm:text-left">
          <p>Midtown Medical Clinic</p>
          <p>Senior Doctor</p>
        </div>
        <p className="mr-4">2016-Present</p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <img src="/assets/Images/h.png" alt="" className="ml-8 mb-2 sm:mb-0"/>
        <div className="text-center sm:text-left">
          <p>Midtown Medical Clinic</p>
          <p>Senior Doctor</p>
        </div>
        <p className="mr-4">2016-Present</p>
      </div>
    </section>
  );
};

export default ExperienceSection;