import {useSearchParams} from "react-router-dom";

interface IReturnUseOffset {
    offset: number,
    limit: number,
    pageNum: number,
}

export const useOffset = ():IReturnUseOffset => {
    const limit = 10;
    const [searchParams] = useSearchParams();
    const page = searchParams.get('page');
    const pageNum = parseInt(page || '1');
    const offset = pageNum * limit - limit;

    return {offset, limit,pageNum}
}