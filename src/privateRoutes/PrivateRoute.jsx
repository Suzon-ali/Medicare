/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <loading />;
  }

  if (user) {
    return children;
  }
  return <Navigate to={"/login"} />;
};

export default PrivateRoute;
