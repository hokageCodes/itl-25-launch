import { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { app } from "../../../../firebaseConfig";
import { saveAs } from "file-saver"; // You can install this using `npm install file-saver`

const db = getFirestore(app);

const AdminNominations = () => {
  const [nominations, setNominations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const [confirmDelete, setConfirmDelete] = useState(null); // For deletion confirmation

  useEffect(() => {
    const fetchNominations = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(db, "nominationSubmissions")
        );
        const nominationsList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setNominations(nominationsList);
      } catch (error) {
        setError("Error fetching nominations");
        console.error("Error fetching nominations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNominations();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "nominationSubmissions", id));
      setNominations((prev) => prev.filter((nomination) => nomination.id !== id));
      setConfirmDelete(null); // Reset confirmation dialog after delete
    } catch (error) {
      console.error("Error deleting nomination:", error);
    }
  };

  const handleExportCSV = () => {
    const headers = [
      "Nominee's Name",
      "Nominee's Email",
      "Nomination Category",
      "Detailed Reasons for Nominating",
      "Supporting Links",
      "Supporting Document",
      "Nominator's Name",
      "Nominator's Email",
      "Nominator's Telephone Number",
    ];

    const data = nominations.map((nomination) => ({
      "Nominee's Name": nomination["Nominee's Name"],
      "Nominee's Email": nomination["Nominee's Email"],
      "Nomination Category": nomination["Nomination Category"],
      "Detailed Reasons for Nominating":
        nomination["Detailed Reasons for Nominating"],
      "Supporting Links": nomination.SupportingLinks || "",
      "Supporting Document": nomination.supportingDocument || "",
      "Nominator's Name": nomination["Nominator's Name"],
      "Nominator's Email": nomination["Nominator's Email"],
      "Nominator's Telephone Number":
        nomination["Nominator's Telephone Number"],
    }));

    const csvContent = [
      headers.join(","), // header row
      ...data.map((row) => Object.values(row).join(",")), // data rows
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "nominations.csv");
  };

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = nominations.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(nominations.length / itemsPerPage);

  if (loading) {
    return <div>Loading nominations...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded shadow-lg max-w-full w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Admin - Nominations
        </h2>

        {/* Export Button */}
        <div className="mb-6 text-right">
          <button
            onClick={handleExportCSV}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Export as CSV
          </button>
        </div>

        {/* Card-Based Layout */}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {currentItems.map((nomination) => (
            <div
              key={nomination.id}
              className="border rounded-lg p-4 shadow-md bg-gray-50"
            >
              <p>
                <strong>Nominee&#39;s Name:</strong> {nomination["Nominee's Name"]}
              </p>
              <p>
                <strong>Nominee&#39;s Email:</strong>{" "}
                {nomination["Nominee's Email"]}
              </p>
              <p>
                <strong>Category:</strong>{" "}
                {nomination["Nomination Category"]}
              </p>
              <p>
                <strong>Reasons:</strong>{" "}
                {nomination["Detailed Reasons for Nominating"]}
              </p>
              <p>
                <strong>Supporting Links:</strong>{" "}
                {nomination.SupportingLinks || "N/A"}
              </p>
              <p>
                <strong>Document:</strong>{" "}
                {nomination.supportingDocument ? (
                  <a
                    href={nomination.supportingDocument}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    View
                  </a>
                ) : (
                  "No Document"
                )}
              </p>
              <p>
                <strong>Nominator&#39;s Name:</strong>{" "}
                {nomination["Nominator's Name"]}
              </p>
              <p>
                <strong>Nominator&#39;s Email:</strong>{" "}
                {nomination["Nominator's Email"]}
              </p>
              <p>
                <strong>Telephone:</strong>{" "}
                {nomination["Nominator's Telephone Number"]}
              </p>
              <button
                onClick={() => setConfirmDelete(nomination.id)}
                className="mt-4 bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="bg-blue-500 text-white px-4 py-2 rounded mx-2"
          >
            Previous
          </button>
          <span className="self-center">{`Page ${currentPage} of ${totalPages}`}</span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="bg-blue-500 text-white px-4 py-2 rounded mx-2"
          >
            Next
          </button>
        </div>

        {/* Confirmation Modal */}
        {confirmDelete && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg">
              <h3 className="text-xl font-bold">Confirm Delete</h3>
              <p>Are you sure you want to delete this nomination?</p>
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => setConfirmDelete(null)}
                  className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleDelete(confirmDelete)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminNominations;
