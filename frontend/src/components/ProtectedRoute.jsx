import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Spinner from './Spinner';

const ProtectedRoute = ({ children }) => {
  const { isAdmin, authLoading } = useAuth();

  if (authLoading) return <Spinner fullScreen />;
  if (!isAdmin) return <Navigate to="/admin" replace />;

  return children;
};

export default ProtectedRoute;
