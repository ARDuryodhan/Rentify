import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { useAuth } from "../Store/Store-Auth";
import { Link } from "react-router-dom";

function AboutUs() {
  const [username, setUsername] = useState({
    firstname: "",
  });
  const [userData, setUserData] = useState(true);

  const { user } = useAuth();

  useEffect(() => {
    if (userData && user) {
      setUsername({
        firstname: user.firstname,
      });
      setUserData(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div className=" py-12 bg-[#1b1b1b] text-white">
      <div className="box-border ms-2">
        <p className="text-2xl  mb-4 font-bold">
          Welcome, &nbsp;
          <span className=" capitalize font-semibold kalam-regular text-orange-500">
            {username.firstname || "Guest"}
          </span>
        </p>
      </div>

      <h2 className="text-4xl font-extrabold uppercase text-center mb-8">
        About Us
      </h2>
      <div className=" max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8 rounded-lg bg-gray-800 shadow-lg">
        <div className="text-center mb-8">
          <p className="text-3xl font-semibold uppercase text-orange-500">
            Rentify - Where Renting Meets Simplicity
          </p>
        </div>

        <div className="mt-10 space-y-6">
          <p className=" text-lg leading-7 ">
            The entire world is slowly recovering from the pandemic and slowly
            but certainly everything is coming back to normal. People are
            starting to go back to their daily routine, schools, colleges, movie
            theatres, restaurants everything has started operating almost
            full-fledged. Work from home has also reduced a lot as offices are
            opening and people are coming back to their work state as
            immigrants.
          </p>
          <p className=" text-lg leading-7">
            However, there is a high demand for real estate once again. Rents
            have gone up and it is now getting difficult to find rents,
            especially in cities with high population and IT offices. Here is
            one brokerage company that is trying to create a website called
            Rentify to help owners find the correct tenants and also help
            tenants find the correct house based on their key requirements.
          </p>
          <p className=" text-lg leading-7">
            In this changing landscape, the demand for real estate is surging.
            With rising rents and increased competition, finding the perfect
            rental property, especially in densely populated cities with
            numerous offices, has become a challenge.
          </p>

          <p className=" text-lg leading-7">
            At Rentify, we are committed to bridging this gap. Our mission is to
            simplify the rental process for both property owners and tenants.
            Our platform is designed to help owners find reliable tenants and
            assist tenants in discovering homes that meet their specific needs.
          </p>
          <p className=" text-lg leading-7">
            Rentify is here to make renting easier, more efficient, and more
            accessible for everyone. Join us in redefining the rental
            experience.
          </p>
        </div>
        <div className="mt-10">
          <h3 className="uppercase text-2xl font-extrabold text-orange-500 mb-4">
            Our Mission
          </h3>
          <p className=" text-lg leading-7">
            Rentify is dedicated to transforming the rental experience. We
            believe in providing a seamless, user-friendly platform that caters
            to the diverse needs of our users. Our goal is to connect tenants
            with properties that not only meet their requirements but also
            enhance their living experience.
          </p>

          <h3 className="uppercase  text-2xl font-extrabold text-orange-500 mt-8 mb-4">
            How We Help Owners
          </h3>
          <p className=" text-lg leading-7">
            For property owners, Rentify offers a comprehensive solution to
            manage and list their properties. Our platform provides tools to
            create detailed listings, manage inquiries, and screen potential
            tenants efficiently. By leveraging advanced technology and
            data-driven insights, we help owners find the right tenants quickly
            and effectively.
          </p>
          <h3 className="uppercase text-2xl font-extrabold text-orange-500 mt-8 mb-4">
            How We Help Tenants For tenants,
          </h3>
          <p className=" text-lg leading-7">
            Rentify simplifies the search for the perfect home. Our platform
            allows users to filter properties based on their key requirements,
            such as location, price range, amenities, and more. We provide
            detailed property descriptions, high-quality images, and virtual
            tours to help tenants make informed decisions.
          </p>
          <h3 className="uppercase text-2xl font-extrabold text-orange-500 mt-8 mb-4">
            Why Choose Rentify
          </h3>

          <ul className="ms-8 space-y-4">
            <li className="text-lg leading-7 list-disc">
              <span className="font-semibold">User-Friendly Interface:</span>{" "}
              Our platform is designed to be intuitive and easy to navigate,
              ensuring a smooth experience for both owners and tenants.
            </li>

            <li className="text-lg leading-7 list-disc">
              <span className="font-semibold">Comprehensive Listings:</span> We
              offer detailed property listings with all the necessary
              information to help users find their ideal home.
            </li>
            <li className="text-lg leading-7 list-disc">
              <span className="font-semibold">Advanced Search Filters:</span>{" "}
              Tenants can use our advanced filters to narrow down their search
              and find properties that match their specific needs.
            </li>
            <li className="text-lg leading-7 list-disc">
              <span className="font-semibold">Reliable Support:</span> Our
              dedicated support team is always available to assist users with
              any queries or issues they may encounter.
            </li>
            <li className="text-lg leading-7 list-disc">
              <span className="font-semibold">Secure Transactions:</span> We
              prioritize the security and privacy of our users, ensuring all
              transactions and communications are safe and secure.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-end px-6 mt-8">
        <Link
          to={"/contact"}
          className="bg-blue-600 px-8 py-3 rounded-sm font-bold text-white hover:scale-105 transform transition hover:shadow-lg shadow-white"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default AboutUs;
