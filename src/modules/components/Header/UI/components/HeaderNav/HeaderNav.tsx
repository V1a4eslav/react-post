import React from 'react';
import {HeaderNavStyle, IHeaderNav } from './StyleComponent';
import {HeaderLink} from "../HeaderLink/HeaderLink";

export const HeaderNav = ({className}: IHeaderNav) => (
    <HeaderNavStyle className={className}>
        <HeaderLink to='/'>Home</HeaderLink>
        <HeaderLink to='/login'>Sign In</HeaderLink>
        <HeaderLink to='/register'>Sign Up</HeaderLink>
    </HeaderNavStyle>
);

