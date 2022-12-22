import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { store, persistor } from './Store';

import WalletRouter from './Router/WalletRouter';
import AuthzRouter from './Router/AuthzRouter';
import AuthnRouter from './Router/AuthnRouter';

import WelcomePage from './Routes/WelcomePage';
import CreateWallet from './Routes/CreateWalletPage';
import VerifyRecoveryPage from './Routes/VerifyRecoveryPage';
import SignupPage from './Routes/SignupPage';
import ImportWalletPage from './Routes/ImportWalletPage';
import EnterRecoveryPhrase from './Routes/EnterRecoveryPhrase';
// import WalletMainPage from './Routes/WalletMainPage';
import LoginPage from './Routes/LoginPage';
import ErrorPage from './Routes/ErrorPage';
import ProtectedRoutes from './Components/ProtectedRoutes';
// import BuyPage from './Routes/BuyPage';
// import ReceivePage from './Routes/ReceivePage';
// import TransferPage from './Routes/TransferPage';
// import TransferPageList from './Routes/TransferPageList';
// import TransferAmount from './Routes/TransferAmount';
// import ConfirmTransfer from './Routes/ConfirmTransfer';
import P2PPage from './Routes/P2PPage';
// import ProfilePage from './Routes/ProfilePage';
// import NetworksPage from './Routes/NetworksPage';
// import SecutityPrivacyPage from './Routes/SecutityPrivacyPage';
// import ShowRecoveryPage from './Routes/ShowRecoveryPage';
// import SaveRecoveryPhaseExtended from './Routes/SaveRecoveryPhaseExtended';
// import SignOutPage from './Routes/SignOutPage';
// import CompletedTransferPage from './Routes/CompletedTransferPage';

const tabId = Number(new URLSearchParams(window.location.search).get('tabId'));
const service = new URLSearchParams(window.location.search).get('service');

const AppLayout = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route element={<ProtectedRoutes />}>
              {/* <Route path="/"></Route>
            <Route path="/authn"></Route>
          <Route path="/authz"></Route> */}
              {/* 
                    <Route path="/wallet" element={<WalletMainPage />} />
                    <Route path="/wallet/buy" element={<BuyPage />} />
                    <Route path="/wallet/recieve" element={<ReceivePage />} />
                    <Route path="/wallet/transfer" element={<TransferPage />} />
                    <Route
                    path="/wallet/transfer/list"
                    element={<TransferPageList />}
                    />
                    <Route
                    path="/transferAmount/:asset"
                    element={<TransferAmount />}
                    />
                    <Route
                    path="/confirmTransfer"
                    element={<ConfirmTransfer />}
                    />
                    <Route
                    path="/profile/security"
                    element={<SecutityPrivacyPage />}
                    />
                    <Route path="/profilePage" element={<ProfilePage />} />
                    <Route
                    path="/profile/networkPage"
                    element={<NetworksPage />}
                    />
                    <Route
                    path="/showRecovery"
                    element={<ShowRecoveryPage />}
                    />
                    <Route
                      path="/saveRecovery"
                      element={<SaveRecoveryPhaseExtended />}
                      />
                      <Route path="/signout" element={<SignOutPage />} />
                      <Route
                      path="/completedTransfer"
                      element={<CompletedTransferPage />}
                      />
                    */}
            </Route>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/welcomePage" element={<WelcomePage />} />
            <Route path="/createWallet" element={<CreateWallet />} />
            <Route path="/importWallet" element={<ImportWalletPage />} />
            <Route path="/enterRecovery" element={<EnterRecoveryPhrase />} />
            <Route path="/verifyRecovery" element={<VerifyRecoveryPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/p2p" element={<P2PPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default AppLayout;
