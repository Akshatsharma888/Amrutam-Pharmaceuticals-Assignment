

export const Header = () => {
  return (
    <header className="border-b border-gray-200 bg-customGray" >
    <div className="container flex items-center justify-between py-4 px-4 md:px-8 lg:px-24">
      <div className="flex items-center space-x-4">
        <img src="/assets/Images/amrutan_logo.png" alt="Amrutam Logo" className="w-40 h-10 md:w-60 md:h-12" />
        <nav className="hidden lg:flex space-x-4 lg:space-x-10 md:space-x-6 px-8">
          <a href="/" className="text-gray-700 hover:text-green-600 text-sm md:text-base lg:text-lg ">Home</a>
          <a href="/find-doctors" className="text-gray-700 hover:text-green-600 text-sm md:text-base lg:text-lg font-bold text-customGreen">Find Doctors</a>
          <a href="/about-us" className="text-gray-700 hover:text-green-600 text-sm md:text-base lg:text-lg">About Us</a>
        </nav>
      </div>
      <div className="flex items-center space-x-2 md:space-x-4">
        <button className="text-customGreen border text-[10px] md:text-base  lg:px-4  py-2 px-2 md:px-4 md:py-2 lg:text-lg border-gray-700  rounded-md ">Login</button>
        <button className="text-[10px] md:text-base lg:text-lg text-white bg-customGreen border border-gray-700 py-2 px-2 md:px-4 md:py-2 lg:px-4 rounded-md hover:bg-green-600 ">Sign Up</button>
      </div>
    </div>
  </header>
  );
};




