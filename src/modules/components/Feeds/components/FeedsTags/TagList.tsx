import React, {memo} from "react";
import {TagItem} from "./TagItem";

interface ITagList {
    tags: string[],
    tag: string
}

export const TagList = memo(({tags, tag}: ITagList) => (
    <>
        {tags?.map((item, index) => (
            <TagItem to={`article?tag=${item}`}
                     disabled={tag === item}
                     layout
                     key={index}
                     initial={{opacity: 0, y: 20}}
                     animate={{opacity: 1, y: 0}}
                     transition={{delay: index * 0.1, duration: 0.5}}
                     exit={{opacity: 0, y: -20}}
            >
                {item}
            </TagItem>
        ))}
    </>
));