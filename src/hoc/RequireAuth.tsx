import React from 'react';
import {useAppSelector} from "../hook/redux";
import {Navigate} from "react-router";

export const RequireAuth = ({children}:any ) => {
    const isAuth= useAppSelector(state => state.user.isAuth);

    if (!isAuth) {
        return <Navigate to='/login'/>
    }

    return children;
};
