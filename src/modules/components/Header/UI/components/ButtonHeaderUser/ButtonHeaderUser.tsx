import React from 'react';
import {SHeaderUserBody, SHeaderUserImg, SHeaderUsername} from "./StyledComponent";
import {useAppSelector} from "../../../../../../hook/redux";

export const ButtonHeaderUser = () => {
    const userImg = useAppSelector(state => state.user.userData.image);
    const userName = useAppSelector(state => state.user.userData.username);

    return (
        <>
            <SHeaderUserBody>
                <SHeaderUserImg src={userImg} alt='profile'/>
                <SHeaderUsername>{userName}</SHeaderUsername>
            </SHeaderUserBody>
        </>
    );
};
