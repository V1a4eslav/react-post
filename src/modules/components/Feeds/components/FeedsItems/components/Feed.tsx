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


export const Feed = ({article}: { article: Article }) => {
    const date = (dateFormatter(article.createdAt))

    return (
        <SFeedPreview>
            <SFeedHeader>
                <SFeedUser>
                    <SFeedUserLogo to={`/profiles/${article.author.username}`}>
                        <img src={article.author.image} alt="user_logo"/>
                    </SFeedUserLogo>
                    <SFeedUserInfo>
                        <SFeedUserName to={`/profiles/${article.author.username}`}>
                            {article.author.username}
                        </SFeedUserName>
                        <SFeedUserDate>{date}</SFeedUserDate>
                    </SFeedUserInfo>
                </SFeedUser>
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
                <SFeedFooterButton to='#'>Read more...</SFeedFooterButton>
                <SFeedFooterTags>
                    {article.tagList.map(tag => (
                        <SFeedFooterTagItem key={tag}>{tag}</SFeedFooterTagItem>
                    ))}
                </SFeedFooterTags>
            </SFeedFooter>
        </SFeedPreview>
    );
};



{/*{articles.map((article: any, index: number) => (*/
}
{/*    <div className="articles-preview" key={index}>*/
}
{/*        <div className="articles-meta">*/
}
{/*            <Link to={`/profiles/${article.author.username}`}>*/
}
{/*                <img src={article.author.image} alt=""/>*/
}
{/*            </Link>*/
}
{/*            <div className="info">*/
}
{/*                <Link to={`/profiles/${article.author.username}`} className='author'>*/
}
{/*                    {article.author.username}*/
}
{/*                </Link>*/
}
{/*                <span className="date">{article.createdAt}</span>*/
}
{/*            </div>*/
}
{/*        </div>*/
}
{/*        <Link to={`/article/${article.slug}`} className='preview-link'>*/
}
{/*            <h1>{article.title}</h1>*/
}
{/*            <p>{article.description}</p>*/
}
{/*            <span>Read more...</span>*/
}
{/*            <ul className="tag-list">*/
}
{/*                {article.taglist.map((tag: any) => (*/
}
{/*                    <li key={tag} className="tag-default tag-pill tag-outline">*/
}
{/*                        {tag}*/
}
{/*                    </li>*/
}
{/*                ))}*/
}
{/*            </ul>*/
}
{/*        </Link>*/
}
{/*    </div>*/
}
{/*))}*/
}