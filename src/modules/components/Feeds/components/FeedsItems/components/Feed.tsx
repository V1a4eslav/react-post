import React, {FC, memo, useMemo, useState} from 'react';
import {
    SFeedBody, SFeedFooter, SFeedFooterButton, SFeedFooterTags,
    SFeedHeader, SFeedLikeContainer,
    SFeedPreview, SFeedText, SFeedTitle,
 SIconAiOutlineHeart, SLikeCount
} from './StyledComponent';
import {Article} from "../../../../../../app/repository/realWorld/models/IFeedResponse";
import {FeedUser} from "../../../../../../UIKit/FeedUser/FeedUser";
import {useFavorite} from "../../../../../../hook/useFavorite";
import {FeedTags} from "./FeedTags";


export const Feed:FC<{article:Article}> = memo(({article}) => {

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
            <SFeedBody>
                <SFeedTitle>{article.title}</SFeedTitle>
                <SFeedText>{article.description}</SFeedText>
            </SFeedBody>
            <SFeedFooter>
                <SFeedFooterButton to={'/article/' + article.slug}>Read more...</SFeedFooterButton>
                <SFeedFooterTags>
                    <FeedTags article={article.tagList}/>
                </SFeedFooterTags>
            </SFeedFooter>
        </SFeedPreview>
    );
});