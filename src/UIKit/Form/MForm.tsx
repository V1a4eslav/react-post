import React from 'react';
import {IFormProps, StyledForm} from "./StyleComponent";

export const MForm = (props: IFormProps) => {
    return <StyledForm
        initial={{scale: 0.9,opacity:0}}
        animate={{scale: 1,opacity:1}}
        transition={{duration: 0.5}}
        layout
        noValidate {...props}/>
};
