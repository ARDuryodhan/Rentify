import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { MdAddHomeWork } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { AiOutlineLogin } from "react-icons/ai";
import logo from "../Assets/Images/brand_logo.png";
import { useAuth } from "../Store/Store-Auth";
import { useState } from "react";

function Header() {
  const { isLoggedIn } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
 

    <header className="fixed top-0 w-full h-16 p-5 shadow-lg bg-gray-800 items-center z-50" id="header">
      <div className="container mx-auto h-full flex justify-between items-center px-4 sm:px-7">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="max-w-[9rem] sm:max-w-[9rem] md:max-w-[9rem] lg:max-w-[9rem] xl:max-w-[10rem]"
          />
        </Link>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div
          className={`md:flex md:items-center transition-all duration-300 ${
            menuOpen ? "block" : "hidden"
          } absolute md:relative top-16 md:top-auto left-0 w-full md:w-auto bg-gray-800 md:bg-transparent z-50 md:z-auto `}
        >
          <ul className="flex flex-col md:flex-row justify-evenly gap-4 sm:gap-6 md:gap-8 lg:gap-10 text-white text-sm sm:text-md font-bold uppercase p-4 md:p-0">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              <li className="hover:scale-95 transition-all">Home</li>
            </Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              <li className="hover:scale-95 ">About Us</li>
            </Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              <li className="hover:scale-95 ">Contact Us</li>
            </Link>
            <Link to="/user-profile" onClick={() => setMenuOpen(false)}>
              <li className="flex items-center hover:scale-95 ">
                <FaUserCircle className="text-white text-xl sm:text-2xl mr-1" />
                <span className="text-xs">Profile</span>
              </li>
            </Link>
            <Link to="/property-form" onClick={() => setMenuOpen(false)} className="">
              <li className="relative flex items-center hover:scale-95 ">
                <MdAddHomeWork className="text-white text-xl sm:text-2xl mr-1" />
                <span className="text-xs">Add Your Property</span>
              </li>
            </Link>
            {isLoggedIn ? (
              <Link to="/logout" onClick={() => setMenuOpen(false)}>
                <li className="flex text-white font-bold hover:scale-95  items-center">
                  <RiLogoutCircleRLine className="text-white text-xl sm:text-2xl mr-1" />
                  <span className="text-xs">Logout</span>
                </li>
              </Link>
            ) : (
              <Link to="/login" onClick={() => setMenuOpen(false)}>
                <li className="flex text-white font-bold hover:scale-95  items-center">
                  <AiOutlineLogin className="text-white text-xl sm:text-2xl mr-1" />
                  <span className="text-xs">Login</span>
                </li>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
