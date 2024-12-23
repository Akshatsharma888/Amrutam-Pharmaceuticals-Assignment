import { useRef, useEffect } from "react";

const FullRe = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      const placeholderLength = inputRef.current.placeholder.length;
      inputRef.current.style.width = `${placeholderLength}ch`;
    }
  }, []);

  return (
    <>
      <section className="border-b border-gray-200 bg-customA relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute top-0 left-[20%] -z-50">
            <img src="/assets/Images/Ellipse.png" alt="Ellipse" />
          </div>
          <div className="absolute top-0 right-[20%] -z-50">
            <img src="/assets/Images/Ellipse.png" alt="Ellipse" />
          </div>
          <div className="absolute bottom-0 left-[30%]">
            <img src="/assets/Images/Ellipse 715.png" alt="Ellipse 715" />
          </div>
          <div className="absolute bottom-0 right-[30%]">
            <img src="/assets/Images/Ellipse 715.png" alt="Ellipse 715" />
          </div>
          <div className="top-14 text-center text-3xl font-semibold relative z-10">
            <h1>Find Expert Doctors For An In-Clinic Session Here</h1>
          </div>
          <div className="container flex justify-center items-center py-24 px-4 md:px-8 lg:px-24 flex-col lg:flex-row">
            <div className="container flex items-center justify-center flex-col lg:flex-row">
              <div className="relative mr-2 animate-fade-in">
                <select className="border border-gray-300 p-2 rounded pl-10">
                  <option>Select Location</option>
                </select>
                <img
                  src="/assets/Images/location.png"
                  alt="Location Icon"
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 w-6 h-6"
                />
              </div>
              <div className="relative animate-fade-in">
                <input
                  type="text"
                  placeholder="e.g., Doctor, specialization, clinic name"
                  className="border border-gray-300 p-2 rounded pl-3 pr-12 w-full"
                  ref={inputRef}
                />
                <img
                  src="/assets/Images/arrow_forward_24px.png"
                  alt="Arrow Icon"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 pointer-events-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FullRe;