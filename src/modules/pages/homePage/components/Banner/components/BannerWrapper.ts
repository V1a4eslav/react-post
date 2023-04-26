import styled from "styled-components";
import {ITheme} from "../../../../../../app/theme/themeInterface";

export const BannerWrapper = styled.div`
  background-color: ${({theme}) => theme.colors.primary};
  padding: 32px 0;
  color: #fff;
  @media(${({theme}:ITheme)=>theme.media.tablet}){
    padding: 16px 0;
  }
`