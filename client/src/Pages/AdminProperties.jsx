import { useEffect, useState } from "react";
import { useAuth } from "../Store/Store-Auth";
import confirmedDelteProperty from "./confirmedDelteUser";
import Swal from "sweetalert2";

import { FaTrashCan } from "react-icons/fa6";
import { BsCurrencyRupee } from "react-icons/bs";

import photo from "../Assets/Images/sampleHoue.jpg";

export const AdminProperties = () => {
  const { authorizationToken } = useAuth();
  const [properties, setProperties] = useState([]);
  const [propertyListCount, setPropertyListCount] = useState(0);
  const URL = "http://localhost:5000/api/admin/properties";

  const getAllPropertiesData = async () => {
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
      setProperties(data);
      console.log(data);
      if (data.length > 9) {
        setPropertyListCount("9+");
      }else{
        setPropertyListCount(data.length.toString());
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProptery = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/properties/delete/${id}`,
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
      getAllPropertiesData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    console.log(id);
  };

  const handleDeleteClick = async (id) => {
    const isConfirmed = await confirmedDelteProperty();
    if (isConfirmed) {
      await deleteProptery(id);
      Swal.fire({
        title: "Deleted!",
        text: "This Proptery has been deleted.",
        icon: "success",
      });
    }
  };

  useEffect(() => {
    getAllPropertiesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="property-details" className="min-h-screen">
      <div className="flex justify-between items-center px-3">
        <h1 className="text-2xl font-bold mb-4 text-white  pt-3 indent-3">
          Properties Page
        </h1>
        <p className="flex  gap-1 text-white px-4 text-center">
          Total Properties Listed:
          <span className="bg-red-600 text-whtie  w-4 h-4 rounded-full p-3 flex items-center justify-center">
            {propertyListCount}
          </span>
        </p>
      </div>
      <div id="accordion-open" data-accordion="open" className="mx-5 my-3">
        {properties
          .slice()
          .reverse()
          .map((property) => (
            <div key={property._id} className="mb-2">
              <div className="properties-container lg:flex lg:border lg:box-content lg:gap-3">
                <div className="left-side lg:w-[70rem] lg:h-full p-3">
                  <img
                    src={photo}
                    alt="property-img"
                    className="w-full h-auto"
                  />
                </div>
                <div className="right-side w-full h-full p-3">
                  <table className="w-full text-sm text-left">
                    <tbody>
                      <tr className="border-b border-gray-700">
                        <th className="w-1/4 text-orange-400 font-bold capitalize py-2">
                          Title:
                        </th>
                        <td className="text-white py-2 font-semibold">
                          {property.title}
                        </td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <th className="w-1/4 text-orange-400 font-bold capitalize py-2">
                          Description:
                        </th>
                        <td className="text-white py-2">
                          {property.description}
                        </td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <th className="w-1/4 text-orange-400 font-bold capitalize py-2">
                          Address:
                        </th>
                        <td className="text-white py-2">{property.address}</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <th className="w-1/4 text-orange-400 font-bold capitalize py-2">
                          Bedrooms:
                        </th>
                        <td className="text-white py-2">{property.bedrooms}</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <th className="w-1/4 text-orange-400 font-bold capitalize py-2">
                          Price:
                        </th>
                        <td className="text-white py-2 flex items-center">
                          <BsCurrencyRupee /> {property.rent}/-
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="flex justify-end mt-10">
                    <button
                      className="flex justify-center items-center gap-1 font-medium bg-red-700 border border-red-600 text-white hover:bg-red-400 hover:text-black w-full px-12 py-2 rounded"
                      title="Delete Property"
                      onClick={() => handleDeleteClick(property._id)}
                    >
                      <FaTrashCan />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
