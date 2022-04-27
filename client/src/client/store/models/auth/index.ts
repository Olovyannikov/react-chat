import { AuthState } from '@/store/models/auth/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: AuthState = {
    isAuth: false,
    roomId: null,
    name: null,
};

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        getAuth(state, action) {
            state.isAuth = true;
            state.roomId = action.payload.roomId;
            state.name = action.payload.name;
        },
    },
});

export const { getAuth } = auth.actions;
export default auth.reducer;
