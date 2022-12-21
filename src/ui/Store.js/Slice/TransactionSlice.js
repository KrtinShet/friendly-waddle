import { createSlice } from '@reduxjs/toolkit';

export const buildFrom = (
  initialState = {
    pendingTransactions: [],
    completedTransactions: [],
    transactionMap: new Map(),
    loading: false,
    error: null,
  }
) => {
  const transactionSlice = createSlice({
    name: 'transaction',
    initialState,
    reducers: {
      addTransaction: (state, action) => {
        const { hash, transaction } = action.payload;
        state.transactionMap.set(hash, transaction);
        state.pendingTransactions.push(hash);
      },
    },
  });

  return transactionSlice;
};
