import React, {useCallback, useMemo, useState} from 'react';
import {SArticleCommentsBody, SShowMoreCommentsButton} from "./StyledComponent";
import {ArticleComment} from "./ArticleComment";
import {useGetArticleCommentQuery} from "../../../../../app/repository/realWorld/RealWorldApi";
import {useParams} from "react-router-dom";

export const ArticleCommentsBody = () => {
    const [itemsToShow, setItemsToShow] = useState(2);
    const {title} = useParams();
    const {data} = useGetArticleCommentQuery(`${title}`);

    const handleShowMore = useCallback(() => {
        setItemsToShow(prevState => prevState + 2)
    }, [data]);

    const sortedComments = useMemo(() => {
        return [...data?.comments || []].sort((a, b) => {
            const dateA = new Date(a.createdAt);
            const dateB = new Date(b.createdAt);
            return dateB.getTime() - dateA.getTime();
        });
    }, [data]);

    const displayedComments = useMemo(() => sortedComments.slice(0, itemsToShow),
        [sortedComments, itemsToShow]);
    return (
        <SArticleCommentsBody>
            {displayedComments?.map(comment => (
                <ArticleComment key={comment.id} comment={comment}/>
            ))}
            {sortedComments.length > itemsToShow && (
                <SShowMoreCommentsButton onClick={handleShowMore}>Show more</SShowMoreCommentsButton>)
            }
        </SArticleCommentsBody>
    );
};
