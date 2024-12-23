const ConcernsSection = () => {
  return (
    <section className="bg-white shadow-md rounded-xl h-auto sm:h-[55%] lg:w-[75%]  lg:-mt-60">
      <div className="flex justify-between items-center bg-customLight w-full h-16 px-4">
        <h3 className="text-lg font-bold text-customGreen ml-4">The Concerns I Treat</h3>
      </div>
      <div className="flex flex-wrap mt-4 gap-2 ml-4 ">
        <span className="px-2 py-2 bg-customBlue rounded-lg">Skin Treatment</span>
        <span className="px-2 py-2 bg-customBlue rounded-lg">Pregnancy</span>
        <span className="px-2 py-2 bg-customBlue rounded-lg">Period Doubts</span>
        <span className="px-2 py-2 bg-customBlue rounded-lg">Endometriosis</span>
        <span className="px-2 py-2 bg-customBlue rounded-lg">Pelvic Pain</span>
        <span className="px-2 py-2 bg-customBlue rounded-lg">Ovarian Cysts</span>
        <span className="px-2 py-2 bg-white border text-customGreen rounded-lg">+5 More</span>
      </div>
    </section>
  );
};

export default ConcernsSection;