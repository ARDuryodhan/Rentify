import { useEffect, useState } from "react";
import { useAuth } from "../Store/Store-Auth";
import avatar from "../Assets/Images/user.png";
import { Link } from "react-router-dom";

function UserProfile() {
  const [username, setUsername] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    role: "",
  });
  const [userData, setUserData] = useState(true);

  const { user } = useAuth();

  useEffect(() => {
    if (userData && user) {
      // console.log(user);
      setUsername({
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        mobile: user.mobile,
        role: user.isAdmin ? "Admin" : "General",
      });
      setUserData(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div className="flex flex-col md:flex-row bg-white p-6 rounded-lg shadow-lg mx-auto mt-4 max-w-screen-lg">
      {/* Left Column */}
      <div className="md:w-1/3 bg-slate-300 rounded-lg py-4 px-4 flex flex-col items-center text-center md:items-start md:border-r-4">
        <div className="flex flex-col items-center mx-auto md:items-start">
          <img
            src={avatar}
            alt="User Avatar"
            className="w-40 h-40 rounded-full object-cover mb-5 bg-gray-950 shadow-md p-1"
          />
          <div className="profilename text-center  w-full">
            <h2 className="text-[3rem] font-extrabold text-blue-950 uppercase drop-shadow-md">
              {username.firstname}
            </h2>
            <h2 className="text-[3rem] -mt-4 font-extrabold text-blue-950 uppercase drop-shadow-md">
              {username.lastname}
            </h2>
          </div>
        </div>
        <div className="bg-slate-100 p-6 rounded-lg w-full shadow mb-6">
          <div className="mb-4 text-left">
            <div className="flex flex-row">
              <div>
                <p className="items-center">
                  <span className="text-gray-700 me-2 font-bold">
                    User Role:
                  </span>
                  <span className="text-sm  font-semibold">
                    {username.role} 
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="md:w-2/3 md:pl-6 mt-6 md:mt-0">
        <div className="bg-slate-100 p-6 rounded-lg shadow mb-6">
          <h3 className="text-lg font-bold mb-2">Contact Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="text-lg font-bold mb-2">First Name</h4>
              <p className="text-gray-700 capitalize">{username.firstname}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="text-lg font-bold mb-2">Last Name</h4>
              <p className="text-gray-700 capitalize">{username.lastname}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="text-lg font-bold mb-2">Mobile</h4>
              <p className="text-gray-700">{username.mobile}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="text-lg font-bold mb-2">Email</h4>
              <p className="text-gray-700">{username.email}</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-100 p-6 rounded-lg shadow">
          <h3 className="text-lg font-bold mb-2">Account Settings</h3>
          <button className="bg-blue-950 text-white px-4 py-2 font-bold rounded-lg shadow-md hover:bg-blue-700">
            Edit Profile
          </button>
          <Link
            to="/logout"
            className="bg-red-500 text-white font-bold px-4 py-2 rounded-lg shadow-md hover:bg-red-700 ml-4"
          >
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
