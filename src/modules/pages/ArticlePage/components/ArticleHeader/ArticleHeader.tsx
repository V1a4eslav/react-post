import React from 'react';
import {Container} from 'src/UIKit/Container';
import {SArticleHeader, SArticleHeaderTitle} from "./StyledComponent";
import {IArticleResponse} from "../../../../../app/repository/realWorld/models/IArticleResponse";
import {FeedUser} from "../../../../../UIKit/FeedUser/FeedUser";
import {useAppSelector} from "../../../../../hook/redux";
import {UserButtonsBody} from "../../../../../UIKit/UserButtonsBody/UserButtonsBody";

export interface IArticleProps {
    data: IArticleResponse,
    isLoading: boolean,
    isFetching: boolean,
    isSuccess: boolean,
}

export const ArticleHeader = ({data, isFetching, isLoading, isSuccess}: IArticleProps) => {
    const article = data?.article;

    return (
        <>
            {isSuccess &&
                <SArticleHeader>
                    <Container>
                        <SArticleHeaderTitle variant='h1'>{article.title}</SArticleHeaderTitle>
                        <UserButtonsBody article={article} colorUserText='#fff'/>
                    </Container>
                </SArticleHeader>}
        </>
    );
};
