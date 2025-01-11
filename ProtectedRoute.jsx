/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom';
import { useAuth } from './src/context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const auth = useAuth();

  if (!auth) {
    console.error('useAuth() returned undefined. Make sure AuthProvider is wrapping your app.');
    return <Navigate to="/admin-login" />;
  }

  const { currentUser } = auth;
  if (!currentUser) {
    return <Navigate to="/admin-login" />;
  }
  return children;
};

export default ProtectedRoute;
