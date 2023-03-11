import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {firebaseApi} from "../firebaseAuth/firebaseAuth";
import {ISignUpDataResponse} from "../firebaseAuth/models/ISignUpDataResponse";

interface UserState {
    userData: ISignUpDataResponse;
    isAuth: boolean;
}

const initialState: UserState = {
    userData: {
        kind: '',
        idToken: '',
        email: '',
        refreshToken: '',
        expiresIn: '',
        localId: '',
    },
    isAuth: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logoutUser: state => {
            return initialState
        }
    },
    extraReducers: (builder) => {
        builder.addMatcher(firebaseApi.endpoints.signIn.matchFulfilled, (state, action) => {
            state.userData = action.payload;
            state.isAuth = true;
        });
    }
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;