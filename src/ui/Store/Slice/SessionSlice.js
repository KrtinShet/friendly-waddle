import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  session: null,
  loading: false,
  error: null,
};
const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    addSession: (state, action) => {
      const { session } = action.payload;
      state.session = session;
    },
  },
});
export default sessionSlice;
