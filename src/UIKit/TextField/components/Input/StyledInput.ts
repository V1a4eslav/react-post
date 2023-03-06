import styled from "styled-components";
import {labelStyles, StyledLabel} from "../Label/StyledLabel";
import {InputHTMLAttributes} from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    errors?: boolean,
}

interface IInputProps {
    type?: string,
    placeholder: string,
    classNameInput?: string,
    name: string,
}

export const StyledInput = styled.input.attrs((props: IInputProps) => ({
    type: props.type || 'text',
    name: props.name,
    errors: props.errors
}))`
  font-family: inherit;
  width: 100%;
  font-size: ${({theme}) => theme.size.sizeSemiLight};
  color: ${({theme}) => theme.colors.secondary};
  padding: 16px 35px 16px 15px;
  background: transparent;
  outline: 2px solid ${({theme, errors}) => errors ? theme.colors.errorColor : theme.colors.translucentSecondary};
  border-radius: 5px;

  &[type="password"] {
    font-weight: 700;
  }
  
  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ ${StyledLabel} {
    cursor: text;
    top: 35px;
    font-size: 16px;
  }
  
  &:focus ~ ${StyledLabel} {
    ${labelStyles};

  }

  &:focus ~ ${StyledLabel} {
    color: ${({theme, errors}) => errors ? theme.colors.errorColor : theme.colors.primary};
  }

  &:focus,
  &:hover {
    outline: 2px solid ${({theme}) => theme.colors.primary};
  }


`