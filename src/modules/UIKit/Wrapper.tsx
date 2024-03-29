import React, {ReactNode} from 'react';
import styled from "styled-components";

interface IWrapper {
    children: ReactNode,
}

const StyledWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;

`

export const Wrapper = (props: IWrapper) => {
    return <StyledWrapper {...props}/>
};