import { NavLink, Outlet } from "react-router-dom";
import { FaUsersLine } from "react-icons/fa6";
import { BsHousesFill } from "react-icons/bs";
import { RiMessage3Fill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";

export const AdminPanel = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav className="navbar px-3 text-lg">
            <ul className="flex gap-8">
              <li>
                <NavLink
                  className="flex items-center gap-1 text-[1.3rem] font-bold"
                  to={"/admin/users"}
                >
                  <FaUsersLine />
                  Users
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center gap-1 text-[1.3rem] font-bold"
                  to={"/admin/properties"}
                >
                  <BsHousesFill />
                  Properties
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center gap-1 text-[1.3rem] font-bold"
                  to={"/admin/contacts"}
                >
                  <RiMessage3Fill />
                  Contacts
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center gap-1 text-[1.3rem] font-bold"
                  to={"/"}
                >
                  <FaHome />
                  Home
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};
