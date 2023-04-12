import React, {useCallback, useEffect, useState} from 'react';
import {Article} from "../../app/repository/realWorld/models/IFeedResponse";
import {SUserButtonsBody, SUserButtonsWrapper} from "./StyledComponent";
import {FeedUser} from "../FeedUser/FeedUser";
import {BsPencilFill} from "react-icons/bs";
import {RiDeleteBin6Line} from "@react-icons/all-files/ri/RiDeleteBin6Line";
import {
    SArticleUserDeleteButton,
    SArticleUserEditButton, SArticleUserFavButton,
    SArticleUserFollowButton
} from "../ArticleUserButton/StyledComponent";
import {BiPlusMedical} from "react-icons/bi";
import {SIconAiOutlineHeart} from "../../modules/components/Feeds/components/FeedsItems/components/StyledComponent";
import {useOwn} from "../../hook/useOwn";
import { useNavigate} from "react-router";
import {useDeleteArticleMutation, usePostFavoriteMutation} from "../../app/repository/realWorld/RealWorldApi";
import {useFavorite} from "../../hook/useFavorite";
import {useFollow} from "../../hook/useFollow";
import {useAppSelector} from "../../hook/redux";

interface IUserButtonsBody {
    article: Article,
    colorUserText?: string
}

export const UserButtonsBody = (props: IUserButtonsBody) => {
    const isAuth = useAppSelector(state => state.user.isAuth);

    const {article, colorUserText} = props;
    const navigate = useNavigate();
    const {isOwnArticle} = useOwn(article.author.username);

    const [deleteArticle, {
        isSuccess: isSuccessArticleDelete,
        isLoading: isLoadingArticleDelete,
        error: errorArticleDelete,
    }] = useDeleteArticleMutation();

    const handleDeleteArticle = useCallback(async () => {
            !isAuth ?
                navigate('/login') :
                await deleteArticle(article.slug);
        }, [isAuth, article.slug],
    );

    const {
        handleFavArticle,
        isFavorite,
        favCount,
        isLoadingArticleFav,
        isLoadingArticleDel
    } = useFavorite(article);

    const {
        handleFollow,
        isFollow,
        isLoadingPostFollow,
        isLoadingDeleteFollow
    } = useFollow(article.author);


    useEffect(() => {
        isSuccessArticleDelete && navigate('/main')
    }, [isSuccessArticleDelete]);

    return (
        <SUserButtonsBody>
            <FeedUser article={article}
                      colorUserText={colorUserText}/>
            {isOwnArticle &&
                <SUserButtonsWrapper>
                    <SArticleUserEditButton to={`/editor/${article.slug}`}>
                        <BsPencilFill/>
                        <span> Edit Article</span>
                    </SArticleUserEditButton>
                    <SArticleUserDeleteButton onClick={handleDeleteArticle}>
                        <RiDeleteBin6Line/>
                        <span> Delete Article</span>
                    </SArticleUserDeleteButton>
                </SUserButtonsWrapper>
            }
            {!isOwnArticle &&
                <SUserButtonsWrapper>
                    <SArticleUserFollowButton className={isFollow ? 'active' : ''}
                                              onClick={handleFollow}
                                              disabled={!!(isLoadingDeleteFollow || isLoadingPostFollow)}>
                        <BiPlusMedical/>
                        <span>
                            {!isFollow ? 'Follow' : 'Unfollow'} {article.author.username}</span>
                    </SArticleUserFollowButton>
                    <SArticleUserFavButton className={isFavorite ? 'active' : ''}
                                           onClick={handleFavArticle}>
                        <SIconAiOutlineHeart/>
                        <span>
                            Favorite Article ({(isLoadingArticleFav || isLoadingArticleDel)
                            ? '..' : favCount})
                        </span>
                    </SArticleUserFavButton>
                </SUserButtonsWrapper>
            }
        </SUserButtonsBody>
    );
};
