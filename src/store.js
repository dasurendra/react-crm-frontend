import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "../src/pages/admin-user/userslice";
const store = configureStore({
  reducer: {
    user: adminReducer,
  },
});

export default store;
