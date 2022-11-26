import { createSlice } from "@reduxjs/toolkit";

// import {carts} from "./Data"

export const cartSlice = createSlice({
  name: "cart",
  initialState: { value: [] },
  reducers: {
    getCart: (state, action) => {
      state.value?.push(action.payload);
    },
    deleteProduct: (state, action) => {
      const id = action.payload._id;
      let data = [...state.value];
      const index = data.findIndex((product) => product._id == id);
      if (index >= 0) {
        state.value.splice(index, 1);
      }
    },
  },
});

export const { getCart, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;
