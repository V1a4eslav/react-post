import {useCallback, useEffect, useState} from "react";
import {Article} from "../app/repository/realWorld/models/IFeedResponse";
import {useDeleteFavoriteMutation, usePostFavoriteMutation} from "../app/repository/realWorld/RealWorldApi";
import {useAppSelector} from "./redux";
import {useNavigate} from "react-router";

export const useFavorite = (items: Article) => {
    const navigate = useNavigate();
    const isAuth = useAppSelector(state => state.user.isAuth);
    const {slug} = items;
    const [isFavorite, setIsFavorite] = useState(items.favorited);
    const [favCount, setFavCount] = useState(items.favoritesCount);

    const [postFavorite, {
        data: postFavoriteData,
        isSuccess: isSuccessArticleFav,
        isLoading: isLoadingArticleFav,
        error: errorArticleFav,
        isError: isErrorArticleFav,
    }] = usePostFavoriteMutation();

    const [deleteFavorite, {
        data: deleteFavoriteData,
        isSuccess: isSuccessArticleDel,
        isLoading: isLoadingArticleDel,
        error: errorArticleDel,
        isError: isErrorArticleDel,
    }] = useDeleteFavoriteMutation();

    const updateFavoriteData = useCallback(async (data: Article) => {
        await setFavCount(data.favoritesCount);
        await setIsFavorite(data.favorited);
    }, [setFavCount, setIsFavorite]);

    const handleFavArticle = useCallback(async () => {
            if (isAuth) {
                if (!isFavorite) {
                    await postFavorite(slug);
                } else {
                    await deleteFavorite(slug);
                }
            } else {
                navigate('/login');
            }
        }, [isFavorite, postFavorite, deleteFavorite],
    );

    useEffect(() => {
        postFavoriteData && updateFavoriteData(postFavoriteData.article);
    }, [postFavoriteData]);

    useEffect(() => {
        deleteFavoriteData && updateFavoriteData(deleteFavoriteData.article);
    }, [deleteFavoriteData]);


    return {
        handleFavArticle,
        isFavorite,
        favCount,
        setFavCount,
        setIsFavorite,
        isSuccessArticleFav,
        isLoadingArticleFav,
        errorArticleFav,
        isErrorArticleFav,
        isSuccessArticleDel,
        isLoadingArticleDel,
        errorArticleDel,
        isErrorArticleDel,
    }
}

