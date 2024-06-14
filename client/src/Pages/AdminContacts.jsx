import { useEffect, useState } from "react";
import { useAuth } from "../Store/Store-Auth";
import Swal from "sweetalert2";
import confirmedDelteUser from "./confirmedDelteUser";

import { SiImessage } from "react-icons/si";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { FaTrashCan } from "react-icons/fa6";

export const AdminContacts = () => {
  const { authorizationToken } = useAuth();
  const [contacts, setContacts] = useState([]);
  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);
  const URL = "http://localhost:5000/api/admin/contacts";

  const getAllContactsData = async () => {
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
      setContacts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContact = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/contacts/delete/${id}`,
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
      getAllContactsData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    console.log(id);
  };

  const handleDeleteClick = async (id) => {
    const isConfirmed = await confirmedDelteUser();
    if (isConfirmed) {
      await deleteContact(id);
      Swal.fire({
        title: "Deleted!",
        text: "Contact message has been deleted.",
        icon: "success",
      });
    }
  };

  const toggleAccordion = (index) => {
    setOpenAccordionIndex(openAccordionIndex === index ? null : index);
  };

  useEffect(() => {
    getAllContactsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="contact-details" className="h-[100vh]">
      <h1 className="text-2xl font-bold mb-4 text-white px-4 pt-3 indent-3">Contacts Page</h1>

      <div id="accordion-open" data-accordion="open" className="mx-5 my-3">
        {contacts
          .slice()
          .reverse()
          .map((contact, index) => (
            <div key={contact._id} className="mb-2">
              <h2 id={`accordion-open-heading-${index}`} className="">
                <button
                  type="button"
                  className="flex items-center justify-between w-full bg-slate-300 px-3 py-1 font-medium rtl:text-right text-black border border-b-1 border-gray-200 rounded-md rounded-b-none bg-dark  hover:bg-gray-100 hover:text-white dark:hover:bg-gray-600 transition-all gap-3"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={openAccordionIndex === index}
                  aria-controls={`accordion-open-body-${index}`}
                >
                  <span className="flex items-center text-[1.1rem] text-black uppercase">
                    <SiImessage className="me-2 text-black" />
                    {contact.firstname} {contact.lastname}
                  </span>
                  {openAccordionIndex === index ? (
                    <TiArrowSortedUp className="text-[2rem]" />
                  ) : (
                    <TiArrowSortedDown className="text-[2rem]" />
                  )}
                </button>
              </h2>
              <div
                id={`accordion-open-body-${index}`}
                className={`${openAccordionIndex === index ? "" : "hidden"} mb-4`}
                aria-labelledby={`accordion-open-heading-${index}`}
              >
                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 rounded-b-lg px-8">
                  <p className="mb-2 text-white">
                    <span className="font-bold">Email:</span> {contact.email}
                  </p>
                  <p className="mb-2 text-white text-[1.2rem]">
                    <span className="font-bold">Message:</span> {contact.message}
                  </p>
                  <div className="flex justify-end">
                    <button
                      className="flex items-center gap-1 font-medium text-center bg-red-700 border border-red-600 text-white hover:bg-red-400 hover:text-black px-[3rem] py-[7px] rounded"
                      title="Delete Contact us detail"
                      onClick={() => handleDeleteClick(contact._id)}
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
