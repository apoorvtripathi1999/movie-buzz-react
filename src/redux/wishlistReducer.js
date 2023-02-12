import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wish",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      state.splice(0,action.payload.id)
    },
  },
});

export const { add, remove } = wishlistSlice.actions;
export default wishlistSlice.reducer;
