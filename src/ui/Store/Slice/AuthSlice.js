import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
  isLogged: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export default authSlice;
