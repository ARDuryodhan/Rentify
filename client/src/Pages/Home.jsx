// import { IoSearch } from "react-icons/io5";
import { Location } from "../Pages/Location";
import homebg from "../Assets/Images/homebg.jpg";

import PropertyList from "../Components/PropertyList";
function Home() {
  return (
    <>
      <section
        id="home"
        className="h-[100vh] flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 "
        style={{
          backgroundImage: `url(${homebg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="search text-center  w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-extrabold text-white mt-[-5rem] sm:mt-[-7rem] md:mt-[-9rem] lg:mt-[-10rem] xl:mt-[-12rem] uppercase  drop-shadow-2xl poetsen-one">
            Rent Smart, List Easy - Your Home Awaits
          </h2>
          {/* <h2 className="text-2xl sm:text-3xl md:text-4xl  m-auto w-[50rem] lg:text-5xl xl:text-5xl font-extrabold text-white -mt-[10rem] uppercase drop-shadow-md poetsen-one  ">
            Rent Smart, List Easy - Your Home Awaits
          </h2> */}
          {/* <div className="max-w-2xl mx-auto flex items-center bg-white rounded-full shadow-md ">
            <input
              type="text"
              placeholder="Search property..."
              className="px-4 py-3 w-full outline-none rounded-l-full text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:font-bold"
            />
            <button className="flex-shrink-0 px-6 py-3 rounded-r-full text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              <span className="sr-only">Search</span>
              <IoSearch className="text-2xl" />
            </button>
          </div> */}
        </div>
      </section>
      <div className="PropertyListItem w-full p-4 pt-[10rem] bg-gray-950">
        <PropertyList />
      </div>
      <Location />
    </>
  );
}

export default Home;
