import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { GlobalContext } from "../context/context";

const PrivateRoute = () => {
  const { user, loading } = useContext(GlobalContext);

  if (loading) return <div>Loading...</div>;
  return user ? <Outlet /> : <Navigate to="/account" />;
};

export default PrivateRoute;