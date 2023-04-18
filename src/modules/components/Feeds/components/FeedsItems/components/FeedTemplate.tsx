import React, {FC, memo, useMemo} from 'react';
import {LoaderDots} from "../../../../../../UIKit/Loader/Loader";
import {IFeedResponse} from "../../../../../../app/repository/realWorld/models/IFeedResponse";
import {Pagination} from "../../Paginate/Pagination";
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
    pageCount: number|null
}

export const FeedsTemplate: FC<IFeedTemplate> = ({
                                                          pageCount,
                                                          data,
                                                          isSuccess,
                                                          isError,
                                                          isLoading,
                                                          isFetching,
                                                          tag,
                                                          page,
                                                      }) => {

    return (
        <>
            {isFetching && !isLoading && <LoaderDots/>}
            {isLoading && <LoaderDots/>}
            {isError && <p>Error</p>}
            {isSuccess && <FeedList data={data}/>}
            {data?.articles.length && pageCount ?
                (<Pagination
                    tag={tag}
                    page={page}
                    pageCount={pageCount}/>) :
                (isSuccess && !data?.articles.length && <p>No article...</p>)
            }
        </>
    );
};