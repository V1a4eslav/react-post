import React from 'react';
import {HeaderNavStyle, IHeaderNav} from './StyleComponent';
import {HeaderLink} from "../HeaderLink/HeaderLink";
import {useAppSelector} from "../../../../../../hook/redux";
import {useActions} from "../../../../../../hook/actions";
import {ButtonLogOut} from "../ButtonLogOut/ButtonLogOut";

export const HeaderNav = ({className}: IHeaderNav) => {
    const isAuth = useAppSelector(state => state.user.isAuth);
    const {logoutUser} = useActions();

    const clearUser = () => {
        logoutUser()
    }

    return (
        <HeaderNavStyle className={className}>
            <HeaderLink to='/'>Home</HeaderLink>
            {!isAuth &&
                <>
                    <HeaderLink to='/login'>Sign In</HeaderLink>
                    <HeaderLink to='/register'>Sign Up</HeaderLink>
                </>
            }
            {isAuth && <ButtonLogOut onClick={clearUser}>Log Out</ButtonLogOut>}
        </HeaderNavStyle>
    );

}