import { Link } from "react-router-dom";
import errorImg from "../Assets/Images/access-denied.png";

function AdminErrorPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg max-w-md w-full">
        <div className="flex justify-center mb-4">
          <img src={errorImg} alt="Access Denied" className="w-full max-w-[16rem]" />
        </div>
        <p className="text-2xl text-red-600 font-bold mb-4">Access Denied</p>
        <p className="text-gray-500 mb-8">
          You do not have the necessary permissions to view this page. Please contact the administrator if you believe this is a mistake.
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

export default AdminErrorPage;
