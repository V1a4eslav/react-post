import React from 'react';
import {useOffset} from "../../../../../../hook/useOffset";
import {useAppSelector} from "../../../../../../hook/redux";
import {
    useGetFavoritePostsQuery,
} from "../../../../../../app/repository/realWorld/RealWorldApi";
import {FeedsTemplate} from "../../../../../components/Feeds/components/FeedsItems/components/FeedTemplate";
import {useLocation} from "react-router";

export const FavoritesPost = () => {
    const {offset, limit, page, setPage} = useOffset();
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
