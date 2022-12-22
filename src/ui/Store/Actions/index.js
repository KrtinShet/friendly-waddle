import { createAsyncThunk } from '@reduxjs/toolkit';

import sessionManager from './../../../app/lib/SessionManager';

const loadApp = createAsyncThunk('app/load', async () => {
  const session = await sessionManager.load();
  const { accounts, currentaccount, mnemonic } = session;
  return { accounts, currentaccount, mnemonic };
});

export { loadApp };
