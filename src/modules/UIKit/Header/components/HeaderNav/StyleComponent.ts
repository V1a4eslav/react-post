import styled from "styled-components";
import {ITheme} from "../../../../../app/theme/themeInterface";

export const SHeaderNav = styled.nav`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 20px;
  z-index: 3;
  @media (${({theme}: ITheme) => theme.media.tablet}) {
    position: absolute;
    flex-direction: column;
    justify-content: center;
    top: 50px;
    left: 0;
    background-color: #818a91;
    width: 100%;
    padding: 20px 15px;
    transition: all 0.3s linear;
    gap: 10px;
    transform: translateY(-100%);
    z-index: -1;
    &.active {
      z-index: 2;
      transform: translateY(0%);
    }
  }
`;

