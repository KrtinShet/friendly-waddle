import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoutes = () => {
  const { isLoggedIn, isSignedUp } = useSelector((state) => state.auth);
  let to;

  if (!isLoggedIn && !isSignedUp) to = '/welcomePage';
  if (!isLoggedIn && isSignedUp) to = '/login';
  return isLoggedIn ? <Outlet /> : <Navigate to={to} />;
};

export default ProtectedRoutes;
