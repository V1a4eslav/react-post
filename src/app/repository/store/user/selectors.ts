import { createSlice } from '@reduxjs/toolkit';
import { IUser } from './IUser';

export interface IWeatherReducer {
    user: IUser | null,
}

const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: null,
        isLoading: false,
    },
    reducers: {
        setUser: (state, action) => {
            state.data = action.payload;
        },
    }
});


export const { setUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
