import {motion} from "framer-motion";
import styled from "styled-components";
import {ITheme} from "../../../app/theme/themeInterface";

export const LoadingWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LoadingDot = styled(motion.span)`
  display: block;
  width: 20px;
  height: 20px;
  background-color: ${({theme}: ITheme) => theme.colors.primary};
  border-radius: 50%;
`;

export const LoadingContainer = styled(motion.div)`
  position: fixed;
  top: 50%;
  width: 85px;
  height: 100%;
  display: flex;
  justify-content: space-around;
`;