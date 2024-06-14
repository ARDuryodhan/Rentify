import { useEffect, useState } from "react";
import updateImg from "../Assets/Images/updateImg.png";
import { useAuth } from "../Store/Store-Auth";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
const AdminUpdate = () => {
  const [UserUpdateData, setUserupdateData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
  });

  const { authorizationToken } = useAuth();
  const params = useParams();
  const navigate = useNavigate();

  const getSingleUserData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/${params.id}`,
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      const data = await response.json();
      setUserupdateData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserupdateData({
      ...UserUpdateData,
      [name]: value,
    });
  };

  //update data
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Form submitted:", UserUpdateData);
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/update/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify(UserUpdateData),
        }
      );
      if (response.ok) {
        toast.success("Profile Updated Successfully");
      } else {
        toast.error("Profile NOT Updated");
      }
      const data = await response.json();
      setUserupdateData(data);
      navigate("/admin/users");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="update-section p-3 mt-6">
        <div className="container flex flex-col lg:flex-row lg:justify-center lg:items-center mb-8 gap-6">
          <div className="forms w-full lg:w-2/3">
            <div className="flex justify-center items-center gap-2 mb-6">
              <div className="updateImg w-12">
                <img src={updateImg} alt="update" className="m-auto" />
              </div>
              <h2 className="text-center text-2xl lg:text-3xl font-bold text-white">
                Update User Profile
              </h2>
            </div>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 px-6 lg:px-16 mx-auto w-full lg:w-2/3"
            >
              <div>
                <label
                  htmlFor="firstname"
                  className="block text-sm text-gray-500 font-extrabold"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  value={UserUpdateData.firstname}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="lastname"
                  className="block text-sm text-gray-500 font-extrabold"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  value={UserUpdateData.lastname}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-500 font-extrabold"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={UserUpdateData.email}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="mobile"
                  className="block text-sm text-gray-500 font-extrabold"
                >
                  Mobile
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={UserUpdateData.mobile}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Update Details
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminUpdate;
