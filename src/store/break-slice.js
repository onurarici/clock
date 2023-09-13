import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   breakCount: 5
// };

const breakSlice = createSlice({
  name: "breakMinute",
  initialState: { breakCount: 5 },
  reducers: {
    increment(state, action) {
      state.breakCount++;
    },
    decrement(state, action) {
      state.breakCount--;
    }
  }
});

export const breakActions = breakSlice.actions;

// export const { increment, decrement } = breakSlice.actions;

// export default breakSlice;

export default breakSlice.reducer;
