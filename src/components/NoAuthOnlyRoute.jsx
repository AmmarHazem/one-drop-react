import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const NoAuthOnlyRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth);

  if (user?.id) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default NoAuthOnlyRoute;
