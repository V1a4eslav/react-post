import React, {memo} from "react";
import {Article} from "../../../../../../app/repository/realWorld/models/IFeedResponse";
import {Feed} from "../../../../../UIKit/Feed";

export const FeedList = memo(({data}: { data: Article[] | undefined }) => {
    return (
        <>
            {data?.map((article, index) => (
                <Feed key={index} article={article}/>
            ))}
        </>
    )
});
