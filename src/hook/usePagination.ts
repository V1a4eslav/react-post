import {Dispatch, RefObject, SetStateAction, useCallback, useEffect, useState} from "react";
import {useLocation, useNavigate, useOutletContext} from "react-router";
import {useSearchParams} from "react-router-dom";

interface IUseHandlePagination {
    currentPage: number,
    setCurrentPage: Dispatch<SetStateAction<number>>,
    handlePageChange: (selectedItem: { selected: number }) => void,
}

export const usePagination = (pageNum: number): IUseHandlePagination => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isLoadingScrollToTop, setIsLoadingScrollToTop] = useState(false);
    const refItem = useOutletContext<RefObject<HTMLDivElement>>();
    const [currentPage, setCurrentPage] = useState(pageNum);

    const scrollToTop = useCallback(() => {
        setIsLoadingScrollToTop(true);
        refItem?.current?.scrollIntoView({behavior: 'smooth'});
        setIsLoadingScrollToTop(false);
    }, [refItem]);

    const handlePageChange = useCallback((selectedItem: { selected: number }) => {
        const nextPage = selectedItem.selected + 1;
        if (nextPage !== currentPage) {
            setCurrentPage(nextPage);
            scrollToTop();
            if (!isLoadingScrollToTop) {
                navigate(`${location.pathname}?page=${nextPage}`);
            }
        }
    }, [currentPage]);


    return {setCurrentPage, currentPage, handlePageChange}
}