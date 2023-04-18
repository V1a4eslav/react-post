import React, {memo} from "react";
import {IFeedResponse} from "../../../../../../app/repository/realWorld/models/IFeedResponse";
import {Feed} from "./Feed";

export const FeedList = ({data}: { data: IFeedResponse | undefined }) => {
    return (
        <>
            {data?.articles.map((article, index) => (
                <Feed key={index} article={article}/>
            ))}
        </>
    )
};
