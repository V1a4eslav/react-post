import React, {memo, useMemo} from "react";
import {Article, IFeedResponse} from "../../../../../../app/repository/realWorld/models/IFeedResponse";
import {Feed} from "./Feed";

export const FeedList = memo(({data}: { data: Article[] | undefined }) => {
    return (
        <>
            {data?.map((article, index) => (
                <Feed key={index} article={article}/>
            ))}
        </>
    )
});
