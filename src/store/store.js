import { configureStore } from "@reduxjs/toolkit";
// import breakSlice from "./break-slice";
import breakReducer from "./break-slice";
import sessionReducer from "./session-slice";
import secondsReducer from "./seconds-slice";

const store = configureStore({
  reducer: {
    // break: breakSlice.reducer
    breakMinute: breakReducer,
    sessionMinute: sessionReducer,
    seconds: secondsReducer
  }
});

export default store;
