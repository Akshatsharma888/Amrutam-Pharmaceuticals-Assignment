const SpecializationSection = () => {
  return (
    <section className="bg-white shadow-md rounded-xl lg:w-[75%] lg:h-[65%] sm:h-[2%] lg:-mt-24">
      <div className="flex justify-between items-center bg-customLight w-full h-16 px-4">
        <h3 className="text-lg font-bold text-customGreen ml-4">I Specialize In</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 mt-8 ">
        <div className="flex flex-col items-center">
          <img src="/assets/Images/A.png" alt="Women's Health" className="mb-4" />
          <p className="text-center font-semibold">Women&apos;s Health</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/assets/Images/B.png" alt="Skin Care" className="mb-4" />
          <p className="text-center font-semibold">Skin Care</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/assets/Images/C.png" alt="Immunity" className="mb-4" />
          <p className="text-center font-semibold">Immunity</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/assets/Images/D.png" alt="Hair Care" className="mb-4" />
          <p className="text-center font-semibold">Hair Care</p>
        </div>
      </div>
    </section>
  );
};

export default SpecializationSection;