import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, { payload, type }) => {
      state.user = payload;
    },
  },
});

export const { setUser: setUserAction } = authSlice.actions;

export default authSlice.reducer;
