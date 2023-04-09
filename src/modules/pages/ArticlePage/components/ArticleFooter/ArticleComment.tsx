import React, {useCallback} from 'react';
import {
    SCommentBody,
    SCommentDeleteButton,
    SCommentDeleteButtonWrapper,
    SCommentFooter,
    SCommentWrapper
} from "./StyledComponent";
import {Comment} from "../../../../../app/repository/realWorld/models/ICommentResponse";
import {CommentUser} from "../../../../../UIKit/CommentUser/CommentUser";
import {useOwn} from "../../../../../hook/useOwn";
import {useParams} from "react-router-dom";
import {useDeleteArticleCommentMutation} from "../../../../../app/repository/realWorld/RealWorldApi";

export const ArticleComment = ({comment}: { comment: Comment }) => {
    const {isOwnArticle} = useOwn(comment.author.username);
    const {title}= useParams();

    const [deleteArticleComment,{isLoading}]= useDeleteArticleCommentMutation();

    const handleDeleteComment = useCallback(() => {
        deleteArticleComment({title, id: comment.id})
        }, [comment],
    );

    return (
        <>
            <SCommentWrapper>
                <SCommentBody>
                    {comment.body}
                </SCommentBody>
                <SCommentFooter>
                    <CommentUser comment={comment}/>
                    <SCommentDeleteButtonWrapper>
                        {isOwnArticle &&
                            <SCommentDeleteButton onClick={handleDeleteComment}/>
                        }
                    </SCommentDeleteButtonWrapper>
                </SCommentFooter>
            </SCommentWrapper>
        </>
    );
};
