import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {firebaseConfig} from "../../../firebase";
import {ISignUpDataRequest} from "./models/ISignUpDataRequest";
import {ISignUpDataResponse} from "./models/ISignUpDataResponse";

const BASE_URL = 'https://identitytoolkit.googleapis.com/v1';

const headers = {
    "Content-Type": "application/json",
};

export const firebaseApi = createApi({
    reducerPath: 'Authentication',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    endpoints: build => ({
        signUp: build.mutation<ISignUpDataResponse, ISignUpDataRequest>({
            query: (data: ISignUpDataRequest) => ({
                url: `accounts:signUp?key=${firebaseConfig.apiKey}`,
                method: 'POST',
                body: JSON.stringify({...data, returnSecureToken: true}),
                headers,
            }),
        })
    })
})

export const {useSignUpMutation} = firebaseApi;