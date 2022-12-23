import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoutes = () => {
  let isLoggedIn = true;
  let isSignedUp = true;
  let to;

  // if (!isLoggedIn && !isSignedUp) to = '/welcomePage';
  // if (!isLoggedIn && isSignedUp) to = '/login';
  // return isLoggedIn ? <Outlet /> : <Navigate to={to} />;
  return <Outlet />;
};

export default ProtectedRoutes;
