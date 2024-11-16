import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";
import Spiner from "../components/Spiner";

const PrivateRoutes = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  if (loading) return <Spiner/>;
  if (user) {
    return <div>{children}</div>;
  }
  return <Navigate to="/auth/login"></Navigate>;
};

export default PrivateRoutes;
