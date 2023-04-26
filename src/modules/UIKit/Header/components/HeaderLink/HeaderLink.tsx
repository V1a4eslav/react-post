import {StyledLink} from "../../../ViewLinks/StyleComponent";
import {useMatch} from "react-router-dom";
import React from "react";
import {StyledHeaderLink} from "./StyleComponent";
import {useLocation} from "react-router";

export const HeaderLink = ({children, to, ...props}: StyledLink) => {
    return (
        <StyledHeaderLink to={to} {...props}>
            {children}
        </StyledHeaderLink>

    );
}


