/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom';
import { useAuth } from './src/context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();
  if (!currentUser) {
    return <Navigate to="/admin-login" />;
  }
  return children;
};

export default ProtectedRoute;
