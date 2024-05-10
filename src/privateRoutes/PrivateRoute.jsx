/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";
import Loading from "../utility/Loaders/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return children;
  }
  return <Navigate to={"/login"} />;
};

export default PrivateRoute;
