import { useAuth } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';  // User icon

const AdminHeader = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/admin-login');
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <header className="bg-deepBlue text-white px-6 py-4 flex justify-between items-center shadow-lg">
      {/* Admin Dashboard Title */}
      <h1 className="text-2xl font-bold text-butter">Admin Dashboard</h1>
      
      {/* User Info & Logout */}
      <div className="flex items-center space-x-6">
        {/* User Info */}
        <div className="flex items-center space-x-3">
          <FaUserCircle className="text-3xl text-cream" />
          <div className="text-right">
            <p className="text-lg font-medium">{currentUser?.displayName}</p>
            <p className="text-sm text-cream">{currentUser?.email}</p>
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="px-4 py-2 text-sm bg-wine hover:bg-darkBrown text-white font-semibold rounded-md transition-colors duration-300"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default AdminHeader;
