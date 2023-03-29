import React from 'react';
import {useGetGlobalFeedsQuery} from "../../../../../../app/repository/realWorld/RealWorldApi";
import {useOffset} from "../../../../../../hook/useOffset";
import {FeedsTemplate} from "./FeedTemplate";

export const GlobalFeed = () => {
    const {offset, limit, pageNum} = useOffset();
    const query =`?limit=${limit}&offset=${offset}`;
    const {
        data,
        isSuccess,
        isError,
        isLoading,
        isFetching,
    } = useGetGlobalFeedsQuery(query);

    return (
        <>
            <FeedsTemplate
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