import {createSlice} from '@reduxjs/toolkit'

// import {carts} from "./Data"

export const  cartSlice = createSlice({
    name: "cart",
    initialState: {value: []},
    reducers:{
        getCart: (state, action) => {
            state.value.push(action.payload);
          }
    }
})

export const { getCart } = cartSlice.actions;
export default cartSlice.reducer;