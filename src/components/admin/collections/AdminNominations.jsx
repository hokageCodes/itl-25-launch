import { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { app } from '../../../../firebaseConfig';
import { CSVLink } from 'react-csv';
import { FaFilter, FaTrashAlt } from 'react-icons/fa';
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

Modal.setAppElement('#root');

const AdminNominations = () => {
  const [nominations, setNominations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [deletingItem, setDeletingItem] = useState(null);
  const [filters, setFilters] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    startDate: null,
    endDate: null
  });
  const [filteredNominations, setFilteredNominations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchNominations = async () => {
      setLoading(true);
      setError('');
      try {
        const firestore = getFirestore(app);
        const querySnapshot = await getDocs(collection(firestore, 'nominationsSubmissions'));
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setNominations(data);
        setFilteredNominations(data);
      } catch (error) {
        console.error("Error fetching nominations:", error);
        setError('Failed to fetch nominations. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchNominations();
  }, []);

  useEffect(() => {
    const filterData = () => {
      return nominations.filter(item => {
        const itemDate = new Date(item.timestamp.seconds * 1000);
        const startDateMatch = !filters.startDate || itemDate >= filters.startDate;
        const endDateMatch = !filters.endDate || itemDate <= filters.endDate;
        const nameMatch = item.formData["Nominee's Name"].toLowerCase().includes(filters.name.toLowerCase());
        const emailMatch = item.formData["Nominee's Email"].toLowerCase().includes(filters.email.toLowerCase());
        const phoneMatch = item.formData["Nominator's Telephone Number"].toLowerCase().includes(filters.phone.toLowerCase());
        const categoryMatch = item.formData['Nomination Category'].toLowerCase().includes(filters.category.toLowerCase());

        return startDateMatch && endDateMatch && nameMatch && emailMatch && phoneMatch && categoryMatch;
      });
    };

    setFilteredNominations(filterData());
  }, [filters, nominations]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const currentItems = filteredNominations.slice(indexOfLastItem - itemsPerPage, indexOfLastItem);
  const totalPages = Math.ceil(filteredNominations.length / itemsPerPage);

  const headers = [
    { label: "Nominator's Name", key: "formData.Nominator's Name" },
    { label: "Nominator's Telephone Number", key: "formData.Nominator's Telephone Number" },
    { label: "Nominator's Email", key: "formData.Nominator's Email" },
    { label: "Nominee's Name", key: "formData.Nominee's Name" },
    { label: "Nominee's Email", key: "formData.Nominee's Email" },
    { label: "Nomination Category", key: "formData.Nomination Category" },
    { label: "Reason(s) for nominating", key: "formData.Reason(s) for nominating" },
    { label: "Web Links and Supporting Documentation", key: "formData.Web Links and Supporting Documentation" },
    { label: "Timestamp", key: "timestamp" }
  ];

  const csvData = filteredNominations.map(item => ({
    ...item,
    timestamp: new Date(item.timestamp.seconds * 1000).toLocaleString()
  }));

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const openDeleteModal = (item) => {
    setDeletingItem(item);
    setDeleteModalIsOpen(true);
  };

  const closeDeleteModal = () => {
    setDeletingItem(null);
    setDeleteModalIsOpen(false);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (name, date) => {
    setFilters(prev => ({ ...prev, [name]: date }));
  };

  const handleFilterReset = () => {
    setFilters({
      name: '',
      email: '',
      phone: '',
      category: '',
      startDate: null,
      endDate: null
    });
  };

  const handleDelete = async () => {
    if (!deletingItem) return;

    setLoading(true);
    setError('');
    try {
      const firestore = getFirestore(app);
      await deleteDoc(doc(firestore, 'nominationsSubmissions', deletingItem.id));
      setNominations(prev => prev.filter(nom => nom.id !== deletingItem.id));
      setFilteredNominations(prev => prev.filter(nom => nom.id !== deletingItem.id));
      closeDeleteModal();
    } catch (error) {
      console.error("Error deleting document:", error);
      setError('Failed to delete nomination. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative overflow-x-auto p-4 max-w-screen-lg mx-auto">
      {error && <div className="text-red-500 mb-4">{error}</div>}

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={deleteModalIsOpen}
        onRequestClose={closeDeleteModal}
        contentLabel="Delete Confirmation Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <h2 className="text-xl font-bold mb-4">Delete Confirmation</h2>
        <p>Are you sure you want to delete this nomination?</p>
        <div className="flex justify-end mt-4">
          <button
            onClick={closeDeleteModal}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 mr-2"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </Modal>

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Nominations</h2>
        <div className="flex items-center">
          <CSVLink 
            data={csvData} 
            headers={headers} 
            filename={"nominations.csv"}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-4"
          >
            Export to CSV
          </CSVLink>
          <button onClick={openModal} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
            <FaFilter />
          </button>
        </div>
      </div>

      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-200">
          <tr>
            {headers.map(header => (
              <th key={header.key} scope="col" className="px-6 py-3">{header.label}</th>
            ))}
            <th scope="col" className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="10" className="px-6 py-4 text-center">Loading...</td>
            </tr>
          ) : (
            currentItems.length > 0 ? (
              currentItems.map(item => (
                <tr key={item.id} className="border-b hover:bg-gray-100">
                  <td className="px-6 py-4">{item.formData["Nominator's Name"]}</td>
                  <td className="px-6 py-4">{item.formData["Nominator's Telephone Number"]}</td>
                  <td className="px-6 py-4">{item.formData["Nominator's Email"]}</td>
                  <td className="px-6 py-4">{item.formData["Nominee's Name"]}</td>
                  <td className="px-6 py-4">{item.formData["Nominee's Email"]}</td>
                  <td className="px-6 py-4">{item.formData["Nomination Category"]}</td>
                  <td className="px-6 py-4">{item.formData["Reason(s) for nominating"]}</td>
                  <td className="px-6 py-4">{item.formData["Web Links and Supporting Documentation"]}</td>
                  <td className="px-6 py-4">{new Date(item.timestamp.seconds * 1000).toLocaleString()}</td>
                  <td className="px-6 py-4 flex space-x-2">
                    <button onClick={() => openDeleteModal(item)} className="text-red-500 hover:text-red-700">
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10" className="px-6 py-4 text-center">No nominations found.</td>
              </tr>
            )
          )}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4">
        <div>
          <button 
            disabled={currentPage === 1} 
            onClick={() => setCurrentPage(prev => prev - 1)} 
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 mr-2"
          >
            Previous
          </button>
          <button 
            disabled={currentPage === totalPages} 
            onClick={() => setCurrentPage(prev => prev + 1)} 
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
          >
            Next
          </button>
        </div>
        <div>
          Page {currentPage} of {totalPages}
        </div>
      </div>

      {/* Filter Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Filter Nominations"
        className="Modal"
        overlayClassName="Overlay"
      >
        <h2 className="text-xl font-bold mb-4">Filter Nominations</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Nominees Name</label>
          <input
            type="text"
            name="name"
            value={filters.name}
            onChange={handleFilterChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Nominee&#39;s Email</label>
          <input
            type="text"
            name="email"
            value={filters.email}
            onChange={handleFilterChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Nominator&#39;s Telephone Number</label>
          <input
            type="text"
            name="phone"
            value={filters.phone}
            onChange={handleFilterChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Nomination Category</label>
          <input
            type="text"
            name="category"
            value={filters.category}
            onChange={handleFilterChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4 flex space-x-4">
          <div className="flex-1">
            <label className="block text-gray-700 mb-1">Start Date</label>
            <DatePicker
              selected={filters.startDate}
              onChange={(date) => handleDateChange('startDate', date)}
              className="w-full p-2 border border-gray-300 rounded"
              dateFormat="yyyy/MM/dd"
            />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700 mb-1">End Date</label>
            <DatePicker
              selected={filters.endDate}
              onChange={(date) => handleDateChange('endDate', date)}
              className="w-full p-2 border border-gray-300 rounded"
              dateFormat="yyyy/MM/dd"
            />
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button 
            onClick={handleFilterReset} 
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 mr-2"
          >
            Reset
          </button>
          <button 
            onClick={closeModal} 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Apply Filters
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default AdminNominations;
