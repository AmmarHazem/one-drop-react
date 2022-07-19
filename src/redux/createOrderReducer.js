import { createSlice } from "@reduxjs/toolkit";

const createOrderSlice = createSlice({
  name: "createOrder",
  initialState: {
    washType: null,
    address: null,
  },
  reducers: {
    setAddress: (state, { payload }) => {
      state.address = payload;
    },
    setWashType: (state, { payload }) => {
      state.washType = payload;
    },
  },
});

export const { setWashType: setWashTypeAction, setAddress: setAddressAction } =
  createOrderSlice.actions;

export default createOrderSlice.reducer;
