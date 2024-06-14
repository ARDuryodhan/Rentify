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
      <div className="text-center">
        <h1 className="text-red-600 text-[2rem] font-bold uppercase m-auto">No Properties Found</h1>
      </div>
    );
  }

  return (
    <>
      <h1 className="text-center text-4xl font-extrabold uppercase text-white  mb-6">
        Available Properties
      </h1>

      <section className="max-w-screen-xl p-2 m-auto ">
        <div className="flex flex-wrap justify-center m-auto gap-10 ">
          {properties
            .slice()
            .reverse()
            .map((property) => (
              <div
                key={property._id}
                className="max-w-sm w-[20rem] rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
              >
                <Link>
                  <img
                    className="rounded-t-lg w-full object-cover h-48"
                    src={propertyImg}
                    alt="Property"
                  />
                </Link>
                <div className="p-5 bg-white rounded-b-lg">
                  <div className="details h-[13rem]">
                    <Link>
                      <h6 className="mb-2  text-lg font-bold text-gray-900 uppercase">
                        {property.title}
                      </h6>
                    </Link>
                    <p className="mb-3 text-sm text-gray-700 line-clamp-2">
                      <span className="font-bold text-gray-600">
                        Description :
                      </span>
                      {property.description}
                    </p>
                    <p className="mb-3 text-sm text-gray-700 line-clamp-3">
                      <span className="font-bold text-gray-600">Address :</span>
                      {property.address}
                    </p>
                    <p className="mb-3 text-sm text-gray-700 flex items-baseline">
                      <span className="font-bold text-gray-600">Rent : </span>
                      <span className="ml-1 flex items-baseline">
                        <FaRupeeSign className="ext-[12px] mr-1" />
                        {property.rent}/-
                      </span>
                    </p>
                  </div>
                  <div className="btn-intrested ">
                    <Link
                      className="inline-flex items-center px-4 py-2 mt-4 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
                    >
                      <span>Intrested </span>
                      <span>
                        <FaArrowRight className="ml-2" />
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
