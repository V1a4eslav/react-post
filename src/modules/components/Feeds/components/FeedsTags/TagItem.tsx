import {StyledItemTag} from "./StyledFeedsTags";
import React, {ReactNode} from "react";

export interface ITagItem {
    children: ReactNode,
    to: string,
    initial?: any,
    animate?: any,
    transition?: any,
    exit?: any,
    whileHover?: any,
    whileTap?: any,
    layout?: any,
    disabled?: boolean
}

export const TagItem = (props: ITagItem) => (
    <StyledItemTag {...props}/>
);
