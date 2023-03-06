import { CSSTransition } from "react-transition-group";
import styled from "styled-components";

export const Fade = styled(CSSTransition)`
  &.fade-enter {
    opacity: 0;
  }
  &.fade-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in-out;
  }
  &.fade-exit {
    opacity: 1;
  }
  &.fade-exit-active {
    opacity: 0;
    transition: opacity 500ms ease-in-out;
  }
`;