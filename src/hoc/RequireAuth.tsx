import React from 'react';
import {useAppSelector} from "../hook/redux";
import {Navigate} from "react-router";
import {isTokenExpired} from "../helpers/tokenExpiresIn";

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

/*
Первое условие if (!isAuthenticated) проверяет, авторизован ли пользователь вообще.
Если он не авторизован, то перенаправляет на страницу логина.
Второе условие if (isAuthenticated && isTokenExpired(tokenExpiresIn)) проверяет,
не истек ли срок действия токена. Это условие нужно для случая, когда пользователь был авторизован ранее и у него был получен токен, но срок действия токена истек до того, как он посетил страницу, защищенную этим HOC. В таком случае, пользователя также нужно перенаправить на страницу логина.
Оба условия нужны, чтобы гарантировать, что пользователь,
который не авторизован или у которого истек срок действия токена,
не сможет получить доступ к защищенной странице.
*/