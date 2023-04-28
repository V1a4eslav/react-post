import React, {memo} from "react";
import {Article} from "../../../../../../app/repository/realWorld/models/IFeedResponse";
import {Feed} from "../../../../../UIKit/Feed";


interface IFeedList{
    data:Article[] | undefined,
}

export const FeedList = memo(({data}:IFeedList) => {
    return (
        <>
            {data?.map((article, index) => (
                <Feed key={index} article={article}/>
            ))}
        </>
    )
});
