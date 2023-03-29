import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {firebaseConfig} from "../../../../firebase";
import {IAuthDataRequest} from "../models/IAuthDataRequest";
import {IFirebaseAuthDataResponse} from "../models/ISignUpDataResponse";
import {links} from "../../../links/Links";

//
// const BASE_URL = links.firebase;
//
// const headers = {
//     "Content-Type": "application/json",
// };
//
// export const firebaseApi = createApi({
//     reducerPath: 'Authentication',
//     baseQuery: fetchBaseQuery({
//         baseUrl: BASE_URL,
//     }),
//     endpoints: build => ({
//         signUp: build.mutation<IFirebaseAuthDataResponse, IAuthDataRequest>({
//             query: (data: IAuthDataRequest) => ({
//                 url: `accounts:signUp?key=${firebaseConfig.apiKey}`,
//                 method: 'POST',
//                 body: JSON.stringify({...data, returnSecureToken: true}),
//                 headers,
//             }),
//         }),
//         signIn: build.mutation<IFirebaseAuthDataResponse, IAuthDataRequest>({
//             query: (data: IAuthDataRequest) => ({
//                 url: `accounts:signInWithPassword?key=${firebaseConfig.apiKey}`,
//                 method: 'POST',
//                 body: JSON.stringify({...data, returnSecureToken: true}),
//                 headers,
//             }),
//         }),
//     })
// })
//
// export const {useSignUpMutation, useSignInMutation} = firebaseApi;