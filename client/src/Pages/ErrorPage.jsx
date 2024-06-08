import { Link } from "react-router-dom";

import errorImg from "../Assets/Images/errorImg.png";

function ErrorPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 m-auto">
      <div className="text-center p-8 bg-blue-200 shadow-lg rounded-lg">
        <div className="flex justify-center">
          <img src={errorImg} alt="errorPage" className="w-full max-w-[16rem] " />
        </div>
        <p className="text-2xl text-red-600 font-bold mb-4">Page Not Found</p>
        <p className="text-gray-500 mb-8">
          The page you are looking for might have been removed or is temporarily
          unavailable.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors">
            Go to Homepage
          </Link>
          <Link to="/contact" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors">
            Report Problem
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
