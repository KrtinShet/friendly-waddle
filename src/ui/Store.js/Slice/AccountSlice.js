import { createSlice } from '@reduxjs/toolkit';

export const buildFrom = (
  initialState = {
    accounts: [],
    currentaccount: null,
    loading: false,
    error: null,
    accountsLength: 0,
  }
) => {
  const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
      addAccount: (state, action) => {
        const { accountID } = action.payload;
        state.accounts.push(accountID);
        state.accountsLength = state.accounts.length;
      },
    },
  });

  return accountSlice;
};
