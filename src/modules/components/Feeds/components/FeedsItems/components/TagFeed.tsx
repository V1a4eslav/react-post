import React from 'react';
import {useSearchParams} from "react-router-dom";
import {useOffset} from "../../../../../../hook/useOffset";
import {FeedsTemplate} from "./FeedTemplate";
import {useGetTagFeedsQuery} from "../../../../../../app/repository/realWorld/RealWorldApi";

export const TagFeed = () => {
    const [searchParams] = useSearchParams();
    const {offset, limit, pageNum} = useOffset();
    const tag = searchParams.get('tag');
    const query = `${tag}&limit=${limit}&offset=${offset}`;
    const {
        data,
        isSuccess,
        isError,
        isLoading,
        isFetching
    } = useGetTagFeedsQuery(query);
    return (
        <>
            <FeedsTemplate
                tag={tag}
                limit={limit}
                pageNum={pageNum}
                offset={offset}
                data={data}
                isSuccess={isSuccess}
                isError={isError}
                isLoading={isLoading}
                isFetching={isFetching}/>

        </>
    );
};