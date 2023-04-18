import React, {useMemo} from 'react';
import {useGetYourFeedsQuery} from "../../../../../../app/repository/realWorld/RealWorldApi";
import {useOffset} from "../../../../../../hook/useOffset";
import {FeedsTemplate} from "./FeedTemplate";
import {TagItem} from "../../FeedsTags/TagItem";


export const YourFeed = () => {
    const {offset, limit, page} = useOffset();
    const query = useMemo(() => `?limit=${limit}&offset=${offset}`,
        [limit, offset]);

    const {
        data,
        isSuccess,
        isError,
        isLoading,
        isFetching
    } = useGetYourFeedsQuery(query);

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
                offset={offset}
                data={data}
                isSuccess={isSuccess}
                isError={isError}
                isLoading={isLoading}
                isFetching={isFetching}/>
        </>
    );
};

