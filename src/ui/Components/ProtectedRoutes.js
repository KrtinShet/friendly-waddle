import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoutes = () => {
  let isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  let isSignedUp = useSelector((state) => state.auth.isSignedUp);
  let to;

  if (!isLoggedIn && !isSignedUp) to = "/welcomePage";
  if (!isLoggedIn && isSignedUp) to = "/login";
  return isLoggedIn ? <Outlet /> : <Navigate to={to} />;
};

export default ProtectedRoutes;
