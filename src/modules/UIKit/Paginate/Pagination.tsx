import React, {memo, RefObject, useCallback, useEffect, useState} from "react";
import {StyledPagination} from "./StyledComponent";
import {useLocation, useNavigate, useOutletContext} from "react-router";

interface IPagination {
    pageCount: number,
    page: number
    tag?: string | null
}

export const Pagination = memo(({pageCount, page, tag}: IPagination) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState(page);
    const refItem = useOutletContext<RefObject<HTMLDivElement>>();
    const [isLoadingScrollToTop, setIsLoadingScrollToTop] = useState(false);
    const [pageRangeDisplayed, setPageRangeDisplayed] = useState<number>(5);


    const scrollToTop = useCallback(() => {
        setIsLoadingScrollToTop(true);
        refItem?.current?.scrollIntoView({behavior: "smooth"});
        setIsLoadingScrollToTop(false);
    }, [refItem]);

    const handlePageChange = useCallback((selectedItem: { selected: number }) => {
        const nextPage = selectedItem.selected + 1;
        setCurrentPage(nextPage);
        if (!isLoadingScrollToTop && tag) {
            navigate(`${location.pathname}?tag=${tag}&page=${nextPage}`);
        } else {
            navigate(`${location.pathname}?page=${nextPage}`);
        }
        scrollToTop();
    }, [tag, page]);

    useEffect(() => {
        const handleResize = () => {
            window.innerWidth <= 768 ?
                setPageRangeDisplayed(2) :
                setPageRangeDisplayed(4);
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize)
    }, []);


    return (
        <>
            <StyledPagination
                previousLabel={"prev"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={pageCount}
                marginPagesDisplayed={1}
                pageRangeDisplayed={pageRangeDisplayed}
                onPageChange={handlePageChange}
                containerClassName={"pagination"}
                activeClassName={"active"}
                forcePage={currentPage - 1}
            />
        </>
    )

});





