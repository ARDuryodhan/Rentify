import { NavLink } from "react-router-dom";
import { FaUsersLine } from "react-icons/fa6";
import { BsFillHouseFill } from "react-icons/bs";
import { RiMessage3Fill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";

export const AdminPanel = () => {
  return (
    <>
      {/* <header className="bg-transparent border border-blue-600 h-screen flex flex-col">
        <div className="container mx-auto px-4 py-6">
          <h4 className="text-white text-center bg-red-600 font-bold py-2">
            Admin Menu
          </h4>
          <nav className="mt-8">
            <ul className="space-y-6 text-gray-300">
              <li className="hover:text-white hover:scale-105 transition">
                <NavLink
                  className="flex items-center gap-2 text-lg font-semibold"
                  to="/admin/users"
                >
                  <FaUsersLine />
                  Users
                </NavLink>
              </li>
              <li className="hover:text-white hover:scale-105 transition">
                <NavLink
                  className="flex items-center gap-2 text-lg font-semibold"
                  to="/admin/properties"
                >
                  <BsFillHouseFill />
                  Properties
                </NavLink>
              </li>
              <li className="hover:text-white hover:scale-105 transition">
                <NavLink
                  className="flex items-center gap-2 text-lg font-semibold"
                  to="/admin/contacts"
                >
                  <RiMessage3Fill />
                  Contacts
                </NavLink>
              </li>
              <li className="hover:text-white hover:scale-105 transition">
                <NavLink
                  className="flex items-center gap-2 text-lg font-semibold"
                  to="/"
                >
                  <FaHome />
                  Home
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header> */}

<header className="bg-gray-800 text-white border-b-4 border-blue-600 h-screen flex flex-col">
      <div className="container mx-auto px-4 py-6">
        <h4 className="text-white text-center bg-red-600 font-bold py-2">
            Admin Menu
          </h4>
        <nav className="pt-5">
          <ul className="space-y-6">
            <li>
              <NavLink
                className="flex items-center gap-2 text-lg font-semibold text-gray-300 hover:text-blue-400"
                activeClassName="text-blue-400"
                to="/admin/users"
              >
                <FaUsersLine className="text-2xl" />
                Users
              </NavLink>
            </li>
            <li>
              <NavLink
                className="flex items-center gap-2 text-lg font-semibold text-gray-300 hover:text-blue-400"
                activeClassName="text-blue-400"
                to="/admin/properties"
              >
                <BsFillHouseFill className="text-2xl" />
                Properties
              </NavLink>
            </li>
            <li>
              <NavLink
                className="flex items-center gap-2 text-lg font-semibold text-gray-300 hover:text-blue-400"
                activeClassName="text-blue-400"
                to="/admin/contacts"
              >
                <RiMessage3Fill className="text-2xl" />
                Contacts
              </NavLink>
            </li>
            <li>
              <NavLink
                className="flex items-center gap-2 text-lg font-semibold text-gray-300 hover:text-blue-400"
                activeClassName="text-blue-400"
                exact
                to="/"
              >
                <FaHome className="text-2xl" />
                Home
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
      {/* <Outlet /> */}
    </>
  );
};
