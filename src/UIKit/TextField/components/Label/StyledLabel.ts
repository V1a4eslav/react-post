import styled, {css} from "styled-components";

export const labelStyles = css`
  position: absolute;
  top: 10%;
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
  display: inline-block;
  pointer-events: none;
  background-color: #fff;
  padding: 0 5px;
  line-height: 1.2;
`;


