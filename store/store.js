import { configureStore } from "@reduxjs/toolkit";
// import filters from "./filterSlice";
 import stockSlice from "./allProductsStockSlice"
import { apiSlice } from "./ApiSlice";

const store = configureStore({
    reducer: {stockSlice,[apiSlice.reducerPath]: apiSlice.reducer},
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
      devTools: process.env.NODE_ENV !=='production'
})

export default store;