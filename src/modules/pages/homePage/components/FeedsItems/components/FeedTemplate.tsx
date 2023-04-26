import React, {FC, memo, useEffect, useMemo} from 'react';
import {LoaderDots} from "../../../../../UIKit/Loader/Loader";
import {IFeedResponse} from "../../../../../../app/repository/realWorld/models/IFeedResponse";
import {Pagination} from "../../../../../UIKit/Paginate/Pagination";
import {FeedList} from "./FeedList";

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
                                                      }) => {

    const memoizedPosts = useMemo(() => {
        return data?.articles || [];
    }, [data?.articles]);

    return (
        <>
            {isFetching && !isLoading && <LoaderDots/>}
            {isLoading && <LoaderDots/>}
            {isError && <p>Error</p>}
            {isSuccess && <FeedList data={memoizedPosts}/>}
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