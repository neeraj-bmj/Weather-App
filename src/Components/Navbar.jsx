import SearchBox from "./SearchBox";

const Navbar = ({ updateInformation }) => {
  return (
    <div className="Navbar w-full rounded-4xl bg-blue-700 flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 py-3 gap-3">
      <div className="first-part text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-center sm:text-left">
        Weather
      </div>
      <div className="second-part w-full sm:w-auto">
        <SearchBox updateInformation={updateInformation} />
      </div>
    </div>
  );
};

export default Navbar;
