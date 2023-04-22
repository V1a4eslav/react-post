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

    const [isFollow, setIsFollow] = useState(article.following);

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

    const updateFollowData =  (data: Author) => {
        setIsFollow(data.following);
    };

    const handleFollow = async () => {
            if (isAuth) {
                if (!isFollow) {
                    await postFollow(article.username);
                } else {
                    await deleteFollow(article.username);
                }
            } else {
                navigate('/login');
            }
        };

    useEffect(() => {
        postFollowData && updateFollowData(postFollowData.profile)
    }, [postFollowData?.profile.following]);


    useEffect(() => {
        deleteFollowData && updateFollowData(deleteFollowData.profile)
    }, [ deleteFollowData?.profile.following]);


    useEffect(() => {
        setIsFollow(article.following)
    }, [article.following]);


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