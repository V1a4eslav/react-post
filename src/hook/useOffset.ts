import {
    Dispatch,
    SetStateAction,
    useEffect,
    useState
} from "react";
import {useSearchParams} from "react-router-dom";

interface IReturnUseOffset {
    offset: number,
    limit: number,
    page: number,
    setPage: Dispatch<SetStateAction<number>>
}

export const useOffset = (): IReturnUseOffset => {
    const [searchParams, setSearchParams] = useSearchParams();
    const pageSearchParams = searchParams.get('page');
    const pageValue =
        pageSearchParams && Number(pageSearchParams) > 0
            ? Number(pageSearchParams)
            : 1;
    const limit = 10;
    const [page, setPage] = useState(Number(pageValue));

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        setOffset(page * limit - limit);
    }, [page]);

    return {offset, limit, page, setPage}
}