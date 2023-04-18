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
import {IArticleFavoritedResponse} from "./models/IArticleFavoritedResponse";
import {IProfileResponse} from "./models/IProfileResponse";


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
    tagTypes: [
        'GLOBAL',
        'MY_POST',
        'YOUR_FEED',
        'FAVORITE',
        'ARTICLE',
        'TAG_FEEDS',
        'COMMENTS',
        'FOLLOW'
    ],

    endpoints: build => ({
        getArticleComment: build.query<ICommentResponse, string>({
            query: (query) => ({
                url: `articles/${query}/comments`,
            }),
            providesTags: (result) =>
                result ?
                    [...result.comments.map(({id}) => ({type: 'COMMENTS' as const, id})),
                        {type: 'COMMENTS', id: 'COMMENTS'},
                    ] : [{type: 'COMMENTS', id: 'COMMENTS'}]
        }),
        deleteArticle: build.mutation<void, string>({
            query: (query) => ({
                url: `articles/${query}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['GLOBAL', 'MY_POST']
        }),
        getYourFeeds: build.query<IFeedResponse, void | string>({
            query: (query = '') => ({
                url: `articles/feed${query}`,
            }),
            providesTags: (result) =>
                result ?
                    [...result.articles.map(({slug}) => ({type: 'YOUR_FEED' as const, id: slug})),
                        {type: 'YOUR_FEED', id: 'YOUR_FEED'},
                    ] : [{type: 'YOUR_FEED', id: 'YOUR_FEED'}],
        }),
        getTagFeeds: build.query<IFeedResponse, void | string>({
            query: (query = '') => ({
                url: `articles?tag=${query}`,
            }),
            providesTags: (result) =>
                result ?
                    [...result.articles.map(({slug}) => ({type: 'TAG_FEEDS' as const, id: slug})),
                        {type: 'TAG_FEEDS', id: 'TAG_FEEDS'},
                    ] : [{type: 'TAG_FEEDS', id: 'TAG_FEEDS'}],
        }),
        getGlobalFeeds: build.query<IFeedResponse, void | string>({
            query: (query = '') => ({
                url: `articles${query}`,
            }),
            providesTags: (result) =>
                result ?
                    [...result.articles.map(({slug}) => ({type: 'GLOBAL' as const, id: slug})),
                        {type: 'GLOBAL', id: 'GLOBAL'},
                    ] : [{type: 'GLOBAL', id: 'GLOBAL'}],
        }),
        postFavorite: build.mutation<IArticleFavoritedResponse, string>({
            query: (slug) => ({
                url: `articles/${slug}/favorite`,
                method: 'POST'
            }),
            invalidatesTags: ['TAG_FEEDS', 'FAVORITE', 'YOUR_FEED', 'GLOBAL', 'MY_POST', 'ARTICLE'],
        }),
        deleteFavorite: build.mutation<IArticleFavoritedResponse, string>({
            query: (slug) => ({
                url: `articles/${slug}/favorite`,
                method: 'DELETE'
            }),
            invalidatesTags: ['TAG_FEEDS', 'FAVORITE', 'YOUR_FEED', 'GLOBAL', 'MY_POST', 'ARTICLE'],
        }),
        getFavoritePosts: build.query<IFeedResponse, void | string>({
            query: (query = '') => ({
                url: `articles?favorited=${query}`,
            }),
            providesTags: (result) =>
                result ?
                    [...result.articles.map(({slug}) => ({type: 'FAVORITE' as const, id: slug})),
                        {type: 'FAVORITE', id: 'FAVORITE'},
                    ] : [{type: 'FAVORITE', id: 'FAVORITE'}],
        }),
        getArticle: build.query<IArticleResponse, string>({
            query: (query) => ({
                url: `articles/${query}`,
            }),
            providesTags: (result) => [{type: 'ARTICLE', id: result?.article.slug}]
        }),
        getMyPosts: build.query<IFeedResponse, void | string>({
            query: (query = '') => ({
                url: `articles?author=${query}`,
            }),
            providesTags: (result) =>
                result ?
                    [...result.articles.map(({slug}) => ({type: 'MY_POST' as const, id: slug})),
                        {type: 'MY_POST', id: 'MY_POST'},
                    ] : [{type: 'MY_POST', id: 'MY_POST'}],
        }),
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
                body: {user: data},
            })
        }),
        newArticle: build.mutation<IArticleResponse, IArticleRequest>({
            query: body => ({
                url: `articles/`,
                method: 'POST',
                body: {article: body}
            }),
            invalidatesTags: ['GLOBAL', 'MY_POST']
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
            invalidatesTags:['COMMENTS']
        }),
        postFollow: build.mutation<IProfileResponse, string>({
            query: (query) => ({
                url: `profiles/${query}/follow`,
                method: 'POST',
            }),
            invalidatesTags: ['FOLLOW']
        }),
        deleteFollow: build.mutation<IProfileResponse, string>({
            query: (query) => ({
                url: `profiles/${query}/follow`,
                method: 'DELETE',
            }),
            invalidatesTags: ['FOLLOW']
        }),
        deleteArticleComment: build.mutation<any, any>({
            query: ({slug, id}) => ({
                url: `articles/${slug}/comments/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['COMMENTS']
        }),
        getProfile: build.query<IProfileResponse, string>({
            query: (query) => ({
                url: `profiles/${query}`,
            }),
            providesTags: ['FOLLOW']
        }),
        getTags: build.query<ITagsResponse, void>({
            query: () => ({
                url: `tags`
            })
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
    useGetFavoritePostsQuery,
    usePostCommentMutation,
    useDeleteArticleCommentMutation,
    useUpdateArticleMutation,
    useDeleteArticleMutation,
    useUpdateSettingsMutation,
    usePostFavoriteMutation,
    useDeleteFavoriteMutation,
    useGetMyPostsQuery,
    useDeleteFollowMutation,
    usePostFollowMutation,
    useGetProfileQuery,
} = RealWorldApi;