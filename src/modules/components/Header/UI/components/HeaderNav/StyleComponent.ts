import {ReactNode} from "react";
import styled from "styled-components";
import {FaEdit} from "@react-icons/all-files/fa/FaEdit";
import {BiEdit} from "@react-icons/all-files/bi/BiEdit";

export interface IHeaderNav {
    children?: ReactNode,
    className?: string,
}

export const HeaderNavStyle = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
`;
