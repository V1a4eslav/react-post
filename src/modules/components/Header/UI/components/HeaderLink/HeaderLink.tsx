import {StyledLink} from "../../../../../../UIKit/ViewLinks/StyleComponent";
import {useMatch} from "react-router-dom";
import React from "react";
import { StyledHeaderLink } from "./StyleComponent";

export const HeaderLink = ({children, to, ...props}:StyledLink) => {
    const match = useMatch({
        path: to,
        end: to.length === 1,
    });
    return (
        <StyledHeaderLink className={match ? 'active' : ''} to={to} {...props}>
            {children}
        </StyledHeaderLink>
    );
}
