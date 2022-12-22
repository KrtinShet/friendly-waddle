import { createSlice } from '@reduxjs/toolkit';

import { loadApp } from '../index';

const initialState = {
  accounts: [],
  currentaccount: null,
  mnemonic: null,
  loading: false,
  error: null,
  accountsLength: 0,
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadApp.fulfilled, (state, action) => {
      const { accounts, currentaccount, mnemonic } = action.payload;
      state.accounts = accounts;
      state.currentaccount = currentaccount;
      state.mnemonic = mnemonic;
      state.accountsLength = accounts.length;
    });
  },
});

export default accountSlice;
