import contactImg from "../Assets/Images/contactImg.png";
import { useEffect, useState } from "react";
import { useAuth } from "../Store/Store-Auth";
import { toast } from "react-toastify";

function ContactUs() {
 const contactURL ="http://localhost:5000/api/form/contactus";

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

    try{
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
        
        message:"",
      });
    }
  } catch (error) {
    toast.error("Message not send");
    console.error("Error", error);
  }
};


  return (
    <>
      <div className="contact-section p-3 ">
        <div className="container grid grid-cols-2 items-center p-2 m-auto gap-4">
          <div className="contactImg">
            <img src={contactImg} alt="contactus" />
          </div>
          <div className="forms">
            <h2 className="mb-3 pb-1 item-center text-3xl font-extrabold text-gray-900">
              Contact Us
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
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
              {/* <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <div className="mt-1">
                  <input
                    id="firstname"
                    name="firstname"
                    type="text"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={contact.firstname}
                    onChange={handleInput}
                    placeholder="Enter your full name"
                  />
                </div>
              </div> */}

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
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
                  className="block text-sm font-medium text-gray-700"
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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15078.857147166107!2d72.82463773105917!3d19.120186137591336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9dc24db4ddd%3A0xf4c1a50192004278!2sMumbai%2C%20Maharashtra%20400058!5e0!3m2!1sen!2sin!4v1717092480085!5m2!1sen!2sin"
          className="w-full h-[400px]"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
export default ContactUs;
