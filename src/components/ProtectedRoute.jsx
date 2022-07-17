import { useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const { user } = useSelector((state) => state.auth);

  if (user?.id) {
    return children;
  }
  return (
    <Navigate
      to="/signup-send-email-verification"
      state={{ next: location }}
      replace
    />
  );
};

export default ProtectedRoute;
