import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import logger from 'redux-logger';

import AccountSlice from './Slice/AccountSlice';
import AssetSlice from './Slice/AssetSlice';
import AuthSlice from './Slice/AuthSlice';
import BalanceSlice from './Slice/BalanceSlice';
import NetworkSlice from './Slice/NetworkSlice';
import TransactionSlice from './Slice/TransactionSlice';
import CounterSlice from './Slice/CounterSlice';
import { encrypt } from '../utils';

const rootReducer = combineReducers({
  account: AccountSlice.reducer,
  asset: AssetSlice.reducer,
  auth: AuthSlice.reducer,
  network: NetworkSlice.reducer,
  transaction: TransactionSlice.reducer,
  balance: BalanceSlice.reducer,
  counter: CounterSlice.reducer,
});

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: {
      getItem: async (key) => {
        const item = await chrome.storage.session.get(key);
        return item[key];
      },
      setItem: async (key, value) => {
        await chrome.storage.session.set({ [key]: value });
      },
      removeItem: async (key) => {
        await chrome.storage.session.remove(key);
      },
    },
  },
  rootReducer
);

const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});

const persistor = persistStore(store, null, () => {
  const state = store.getState();
  const stateToPersist = {
    account: state.account,
    asset: state.asset,
    auth: {
      ...state.auth,
      isLoggedIn: false,
      password: undefined,
    },
    balance: state.balance,
    network: state.network,
    transaction: state.transaction,
  };

  const encryptedState = encrypt(
    JSON.stringify(stateToPersist),
    state.auth.password
  );

  chrome.storage.local.set({ state: encryptedState });
});

export { store, persistor };
