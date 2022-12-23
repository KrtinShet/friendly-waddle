import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    error: null,
    balances: {},

};

const balanceSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export default balanceSlice;
