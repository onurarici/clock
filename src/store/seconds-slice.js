import { createSlice } from "@reduxjs/toolkit";

const secondsSlice = createSlice({
  name: "seconds",
  initialState: { secondsCount: "00" },
  reducers: {
    decrement(state) {
      if (state.secondsCount == "00") {
        // state.sessionCount--;
        state.secondsCount = 19;
      } else {
        state.secondsCount--;
      }
    },
    reset(state) {
      state.secondsCount = "00";
    }
  }
});

export const secondsActions = secondsSlice.actions;

export default secondsSlice.reducer;
