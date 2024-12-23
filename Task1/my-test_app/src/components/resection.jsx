const RecreateSection = () => {
  return (
    <section className="bg-white shadow-lg rounded-xl lg:-mt-[56%] mt-6 sm:-mt-24 sm:h-[530px] lg:w-[75%]">
      <div className="flex justify-between items-center bg-customLight w-full h-16 px-4 rounded-t-xl">
        <h3 className="text-lg font-bold text-customGreen ml-4">Featured Reviews (102)</h3>
      </div>
      {/* Reviews */}
      <div className="flex flex-col space-y-6 p-6">
        {[1, 2].map((_, index) => (
          <div
            key={index}
            className="bg-customeB p-6 rounded-lg flex flex-col sm:flex-row space-y-4 sm:space-y-0"
          >
            {/* Profile Image */}
            <img
              src="/assets/Images/girl.jpeg"
              alt="Profile"
              className="h-14 w-14 object-cover rounded-full mr-4 shrink-0"
            />

            {/* Review Details */}
            <div className="flex flex-1 flex-col justify-between">
              {/* Top Row */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <p className="text-lg font-semibold">Alicent HighTower</p>
                  <p className="text-customG text-sm">Consulted For Skin Care</p>
                </div>
                <p className="text-customG text-sm sm:text-base">20 January 2023</p>
              </div>

              {/* Rating and Feedback */}
              <div className="flex flex-col items-start md:items-start lg:items-start">
                {/* Star Ratings */}
                <div className="flex items-center space-x-1 mt-4 md:mt-0 lg:mt-0">
                  {[...Array(5)].map((_, starIndex) => (
                    <img
                      key={starIndex}
                      src="/assets/Images/icon.png"
                      alt="Star"
                      className="h-5 w-5"
                    />
                  ))}
                </div>
                {/* Feedback */}
                <p className="mt-4 text-sm sm:text-base">
                  Might be bit early to confirm but yes I can see noticeable difference in my
                  hairfall. Will write again after using it for longer periods.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecreateSection;