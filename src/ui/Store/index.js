import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import sessionStorage from 'redux-persist/es/storage/session';
import logger from 'redux-logger';

import AccountSlice from './Slice/AccountSlice';
import AssetSlice from './Slice/AssetSlice';
import AuthSlice from './Slice/AuthSlice';
import NetworkSlice from './Slice/NetworkSlice';
import TransactionSlice from './Slice/TransactionSlice';

const rootReducer = combineReducers({
  account: AccountSlice.reducer,
  asset: AssetSlice.reducer,
  auth: AuthSlice.reducer,
  network: NetworkSlice.reducer,
  transaction: TransactionSlice.reducer,
});

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: sessionStorage,
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

const persistor = persistStore(store);

export { store, persistor };
