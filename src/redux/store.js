import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import createOrderReducer from "./createOrderReducer";
import configReducer from "./configReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    createOrder: createOrderReducer,
    config: configReducer,
  },
});

export default store;
