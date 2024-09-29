import { useEffect, useState, useMemo } from 'react';
import { getFirestore, collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { app } from '../../../../firebaseConfig';
import { CSVLink } from 'react-csv';
import { FaFilter } from 'react-icons/fa';
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FiLoader } from 'react-icons/fi';

Modal.setAppElement('#root');

const AdminPreRegistrations = () => {
  const [preRegistrations, setPreRegistrations] = useState([]);
  const [filteredRegistrations, setFilteredRegistrations] = useState([]);
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
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    const fetchPreRegistrations = async () => {
      const firestore = getFirestore(app);
      try {
        const querySnapshot = await getDocs(collection(firestore, 'preRegistrations'));
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setPreRegistrations(data);
        setFilteredRegistrations(data);
      } catch (error) {
        console.error("Error fetching pre-registrations: ", error);
      } finally {
        setFetching(false);
      }
    };

    fetchPreRegistrations();
  }, []);

  // Filter logic
  useEffect(() => {
    let filtered = preRegistrations;

    if (startDate) {
      filtered = filtered.filter(registration => 
        new Date(registration.timestamp.seconds * 1000) >= startDate
      );
    }

    if (endDate) {
      filtered = filtered.filter(registration => 
        new Date(registration.timestamp.seconds * 1000) <= endDate
      );
    }

    if (searchTerm) {
      filtered = filtered.filter(registration =>
        registration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        registration.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        registration.phoneNumber.includes(searchTerm)
      );
    }

    if (locationFilter) {
      filtered = filtered.filter(registration => 
        registration.location.toLowerCase().includes(locationFilter.toLowerCase())
      );
    }

    setFilteredRegistrations(filtered);
    setCurrentPage(1);
  }, [startDate, endDate, searchTerm, locationFilter, preRegistrations]);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = useMemo(() => filteredRegistrations.slice(indexOfFirstItem, indexOfLastItem), [filteredRegistrations, indexOfFirstItem, indexOfLastItem]);
  const totalPages = Math.ceil(filteredRegistrations.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const handleFilterModalOpen = () => {
    setFilterModalIsOpen(true);
  };

  const handleFilterModalClose = () => {
    setFilterModalIsOpen(false);
  };

  const handleDeleteModalOpen = (id) => {
    setDeletingId(id);
    setDeleteModalIsOpen(true);
  };

  const handleDeleteModalClose = () => {
    setDeleteModalIsOpen(false);
    setDeletingId(null);
  };

  const handleFilterReset = () => {
    setStartDate(null);
    setEndDate(null);
    setSearchTerm('');
    setLocationFilter('');
  };

  const handleDelete = async () => {
    setLoading(true);
    const firestore = getFirestore(app);
    try {
      await deleteDoc(doc(firestore, 'preRegistrations', deletingId));
      setPreRegistrations(prev => prev.filter(registration => registration.id !== deletingId));
      setFilteredRegistrations(prev => prev.filter(registration => registration.id !== deletingId));
      handleDeleteModalClose();
    } catch (error) {
      console.error("Error deleting document: ", error);
    } finally {
      setLoading(false);
    }
  };

  // CSV headers
  const headers = [
    { label: "Name", key: "name" },
    { label: "Email", key: "email" },
    { label: "Phone Number", key: "phoneNumber" },
    { label: "Location", key: "location" },
    { label: "Timestamp", key: "timestamp" }
  ];

  // Convert timestamp to readable format for CSV
  const csvData = filteredRegistrations.map(item => ({
    ...item,
    timestamp: new Date(item.timestamp.seconds * 1000).toLocaleString()
  }));

  return (
    <div className="relative overflow-x-auto p-4">
      {fetching ? (
        <div className="flex justify-center items-center h-64">
          <FiLoader className="animate-spin text-3xl" />
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Pre-Registrations</h2>
          </div>
          <div className="flex justify-between items-center mb-4">
            <CSVLink 
              data={csvData} 
              headers={headers} 
              filename={"pre-registrations.csv"}
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
          <Modal 
            isOpen={filterModalIsOpen}
            onRequestClose={handleFilterModalClose}
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
              <button onClick={handleFilterReset} className="text-red-500">Reset Filters</button>
              <button onClick={handleFilterModalClose} className="bg-blue-500 text-white px-4 py-2 rounded">Apply Filters</button>
            </div>
          </Modal>
          <table className="min-w-full bg-white text-center">
            <thead>
              <tr className="w-full bg-gray-200 text-gray-700">
                <th className="py-2 px-4 border">Name</th>
                <th className="py-2 px-4 border">Email</th>
                <th className="py-2 px-4 border">Phone Number</th>
                <th className="py-2 px-4 border">Location</th>
                <th className="py-2 px-4 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((registration) => (
                <tr key={registration.id} className="border-b hover:bg-gray-100">
                  <td className="py-2 px-4">{registration.name}</td>
                  <td className="py-2 px-4">{registration.email}</td>
                  <td className="py-2 px-4">{registration.phoneNumber}</td>
                  <td className="py-2 px-4">{registration.location}</td>
                  <td className="py-2 px-4">
                    <button 
                      onClick={() => handleDeleteModalOpen(registration.id)} 
                      className="text-red-500 hover:text-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredRegistrations.length > itemsPerPage && (
            <div className="flex justify-between mt-4">
              <button onClick={handlePrevPage} disabled={currentPage === 1} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Prev
              </button>
              <span>Page {currentPage} of {totalPages}</span>
              <button onClick={handleNextPage} disabled={currentPage === totalPages} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Next
              </button>
            </div>
          )}
        </>
      )}
      <Modal 
        isOpen={deleteModalIsOpen}
        onRequestClose={handleDeleteModalClose}
        contentLabel="Delete Confirmation"
        className="bg-white p-8 rounded shadow-lg max-w-md mx-auto my-20"
      >
        <h2 className="text-lg font-bold mb-4">Are you sure you want to delete this registration?</h2>
        <div className="flex justify-between">
          <button onClick={handleDeleteModalClose} className="text-gray-500">Cancel</button>
          <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded">
            {loading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default AdminPreRegistrations;
