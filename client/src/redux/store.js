import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "../redux/ProductsReducer";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
