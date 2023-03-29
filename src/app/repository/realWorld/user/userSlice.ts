import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IAuthResponse} from "../models/IAuthResponse";
import {RealWorldApi} from "../RealWorldApi";


interface UserState {
    userData: {
        email: string;
        username: string;
        bio: any;
        image: string;
        token: string;
    },
    isAuth: boolean;
}

const initialState: UserState = {
    userData: {
        email: '',
        username: '',
        bio: '',
        image: '',
        token: '',
    },
    isAuth: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logoutUser: () => {
            return initialState
        }
    },
    extraReducers: (builder) => {
        builder.addMatcher(RealWorldApi.endpoints.signIn.matchFulfilled, (state, action) => {
            state.userData = {...action.payload.user};
            state.isAuth = true;
        });
    }
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;