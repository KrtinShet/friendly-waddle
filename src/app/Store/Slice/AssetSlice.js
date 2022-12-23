import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  assets: [],
  loading: false,
  error: null,
  assetsLength: 0,
};
const assetSlice = createSlice({
  name: 'asset',
  initialState,
  reducers: {},
});

export default assetSlice;
