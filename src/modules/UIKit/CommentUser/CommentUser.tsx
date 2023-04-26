import React, {useMemo} from 'react';
import {Comment} from "../../../app/repository/realWorld/models/ICommentResponse";
import {SCommentUser, SCommentUserDate, SCommentUserInfo, SCommentUserLogo, SCommentUserName} from "./StyledComponent";
import {dateFormatter} from "../../../utils/dateFormatter";

export const CommentUser = ({comment}: { comment: Comment }) => {

    const date = useMemo(()=>dateFormatter(comment.createdAt),[comment]);

    return (
        <SCommentUser>
            <SCommentUserLogo to={`/profiles/${comment.author.username}`}>
                <img src={comment.author.image} alt="user_logo"/>
            </SCommentUserLogo>
            <SCommentUserInfo>
                <SCommentUserName to={`/profile/${comment.author.username}`}>
                    {comment.author.username}
                </SCommentUserName>
                <SCommentUserDate>{date}</SCommentUserDate>
            </SCommentUserInfo>
        </SCommentUser>
    );
};
