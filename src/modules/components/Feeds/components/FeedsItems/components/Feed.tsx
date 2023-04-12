import React, {useCallback, useEffect, useState} from 'react';
import {
    SFeedBody, SFeedFooter, SFeedFooterButton, SFeedFooterTagItem, SFeedFooterTags,
    SFeedHeader, SFeedLikeContainer,
    SFeedPreview, SFeedText, SFeedTitle,
    SFeedUser,
    SFeedUserDate,
    SFeedUserInfo,
    SFeedUserLogo,
    SFeedUserName, SIconAiOutlineHeart, SLikeCount
} from './StyledComponent';
import {Article} from "../../../../../../app/repository/realWorld/models/IFeedResponse";
import {dateFormatter} from "../../../../../../helpers/dateFormatter";
import {FeedUser} from "../../../../../../UIKit/FeedUser/FeedUser";
import {
    useDeleteFavoriteMutation,
    usePostFavoriteMutation
} from "../../../../../../app/repository/realWorld/RealWorldApi";
import {useFavorite} from "../../../../../../hook/useFavorite";


export const Feed = ({article}: { article: Article }) => {
    const {
        handleFavArticle,
        isSuccessArticleFav,
        isSuccessArticleDel,
        isLoadingArticleFav,
        isLoadingArticleDel,
        isFavorite,
        favCount,
    } = useFavorite(article);

    return (
        <SFeedPreview>
            <SFeedHeader>
                <FeedUser article={article}/>
                <SFeedLikeContainer className={isFavorite ? 'active' : ''}
                                    onClick={handleFavArticle}>
                    <SIconAiOutlineHeart/>
                    <SLikeCount>{isLoadingArticleFav || isLoadingArticleDel
                        ? '..' : favCount}</SLikeCount>
                </SFeedLikeContainer>
            </SFeedHeader>
            <SFeedBody to='#'>
                <SFeedTitle>{article.title}</SFeedTitle>
                <SFeedText>{article.description}</SFeedText>
            </SFeedBody>
            <SFeedFooter>
                <SFeedFooterButton to={'/article/' + article.slug}>Read more...</SFeedFooterButton>
                <SFeedFooterTags>
                    {article.tagList.map(tag => (
                        <SFeedFooterTagItem key={tag}>{tag}</SFeedFooterTagItem>
                    ))}
                </SFeedFooterTags>
            </SFeedFooter>
        </SFeedPreview>
    );
};