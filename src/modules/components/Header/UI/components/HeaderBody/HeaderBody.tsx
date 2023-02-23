import React, {ReactNode} from 'react';
import styled from "styled-components";

interface IHeaderBody {
    children: ReactNode,
    className?: string,
}

export const StyledComponent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0px;
`

export const HeaderBody = (props: IHeaderBody) => {
    return (
       <StyledComponent {...props}/>
    )
}

