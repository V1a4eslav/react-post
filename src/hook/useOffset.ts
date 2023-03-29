import {
    Dispatch,
    SetStateAction,
    useEffect,
    useState
} from "react";

interface IReturnUseOffset {
    offset: number,
    limit: number,
    page: number,
    setPage: Dispatch<SetStateAction<number>>
}

export const useOffset = (): IReturnUseOffset => {
    const limit = 10;

    const [page, setPage] = useState(1);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        setOffset(page * limit - limit);
    }, [page]);

    return {offset, limit, page, setPage}
}