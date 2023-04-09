import React from 'react';
import {IFormButton, StyledFormButton} from "./StyleComponent";
import styled from "styled-components";
import {ITheme} from "../../app/theme/themeInterface";


export const Button = (props: IFormButton) => (
    <StyledFormButton {...props}/>
);

export const FormButton = styled(Button)`
  margin-top: 10px;
`;

export const SArticleFormButton = styled(Button)`
  padding: 4px 8px;
  font-size: ${({theme}: ITheme) => theme.size.sizeExtraLight};
  margin-left: auto;
`
