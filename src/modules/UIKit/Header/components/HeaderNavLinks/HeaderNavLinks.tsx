import React from 'react';
import {HeaderLink} from "../HeaderLink/HeaderLink";
import {BiEdit} from "@react-icons/all-files/bi/BiEdit";
import {RiSettings5Fill} from "@react-icons/all-files/ri/RiSettings5Fill";

export const HeaderNavLinks = () => {
    return (
        <>
            <HeaderLink to={'/editor'}>
                <BiEdit/> New Article
            </HeaderLink>
            <HeaderLink to={'/settings'}>
                <RiSettings5Fill/>Settings
            </HeaderLink>
        </>
    );
};
