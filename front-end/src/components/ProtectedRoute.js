import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.user);
  if (isAuthenticated) {
    return children;
  }
  return <Navigate to="/landing"></Navigate>;
};

export default ProtectedRoute;
