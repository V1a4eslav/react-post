import React from 'react';
import {useAppSelector} from "../hook/redux";
import {Navigate} from "react-router";

export const RequireAuth = ({children}: any) => {
    const isAuth = useAppSelector(state => state.user.isAuth);
    const token = useAppSelector(state => state.user.userData.token);

    if (!isAuth) {
        return <Navigate to='/login'/>
    }

    if (!isAuth && !token) {
        return <Navigate to='/login'/>
    }

    return children;
};

