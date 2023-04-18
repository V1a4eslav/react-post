import React, {useMemo} from 'react';
import {useOffset} from "../../../../../../hook/useOffset";
import {
    useGetFavoritePostsQuery,
} from "../../../../../../app/repository/realWorld/RealWorldApi";
import {FeedsTemplate} from "../../../../../components/Feeds/components/FeedsItems/components/FeedTemplate";
import {useLocation} from "react-router";

export const FavoritesPost = () => {
    const {offset, limit, page} = useOffset();
    const location = useLocation();
   const user =location.pathname.split('/')[2];
    const query = `${user}&limit=${limit}&offset=${offset}`;
    const {
        data,
        isSuccess,
        isError,
        isLoading,
        isFetching
    } = useGetFavoritePostsQuery(query);

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
