const Three = () => {
  return (
    <>
      <section className="container mx-auto mt-10 max-w-screen-lg px-4">
        <div className="overflow-hidden h-auto flex items-center justify-center">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-customI shadow-inherit rounded-3xl p-6 sm:p-8 flex flex-col items-center whitespace-nowrap"
              >
                {/* Profile Image */}
                <div className="relative">
                  <img
                    className="rounded-full w-24 h-24 object-cover border-4 border-white shadow-md"
                    src="/assets/Images/profil.png"
                    alt="Doctor"
                  />
                  <div className="absolute bottom-0 right-0 bg-black text-white text-xs font-medium px-2 py-1 rounded-full flex items-center">
                    <span>4.5</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="yellow"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 ml-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.988 2.517l2.027 5.44h5.73l-4.642 3.38 1.77 5.46-4.885-3.697-4.885 3.697 1.77-5.46-4.642-3.38h5.73l2.027-5.44z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Doctor Details */}
                <h2 className="text-lg font-semibold text-gray-800 mt-4">
                  Dr. Prerna Narang
                </h2>
                <p className="text-sm text-gray-600 mt-1 flex items-center">
                  <img
                    src="/assets/Images/link.png"
                    alt="Icon"
                    className="w-4 h-4 mr-2"
                  />
                  Male-Female Infertility
                </p>
                <p className="text-sm text-gray-600 mt-1 flex items-center mr-2">
                  <img
                    src="/assets/Images/Edu.png"
                    alt="Experience Icon"
                    className="w-6 h-6 mr-2"
                  />
                  7 years of Experience
                </p>
                <p className="text-sm text-gray-600 mt-1 flex items-center ml-8">
                  <img
                    src="/assets/Images/comm.png"
                    alt="Language Icon"
                    className="w-4 h-4 mr-2"
                  />
                  Speaks: English, Hindi, Marathi
                </p>

                {/* Consultation Details */}
                <div className="flex justify-between w-full mt-4">
                  <div className="text-center flex-1 border rounded-lg p-2">
                    <p className="text-[70%] text-gray-700 font-medium">
                      Video Consultation
                    </p>
                    <p className="text-sm text-customGreen font-bold">₹800</p>
                  </div>
                  <div className="text-center flex-1 border rounded-lg p-2">
                    <p className="text-[70%] text-gray-700 font-medium">
                      Chat Consultation
                    </p>
                    <p className="text-sm text-customGreen font-bold">Free</p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="w-full mt-6 space-y-2 whitespace-normal">
                  <button className="w-full text-sm font-medium border border-green-700 text-green-700 bg-white py-2 rounded ">
                    View Profile
                  </button>
                  <button className="w-full text-sm font-medium bg-customGreen text-white border border-green-700 py-2 rounded hover:bg-green-400">
                    Book a consultation
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Three;
