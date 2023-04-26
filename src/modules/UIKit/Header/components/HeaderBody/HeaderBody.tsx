import React, {ReactNode} from 'react';
import styled from "styled-components";

export const SHeaderBody = styled.div`
  display: flex;
  align-items: center;
  min-height: 50px;
  &::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: inline-block;
    width: 100%;
    min-height: 50px;
    background-color: #fff;
    z-index: 3;
  }
`;
