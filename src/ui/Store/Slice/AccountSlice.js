import { createSlice } from '@reduxjs/toolkit';

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
});

export default accountSlice;
