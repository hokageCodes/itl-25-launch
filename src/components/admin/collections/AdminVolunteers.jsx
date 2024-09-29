import { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { app } from '../../../../firebaseConfig';
import { CSVLink } from 'react-csv';
import { FaFilter, FaTrash } from 'react-icons/fa';
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-toastify';

Modal.setAppElement('#root');

const AdminVolunteersSubmissions = () => {
  const [volunteerSubmissions, setVolunteerSubmissions] = useState([]);
  const [filteredSubmissions, setFilteredSubmissions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const fetchVolunteerSubmissions = async () => {
      const firestore = getFirestore(app);
      try {
        const querySnapshot = await getDocs(collection(firestore, 'volunteersSubmissions'));
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setVolunteerSubmissions(data);
        setFilteredSubmissions(data);
      } catch (error) {
        toast.error("Error fetching submissions: " + error.message);
      }
    };

    fetchVolunteerSubmissions();
  }, []);

  useEffect(() => {
    let filtered = volunteerSubmissions;

    if (startDate) {
      filtered = filtered.filter(submission => 
        new Date(submission.timestamp.seconds * 1000) >= startDate
      );
    }

    if (endDate) {
      filtered = filtered.filter(submission => 
        new Date(submission.timestamp.seconds * 1000) <= endDate
      );
    }

    if (searchTerm) {
      filtered = filtered.filter(submission =>
        submission.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        submission.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        submission.phoneNumber.includes(searchTerm)
      );
    }

    if (locationFilter) {
      filtered = filtered.filter(submission => 
        submission.location.toLowerCase().includes(locationFilter.toLowerCase())
      );
    }

    setFilteredSubmissions(filtered);
    setCurrentPage(1);
  }, [startDate, endDate, searchTerm, locationFilter, volunteerSubmissions]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredSubmissions.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredSubmissions.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const handleModalOpen = (id) => {
    setDeleteId(id);
    setModalIsOpen(true);
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
    setDeleteId(null);
  };

  const handleFilterReset = () => {
    setStartDate(null);
    setEndDate(null);
    setSearchTerm('');
    setLocationFilter('');
  };

  const handleDelete = async () => {
    if (!deleteId) return;

    const firestore = getFirestore(app);
    setLoading(true);
    try {
      await deleteDoc(doc(firestore, 'volunteersSubmissions', deleteId));
      setVolunteerSubmissions(volunteerSubmissions.filter(submission => submission.id !== deleteId));
      setFilteredSubmissions(filteredSubmissions.filter(submission => submission.id !== deleteId));
      toast.success("Submission deleted successfully.");
      handleModalClose();
    } catch (error) {
      toast.error("Error deleting submission: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const headers = [
    { label: "Name", key: "name" },
    { label: "Email", key: "email" },
    { label: "Phone Number", key: "phoneNumber" },
    { label: "Location", key: "location" },
    { label: "Committee", key: "committee" }
  ];

  const csvData = filteredSubmissions.map(item => ({
    ...item,
  }));

  return (
    <div className="relative overflow-x-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Volunteer Submissions</h2>
      </div>
      <div className="flex justify-between items-center mb-4">
        <CSVLink 
          data={csvData} 
          headers={headers} 
          filename={"volunteer-submissions.csv"}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Export to CSV
        </CSVLink>
        <button 
          onClick={() => handleModalOpen(null)} 
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          <FaFilter className="mr-2" /> Filters
        </button>
      </div>

      {/* Delete Confirmation Modal */}
      <Modal 
        isOpen={modalIsOpen && deleteId !== null}
        onRequestClose={handleModalClose}
        contentLabel="Confirm Deletion"
        className="bg-white p-8 rounded shadow-lg max-w-md mx-auto my-20"
      >
        <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
        <p className="mb-4">Are you sure you want to delete this submission?</p>
        <div className="flex justify-between">
          <button 
            onClick={handleDelete} 
            className={`px-4 py-2 rounded ${loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'} text-white`}
            disabled={loading}
          >
            {loading ? 'Deleting...' : 'Delete'}
          </button>
          <button 
            onClick={handleModalClose} 
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
          >
            Cancel
          </button>
        </div>
      </Modal>

      {/* Filter Modal */}
      <Modal 
        isOpen={modalIsOpen && deleteId === null}
        onRequestClose={handleModalClose}
        contentLabel="Filter Modal"
        className="bg-white p-8 rounded shadow-lg max-w-md mx-auto my-20"
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
            className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 transition"
          >
            Reset
          </button>
          <button 
            onClick={handleModalClose} 
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Apply
          </button>
        </div>
      </Modal>

      <table className="min-w-full border border-gray-300 mt-4 text-center">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Phone Number</th>
            <th className="p-2 border">Location</th>
            <th className="p-2 border">Committee</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map(submission => (
            <tr key={submission.id} className="hover:bg-gray-50">
              <td className="p-2 border">{submission.name}</td>
              <td className="p-2 border">{submission.email}</td>
              <td className="p-2 border">{submission.phoneNumber}</td>
              <td className="p-2 border">{submission.location}</td>
              <td className="p-2 border">{submission.committee}</td>
              <td className="p-2 border">
                <button 
                  onClick={() => handleModalOpen(submission.id)} 
                  className="text-red-600 hover:text-red-800"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4">
        <button 
          onClick={handlePrevPage} 
          disabled={currentPage === 1} 
          className={`px-4 py-2 bg-gray-300 rounded ${currentPage === 1 && 'cursor-not-allowed'}`}
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button 
          onClick={handleNextPage} 
          disabled={currentPage === totalPages} 
          className={`px-4 py-2 bg-gray-300 rounded ${currentPage === totalPages && 'cursor-not-allowed'}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AdminVolunteersSubmissions;
