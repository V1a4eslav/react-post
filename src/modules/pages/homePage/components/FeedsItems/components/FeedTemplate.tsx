import React, {FC, memo, Suspense, useEffect, useMemo} from 'react';
import {LoaderDots} from "../../../../../UIKit/Loader/Loader";
import {IFeedResponse} from "../../../../../../app/repository/realWorld/models/IFeedResponse";
import {Pagination} from "../../../../../UIKit/Paginate/Pagination";
import {FeedList} from "./FeedList";
import {StyledErrorMessage} from 'src/modules/UIKit/ErrorMessage/StyledErrorMessage';
import {retry} from "@reduxjs/toolkit/query";

interface IFeedTemplate {
    tag?: string | null,
    page: number,
    offset?: number,
    data: IFeedResponse | undefined,
    isSuccess: boolean,
    isError: any,
    isLoading: boolean,
    isFetching: boolean,
    pageCount: number | null,
}

export const FeedsTemplate: FC<IFeedTemplate> = memo(({
                                                          pageCount,
                                                          data,
                                                          isSuccess,
                                                          isError,
                                                          isLoading,
                                                          isFetching,
                                                          tag,
                                                          page,
                                                      }): JSX.Element => {

    const memoizedPosts = useMemo(() => {
        return data?.articles || [];
    }, [data?.articles]);


    if (isError) return <StyledErrorMessage>Error</StyledErrorMessage>;
    if (isLoading) return <LoaderDots/>;


    return (
        <>
            {isFetching && <LoaderDots/>}
            <FeedList data={memoizedPosts}/>
            {data?.articles.length && pageCount ?
                (<Pagination
                    tag={tag}
                    page={page}
                    pageCount={pageCount}/>) :
                (isSuccess && !data?.articles.length && <p>No article...</p>)
            }
        </>
    );
});