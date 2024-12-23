const AboutSection = () => {
  return (
    <section className="bg-white shadow-lg rounded-xl sm:h-[75%] lg:w-[75%]">
      <div className="flex justify-between items-center bg-customLight w-full h-16 px-4">
        <h3 className="text-lg font-bold text-customGreen ml-4">A Little About Me</h3>
        <button className="bg-white text-customGreen border-customGreen px-4 py-2 border rounded-xl font-bold">Follow +</button>
      </div>
      <p className="ml-4 text-lime-800 mt-4">
        Hello! I am Dr. Bruce Willis, a Gynecologist in Sanjivini Hospital Surat. I love to work with all my hospital staff
        and senior doctors. Completed my graduation in Gynecologist Medicine from the
        <img src="/assets/Images/R.png" alt="" className="inline-block ml-2" />
      </p>
      <div className="mt-4 ml-4">
        <div className="flex space-x-4 mt-2">
          <p className="font-semibold mt-1">Language Spoken</p>
          <span className="px-2 py-1 bg-customBlue rounded-lg">English</span>
          <span className="px-2 py-1 bg-customBlue rounded-lg">Hindi</span>
          <span className="px-2 py-1 bg-customBlue rounded-lg">Telugu</span>
        </div>
      </div>
      <div className="flex space-x-2 mt-8 ml-4 mb-3">
        <img src="/assets/Images/face.png" alt="" />
        <img src="/assets/Images/i.png" alt="" />
        <img src="/assets/Images/y.png" alt="" />
        <img src="/assets/Images/t.png" alt="" />
      </div>
    </section>
  );
};

export default AboutSection;