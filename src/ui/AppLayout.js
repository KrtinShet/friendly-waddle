import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';

import ProtectedRoutes from './Components/ProtectedRoutes';

import WelcomePage from './Routes/WelcomePage';
import ImportWalletPage from './Routes/ImportWalletPage';
import CreateWalletPage from './Routes/CreateWalletPage';
import BuyPage from './Routes/BuyPage';
import EnterRecoveryPhrasePage from './Routes/EnterRecoveryPhrase';
import LoginPage from './Routes/LoginPage';
import NetworksPage from './Routes/NetworksPage';
import P2PPage from './Routes/P2PPage';
import SignOutPage from './Routes/SignOutPage';
import SignupPage from './Routes/SignupPage';
import TransferPage from './Routes/TransferPage';
import TransferPageList from './Routes/TransferPageList';
import VerifyRecoverPage from './Routes/VerifyRecoveryPage';
import WalletHomePage from './Routes/WalletHome';
import ProfilePage from './Routes/ProfilePage';
import Receivepage from './Routes/ReceivePage';
import ConfirmTransfer from './Routes/ConfirmTransfer';
import ShowRecoveryPage from './Routes/ShowRecoveryPage';
import SecurityPrivacyPage from './Routes/SecurityPrivacyPage';
import SaveRecoveryPage from './Routes/SaveRecoveryPhaseExtended';
import CreateNewAccount from './Routes/CreateNewAccount';

const AppLayout = () => {
  return (
    <>
      <CssBaseline />
      <Router>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/profilePage" element={<ProfilePage />} />
            <Route path="/" element={<WalletHomePage />} />
            <Route path="/wallet" element={<WalletHomePage />} />
            <Route path="/wallet/buy" element={<BuyPage />} />
            <Route path="/wallet/recieve" element={<Receivepage />} />
            <Route path="/wallet/transfer" element={<TransferPage />} />
            <Route path="/signout" element={<SignOutPage />} />
            <Route path="/p2p" element={<P2PPage />} />
            <Route path="/newAccount" element={<CreateNewAccount />} />
            <Route
              path="/wallet/transfer/list"
              element={<TransferPageList />}
            />
            <Route path="/profile/security" element={<SecurityPrivacyPage />} />
            <Route path="/profile/networkPage" element={<NetworksPage />} />
          </Route>
          <Route path="/confirmTransfer" element={<ConfirmTransfer />} />
          <Route path="/showRecovery" element={<ShowRecoveryPage />} />
          <Route path="/saveRecovery" element={<SaveRecoveryPage />} />
          <Route path="/welcomePage" element={<WelcomePage />} />
          <Route path="/createWallet" element={<CreateWalletPage />} />
          <Route path="/importWallet" element={<ImportWalletPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/verifyRecovery" element={<VerifyRecoverPage />} />
          <Route path="/enterRecovery" element={<EnterRecoveryPhrasePage />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppLayout;
