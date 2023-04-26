import React, {useEffect, useState} from 'react';
import {SHeaderNav} from './StyleComponent';
import {HeaderLink} from "../HeaderLink/HeaderLink";
import {useAppSelector} from "../../../../../hook/redux";
import {Burger} from "../BurgerIcon/BurgerIcon";
import {HeaderNavLinks} from "../HeaderNavLinks/HeaderNavLinks";
import {ButtonHeaderUser} from "../ButtonHeaderUser/ButtonHeaderUser";
import {HeaderNavigate} from "./HeaderNavigate";
import {useLocation} from "react-router";


export const HeaderNav = () => {
    const location = useLocation()
    const isAuth = useAppSelector(state => state.user.isAuth);
    const profile = useAppSelector(state => state.user.userData.username);
    const [menuActive, setMenuActive] = useState(false);

    useEffect(() => {
        setMenuActive(false)
    }, [location]);

    return (
        <>
            <Burger setMenuActive={setMenuActive} menuActive={menuActive}/>
            <HeaderNavigate menuActive={menuActive}>
                <HeaderLink to='/main'>Home</HeaderLink>
                {isAuth && <HeaderNavLinks/>}
                {!isAuth &&
                    <>
                        <HeaderLink to='/login'>Sign In</HeaderLink>
                        <HeaderLink to='/register'>Sign Up</HeaderLink>
                    </>
                }
            </HeaderNavigate>
            {isAuth && <HeaderLink to={`/profile/${encodeURIComponent(profile)}`} className='profile-link'>
                <ButtonHeaderUser/>
            </HeaderLink>}
        </>
    );

}