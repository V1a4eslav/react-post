import {
    Dispatch,
    SetStateAction,
    useEffect, useMemo,
    useState
} from "react";
import {useSearchParams} from "react-router-dom";

interface IReturnUseOffset {
    offset: number,
    limit: number,
    page: number,
}

export const useOffset = (): IReturnUseOffset => {
    const [searchParams] = useSearchParams();
    const [offset, setOffset] = useState(0);
    const pageSearchParams = searchParams.get('page');
    const pageValue =
        pageSearchParams && Number(pageSearchParams) > 0
            ? Number(pageSearchParams)
            : 1;
    const limit = 10;

    const page = useMemo(() => Number(pageValue), [pageValue]);

    useEffect(() => {
        setOffset(page * limit - limit);
    }, [page]);

    return {offset, limit, page}
}