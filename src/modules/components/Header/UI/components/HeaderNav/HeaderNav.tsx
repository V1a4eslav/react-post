import React from 'react';
import {HeaderNavStyle, IHeaderNav} from './StyleComponent';
import {HeaderLink} from "../HeaderLink/HeaderLink";
import {useAppSelector} from "../../../../../../hook/redux";
import {ButtonHeaderUser} from "../ButtonHeaderUser/ButtonHeaderUser";
import {RiSettings5Fill} from "@react-icons/all-files/ri/RiSettings5Fill";
import {BiEdit} from "@react-icons/all-files/bi/BiEdit";

export const HeaderNav = ({className}: IHeaderNav) => {
    const isAuth = useAppSelector(state => state.user.isAuth);
    const profile = useAppSelector(state => state.user.userData.username)

    return (
        <HeaderNavStyle className={className}>
            <HeaderLink to='/'>Home</HeaderLink>
            {!isAuth &&
                <>
                    <HeaderLink to='/login'>Sign In</HeaderLink>
                    <HeaderLink to='/register'>Sign Up</HeaderLink>
                </>
            }
            {isAuth &&
                <>
                    <HeaderLink to={'/editor'}>
                        <BiEdit/> New Article
                    </HeaderLink>
                    <HeaderLink to={'/settings'}>
                        <RiSettings5Fill/>Settings
                    </HeaderLink>
                    <HeaderLink to={`/profile/${profile}`}>
                        <ButtonHeaderUser/>
                    </HeaderLink>
                </>
            }
        </HeaderNavStyle>
    );

}