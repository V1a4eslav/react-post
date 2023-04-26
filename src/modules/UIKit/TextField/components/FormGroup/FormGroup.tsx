import React from 'react';
import {IFormGroupProps, StyledFormGroup} from "./StyleComponent";


export const FormGroup= (props:IFormGroupProps)=> {
     return (
        <StyledFormGroup {...props}/>
    );
};