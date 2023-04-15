import {useCallback, useEffect, useState} from "react";
import {Article} from "../app/repository/realWorld/models/IFeedResponse";
import {useDeleteFavoriteMutation, usePostFavoriteMutation} from "../app/repository/realWorld/RealWorldApi";
import {useAppSelector} from "./redux";
import {useNavigate} from "react-router";

export const useFavorite = (article: Article) => {
    const isAuth = useAppSelector(state => state.user.isAuth);
    const navigate = useNavigate();
    const [isFavorite, setIsFavorite] = useState<boolean>(article.favorited);
    const [favCount, setFavCount] = useState<number>(article.favoritesCount);

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

        const updateFavoriteData = useCallback( (data: Article) => {
         setFavCount(data.favoritesCount);
         setIsFavorite(data.favorited);
    }, [setFavCount, setIsFavorite]);

    const handleFavArticle =useCallback( async () => {
        if (isAuth) {
            if (!isFavorite) {
                await postFavorite(article.slug);
            } else {
                await deleteFavorite(article.slug);
            }
        } else {
            navigate('/login');
        }
    },[isFavorite]);

    useEffect(() => {
        postFavoriteData && updateFavoriteData(postFavoriteData.article);
    }, [postFavoriteData]);

    useEffect(() => {
        deleteFavoriteData && updateFavoriteData(deleteFavoriteData.article);
    }, [deleteFavoriteData]);


    useEffect(() => {
        setIsFavorite(article.favorited);
        setFavCount(article.favoritesCount);
    }, [article]);


    return {
        handleFavArticle,
        isSuccessArticleFav,
        isSuccessArticleDel,
        isLoadingArticleFav,
        isLoadingArticleDel,
        isFavorite,
        favCount,
    }
}
