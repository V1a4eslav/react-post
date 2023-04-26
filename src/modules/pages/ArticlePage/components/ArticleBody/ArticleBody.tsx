import React from 'react';
import {Container} from 'src/modules/UIKit/Container';
import {
    SArticleBodyTagItems,
    SArticleBodyText,
    SArticleInnerBody,
    SArticleTagItem,
    SArticleUserButtonsBody
} from "./SryledComponent";
import {IArticleProps} from "../ArticleHeader/ArticleHeader";
import {UserButtonsBody} from "../../../../UIKit/UserButtonsBody/UserButtonsBody";

export const ArticleBody = ({data, isFetching, isLoading, isSuccess}: IArticleProps) => {
    const {body, tagList} = data.article;

    return (
        <Container>
            <SArticleInnerBody>
                <SArticleBodyText>{body}</SArticleBodyText>
                <SArticleBodyTagItems>
                    {tagList.map((item, index) => (
                        <SArticleTagItem key={item} to={`/main/article?tag=${item}`}>{item}</SArticleTagItem>
                    ))}
                </SArticleBodyTagItems>
            </SArticleInnerBody>
            <SArticleUserButtonsBody>
                <UserButtonsBody article={data.article}/>
            </SArticleUserButtonsBody>
        </Container>
    );
};
