import React, {ReactNode} from 'react';
import { SHeaderNav } from './StyleComponent';

interface HeaderNavigate{
    children:ReactNode,
    menuActive:boolean
}

export const HeaderNavigate = ({children,menuActive}:HeaderNavigate) => {
    return (
        <SHeaderNav className={menuActive?'active':''}>
            {children}
        </SHeaderNav>
    );
};
