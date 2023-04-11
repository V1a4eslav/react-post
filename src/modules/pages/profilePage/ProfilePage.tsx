import React from 'react';
import {ProfileBanner} from "./components/ProfileBanner/ProfileBanner";
import {PostsLayout} from "./components/Posts/PostsLayout";
import {useGetProfileQuery} from "../../../app/repository/realWorld/RealWorldApi";
import {useParams} from "react-router-dom";
import {useAppSelector} from "../../../hook/redux";

export const ProfilePage = () => {
    const {profile = ''} = useParams();
    const user = useAppSelector(state => state.user);
    const {data, isSuccess} = useGetProfileQuery(profile ?? user.userData.username);

    return (
        <>
            {isSuccess && data &&
                <>
                    <ProfileBanner userData={data}/>
                    <PostsLayout userData={data}/>
                </>
            }
        </>
    );
};
