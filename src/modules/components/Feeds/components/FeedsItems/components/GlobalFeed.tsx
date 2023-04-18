import React, {useEffect, useMemo, useState} from 'react';
import {
    useGetGlobalFeedsQuery,
} from "../../../../../../app/repository/realWorld/RealWorldApi";
import {useOffset} from "../../../../../../hook/useOffset";
import {FeedsTemplate} from "./FeedTemplate";

export const GlobalFeed = () => {
    const {offset, limit, page} = useOffset();
    const query = useMemo(() => `?limit=${limit}&offset=${offset}`,
        [limit, offset]);

    const {
        data,
        isSuccess,
        isError,
        isLoading,
        isFetching,
    } = useGetGlobalFeedsQuery(query);

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
                page={page}
                data={data}
                isSuccess={isSuccess}
                isError={isError}
                isLoading={isLoading}
                isFetching={isFetching}/>
        </>
    );
};
