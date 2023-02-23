import React from 'react';
import {StyledInput} from "./StyleComponent";
import {ITextFieldProps, ValidationRules} from "../../StyleComponent";
import {UseFormRegister} from "react-hook-form";


export const Input = (props: ITextFieldProps) => {
    return <StyledInput {...props}/>
};
