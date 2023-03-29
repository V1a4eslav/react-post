import React, {Dispatch, RefObject, SetStateAction, useCallback, useEffect, useState} from 'react';
import {useGetTagFeedsQuery} from "../../../../../../app/repository/realWorld/RealWorldApi";
import {Feed} from "./Feed";
import {StyledPagination} from "../../Paginate/StyledComponent";
import {useLocation, useNavigate, useOutletContext} from "react-router";
import {LoaderDots} from "../../../../../../UIKit/Loader/Loader";
import {IFeedResponse} from "../../../../../../app/repository/realWorld/models/IFeedResponse";

interface IFeedTemplate {
    tag?: string | null,
    limit: number,
    pageNum: number,
    offset?: number,
    data: IFeedResponse | undefined,
    isSuccess: boolean,
    isError: any,
    isLoading: boolean,
    isFetching: boolean,
}

export const FeedsTemplate = ({
                                  data,
                                  isSuccess,
                                  isError,
                                  isLoading,
                                  isFetching,
                                  tag,
                                  limit,
                                  pageNum,
                              }: IFeedTemplate) => {
    const navigate = useNavigate();
    const location = useLocation();
    const refItem = useOutletContext<RefObject<HTMLDivElement>>();

    const [pageCount, setPageCount] = useState<number | null>(null);
    const [isLoadingScrollToTop, setIsLoadingScrollToTop] = useState(false);

    useEffect(() => {
        if (data) {
            const count = Math.ceil(data.articlesCount / limit);
            setPageCount(count);
        }
    }, [data, tag]);

    const scrollToTop = useCallback(() => {
        setIsLoadingScrollToTop(true);
        refItem?.current?.scrollIntoView({behavior: "smooth"});
        setIsLoadingScrollToTop(false);
    }, [refItem]);

    const handlePageChange = useCallback((selectedItem: { selected: number }) => {
        const nextPage = selectedItem.selected + 1;
        if (nextPage !== pageNum) {
            scrollToTop();
            if (!isLoadingScrollToTop && tag) {
                navigate(`${location.pathname}?tag=${tag}&page=${nextPage}`);
            } else {
                navigate(`${location.pathname}?page=${nextPage}`);
            }
        }
    }, [tag, pageNum]);

    return (
        <>
            {isFetching && !isLoading && <LoaderDots/>}
            {isLoading && <LoaderDots/>}
            {isError && <p>Error</p>}
            {isSuccess && data?.articles.map((article, index: number) => (
                <Feed key={index} article={article}/>
            ))}
            {data?.articles.length && pageCount ?
                (<StyledPagination
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
                    forcePage={pageNum - 1}
                />) :
                (isSuccess && !data?.articles.length && <p>No article...</p>)}

        </>
    );
};