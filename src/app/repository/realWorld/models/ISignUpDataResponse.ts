import {fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export interface IAuthDataResponse {
    username: string,
    email: string,
    password: string,
}
// const fetchBaseQueryWithToken = (token: string | null) =>
//     fetchBaseQuery({
//         baseUrl: BASE_URL,
//         prepareHeaders: (headers) => {
//             if (token) {
//                 headers.set('Authorization', `Bearer ${token}`);
//             } else {
//                 headers.set('Content-Type', 'application/json');
//             }
//             return headers;
//         },
//     });