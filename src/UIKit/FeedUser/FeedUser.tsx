import React, {memo, useMemo} from 'react';
import {Article} from "../../app/repository/realWorld/models/IFeedResponse";
import {
    SFeedUser, SFeedUserDate, SFeedUserInfo,
    SFeedUserLogo, SFeedUserName
} from "../../modules/components/Feeds/components/FeedsItems/components/StyledComponent";
import {dateFormatter} from "../../helpers/dateFormatter";


interface IFeedUser {
    article: Article,
    colorUserText?: string
}

export const FeedUser = memo(({article,colorUserText}: IFeedUser) => {
    const date = useMemo(() => dateFormatter(article.createdAt),
        [article.createdAt]);

    return (
        <SFeedUser>
            <SFeedUserLogo to={`/profiles/${article.author.username}`}>
                <img src={article.author.image} alt="user_logo"/>
            </SFeedUserLogo>
            <SFeedUserInfo>
                <SFeedUserName to={`/profile/${article.author.username}`}
                               color={colorUserText}>
                    {article.author.username}
                </SFeedUserName>
                <SFeedUserDate>{date}</SFeedUserDate>
            </SFeedUserInfo>
        </SFeedUser>
    );
});
