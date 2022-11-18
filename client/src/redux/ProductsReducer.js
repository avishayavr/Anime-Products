import {createSlice} from '@reduxjs/toolkit'

// import {products} from "./Data"

export const  productSlice = createSlice({
    name: "products",
    initialState: {value: []},
    reducers:{
        addUser: (state, action) => {
            state.value.push(action.payload);
          }
    }
})

export const { addUser } = productSlice.actions;
export default productSlice.reducer;