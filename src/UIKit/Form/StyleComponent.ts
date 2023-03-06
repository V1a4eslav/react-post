import styled from "styled-components";
import {FormEvent, ReactNode} from "react";

export interface IFormProps {
    children?: ReactNode;
    name: string,
    onSubmit?: (event: FormEvent<HTMLFormElement>) => void,
}

export const StyledForm = styled.form`
  max-width: 540px;
  //padding: 0 10px 10px;
  color: ${({color}) => color
          ? color
          : ({theme}) => theme.colors.text};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`