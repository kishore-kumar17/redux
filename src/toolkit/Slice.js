import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      return (state.value = +10);
    },
  },
});

export const CounterActions = counterSlice.actions;

export default counterSlice.reducer;
