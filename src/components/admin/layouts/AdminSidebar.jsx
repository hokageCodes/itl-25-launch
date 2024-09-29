import { Link } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { FaUserFriends, FaRegListAlt, FaUser, FaHandshake, FaSignOutAlt, FaTachometerAlt } from 'react-icons/fa';  // Icons for sidebar links

const AdminSidebar = () => {
  const { logout } = useAuth();  // Use logout function from AuthContext

  return (
    <aside className="w-52 h-full bg-deepBlue text-white flex flex-col justify-between">
      {/* Sidebar Header */}
      <div className="p-6">
        <h2 className="text-2xl font-bold text-butter">The ITL Conference</h2>
      </div>

      {/* Navigation Links */}
      <nav className="mt-6">
        <ul className="space-y-4">
          {/* Dashboard Overview */}
          <li className="flex items-center px-6 py-3 hover:bg-wine hover:text-butter transition-colors duration-300">
            <FaTachometerAlt className="mr-4 text-lg" />
            <Link to="/admin" className="text-lg font-medium">Dashboard Overview</Link>
          </li>

          {/* Volunteers */}
          <li className="flex items-center px-6 py-3 hover:bg-wine hover:text-butter transition-colors duration-300">
            <FaUserFriends className="mr-4 text-lg" />
            <Link to="/admin/submissions/volunteers" className="text-lg font-medium">Volunteers</Link>
          </li>

          {/* Registrations */}
          <li className="flex items-center px-6 py-3 hover:bg-wine hover:text-butter transition-colors duration-300">
            <FaRegListAlt className="mr-4 text-lg" />
            <Link to="/admin/submissions/registrations" className="text-lg font-medium">Registrations</Link>
          </li>

          {/* Nominations */}
          <li className="flex items-center px-6 py-3 hover:bg-wine hover:text-butter transition-colors duration-300">
            <FaUser className="mr-4 text-lg" />
            <Link to="/admin/submissions/nominations" className="text-lg font-medium">Nominations</Link>
          </li>

          {/* Sponsorship */}
          <li className="flex items-center px-6 py-3 hover:bg-wine hover:text-butter transition-colors duration-300">
            <FaHandshake className="mr-4 text-lg" />
            <Link to="/admin/submissions/sponsorship" className="text-lg font-medium">Sponsorship</Link>
          </li>
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="p-6">
        <button 
          onClick={logout} 
          className="w-full flex items-center justify-center px-4 py-3 bg-wine hover:bg-darkBrown text-white font-semibold rounded-md transition-colors duration-300"
        >
          <FaSignOutAlt className="mr-3" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
