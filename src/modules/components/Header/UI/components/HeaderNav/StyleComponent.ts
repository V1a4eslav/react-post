import {ReactNode} from "react";
import styled from "styled-components";

export interface IHeaderNav {
    children?: ReactNode,
    className?: string,
}

export const HeaderNavStyle = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
`;
