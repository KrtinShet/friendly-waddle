/**
 * Reguar Wallet interaction with the POPUP UI
 */

import React from 'react';
import { Route } from 'react-router-dom';

import WelcomePage from './../Routes/WelcomePage';
import ImportWalletPage from './../Routes/ImportWalletPage';
import CreateWalletPage from './../Routes/CreateWalletPage';
import BuyPage from './../Routes/BuyPage';
import EnterRecoveryPhrasePage from './../Routes/EnterRecoveryPhrase';
import LoginPage from './../Routes/LoginPage';
import NetworksPage from './../Routes/NetworksPage';
import P2PPage from './../Routes/P2PPage';
import SignOutPage from './../Routes/SignOutPage';
import SignupPage from './../Routes/SignupPage';
import TransferAmountPage from './../Routes/TransferAmount';
import TransferPage from './../Routes/TransferPage';
import TransferPageList from './../Routes/TransferPageList';
import VerifyRecoverPage from './../Routes/VerifyRecoveryPage';
import WalletActivityPage from './../Routes/WalletActivityPage';
import WalletHomePage from './../Routes/WalletHome';
import WalletMainPage from './../Routes/WalletMainPage';

const WalletRouter = () => {
  return (
    <Route>
      <Route path="/" element={<WelcomePage />} />
    </Route>
  );
};

export default WalletRouter;
