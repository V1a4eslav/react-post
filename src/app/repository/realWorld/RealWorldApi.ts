import {links} from "../../links/Links";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {ITagsResponse} from "./models/ITagsResponse";
import {IFeedResponse} from "./models/IFeedResponse";
import {IAuthRequest} from "./models/IAuthRequest";
import {IAuthResponse} from "./models/IAuthResponse";
import {IAuthDataResponse} from "./models/ISignUpDataResponse";
import {RootState} from "../store";


const BASE_URL = links.realWorld;

export const RealWorldApi = createApi({
    reducerPath: 'RealWorld',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders:(headers,{getState})=>{
            const token:string = (getState() as RootState).user.userData.token;
            if(token){
                headers.set('Authorization', `Bearer ${token}`)
            } else {
                headers.set('Content-Type', 'application/json');
            }
            return headers;
        }
    }),
    endpoints: build => ({
        signUp: build.mutation<IAuthResponse, IAuthDataResponse>({
            query: (data: IAuthRequest) => ({
                url: `users`,
                method: 'POST',
                body: JSON.stringify({user: data, returnSecureToken: true}),
            }),
        }),
        signIn: build.mutation<IAuthResponse, IAuthRequest>({
            query: (data: IAuthRequest) => ({
                url: `users/login`,
                method: 'POST',
                body: JSON.stringify({user: data, returnSecureToken: true}),
            }),
        }),
        getTags: build.query<ITagsResponse, void>({
            query: () => ({
                url: `tags`
            })
        }),
        getGlobalFeeds: build.query<IFeedResponse, void | string>({
            query: (query = '') => ({
                url: `articles${query}`,
            })
        }),
        getYourFeeds: build.query<IFeedResponse, void | string>({
            query: (query = '') => ({
                url: `articles/feed${query}`,
            })
        }),
        getTagFeeds: build.query<IFeedResponse, void | string>({
            query: (query = '') => ({
                url: `articles?tag=${query}`,
            })
        }),
    })
})

export const {
    useSignInMutation,
    useSignUpMutation,
    useGetTagsQuery,
    useGetGlobalFeedsQuery,
    useGetYourFeedsQuery,
    useGetTagFeedsQuery
} = RealWorldApi;