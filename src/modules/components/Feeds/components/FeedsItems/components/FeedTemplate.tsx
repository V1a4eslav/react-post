import React, {Dispatch, FC, memo, RefObject, SetStateAction, useCallback, useEffect, useMemo, useState} from 'react';
import {Feed} from "./Feed";
import {StyledPagination} from "../../Paginate/StyledComponent";
import {useLocation, useNavigate, useOutletContext} from "react-router";
import {LoaderDots} from "../../../../../../UIKit/Loader/Loader";
import {IFeedResponse} from "../../../../../../app/repository/realWorld/models/IFeedResponse";


export const FeedList = memo(({data}: { data: IFeedResponse | undefined }) => (
    <>
        {data?.articles.map((article, index) => (
            <Feed key={index} article={article}/>
        ))}
    </>
));

interface IPagination {
    pageCount: number,
    handlePageChange: (selectedItem: { selected: number; }) => void,
    page: number
}

export const Pagination = memo(({pageCount, handlePageChange, page}: IPagination) => (
        <>
            <StyledPagination
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageChange}
                containerClassName={"pagination"}
                activeClassName={"active"}
                forcePage={page - 1}
            />

        </>
    )
);

interface IFeedTemplate {
    setPage: Dispatch<SetStateAction<number>>
    tag?: string | null,
    limit: number,
    page: number,
    offset?: number,
    data: IFeedResponse | undefined,
    isSuccess: boolean,
    isError: any,
    isLoading: boolean,
    isFetching: boolean,
}

export const FeedsTemplate: FC<IFeedTemplate> = memo(({
                                                          data,
                                                          setPage,
                                                          isSuccess,
                                                          isError,
                                                          isLoading,
                                                          isFetching,
                                                          tag,
                                                          limit,
                                                          page,
                                                      }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const refItem = useOutletContext<RefObject<HTMLDivElement>>();

    // const [pageCount, setPageCount] = useState<number | null>(null);
    const [isLoadingScrollToTop, setIsLoadingScrollToTop] = useState(false);

    // useEffect(() => {
    //     if (data) {
    //         const count = Math.ceil(data.articlesCount / limit);
    //         setPageCount(count);
    //     }
    // }, [data, tag]);

    const pageCount = useMemo(() => {
        if (data) {
            return Math.ceil(data.articlesCount / limit);
        }
        return null;
    }, [data, limit]);

    const scrollToTop = useCallback(() => {
        setIsLoadingScrollToTop(true);
        refItem?.current?.scrollIntoView({behavior: "smooth"});
        setIsLoadingScrollToTop(false);
    }, [refItem]);

    const handlePageChange = useCallback((selectedItem: { selected: number }) => {
        const nextPage = selectedItem.selected + 1;
        setPage(nextPage);
        if (!isLoadingScrollToTop && tag) {
            navigate(`${location.pathname}?tag=${tag}&page=${nextPage}`);
        } else {
            navigate(`${location.pathname}?page=${nextPage}`);
        }
        scrollToTop();
    }, [tag, page]);

    return (
        <>
            {isFetching && !isLoading && <LoaderDots/>}
            {isLoading && <LoaderDots/>}
            {isError && <p>Error</p>}
            {isSuccess && <FeedList data={data}/>}
            {data?.articles.length && pageCount ?
                (<Pagination handlePageChange={handlePageChange}
                             page={page}
                             pageCount={pageCount}/>) :
                (isSuccess && !data?.articles.length && <p>No article...</p>)
            }
        </>
    );
});