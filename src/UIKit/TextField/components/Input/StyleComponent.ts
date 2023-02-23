import styled from "styled-components";
import {labelStyles, StyledLabel} from "../Label/StyleComponent";

interface IInputProps {
    type?: string,
    placeholder?: string,
    classNameInput?: string,
    name: string,
}

export const StyledInput = styled.input.attrs((props: IInputProps) => ({
    type: props.type || 'text',
    name: props.name,
    placeholder: props.placeholder,
}))`
  font-family: inherit;
  width: 100%;
  font-size: ${({theme}) => theme.size.sizeLight};
  color: ${({theme}) => theme.colors.secondary};
  padding: 15px 10px;
  background: transparent;
  outline: 1px solid ${({theme}) => theme.colors.translucentSecondary};
  border-radius: 5px;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ ${StyledLabel} {
    font-size: ${({theme}) => theme.size.sizeLight};
    cursor: text;
    top: 31px;
  }


  &:focus ~ ${StyledLabel} {
    ${labelStyles};
  }

  &:focus ~ ${StyledLabel} {
    color: ${({theme}) => theme.colors.primary};
  }

  &:focus,
  &:hover {
    outline: 2px solid ${({theme}) => theme.colors.primary};
  }

`