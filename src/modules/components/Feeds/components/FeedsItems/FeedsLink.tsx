import React from "react";
import {StyledFeedsLink} from "./StyledComponent";
import {StyledLink} from "../../../../../UIKit/ViewLinks/StyleComponent";

export const FeedsLink = ({children, to, ...props}: StyledLink) => {

    return (
        <StyledFeedsLink  to={to} {...props}>
            {children}
        </StyledFeedsLink>
    );
}


