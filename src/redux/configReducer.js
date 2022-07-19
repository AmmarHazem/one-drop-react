import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    googleAPIKey: "",
  },
  reducers: {
    setConfig: (state, { payload }) => {
      state.googleAPIKey = payload?.googleAPIKey;
    },
  },
});

export const { setConfig: setConfigAction } = configSlice.actions;

export default configSlice.reducer;
