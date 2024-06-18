import { useEffect, useState } from "react";
import ohhnoImg from '../Assets/Images/ohhnoo.png'

import "swiper/css/navigation";
import "swiper/css";

import { FaRupeeSign } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function PropertyForm() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showTermsDialog, setShowTermsDialog] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    address: "",
    bedrooms: "",
    bathrooms: "",
    nearByPlaces: "",
    rent: "",
    photos: [],
  });

  const handleInputChange = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const toggleTermsDialog = () => {
    setShowTermsDialog(!showTermsDialog);
  };

  // const handleFileChange = (e) => {
  //   const files = Array.from(e.target.files);
  //   const photosArray = files.map((file) => URL.createObjectURL(file));
  //   setFormData({ ...formData, photos: photosArray });
  // };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        "http://localhost:5000/api/property/properties",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );
      const responseData = await response.json();
      if (response.ok) {
        toast.success("Property Added successfully");

        navigate("/");
      } else {
        toast.warn("Failed to add property");
        console.error("Failed to add property", responseData.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  if (!isLoggedIn) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto text-center">
          <img src={ohhnoImg} alt="" className="h-24 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-red-500 mb-4">
            Access Restricted
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            Please log in to access this page.
          </p>
          <Link
            to="/login"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md transition duration-200"
          >
            Log In
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="propertyForm p-6 bg-gray-100 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-blue-950 mb-4">
        List Your Property Here...
      </h3>

      <div className="addproperty">
        <form
          className="w-full flex flex-col gap-4 bg-white p-6 rounded-md shadow-md"
          onSubmit={handleSubmit}
        >
          {/* <div className="mb-4">
            <label className="font-bold text-gray-600">Upload Photos:</label>
            <input
              type="file"
              name="photos"
              multiple
              accept="image/*"
              onChange={handleFileChange}
              className="w-full mt-2 p-2 border rounded-md"
            />
          </div> */}

          <div className="grid gap-4">
            <div>
              <label className="font-bold text-gray-600">Title:</label>
              <input
                onChange={handleInputChange}
                value={formData.title}
                type="text"
                placeholder="Enter Title..."
                name="title"
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div>
              <label className="font-bold text-gray-600">Description:</label>
              <textarea
                onChange={handleInputChange}
                value={formData.description}
                placeholder="Enter Description..."
                name="description"
                className="w-full p-2 h-32 border rounded-md"
              />
            </div>

            <div>
              <label className="font-bold text-gray-600">Address:</label>
              <input
                onChange={handleInputChange}
                value={formData.address}
                type="text"
                placeholder="Enter Address..."
                name="address"
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="font-bold text-gray-600">
                  Number of Bedrooms:
                </label>
                <input
                  onChange={handleInputChange}
                  value={formData.bedrooms}
                  type="number"
                  placeholder="No. of Bedrooms..."
                  name="bedrooms"
                  className="w-full p-2 border rounded-md"
                />
              </div>

              <div className="flex-1">
                <label className="font-bold text-gray-600">
                  Number of Bathrooms:
                </label>
                <input
                  onChange={handleInputChange}
                  value={formData.bathrooms}
                  type="number"
                  placeholder="No. of Bathrooms..."
                  name="bathrooms"
                  className="w-full p-2 border rounded-md"
                />
              </div>
            </div>

            <div>
              <label className="font-bold text-gray-600">Nearby Places:</label>
              <input
                onChange={handleInputChange}
                value={formData.nearByPlaces}
                type="text"
                placeholder="e.g., Park, Supermarket, Schools"
                name="nearByPlaces"
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div className="flex items-center">
              <div className="flex-1">
                <label className="font-bold text-gray-600">Rent:</label>
                <input
                  onChange={handleInputChange}
                  value={formData.rent}
                  type="number"
                  placeholder="Enter Rent..."
                  name="rent"
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <FaRupeeSign className="text-2xl text-gray-600 ml-2" />
            </div>

            <button
              type="submit"
              className="w-full mt-4 bg-blue-950 text-white font-bold p-3 rounded-md hover:bg-blue-900 transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {showTermsDialog && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto overflow-y-auto">
            <div className="overflow-y-auto max-h-96">
              <h2 className="text-xl font-bold mb-4">Terms and Conditions</h2>
              <div className="space-y-4">
                {/* Terms and conditions content */}
                <div>
                  <h2 className="text-lg font-semibold">1. Rental Agreement</h2>
                  <p>
                    The tenant agrees to abide by the terms outlined in this
                    rental agreement. The rental agreement is a legally binding
                    document between the landlord and the tenant.
                  </p>
                </div>
                <div>
                  <h2 className="text-lg font-semibold">2. Rent Payment</h2>
                  <p>
                    Rent must be paid in full on or before the agreed-upon date
                    each month. Late payments may incur additional charges. Rent
                    payments should be made via the specified payment method(s)
                    agreed upon by both parties.
                  </p>
                </div>
                {/* More terms and conditions */}
              </div>
              <button
                onClick={toggleTermsDialog}
                className="mt-6 bg-blue-950 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PropertyForm;
