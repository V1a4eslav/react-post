import styled from "styled-components";
import {StyledLabel} from "../TextField/components/Label/StyledLabel";

export const STextarea = styled.textarea.attrs((props:any)=>({
    errors: props.errors
}))`
  resize: none;
  width: 100%;
  font-size: ${({theme}) => theme.size.sizeSemiLight};
  color: ${({theme}) => theme.colors.secondary};
  padding: 8px 12px;
  background: transparent;
  outline: 2px solid ${({theme, errors}) => errors ? theme.colors.errorColor : theme.colors.translucentSecondary};
  border-radius: 5px;
  min-height: 128px;
  margin-top: 10px;

  &[disabled]{
    outline-color: rgba(0, 0, 0, 0.67);
    background-color: #ccc;
    color: ${({theme}) => theme.colors.secondaryText};
    opacity: .3;
    &~ ${StyledLabel}{
      opacity: 0;
    }
  }
  
  &::placeholder {
    color: #9b9b9b;
  }
  &:focus ~ ${StyledLabel} {
    color: ${({theme, errors}) => errors ? theme.colors.errorColor : theme.colors.primary};
  }

  &:focus,
  &:hover {
    outline: 2px solid ${({theme}) => theme.colors.primary};
  }
`