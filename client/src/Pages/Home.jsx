import { IoSearch } from "react-icons/io5";
import PropertyList from "../Components/PropertyList";
function Home() {
  return (
    <>
      <section
        id="home"
        className="h-[70vh] flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-gray-950"
      >
        <div className="search text-center mt-[10rem] w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl  m-auto w-[50rem] lg:text-5xl xl:text-5xl font-extrabold text-white mb-5 uppercase drop-shadow-md poetsen-one  ">
            Rent Smart, List Easy - Your Home Awaits
          </h2>
          <div className="max-w-2xl mx-auto flex items-center bg-white rounded-full shadow-md ">
            <input
              type="text"
              placeholder="Search property..."
              className="px-4 py-3 w-full outline-none rounded-l-full text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:font-bold"
            />
            <button className="flex-shrink-0 px-6 py-3 rounded-r-full text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              <span className="sr-only">Search</span>
              <IoSearch className="text-2xl" />
            </button>
          </div>
        </div>
      </section>
      <div className="PropertyListItem w-full p-4 pt-[10rem] bg-gray-950">
        <PropertyList />
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15078.857147166107!2d72.82463773105917!3d19.120186137591336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9dc24db4ddd%3A0xf4c1a50192004278!2sMumbai%2C%20Maharashtra%20400058!5e0!3m2!1sen!2sin!4v1717092480085!5m2!1sen!2sin"
        className="w-full h-[400px] mt-7"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
}

export default Home;
