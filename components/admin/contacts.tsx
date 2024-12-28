"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // For animations

// Type definition for the Contact data
interface Contact {
  _id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  country: string;
  jobTitle: string;
  jobDetails: string;
}

const ContactInfo = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [contactsPerPage] = useState<number>(5); // Pagination: items per page
  const [deleteId, setDeleteId] = useState<string | null>(null); // For confirmation modal

  // Fetch contacts from the API
  const fetchContacts = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/admin/contacts");
      const data = await response.json();
      if (response.ok) {
        setContacts(data);
      } else {
        console.error("Failed to fetch contacts:", data.error);
      }
    } catch (error) {
      console.error("Error fetching contacts:", error);
    } finally {
      setLoading(false);
    }
  };

  // Delete a contact
  const handleDelete = async () => {
    if (!deleteId) return;
    try {
      const response = await fetch(`/api/admin/delete?id=${deleteId}`, {
        method: "DELETE",
      });
      const result = await response.json();
      if (response.ok) {
        setContacts((prev) => prev.filter((contact) => contact._id !== deleteId));
      } else {
        alert(result.error || "Error deleting contact");
      }
    } catch (error) {
      alert("An error occurred while deleting the contact.");
    } finally {
      setDeleteId(null);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // Pagination: Get current contacts
  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentContacts = contacts.slice(indexOfFirstContact, indexOfLastContact);

  return (
    <motion.div
      className="overflow-x-auto shadow-lg rounded-lg bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {loading ? (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900"></div>
          <p>Loading contacts...</p>
        </div>
      ) : contacts.length === 0 ? (
        <div className="text-center py-8 text-gray-600">No contacts found.</div>
      ) : (
        <>
          <table className="min-w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th scope="col" className="px-6 py-3">Name</th>
                <th scope="col" className="px-6 py-3">Email</th>
                <th scope="col" className="px-6 py-3">Phone</th>
                <th scope="col" className="px-6 py-3">Company</th>
                <th scope="col" className="px-6 py-3">Country</th>
                <th scope="col" className="px-6 py-3">Job Title</th>
                <th scope="col" className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentContacts.map((contact) => (
                <motion.tr
                  key={contact._id}
                  className="border-b bg-white hover:bg-gray-50 transition duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <td className="px-6 py-4">{contact.name}</td>
                  <td className="px-6 py-4">{contact.email}</td>
                  <td className="px-6 py-4">{contact.phone}</td>
                  <td className="px-6 py-4">{contact.company}</td>
                  <td className="px-6 py-4">{contact.country}</td>
                  <td className="px-6 py-4">{contact.jobTitle}</td>
                  <td className="px-6 py-4">
                    <button
                      className="text-red-600 hover:text-red-900"
                      onClick={() => setDeleteId(contact._id)}
                    >
                      Delete
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>

          {/* Pagination Controls */}
          <div className="flex justify-between items-center px-6 py-4">
            <button
              disabled={currentPage === 1}
              className={`px-4 py-2 ${currentPage === 1 ? "text-gray-400" : "text-blue-600"}`}
              onClick={() => setCurrentPage((prev) => prev - 1)}
            >
              Previous
            </button>
            <span>Page {currentPage}</span>
            <button
              disabled={indexOfLastContact >= contacts.length}
              className={`px-4 py-2 ${indexOfLastContact >= contacts.length ? "text-gray-400" : "text-blue-600"}`}
              onClick={() => setCurrentPage((prev) => prev + 1)}
            >
              Next
            </button>
          </div>
        </>
      )}

      {/* Delete Confirmation Modal */}
      {deleteId && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <h2 className="text-lg font-semibold">Confirm Delete</h2>
            <p>Are you sure you want to delete this contact?</p>
            <div className="mt-4 flex justify-center space-x-4">
              <button
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                onClick={handleDelete}
              >
                Confirm
              </button>
              <button
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                onClick={() => setDeleteId(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ContactInfo;
