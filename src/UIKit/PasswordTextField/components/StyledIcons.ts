import styled, {css} from "styled-components";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";

const Icon = css`
  font-size: 25px;
  color: ${({theme}) => theme.colors.translucentSecondary};
  transition: color .3s linear;
  &:hover{
    color: ${({theme}) => theme.colors.primary};
  }
`

export const Eye = styled(AiOutlineEyeInvisible)`
  ${Icon}
`;

export const EyeInvisible = styled(AiOutlineEye)`
  ${Icon}
`;