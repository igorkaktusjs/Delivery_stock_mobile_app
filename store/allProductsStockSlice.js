import { createSlice } from "@reduxjs/toolkit";

const  initialState = {
    data: [],
    searchProduct: '',
    defaultAllFilters: 'All',
    currentFilterTag: 'All',
    filterProduct: [],
    filterAllStock: false,
    activeFilter: 'all',
    focusOnSearch: false
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
        defaultFilterTag: (state) => {
            state.currentFilterTag = state.defaultAllFilters;
        },
        currentFocusOnSearch: (state,action) => [
            state.focusOnSearch = action.payload
        ]
    }
});

const {actions, reducer} = allProductsStockSlice;

export default reducer;

export const {
    searchProduct,
    triggerAvailableStock,
    currentFilters,
    defaultFilterTag,
    currentFocusOnSearch
} = actions;