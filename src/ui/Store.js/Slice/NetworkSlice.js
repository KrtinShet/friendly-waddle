import { createSlice } from '@reduxjs/toolkit';

export const buildFrom = (
  initalState = {
    network: [],
    loading: false,
    error: null,
  }
) => {
  const networkSlice = createSlice({
    name: 'network',
    initialState: initalState,
    reducers: {},
  });
  return networkSlice;
};
