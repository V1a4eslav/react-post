import {fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export interface IAuthDataResponse {
    username: string,
    email: string,
    password: string,
}
