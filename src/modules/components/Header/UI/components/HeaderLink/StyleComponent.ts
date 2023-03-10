import styled from "styled-components";
import {Link} from "react-router-dom";

export const StyledHeaderLink = styled(Link)`
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

