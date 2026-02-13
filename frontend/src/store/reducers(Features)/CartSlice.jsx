import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    carts: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        loadcart: (state, actions) => {
            state.carts = actions.payload;
        }
    }
});

export const { loadcart } = cartSlice.actions;

export default cartSlice.reducer;
