import React, {memo, useMemo} from 'react';
import {Container} from 'src/modules/UIKit/Container';
import {SArticleHeader, SArticleHeaderTitle} from "./StyledComponent";
import {IArticleResponse} from "../../../../../app/repository/realWorld/models/IArticleResponse";
import {FeedUser} from "../../../../UIKit/FeedUser/FeedUser";
import {useAppSelector} from "../../../../../hook/redux";
import {UserButtonsBody} from "../../../../UIKit/UserButtonsBody/UserButtonsBody";

export interface IArticleProps {
    data: IArticleResponse,
    isLoading: boolean,
    isFetching: boolean,
    isSuccess: boolean,
}

export const ArticleHeader = memo(({data, isSuccess}: IArticleProps) => {

    const article = useMemo(() => data.article, [data.article]);

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
});
