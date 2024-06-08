import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    
    <footer className="bg-slate-100 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-bold text-gray-800">Rentify</h2>
          <p className="text-gray-600 mt-1 font-semibold">
            456 Rentify Towers, Floor 8<br />
            Andheri West
            <br />
            Mumbai, Maharashtra 400058, ,<br />
            INDIA
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-gray-500 text-center md:text-right mb-4 md:mb-0">
            &copy; 2022 Rentify. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link
              to="/privacy-policy"
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
        <div className="flex justify-center mt-4 md:mt-0">
          <Link
            to={"https://www.facebook.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700 mx-2"
          >
            <FaFacebookF />
          </Link>
          <Link
            to={"https://www.twitter.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700 mx-2"
          >
            <FaTwitter />
          </Link>
          <Link
            to={"https://www.instagram.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700 mx-2"
          >
            <FaInstagram />
          </Link>
          <Link
            to={"https://www.linkedin.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700 mx-2"
          >
            <FaLinkedinIn />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
