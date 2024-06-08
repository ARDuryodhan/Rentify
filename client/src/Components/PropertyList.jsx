import propertyImg from "../Assets/Images/hosue1.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useAuth } from "../Store/Store-Auth";

function PropertyList() {
  const { properties } = useAuth();
  if (!Array.isArray(properties) || properties.length === 0) {
    return (
      <div className="text-center text-gray-600">No properties found.</div>
    );
  }

  return (
    <>
      <h1 className="text-center text-4xl font-extrabold uppercase text-white  mb-6">
        Available Properties
      </h1>

      <section className="max-w-screen-xl p-2  m-auto ">
        <div className="flex flex-wrap justify-center m-auto gap-6 ">
          {properties.map((property) => (
            <div
              key={property._id} 
              className="max-w-sm  hover:border hover:scale-105 hover:border-gray-200 rounded-lg shadow-md dark:bg-blue-950 dark:border-white p-0.5 hover:shadow-lg transition-shadow duration-300 w-[20rem]"
            >
              <Link>
                <img
                  className="rounded-t-lg w-full object-cover h-48"
                  src={propertyImg}
                  alt="Property"
                />
              </Link>
              <div className="p-5">
                <div className="details h-[13rem]">
                  <Link>
                    <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-yellow-500 uppercase">
                      {property.title}
                    </h6>
                  </Link>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
                    <span className="font-bold text-gray-300">
                      Description :
                    </span>{" "}
                    {property.description}
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
                    <span className="font-bold text-gray-300">Address :</span>{" "}
                    {property.address}
                  </p>
                  <p className="mb-3 flex gap-1 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
                    <span className="font-bold text-gray-300">Rent : </span>
                    <span className="flex items-center">
                      <FaRupeeSign />
                      {property.rent}/-
                    </span>
                  </p>
                </div>
                <div className="btn-readmore hover:scale-95 transition-all">
                  <Link
                    to="#"
                    className=" inline-flex items-center px-3 py-2 mt-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none gap-3 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-300 hover:text-black dark:focus:ring-blue-950"
                  >
                    <span>Get All Details</span>
                    <span>
                      <FaArrowRight />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default PropertyList;
