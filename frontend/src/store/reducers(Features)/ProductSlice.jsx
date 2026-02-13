import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        loadproduct: (state, actions) => {
            state.products = actions.payload;
        }
    }
});

export const { loadproduct } = productSlice.actions;

export default productSlice.reducer;