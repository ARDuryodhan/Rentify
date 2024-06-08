import { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css";

import { FaRupeeSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function PropertyForm() {
  // const [photos, setPhotos] = useState([]);
  const [showTermsDialog, setShowTermsDialog] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    address: "",
    bedrooms: '',
    bathrooms: '',
    nearByPlaces: "",
    rent: '',
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

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const photosArray = files.map((file) => URL.createObjectURL(file));
    setFormData({ ...formData, photos: photosArray });
  };

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

  return (
    <div className="propertyForm p-3">
      <h3 className="text-[1.8rem] font-bold text-blue-950">
        List Your Property here...
      </h3>

      <div className="main-container">
        {/* <div className="images items-center">
          {photos.length > 0 && (
            <Swiper
              loop={true}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              spaceBetween={0}
              slidesPerView={1}
              navigation={{
                nextEl: ".custom-swiper-button-next",
                prevEl: ".custom-swiper-button-prev",
              }}
              modules={[Navigation]}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
              }}
            >
              {photos.map((photo, index) => (
                <SwiperSlide key={index} className="items-center">
                  <img
                    className="w-full h-[30rem] object-cover rounded items-center"
                    src={photo}
                    alt={`Property ${index + 1}`}
                    style={{ maxHeight: "30rem", objectFit: "cover" }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div> */}

        <div className="addproperty mt-6">
          <h4 className="text-[1.8rem] font-bold text-blue-950">From</h4>
          <form
            className="w-full p-6 flex flex-col gap-2  m-auto bg-slate-200 rounded-md"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label className="ms-2 font-bold text-gray-500">
                Upload Photos :
              </label>
              <br />
              <input
                type="file"
                name="photos"
                id="photos"
                multiple
                accept="image/*"
                onChange={handleFileChange}
                className="text-sm text-stone-500 mt-3 p-1 rounded-md
            file:mr-3 file:py-2 file:px-7 file:border-[1px] 
            file:text-xs file:font-medium
            file:bg-stone-50 file:text-stone-700
            hover:file:cursor-pointer hover:file:bg-blue-50 "
              />
            </div>

            <div className="grid">
              <label className="ms-2 font-bold text-gray-500"> Title : </label>
              <div className="">
                <input
                  onChange={handleInputChange}
                  value={formData.title}
                  type="text"
                  placeholder="Enter Title..."
                  name="title"
                  className="w-full border shadow text-black placeholder-text-blue-950 p-2 rounded-lg"
                />
              </div>
            </div>

            <div className="grid">
              <label className="ms-2 font-bold text-gray-500">
                Description :
              </label>
              <div className="">
                <textarea
                  onChange={handleInputChange}
                  value={formData.description}
                  type="text"
                  placeholder="Enter Description..."
                  name="description"
                  className="w-full px-3 h-[8rem] border shadow text-black placeholder-text-blue-950 p-2 rounded-lg"
                />
              </div>
            </div>

            <div className="grid">
              <label className="ms-2 font-bold text-gray-500">Address :</label>
              <div className="">
                <input
                  onChange={handleInputChange}
                  value={formData.address}
                  type="text"
                  placeholder="Enter Address..."
                  name="address"
                  className="w-full px-3 border shadow text-black placeholder-text-blue-950 p-2 rounded-lg"
                />
              </div>
            </div>

            <div className="flex gap-2">
              <div className="grid flex-1">
                <label className="ms-2 font-bold text-gray-500">
                  Number of Bedrooms :
                </label>
                <div>
                  <input
                    onChange={handleInputChange}
                    value={formData.bedrooms}
                    type="number"
                    placeholder="No. of Bedrooms..."
                    name="bedrooms"
                    className="w-full font-bold placeholder:font-normal px-3 border shadow text-black placeholder-text-blue-950 p-2 rounded-lg"
                  />
                </div>
              </div>

              <div className="grid flex-1">
                <label className="ms-2 font-bold text-gray-500">
                  Number of Bathrooms :
                </label>
                <div>
                  <input
                    onChange={handleInputChange}
                    value={formData.bathrooms}
                    type="number"
                    placeholder="No. of Bathrooms..."
                    name="bathrooms"
                    className="w-full font-bold placeholder:font-normal px-3 border shadow text-black placeholder-text-blue-950 p-2 rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div className="grid">
              <label className="ms-2 font-bold text-gray-500">
                Nearby Places :
              </label>
              <div className="">
                <input
                  onChange={handleInputChange}
                  value={formData.nearByPlaces}
                  type="text"
                  placeholder="eg. Park, Supermarket, Schools"
                  name="nearByPlaces"
                  className="w-full px-3 border shadow text-black placeholder-text-blue-950 p-2 rounded-lg"
                />
              </div>
            </div>

            <div className="grid">
              <label className="ms-2 font-bold text-gray-500"> Rent : </label>
              <div className="flex gap-2 items-center">
                <input
                  onChange={handleInputChange}
                  value={formData.rent}
                  type="number"
                  placeholder="Enter Rent..."
                  name="rent"
                  className="w-full font-bold placeholder:font-normal px-3 border shadow text-black placeholder-text-blue-950 p-2 rounded-lg"
                />
                <span>
                  <FaRupeeSign className="text-[1.5rem]" />
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full max-w-[150px] mx-auto block mt-8 mb-5 text-center bg-blue-950 font-bold rounded-lg px-6 py-2 text-white hover:scale-105 transition-all hover:bg-blue-900"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {showTermsDialog && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 ">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto overflow-y-auto">
            <div className="overflow-y-auto max-h-96">
              <h2 className="text-xl font-bold mb-4">Terms and Conditions</h2>
              <div className="space-y-4">
                <div>
                  <h2 className="text-xl font-semibold">1. Rental Agreement</h2>
                  <p>
                    The tenant agrees to abide by the terms outlined in this
                    rental agreement. The rental agreement is a legally binding
                    document between the landlord and the tenant.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">2. Rent Payment</h2>
                  <p>
                    Rent must be paid in full on or before the agreed-upon date
                    each month. Late payments may incur additional charges. Rent
                    payments should be made via the specified payment method(s)
                    agreed upon by both parties.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">3. Security Deposit</h2>
                  <p>
                    A security deposit equal to [amount] is required upon
                    signing the rental agreement. This deposit will be held
                    against any damages, unpaid rent, or other charges incurred
                    during the tenancy. The security deposit will be refunded
                    within [number] days of the end of the lease term, provided
                    no deductions are necessary.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">4. Lease Duration</h2>
                  <p>
                    The lease term is for a period of [number] months, beginning
                    on [start date] and ending on [end date]. The tenant may
                    renew the lease with the landlord&apos;s approval.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">
                    5. Utilities and Maintenance
                  </h2>
                  <p>
                    The tenant is responsible for paying for utilities unless
                    otherwise specified in the rental agreement. The tenant must
                    maintain the property in a clean and habitable condition and
                    promptly notify the landlord of any necessary repairs. The
                    landlord is responsible for major repairs and maintenance of
                    the property.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">6. Occupancy</h2>
                  <p>
                    Only individuals listed on the rental agreement are
                    permitted to reside in the property. Subletting the property
                    without the landlord&apos;s written consent is prohibited.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">7. Use of Property</h2>
                  <p>
                    The property must be used solely for residential purposes.
                    The tenant shall not engage in any illegal activities on the
                    premises. The tenant must not disturb neighbors or engage in
                    activities that may cause damage to the property.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">8. Pets</h2>
                  <p>
                    [Specify pet policy, e.g., &amp; No pets are allowed without
                    prior written consent from the landlord&amp; or &amp; Pets
                    are allowed under the following conditions:...&amp; ].
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">9. Alterations</h2>
                  <p>
                    The tenant may not make any alterations, additions, or
                    improvements to the property without the landlord&apos;s
                    written consent. Any approved alterations must be restored
                    to the original condition at the tenant&apos;s expense upon
                    termination of the lease unless agreed otherwise.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">
                    10. Entry by Landlord
                  </h2>
                  <p>
                    The landlord may enter the property with reasonable notice
                    for inspections, repairs, or emergencies. The tenant must
                    provide the landlord with access to the property as needed.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">
                    11. Termination of Lease
                  </h2>
                  <p>
                    The tenant must provide 30 days&apos; written notice before
                    vacating the property. Early termination of the lease may
                    result in penalties as specified in the rental agreement.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">12. Liability</h2>
                  <p>
                    The landlord is not responsible for any loss or damage to
                    the tenant&apos;s personal property. The tenant is
                    encouraged to obtain renter&apos;s insurance.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">13. Governing Law</h2>
                  <p>
                    This agreement shall be governed by and construed in
                    accordance with the laws of the state/country where the
                    property is located.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">
                    14. Dispute Resolution
                  </h2>
                  <p>
                    Any disputes arising from this rental agreement shall be
                    resolved through mediation, arbitration, or legal
                    proceedings.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">
                    15. Additional Provisions
                  </h2>
                  <p>
                    Any additional provisions or amendments must be in writing
                    and signed by both the landlord and the tenant.
                  </p>
                </div>
              </div>
              <button
                onClick={toggleTermsDialog}
                className="mt-6 bg-blue-950 text-white px-4 py-2 rounded-lg hover:bg-blue-900 focus:outline-none"
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
