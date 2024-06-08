import { useEffect, useState } from "react";
import { useAuth } from "../Store/Store-Auth";
import { FaEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import confirmedDelteUser from "./confirmedDelteUser";
import Swal from "sweetalert2";


export const AdminUsers = () => {
  const { authorizationToken } = useAuth();
  const [users, setUsers] = useState([]);
  const URL = "http://localhost:5000/api/admin/users";

  const getAllUsersData = async () => {
    try {
      const response = await fetch(URL, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
   
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      getAllUsersData(data);
    } catch (error) {
      console.log(error);
    }
    console.log(id);
  };

  const handleDeleteClick = async (id) => {
    const isConfirmed = await confirmedDelteUser();
    if (isConfirmed) {
      await deleteUser(id);
      Swal.fire({
        title: "Deleted!",
        text: "User has been deleted.",
        icon: "success",
      });
    }
  };


  useEffect(() => {
    getAllUsersData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Admin Users Page</h1>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="w-1/6 px-6 py-3 " scope="col">
                  First Name
                </th>
                <th className="w-1/6 px-6 py-3 " scope="col">
                  Last Name
                </th>
                <th className="w-1/6 px-6 py-3 " scope="col">
                  Phone
                </th>
                <th className="w-1/6 px-6 py-3 " scope="col">
                  Email
                </th>
                <th className="w-1/6 px-6 py-3 text-center  " scope="col">
                  Admin
                </th>
                <th className="w-1/6 px-6 py-3 text-center" scope="col">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white uppercase"
                  >
                    {user.firstName || user.firstname}
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white uppercase"
                  >
                    {user.lastName || user.lastname}
                  </th>
                  <td className="px-6 py-4 text-[15px]">
                    {user.phone || user.mobile}
                  </td>
                  <td className="px-6 py-4 text-[15px]">{user.email}</td>
                  <td className="px-6 py-4 text-[15px] text-center font-bold">
                    {user.isAdmin ? "Yes" : "No"}
                  </td>
                  <td className="px-6 py-4 text-right flex gap-3">
                    <button
                      className="flex  items-center gap-1 font-medium text-center bg-green-400 border border-green-600 text-black dark:text-black hover:bg-green-700 hover:text-white px-6 py-1 rounded-full"
                      title="Update Details"
                    >
                      <FaEdit />
                      Edit
                    </button>
                    <button
                      className="flex  items-center gap-1 font-medium text-center bg-red-400 border border-red-600 text-black dark:text-black hover:bg-red-700 hover:text-white px-6 py-1 rounded-full"
                      title="Delete User"
                      onClick={() => handleDeleteClick (user._id)}
                    >
                      <FaTrashCan />
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
