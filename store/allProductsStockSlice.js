import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    searchProduct: '',
    currentFilterTag: 'All',
    filterProduct: [],
    filterAllStock: false,
    activeFilter: 'all'
}

const allProductsStockSlice = createSlice({
    name: 'stockSlice',
    initialState,
    reducers: {
        searchProduct: (state, action) => {
            state.searchProduct =  action.payload;
        },
        triggerAvailableStock: (state,action) => {
            state.filterAllStock = action.payload
        },
        currentFilters: (state,action) => {
            state.currentFilterTag = action.payload;
        },
    }
});

const {actions, reducer} = allProductsStockSlice;

export default reducer;

export const {
    searchProduct,
    triggerAvailableStock,
    currentFilters
} = actions;