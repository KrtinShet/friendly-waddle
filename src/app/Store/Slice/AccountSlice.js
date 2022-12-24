import { createSlice } from '@reduxjs/toolkit';
import { decrypt } from './../../utils';
import {
  createNewAccount,
  createNewMnemonic,
  isValidMenmonic,
} from './../../lib/AccountManager';

const initialState = {
  accounts: {},
  currentAccountIndex: 0,
  currentAccount: null,
  mnemonic: null,
  loading: false,
  error: null,
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    createMnemonic: (state, action) => {
      state.mnemonic = createNewMnemonic();
    },
    importMnemonic: (state, action) => {
      const { mnemonic } = action.payload;
      if (isValidMenmonic(mnemonic)) {
        state.mnemonic = mnemonic;
      } else {
        state.error = 'Invalid mnemonic';
      }
    },
    addAccount: (state, action) => {
      let decryptedMnemonic;
      const { password } = action.payload;

      if (
        typeof state.mnemonic !== 'string' &&
        typeof state.mnemonic === 'object'
      ) {
        decryptedMnemonic = decrypt(state.mnemonic, password);
      } else {
        decryptedMnemonic = state.mnemonic;
      }
      const account = createNewAccount(
        decryptedMnemonic,
        state.currentAccountIndex + 1
      );

      state.currentAccountIndex += 1;
      state.currentAccount = account;
      state.accounts[account.id] = account;
    },
  },
  extraReducers: (builder) => {},
});

export const { createMnemonic, importMnemonic, addAccount } =
  accountSlice.actions;
export default accountSlice;
