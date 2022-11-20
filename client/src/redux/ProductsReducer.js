import { createSlice } from "@reduxjs/toolkit";

// import {products} from "./Data"

export const productSlice = createSlice({
  name: "products",
  initialState: { value: [] },
  reducers: {
    // reducer to add the data 
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
     
    // reducer to update data
    updateProduct: (state, action) => {
    const matchedObj = state.value.map((product) => {
        if(product.id === action.payload.id) return action.payload;
      });
    console.log(matchedObj);
    },
  },
});

export const { addUser } = productSlice.actions;
export default productSlice.reducer;
