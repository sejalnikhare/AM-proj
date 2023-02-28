import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        value: {},
    },

    reducers: {
        setUser: (state, action) => {
            state.value = action.payload;
        }
    },

});

export const { setUser } = authSlice.actions;

export const selectUser = state => state.auth.value;

export default authSlice.reducer;