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
import {useNavigate} from "react-router";
import {useDeleteArticleMutation} from "../../app/repository/realWorld/RealWorldApi";

interface IUserButtonsBody {
    article: Article,
    colorUserText?: string
}

export const UserButtonsBody = (props: IUserButtonsBody) => {
    const {article, colorUserText} = props;

    const navigate = useNavigate();
    const {isOwnArticle} = useOwn(article.author.username);

    const [deleteArticle,
        {isSuccess: isSuccessArticleDelete,
        isLoading:isLoadingArticleDelete}] = useDeleteArticleMutation();

    const handleEditArticle = useCallback(() => {
            navigate(`/editor/${article.slug}`)
        }, [],
    );

    const handleDeleteArticle = useCallback(async () => {
            await deleteArticle(article.slug);
        }, [],
    );

    const handleFollowArticle = useCallback(() => {
            console.log(article, 'follow')
        }, [],
    );

    const handleFavArticle = useCallback(() => {
            console.log(article, 'fav')
        }, [],
    );

    useEffect(() => {
        isSuccessArticleDelete && navigate('/')
    }, [isSuccessArticleDelete]);


    return (
        <SUserButtonsBody>
            <FeedUser article={article}
                      colorUserText={colorUserText}/>
            {isOwnArticle && <SUserButtonsWrapper>
                <SArticleUserEditButton onClick={handleEditArticle}>
                    <BsPencilFill/>
                    <span> Edit Article</span>
                </SArticleUserEditButton>
                <SArticleUserDeleteButton disabled={isLoadingArticleDelete}
                    onClick={handleDeleteArticle}>
                    <RiDeleteBin6Line/>
                    <span> Delete Article</span>
                </SArticleUserDeleteButton>
            </SUserButtonsWrapper>}
            {!isOwnArticle && <SUserButtonsWrapper>
                <SArticleUserFollowButton onClick={handleFollowArticle}>
                    <BiPlusMedical/>
                    <span>Follow {article.author.username}</span>
                </SArticleUserFollowButton>
                <SArticleUserFavButton onClick={handleFavArticle}>
                    <SIconAiOutlineHeart/>
                    <span> Favorite Article ({article.favoritesCount})</span>
                </SArticleUserFavButton>
            </SUserButtonsWrapper>}
        </SUserButtonsBody>
    );
};
