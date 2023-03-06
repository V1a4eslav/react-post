import React from 'react';
import {IFormProps, StyledForm} from "./StyleComponent";

export const Form = (props: IFormProps) => {
    return <StyledForm noValidate {...props}/>
};

