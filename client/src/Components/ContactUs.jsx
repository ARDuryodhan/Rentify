import contactImg from "../Assets/Images/contactImg.png";
import { useEffect, useState } from "react";
import { Location } from "../Pages/Location";
import { useAuth } from "../Store/Store-Auth";
import { toast } from "react-toastify";

function ContactUs() {
  const contactURL = "http://localhost:5000/api/form/contactus";

  const [contact, setContact] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });
  const [userData, setUserData] = useState(true);

  const { user } = useAuth();

  if (userData && user) {
    setContact({
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      message: "",
    });
    setUserData(false);
  }

  useEffect(() => {
    if (user) {
      setContact({
        firstname: user.firstname || "",
        lastname: user.lastname || "",
        email: user.email || "",
        message: "",
      });
    }
  }, [user]);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(contactURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });
      console.log("contact response data : ", response);

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);

        toast.info("Message send successfully");
        setContact({
          message: "",
        });
      }
    } catch (error) {
      toast.error("Message not send");
      console.error("Error", error);
    }
  };

  return (
   
    <>
      <div className="contact-section p-3 mt-6 bg-gradient-to-b from-blue-900 to-purple-900 text-white">
        <div className="container lg:flex lg:justify-center lg:box-content items-center mb-[2rem] gap-6">
          <div className="contactImg w-full lg:w-1/2">
            <img src={contactImg} alt="contactus" className="m-auto" />
          </div>
          <div className="forms w-full lg:w-1/2 p-6 bg-white text-gray-900 rounded-lg shadow-lg">
            <h2 className="mb-5 pb-1 item-center text-center text-3xl font-extrabold text-gray-900">
              Contact Us
            </h2>
            <form
              className="space-y-6 m-auto p-4 rounded-md"
              onSubmit={handleSubmit}
            >
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-bold text-gray-500">
                    First Name
                  </label>
                  <div className="mt-1">
                    <input
                      id="firstname"
                      name="firstname"
                      type="text"
                      autoComplete="off"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      value={contact.firstname}
                      onChange={handleInput}
                      placeholder="Enter your First name"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <label className="block text-sm font-bold text-gray-500">
                    Last Name
                  </label>
                  <div className="mt-1">
                    <input
                      id="lastname"
                      name="lastname"
                      type="text"
                      autoComplete="off"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      value={contact.lastname}
                      onChange={handleInput}
                      placeholder="Enter your Last name"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-gray-500"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={contact.email}
                    onChange={handleInput}
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-bold text-gray-500"
                >
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={contact.message}
                    onChange={handleInput}
                    placeholder="Enter your message"
                  ></textarea>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <Location />
      </div>
    </>
  );
}
export default ContactUs;
