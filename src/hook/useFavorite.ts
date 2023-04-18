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

        const updateFavoriteData =  (data: Article) => {
         setFavCount(data.favoritesCount);
         setIsFavorite(data.favorited);
    };

    const handleFavArticle = async () => {
        if (isAuth) {
            if (!isFavorite) {
                await postFavorite(article.slug);
            } else {
                await deleteFavorite(article.slug);
            }
        } else {
            navigate('/login');
        }
    };

    useEffect(() => {
        postFavoriteData && updateFavoriteData(postFavoriteData.article);
    }, [postFavoriteData?.article]);

    useEffect(() => {
        deleteFavoriteData && updateFavoriteData(deleteFavoriteData.article);
    }, [deleteFavoriteData?.article]);


    useEffect(() => {
        setIsFavorite(article.favorited);
        setFavCount(article.favoritesCount);
    }, [article.favoritesCount,article.favorited]);


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
