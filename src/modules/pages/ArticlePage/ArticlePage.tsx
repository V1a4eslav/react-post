import React from 'react';
import {useGetArticleQuery} from "../../../app/repository/realWorld/RealWorldApi";
import {useParams} from "react-router-dom";
import {ArticleHeader} from "./components/ArticleHeader/ArticleHeader";
import {ArticleBody} from "./components/ArticleBody/ArticleBody";
import {ArticleFooter} from "./components/ArticleFooter/ArticleFooter";


export const ArticlePage = () => {
    const {title} = useParams();
    const {data, isLoading, isFetching, isSuccess} = useGetArticleQuery(`${title}`);

    return (
        <>
            {data &&
                <>
                    <ArticleHeader
                        data={data}
                        isSuccess={isSuccess}
                        isLoading={isLoading}
                        isFetching={isFetching}/>
                    <ArticleBody
                        data={data}
                        isSuccess={isSuccess}
                        isLoading={isLoading}
                        isFetching={isFetching}/>
                    <ArticleFooter
                        data={data}
                        isSuccess={isSuccess}
                        isLoading={isLoading}
                        isFetching={isFetching}/>
                </>
            }
        </>
    );
};
