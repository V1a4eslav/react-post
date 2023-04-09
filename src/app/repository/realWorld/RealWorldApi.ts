import {links} from "../../links/Links";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {ITagsResponse} from "./models/ITagsResponse";
import {IFeedResponse} from "./models/IFeedResponse";
import {IAuthRequest} from "./models/IAuthRequest";
import {IAuthResponse} from "./models/IAuthResponse";
import {IAuthDataResponse} from "./models/ISignUpDataResponse";
import {RootState} from "../store";
import {IArticleResponse} from "./models/IArticleResponse";
import {ICommentResponse} from "./models/ICommentResponse";
import {IPostCommentResponse} from "./models/IPostCommentResponse";
import {IArticleRequest} from "./models/IArticleRequest";
import {IUpdateArticlesRequest} from "./models/IUpdateArticlesRequest";
import {IUpdateSettingsRequest} from "./models/IUpdateSettingsRequest";


const BASE_URL = links.realWorld;

export const RealWorldApi = createApi({
    reducerPath: 'RealWorld',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: (headers, {getState}) => {
            const token: string = (getState() as RootState).user.userData.token;
            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            } else {
                headers.set('Content-Type', 'application/json');
            }
            return headers;
        }
    }),
    tagTypes: ['Comments', 'Articles'],
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
        updateSettings: build.mutation<IAuthResponse, IUpdateSettingsRequest>({
            query: (data) => ({
                url: 'user',
                method: 'PUT',
                body: JSON.stringify({user: data, returnSecureToken: true}),
            })
        }),
        newArticle: build.mutation<IArticleResponse, IArticleRequest>({
            query: body => ({
                url: `articles/`,
                method: 'POST',
                body: {article: body}
            })
        }),
        updateArticle: build.mutation<IArticleResponse, IUpdateArticlesRequest>({
            query: ({query, body}) => ({
                url: `articles/${query}`,
                method: 'PUT',
                body: {article: body}
            })
        }),
        postComment: build.mutation<IPostCommentResponse, IPostCommentRequest>({
            query: ({query, comment}) => ({
                url: `articles/${query}/comments`,
                method: 'POST',
                body: {comment}
            }),
            invalidatesTags: ['Comments']
        }),
        deleteArticleComment: build.mutation<any, any>({
            query: ({slug, id}) => ({
                url: `articles/${slug}/comments/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Comments']
        }),
        deleteArticle: build.mutation<void, string>({
            query: (query) => ({
                url: `articles/${query}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Articles']
        }),
        getArticle: build.query<IArticleResponse, string>({
            query: (query) => ({
                url: `articles/${query}`,
            })
        }),
        getTags: build.query<ITagsResponse, void>({
            query: () => ({
                url: `tags`
            })
        }),
        getGlobalFeeds: build.query<IFeedResponse, void | string>({
            query: (query = '') => ({
                url: `articles${query}`,
            }),
            providesTags: ['Articles']
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
        getArticleComment: build.query<ICommentResponse, string>({
            query: (query) => ({
                url: `articles/${query}/comments`,
            }),
            providesTags: ['Comments']
        }),

    })
})

export const {
    useSignInMutation,
    useSignUpMutation,
    useNewArticleMutation,
    useGetArticleQuery,
    useGetTagsQuery,
    useGetGlobalFeedsQuery,
    useGetYourFeedsQuery,
    useGetTagFeedsQuery,
    useGetArticleCommentQuery,
    usePostCommentMutation,
    useDeleteArticleCommentMutation,
    useUpdateArticleMutation,
    useDeleteArticleMutation,
    useUpdateSettingsMutation
} = RealWorldApi;