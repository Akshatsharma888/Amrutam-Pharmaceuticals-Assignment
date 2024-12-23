const Profile = () => {
  return (
    <>
      <section className="container mx-auto px-4">
        <div className="flex flex-col items-center mt-20">
          <img
            src="/assets/Images/amr_1.png"
            alt="next_wal"
            className="w-full max-w-screen-2xl h-[150px] bg-customWhite opacity-65 object-cover"
          />
          <div className=" w-full max-w-screen-2xl bg-customWhite flex flex-col md:flex-row items-center p-4 md:p-8 relative z-10">
            <img
              src="/assets/Images/girl.png"
              alt="girl_image"
              className="h-40 w-40 border-[6px] rounded-full object-cover border-white -mt-8 md:-mt-16 relative z-20"
            />
            <ul className="ml-5 mt-4 md:mt-0 flex-1">
              <div className="flex items-center">
                <li className="mr-1 text-sm md:text-base lg:text-lg font-bold whitespace-nowrap">
                  Dr Bruce Willies
                </li>
                <img
                  src="/assets/Images/verify.png"
                  className="h-[20px] w-[20px]"
                  alt="verification"
                />
              </div>
              <li className="mt-1 text-sm md:text-base lg:text-lg">Gynecologist</li>
              <div className="flex mt-2 items-center">
                <li className="mr-1 text-sm md:text-base lg:text-lg">4.2</li>
                <img
                  src="/assets/Images/icon.png"
                  className="h-[20px] w-[20px]"
                  alt="rating"
                />
                <img
                  src="/assets/Images/icon.png"
                  className="h-[20px] w-[20px]"
                  alt="rating"
                />
                <img
                  src="/assets/Images/icon.png"
                  className="h-[20px] w-[20px]"
                  alt="rating"
                />
                <img
                  src="/assets/Images/icon.png"
                  className="h-[20px] w-[20px]"
                  alt="rating"
                />
              </div>
            </ul>
            <div className="ml-0 md:ml-56 mt-4 md:mt-0 flex flex-col md:flex-row flex-wrap items-center justify-between w-full gap-4">
              {/* Follow Info Section */}
              <div className="flex flex-1 space-x-8 md:space-x-2 sm:space-x-4 lg:space-x-10">
                <div className="flex flex-col items-center">
                  <p className="text-sm md:text-base lg:text-lg">Followers</p>
                  <span className="font-bold text-lg md:text-xl lg:text-2xl">850</span>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-sm md:text-base lg:text-lg">Following</p>
                  <span className="font-bold text-lg md:text-xl lg:text-2xl">18K</span>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-sm md:text-base lg:text-lg">Posts</p>
                  <span className="font-bold text-lg md:text-xl lg:text-2xl">250</span>
                </div>
              </div>
              {/* Appointment Button */}
              <div className="mt-4 md:mt-0">
                <button className="px-4 py-2 text-sm md:text-base lg:text-lg font-bold bg-customGreen text-white rounded whitespace-nowrap w-full md:w-auto max-w-[250px] md:max-w-[300px] lg:max-w-[350px] hover:bg-green-600 ">
                  Book An Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;