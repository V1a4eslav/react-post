import React, {useMemo} from 'react';
import {useOffset} from "../../../../../../hook/useOffset";
import {useAppSelector} from "../../../../../../hook/redux";
import {FeedsTemplate} from "../../../../homePage/components/FeedsItems/components/FeedTemplate";
import {useGetMyPostsQuery} from "../../../../../../app/repository/realWorld/RealWorldApi";
import {useParams} from "react-router-dom";

export const MyPosts = () => {
    const {offset, limit, page} = useOffset();
    const {profile: user} = useParams();

    const query = `${user}&limit=${limit}&offset=${offset}`;
    const {
        data,
        isSuccess,
        isError,
        isLoading,
        isFetching
    } = useGetMyPostsQuery(query);

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
