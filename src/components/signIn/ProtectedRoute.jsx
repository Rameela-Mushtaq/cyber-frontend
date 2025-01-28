import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/auth/userSelectors";

const ProtectedRoute = ({ children }) => {
  const user = useSelector(selectUser);

  // Redirect to login if user is not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Render the protected component if user is logged in
  return children;
};

export default ProtectedRoute;
