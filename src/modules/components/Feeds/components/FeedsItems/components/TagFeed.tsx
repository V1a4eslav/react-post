import React, {useMemo} from 'react';
import {useSearchParams} from "react-router-dom";
import {useOffset} from "../../../../../../hook/useOffset";
import {FeedsTemplate} from "./FeedTemplate";
import {useGetTagFeedsQuery} from "../../../../../../app/repository/realWorld/RealWorldApi";

export const TagFeed = () => {
    const [searchParams] = useSearchParams();
    const {offset, limit,page} = useOffset();
    const tag = searchParams.get('tag');

    const query = useMemo(() => `${tag}&limit=${limit}&offset=${offset}`,
        [limit, offset,tag]);

    const {
        data,
        isSuccess,
        isError,
        isLoading,
        isFetching
    } = useGetTagFeedsQuery(query);

    const pageCount = useMemo(() => {
        if (data) {
            return Math.ceil(data.articlesCount / limit);
        }
        return null;
    }, [data?.articlesCount, limit]);

    return (
        <>
            <FeedsTemplate
                pageCount={pageCount}
                tag={tag}
                page={page}
                offset={offset}
                data={data}
                isSuccess={isSuccess}
                isError={isError}
                isLoading={isLoading}
                isFetching={isFetching}/>

        </>
    );
};
