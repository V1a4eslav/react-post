import {ReactNode} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

export interface StyledLink {
    children: ReactNode,
    to: string,
    size?: string,
    color?: string,
}

export const StyledLink = styled(Link).attrs((props: StyledLink) => ({
    size: props.size,
    color: props.color,
}))`
  color: ${props => props.color || (({theme}: any) => theme.colors.primary)};
  display: inline-block;
  text-align: center;
  font-size: ${props => props.size || (({theme}: any) => theme.size.sizeLight)};
`;