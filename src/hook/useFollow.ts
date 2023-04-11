import React, {useCallback, useEffect, useState} from "react";
import {
    useDeleteFollowMutation,
    usePostFollowMutation
} from "../app/repository/realWorld/RealWorldApi";
import {Author} from "../app/repository/realWorld/models/IFeedResponse";
import {useAppSelector} from "./redux";
import {useNavigate} from "react-router";

export const useFollow = (article: Author) => {
    const navigate = useNavigate();
    const isAuth = useAppSelector(state => state.user.isAuth);

    const {username, following} = article;
    const [isFollow, setIsFollow] = useState(following);

    const [postFollow, {
        data: postFollowData,
        isSuccess: isSuccessPostFollow,
        isLoading: isLoadingPostFollow,
        error:errorPostFollow,
        isError:isErrorPostFollow,
    }] = usePostFollowMutation();

    const [deleteFollow, {
        data: deleteFollowData,
        isSuccess: isSuccessDeleteFollow,
        isLoading: isLoadingDeleteFollow,
        error:errorDeleteFollow,
        isError:isErrorDeleteFollow,
    }] = useDeleteFollowMutation();

    const handleFollow = useCallback(async () => {
            if (isAuth) {
                if (!isFollow) {
                    await postFollow(username);
                } else {
                    await deleteFollow(username);
                }
            } else {
                navigate('/login');
            }
        }, [isFollow,isAuth],
    );

    useEffect(() => {
        isSuccessPostFollow &&
        postFollowData &&
        setIsFollow(postFollowData.profile.following)
    }, [isSuccessPostFollow, postFollowData]);

    useEffect(() => {
        isSuccessDeleteFollow &&
        deleteFollowData &&
        setIsFollow(deleteFollowData.profile.following);

    }, [isSuccessDeleteFollow, deleteFollowData]);

    return {
        handleFollow,
        isFollow,
        isSuccessPostFollow,
        isLoadingPostFollow,
        errorPostFollow,
        isErrorPostFollow,
        isSuccessDeleteFollow,
        isLoadingDeleteFollow,
        errorDeleteFollow,
        isErrorDeleteFollow
    }
}