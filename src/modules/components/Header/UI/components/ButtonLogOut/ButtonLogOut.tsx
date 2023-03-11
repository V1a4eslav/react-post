import React, {ReactNode} from 'react';
import {StyledButtonLogOut} from "./StyleComponent";

interface IButton{
    onClick :()=>void,
    children:ReactNode
}

export const ButtonLogOut = (props:IButton) => {
    return (
        <StyledButtonLogOut onClick={props.onClick}>
            LogOut
        </StyledButtonLogOut>
    );
};
