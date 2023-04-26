import styled from "styled-components";
import {Link, NavLink} from "react-router-dom";
import {ITheme} from "../../../../../app/theme/themeInterface";

export const StyledHeaderLink = styled(NavLink)`
  display: flex;
  align-items: center;
  column-gap: 3px;
  opacity: 0.3;
  transition: opacity 0.3s linear;
  
  &.profile-link{
    margin-left: 10px;
    z-index: 3;
  }
  
  &:not(.active):hover {
    opacity: 1;
  }

  &.active {
    opacity: 1;
    cursor: auto;
  }
  
  @media(${({theme}: ITheme) => theme.media.tablet}){
    display: inline-flex;
    max-width: 100px;
    text-align: center;
    color: #fff;
    opacity: .6;
    font-size: ${({theme}: ITheme) => theme.size.sizeLight};
  }
`

