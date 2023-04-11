import React from 'react';
import {useOffset} from "../../../../../../hook/useOffset";
import {useAppSelector} from "../../../../../../hook/redux";
import {FeedsTemplate} from "../../../../../components/Feeds/components/FeedsItems/components/FeedTemplate";
import {useGetMyPostsQuery} from "../../../../../../app/repository/realWorld/RealWorldApi";
import {useParams} from "react-router-dom";

export const MyPosts = () => {
    const {offset, limit, page, setPage} = useOffset();
    const {profile:user} = useParams();

    const query = `${user}&limit=${limit}&offset=${offset}`;
    const {
        data,
        isSuccess,
        isError,
        isLoading,
        isFetching
    } = useGetMyPostsQuery(query);
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
