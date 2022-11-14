import { configureStore, createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "products",
    initialState: { products: null, loading: true, error: null },
    reducers: {
        fetchRequest(state) {
            state.loading = true;
            state.error = null;
        },
        fetchSuccess(state, action) {
            state.products = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchFail(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

const store = configureStore({
    reducer: productsSlice.reducer,
});

export default store;
export const actions = productsSlice.actions;
