import styled from "styled-components";
import {ReactNode} from "react";

export interface IFormGroupProps {
    children?: ReactNode;
}

export const StyledFormGroup = styled.div`
  position: relative;
  
  &:not(:last-child){
    margin-bottom: 12px;
  }
`