import React from 'react';
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


export const Feed = ({article}: { article: Article }) => {
    // const date = (dateFormatter(article.createdAt))

    return (
        <SFeedPreview>
            <SFeedHeader>
                <FeedUser  article={article}/>
                {/*<SFeedUser>*/}
                {/*    <SFeedUserLogo to={`/profiles/${article.author.username}`}>*/}
                {/*        <img src={article.author.image} alt="user_logo"/>*/}
                {/*    </SFeedUserLogo>*/}
                {/*    <SFeedUserInfo>*/}
                {/*        <SFeedUserName to={`/profiles/${article.author.username}`}>*/}
                {/*            {article.author.username}*/}
                {/*        </SFeedUserName>*/}
                {/*        <SFeedUserDate>{date}</SFeedUserDate>*/}
                {/*    </SFeedUserInfo>*/}
                {/*</SFeedUser>*/}
                <SFeedLikeContainer>
                    <SIconAiOutlineHeart/>
                    <SLikeCount>{article.favoritesCount}</SLikeCount>
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