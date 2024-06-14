import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Store/Store-Auth";
import signupImg from "../Assets/Images/signupImg.png";
import { useState } from "react";
import { toast } from "react-toastify";

function Signup() {
  const signupURL = "http://localhost:5000/api/auth/register";

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    password: "",
  });

  const navigate = useNavigate();

  const { storetokenInLS } = useAuth();
  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch(signupURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      // console.log("response data : ", response);
      const responseData = await response.json();
      console.log(responseData.extraDetails);

      if (response.ok) {
        storetokenInLS(responseData.token);

        toast.success("registration successfully");
        setUser({
          firstname: "",
          lastname: "",
          email: "",
          mobile: "",
          password: "",
        });
        navigate("/");
      } else {
        toast.error(
          responseData.extraDetails
            ? responseData.extraDetails
            : responseData.message
        );
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <>
      <div className="registration-section p-3 ">
        <div className="title mt-6 mb-7 ">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Signup an account
          </h2>
        </div>
        <div className="container grid grid-cols-2 items-center  p-2 m-auto gap-4">
          <div className="signImg ">
            <img src={signupImg} alt="registration" />
          </div>
          <div className="forms">
            <form
              className="space-y-6 bg-slate-100 p-4 rounded-md"
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
                      value={user.firstname}
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
                      value={user.lastname}
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
                    autoComplete="off"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={user.email}
                    onChange={handleInput}
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-500">
                  Mobile Number
                </label>
                <div className="mt-1">
                  <input
                    id="mobilenumber"
                    name="mobile"
                    type="number"
                    autoComplete="off"
                    value={user.mobile}
                    onChange={handleInput}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Enter your mobile number"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-bold text-gray-500"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="off"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={user.password}
                    onChange={handleInput}
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="terms"
                  className="ml-2 block text-sm text-gray-900"
                >
                  I agree to the
                  <Link
                    to={"/rentifyterms"}
                    className="text-blue-600 hover:text-blue-500"
                  >
                    
                    terms and conditions
                  </Link>
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                >
                  Sign up
                </button>
              </div>
              <div className="item-center">
                <p>
                  Already have an account?
                  <Link
                    to={"/login"}
                    className="font-bold hover:underline cursor-pointer text-blue-500"
                  >
                    
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;