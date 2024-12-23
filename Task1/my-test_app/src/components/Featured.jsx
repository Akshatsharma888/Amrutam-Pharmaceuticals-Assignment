const FeaturedSection = () => {
  return (
    <section className="bg-white shadow-lg rounded-xl">
      {/* Header */}
      <div className="flex justify-between items-center bg-gray-100 w-full h-16 px-4 rounded-t-xl">
        <h3 className="text-lg font-bold text-green-600 ml-4">
          Featured Reviews (102)
        </h3>
      </div>

      {/* Reviews */}
      <div className="flex flex-col space-y-6 p-6">
        {[1, 2].map((_, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-lg flex flex-col space-y-4"
          >
            {/* Profile and Info */}
            <div className="flex items-center justify-between space-x-4">
              <img
                src="/assets/Images/girl.jpeg"
                alt="Profile"
                className="h-14 w-14 object-cover rounded-full"
              />
              <div className="flex flex-col">
                <p className="text-lg font-semibold">Alicent Hightower</p>
                <p className="text-gray-500 text-sm">
                  Consulted for {index === 0 ? "Skin care" : "Pregnancy"}
                </p>
                {/* Date */}
                <p className="text-gray-500 text-sm self-end">
                  20 January 2023
                </p>
              </div>
            </div>

            {/* Rating and Review */}
            <div className="flex flex-col items-start">
              {/* Stars */}
              <div className="flex items-center space-x-1">
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
              <p className="mt-4 text-sm">
                Might be bit early to confirm but yes I can see noticeable
                difference in my hairfall. Will write again after using it for
                longer periods.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;
