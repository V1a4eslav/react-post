import styled, {css} from "styled-components";

export const labelStyles = css`
  position: absolute;
  top:7px;
  left: 5px;
  font-size: 12px;
  color: #9b9b9b;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: .2s;
`;

export const StyledLabel = styled.label`
  ${labelStyles};
  pointer-events: none;
  background-color: #fff;
  padding: 0 5px;
`;


