import styled from "styled-components";
import {ReactNode} from "react";

export interface IFormGroupProps {
    children?: ReactNode;
}

export const StyledFormGroup = styled.div`
  position: relative;
  padding: 15px 0 0;
  
  &:not(:last-child){
    margin-bottom: 10px;
  }
`