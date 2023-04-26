import styled from "styled-components";
import {ITheme} from "../../../../../../app/theme/themeInterface";

export const BannerText = styled.p`
  font-size: ${({theme}) => theme.size.sizeNormal};
  text-align: center;
  font-family: 'Titi', sans-serif;
  font-weight: 300;
  @media (${({theme}: ITheme) => theme.media.tablet}) {
    font-size: ${({theme}:ITheme)=>theme.size.sizeLight}    ;
  }
`