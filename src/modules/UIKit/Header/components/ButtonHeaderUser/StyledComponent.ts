import styled from "styled-components";
import {ITheme} from "../../../../../app/theme/themeInterface";

export const SHeaderUserBody = styled.div`
  display: flex;
  align-items: center;
`

export const SHeaderUserImg = styled.img`
  border-radius: 50%;
  height: 26px;
  margin-right: 2px;
`

export const SHeaderUsername = styled.span`
  @media (${({theme}: ITheme) => theme.media.tablet}  ) {
    display: none;
  }
`