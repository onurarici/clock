import { createSlice } from "@reduxjs/toolkit";

const sessionSlice = createSlice({
  name: "sessionMinute",
  initialState: { sessionCount: 5 },
  reducers: {
    increment(state) {
      state.sessionCount++;
    },
    decrement(state) {
      state.sessionCount--;
    }
  }
});

export const sessionActions = sessionSlice.actions;

export default sessionSlice.reducer;
