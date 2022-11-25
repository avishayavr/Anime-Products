import {createSlice} from '@reduxjs/toolkit'

// import {carts} from "./Data"

export const  cartSlice = createSlice({
    name: "cart",
    initialState: {value: []},
    reducers:{
        getCart: (state, action) => {
            state.value.push(action.payload);
          },
        updateCart:(state, action) =>{
            const id = action.payload._id;
            let newCart = [...state.value]
            const productIndex = newCart.findIndex(product=> product._id === id);
            if (productIndex >= 0) {
                state.value[productIndex] = action.payload;
              }
            console.log(state.value[productIndex]);
            // return newCart;
        }  
    }
})

export const { getCart, updateCart } = cartSlice.actions;
export default cartSlice.reducer;