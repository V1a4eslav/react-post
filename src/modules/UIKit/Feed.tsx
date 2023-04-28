import React, {FC, memo, useMemo, Suspense} from 'react';
import {
    SFeedBody, SFeedFooter, SFeedFooterButton, SFeedFooterTags,
    SFeedHeader, SFeedLikeContainer,
    SFeedPreview, SFeedText, SFeedTitle,
    SIconAiOutlineHeart, SLikeCount
} from '../pages/homePage/components/FeedsItems/components/StyledComponent';
import {Article} from "../../app/repository/realWorld/models/IFeedResponse";
import {FeedUser} from "./FeedUser/FeedUser";
import {useFavorite} from "../../hook/useFavorite";
import {FeedTags} from "../pages/homePage/components/FeedsItems/components/FeedTags";


export const Feed: FC<{ article: Article }> = memo(({article}) => {

    const item = useMemo(() => article, [article]);

    const {
        handleFavArticle,
        isLoadingArticleFav,
        isLoadingArticleDel,
        isFavorite,
        favCount,
    } = useFavorite(item);

    return (
        <SFeedPreview>
            <SFeedHeader>
                <FeedUser article={item}/>
                <SFeedLikeContainer className={isFavorite ? 'active' : ''}
                                    onClick={handleFavArticle}
                >
                    <SIconAiOutlineHeart/>
                    <SLikeCount>{isLoadingArticleFav || isLoadingArticleDel
                        ? '..' : favCount}</SLikeCount>
                </SFeedLikeContainer>
            </SFeedHeader>
            <SFeedBody>
                <SFeedTitle>{item.title}</SFeedTitle>
                <SFeedText>{item.description}</SFeedText>
            </SFeedBody>
            <SFeedFooter>
                <SFeedFooterButton to={'/article/' + item.slug}>Read more...</SFeedFooterButton>
                <SFeedFooterTags>
                    <FeedTags article={item.tagList}/>
                </SFeedFooterTags>
            </SFeedFooter>
        </SFeedPreview>
    );
});