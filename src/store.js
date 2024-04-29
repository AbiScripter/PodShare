import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  // middleware: [thunk], // middleware automatically added in redux toolkit no need to mention
});

export default store;
