import { createSlice } from '@reduxjs/toolkit';

const initalState = {
  network: {},
  loading: false,
  error: null,
};

const networkSlice = createSlice({
  name: 'network',
  initialState: initalState,
  reducers: {},
});

export default networkSlice;
