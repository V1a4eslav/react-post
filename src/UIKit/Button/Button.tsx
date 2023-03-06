import React from 'react';
import {IFormButton, StyledFormButton} from "./StyleComponent";
import styled from "styled-components";


export const Button = (props: IFormButton) => (
    <StyledFormButton {...props}/>
);

export const FormButton = styled(Button)`
    margin-top: 10px;
`;