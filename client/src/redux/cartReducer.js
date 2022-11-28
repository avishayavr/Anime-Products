import { createSlice } from "@reduxjs/toolkit";

// import {carts} from "./Data"

export const cartSlice = createSlice({
  name: "cart",
  initialState: { value: [] },
  reducers: {
    // function to add product to cart
    addProduct: (state, action) => {
      state.value?.push(action.payload);
    },
    // function to increase the product quantity
    increaseQuantity:(state, action) =>{
      const id1 = action.payload._id;
      let data1 = [...state.value];
      const index1 = data1.findIndex((product) => product._id == id1);
      data1[index1].productQuantity += 1; 
      // console.log(action.payload);
    },
    // function to decrease the product quantity
    decreaseQuantity:(state, action) =>{
      const id2 = action.payload._id;
      let data2 = [...state.value];
      const index2 = data2.findIndex((product) => product._id == id2);
      data2[index2].productQuantity -= 1; 
      // console.log(action.payload);
    },
    // function to delete the product from cart
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

export const { addProduct, increaseQuantity, decreaseQuantity, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;
