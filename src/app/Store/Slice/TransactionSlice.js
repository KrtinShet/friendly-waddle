import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pendingTransactions: {},
  completedTransactions: {},
  loading: false,
  error: null,
};

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {},
});
export default transactionSlice;
