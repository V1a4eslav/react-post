// import {createSlice, PayloadAction} from "@reduxjs/toolkit";
// import {firebaseApi} from "../firebaseAuth/firebaseAuth";
// import {IFirebaseAuthDataResponse} from "../models/ISignUpDataResponse";
//
// interface UserState {
//     userData: IFirebaseAuthDataResponse;
//     isAuth: boolean;
// }
//
// const initialState: UserState = {
//     userData: {
//         kind: '',
//         idToken: '',
//         email: '',
//         refreshToken: '',
//         expiresIn: '',
//         localId: '',
//     },
//     isAuth: false,
// }
//
// const userSlice = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
//         logoutUser: () => {
//             return initialState
//         }
//     },
//     extraReducers: (builder) => {
//         builder.addMatcher(firebaseApi.endpoints.signIn.matchFulfilled, (state, action) => {
//             state.userData = action.payload;
//             state.isAuth = true;
//         });
//     }
// });
//
// export const userReducer = userSlice.reducer;
// export const userActions = userSlice.actions;