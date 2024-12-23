const SelectX = () => {
  return (
    <section className="bg-white flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="container flex flex-col lg:items-end lg:justify-end md:items-end space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:space-x-20">
        <select className="custom-select border bg-customH border-gray-300 p-2 px-4 sm:px-6 rounded-full w-full sm:w-auto animate-fade-in">
          <option>Hair Care</option>
        </select>
        <select className="custom-select border bg-customH border-gray-300 p-2 px-4 sm:px-6 rounded-full w-full sm:w-auto animate-fade-in">
          <option>Female</option>
        </select>
        <select className="custom-select border bg-customH border-gray-300 p-2 px-4 sm:px-6 rounded-full w-full sm:w-auto animate-fade-in">
          <option>Rs.0-Rs.500</option>
        </select>
        <select className="custom-select border bg-customH border-gray-300 p-2 px-4 sm:px-6 rounded-full w-full sm:w-auto animate-fade-in">
          <option>Hindi</option>
        </select>
      </div>
    </section>
  );
};

export default SelectX;