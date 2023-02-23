import React from 'react';
import {Navigate, useLocation} from "react-router";
import {useAuth} from "../hook/useAuth";

export const RequireAuth = ({children}:any ) => {
    const location = useLocation();
    const {user}: any = useAuth();

    if (!user) {
        return <Navigate to='/login' state={{from: location}}/>
    }

    return children;
};
