import React, {useMemo} from 'react';
import {useGetYourFeedsQuery} from "../../../../../../app/repository/realWorld/RealWorldApi";
import {useOffset} from "../../../../../../hook/useOffset";
import {FeedsTemplate} from "./FeedTemplate";
import {TagItem} from "../../FeedsTags/TagItem";


export const YourFeed = () => {
    const {offset, limit, page, setPage} = useOffset();
    const query = useMemo(() => `?limit=${limit}&offset=${offset}`,
        [limit, offset]);

    const {
        data,
        isSuccess,
        isError,
        isLoading,
        isFetching
    } = useGetYourFeedsQuery(query);

    return (
        <>
            <FeedsTemplate
                limit={limit}
                setPage={setPage}
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

