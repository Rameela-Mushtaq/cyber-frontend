import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.user?.user);

  // Redirect to login if user is not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Render the protected component if user is logged in
  return children;
};

export default ProtectedRoute;
