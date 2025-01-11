import { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { app } from '../../../../firebaseConfig';
import { CSVLink } from 'react-csv';
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FiLoader } from 'react-icons/fi';
import { FaFilter } from 'react-icons/fa';

Modal.setAppElement('#root');

const AdminSponsorships = () => {
  const [sponsorships, setSponsorships] = useState([]);
  const [filteredSponsorships, setFilteredSponsorships] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [filterModalIsOpen, setFilterModalIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch data from Firestore
  useEffect(() => {
    const fetchSponsorships = async () => {
      const firestore = getFirestore(app);
      const querySnapshot = await getDocs(collection(firestore, 'sponsors'));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setSponsorships(data);
      setFilteredSponsorships(data);
    };

    fetchSponsorships();
  }, []);

  // Filter logic
  useEffect(() => {
    let filtered = sponsorships;

    if (startDate) {
      filtered = filtered.filter(sponsorship => 
        new Date(sponsorship.timestamp.seconds * 1000) >= startDate
      );
    }

    if (endDate) {
      filtered = filtered.filter(sponsorship => 
        new Date(sponsorship.timestamp.seconds * 1000) <= endDate
      );
    }

    if (searchTerm) {
      filtered = filtered.filter(sponsorship =>
        sponsorship.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sponsorship.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sponsorship.phoneNumber.includes(searchTerm)
      );
    }

    if (locationFilter) {
      filtered = filtered.filter(sponsorship => 
        sponsorship.location.toLowerCase().includes(locationFilter.toLowerCase())
      );
    }

    setFilteredSponsorships(filtered);
    setCurrentPage(1); // Reset to first page on filter change
  }, [startDate, endDate, searchTerm, locationFilter, sponsorships]);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredSponsorships.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredSponsorships.length / itemsPerPage);

  const handleNextPage = () => setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  const handlePrevPage = () => setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  const handleFilterModalOpen = () => setFilterModalIsOpen(true);
  const handleFilterModalClose = () => setFilterModalIsOpen(false);
  const handleDeleteModalOpen = (id) => { setDeletingId(id); setDeleteModalIsOpen(true); };
  const handleDeleteModalClose = () => { setDeleteModalIsOpen(false); setDeletingId(null); };
  const handleFilterReset = () => { setStartDate(null); setEndDate(null); setSearchTerm(''); setLocationFilter(''); };

  const handleDelete = async () => {
    setLoading(true); // Start loading state
    const firestore = getFirestore(app);
    try {
      // Delete document from Firestore
      await deleteDoc(doc(firestore, 'sponsors', deletingId));

      // Update state to remove deleted sponsorship
      setSponsorships(prev => prev.filter(sponsorship => sponsorship.id !== deletingId));
      setFilteredSponsorships(prev => prev.filter(sponsorship => sponsorship.id !== deletingId));
      handleDeleteModalClose(); // Close the delete confirmation modal
    } catch (error) {
      console.error("Error deleting document: ", error);
    } finally {
      setLoading(false); // End loading state
    }
  };

  // CSV headers
  const headers = [
    { label: "Name", key: "name" },
    { label: "Email", key: "email" },
    { label: "Phone Number", key: "phoneNumber" },
    { label: "Location", key: "location" },
    { label: "SponsorshipLevel", key: "sponsorshipLevel" },
    { label: "Timestamp", key: "timestamp" }
  ];

  // Convert timestamp to readable format for CSV
  const csvData = filteredSponsorships.map(item => ({
    ...item,
    timestamp: new Date(item.timestamp.seconds * 1000).toLocaleString()
  }));

  return (
    <div className="relative overflow-x-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Sponsorships</h2>
        <div className="flex items-center space-x-4">
          <CSVLink 
            data={csvData} 
            headers={headers} 
            filename={"sponsorships.csv"}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Export to CSV
          </CSVLink>
          <button 
            onClick={handleFilterModalOpen} 
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            <FaFilter className="mr-2" /> Filters
          </button>
        </div>
      </div>

      {/* Filter Modal */}
      <Modal 
        isOpen={filterModalIsOpen}
        onRequestClose={handleFilterModalClose}
        contentLabel="Filter Modal"
        className="bg-white p-8 rounded shadow-lg max-w-md mx-auto my-20 -50"
      >
        <h2 className="text-xl font-bold mb-4">Filters</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Search by name, email, phone"
            className="p-2 border border-gray-300 rounded-md shadow-sm w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <input
            type="text"
            placeholder="Filter by location"
            className="p-2 border border-gray-300 rounded-md shadow-sm w-full"
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
          />
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            placeholderText="Start Date"
            className="p-2 border border-gray-300 rounded-md shadow-sm w-full"
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            placeholderText="End Date"
            className="p-2 border border-gray-300 rounded-md shadow-sm w-full"
          />
        </div>
        <div className="flex justify-between mt-4">
          <button 
            onClick={handleFilterReset} 
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Reset
          </button>
          <button 
            onClick={handleFilterModalClose} 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Apply
          </button>
        </div>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={deleteModalIsOpen}
        onRequestClose={handleDeleteModalClose}
        contentLabel="Confirm Delete"
        className="bg-white p-8 rounded shadow-lg max-w-md mx-auto my-20"
      >
        <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
        <p>Are you sure you want to delete this sponsorship?</p>
        <div className="flex justify-between mt-4">
          <button 
            onClick={handleDeleteModalClose} 
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button 
            onClick={handleDelete} 
            className={`px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 ${loading && "opacity-50 cursor-not-allowed"}`} 
            disabled={loading}
          >
            {loading ? <FiLoader className="animate-spin" /> : "Delete"}
          </button>
        </div>
      </Modal>

      {/* Sponsorship Table */}
      <table className="min-w-full border-collapse border border-gray-300 text-center">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Email</th>
            <th className="border border-gray-300 p-2">Phone</th>
            <th className="border border-gray-300 p-2">Level</th>
            <th className="border border-gray-300 p-2">Location</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.length > 0 ? currentItems.map(sponsorship => (
            <tr key={sponsorship.id}>
              <td className="border border-gray-300 p-2">{sponsorship.name}</td>
              <td className="border border-gray-300 p-2">{sponsorship.email}</td>
              <td className="border border-gray-300 p-2">{sponsorship.phoneNumber}</td>
              <td className="border border-gray-300 p-2">{sponsorship.sponsorshipLevel}</td>
              <td className="border border-gray-300 p-2">{sponsorship.location}</td>
              <td className="border border-gray-300 p-2">
                <button 
                  onClick={() => handleDeleteModalOpen(sponsorship.id)} 
                  className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          )) : (
            <tr>
              <td colSpan="6" className="border border-gray-300 p-2 text-center">No sponsorships found</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-between mt-4">
        <button 
          onClick={handlePrevPage} 
          disabled={currentPage === 1} 
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button 
          onClick={handleNextPage} 
          disabled={currentPage === totalPages} 
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AdminSponsorships;
