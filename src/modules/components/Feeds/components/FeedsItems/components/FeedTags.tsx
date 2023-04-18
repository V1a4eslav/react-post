import React, {memo} from "react";
import {SFeedFooterTagItem} from "./StyledComponent";

export const FeedTags = memo(({article}: { article:string[] } ) => {
    return (
        <>
            {article.map(tag => (
                <SFeedFooterTagItem key={tag}>{tag}</SFeedFooterTagItem>
            ))}
        </>
    )
});