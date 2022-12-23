import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';

import WalletRouter from './Router/WalletRouter';
import AuthzRouter from './Router/AuthzRouter';
import AuthnRouter from './Router/AuthnRouter';

import ProtectedRoutes from './Components/ProtectedRoutes';

const AppLayout = () => {
  return (
    <>
      <CssBaseline />
      <Router>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<WalletRouter />} />
            <Route path="/authn" element={<AuthnRouter />} />
            <Route path="/authz" element={<AuthzRouter />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default AppLayout;
