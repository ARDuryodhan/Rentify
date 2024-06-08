import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../Assets/Images/loginImg.png";
import { useAuth } from "../Store/Store-Auth";
import { toast } from "react-toastify";

function Login() {
  const LoginURL = "http://localhost:5000/api/auth/login";

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { storetokenInLS } = useAuth();
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(user);
    try {
      const response = await fetch(LoginURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const responseData = await response.json();
      if (response.ok) {
        toast.success("Login successfully");
        storetokenInLS(responseData.token);
        setUser({ email: "", password: "" });
        // console.log(responseData);
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
      <div className="login-section p-3 ">
        <div className="container grid grid-cols-2 items-center p-2 m-auto gap-4">
          <div className="signImg">
            <img src={loginImg} alt="login" />
          </div>
          <div className="forms ">
            <h2 className="mb-3 pb-1 item-center text-3xl font-extrabold text-gray-900">
              Login
            </h2>
            <form
              className="space-y-6  bg-slate-200 p-4 rounded-md w-[25rem]"
              onSubmit={handleSubmit}
            >
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
                    value={user.email}
                    onChange={handleInput}
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={user.password}
                    onChange={handleInput}
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                >
                  Sign in
                </button>
              </div>
              <div className="item-center">
                <p>
                  Don&apos;t have an account?
                  <Link
                    to={"/register"}
                    className="font-bold hover:underline cursor-pointer text-blue-500"
                  >
                    {" "}
                    Signup
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

export default Login;
