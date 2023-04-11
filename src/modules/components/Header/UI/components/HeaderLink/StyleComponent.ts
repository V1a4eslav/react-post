import styled from "styled-components";
import {Link, NavLink} from "react-router-dom";

export const StyledHeaderLink = styled(NavLink)`
  display: flex;
  align-items: center;
  column-gap: 3px;
  opacity: 0.3;
  transition: opacity 0.3s linear;
  &:not(.active):hover {
    opacity: 1;
  }

  &.active {
    opacity: 1;
    cursor: auto;
  }
`

