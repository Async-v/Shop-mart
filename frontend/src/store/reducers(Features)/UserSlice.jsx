import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    users: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loaduser: (state, actions) => {
            state.users = actions.payload;
        }
    }
});

export const { loaduser } = userSlice.actions;

export default userSlice.reducer;