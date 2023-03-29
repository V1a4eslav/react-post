import {ReactNode} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

export interface StyledLink {
    children: ReactNode,
    to: string,
    size?: string,
    color?: string,
    className?: any
    onClick?: () => void
}

export const StyledLink = styled(Link).attrs((props: StyledLink) => ({
    size: props.size,
    color: props.color,
}))`
  color: ${props => props.color || (({theme}) => theme.colors.primary)};
  display: inline-block;
  text-align: center;
  font-size: ${props => props.size || (({theme}) => theme.size.sizeLight)};
  margin-bottom: 16px;
`;