const OptionS = () => {
  return (
    <>
      <section className="border-b border-gray-200 bg-white h-auto sm:h-20 flex items-center justify-center overflow-hidden p-4 sm:p-0">
        <div className="container flex flex-col sm:flex-wrap sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-8 lg:space-x-12 xl:space-x-16">
          <select className="border bg-customE border-gray-300 p-2 rounded pl-2 pr-8 sm:pr-10 md:pr-12 w-full sm:w-auto animate-fade-in">
            <option>Expertise</option>
          </select>
          <select className="border bg-customE border-gray-300 p-2 rounded pl-2 pr-8 sm:pr-10 md:pr-12 w-full sm:w-auto animate-fade-in">
            <option>Gender</option>
          </select>
          <select className="border bg-customE border-gray-300 p-2 rounded pl-2 pr-8 sm:pr-10 md:pr-12 w-full sm:w-auto animate-fade-in">
            <option>Fees</option>
          </select>
          <select className="border bg-customE border-gray-300 p-2 rounded pl-2 pr-8 sm:pr-10 md:pr-12 w-full sm:w-auto animate-fade-in">
            <option>Languages</option>
          </select>
          <select className="border bg-customF border-gray-300 p-2 rounded pl-2 pr-8 sm:pr-10 md:pr-12 w-full sm:w-auto animate-fade-in">
            <option>All Filters</option>
          </select>
        </div>
      </section>
    </>
  );
};

export default OptionS;