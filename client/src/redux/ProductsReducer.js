import { createSlice } from "@reduxjs/toolkit";

// import {products} from "./Data"

export const productSlice = createSlice({
  name: "products",
  initialState: { value: [] },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },

    updateProduct: (state, action) => {
      const id = action.payload.id;
      const index = state.value.findIndex((product) => product.id == id);
      if (index >= 0) {
        state.value[index] = action.payload;
      }
      console.log(action.payload);
    },
  },
});

export const { addUser, updateProduct } = productSlice.actions;
export default productSlice.reducer;
