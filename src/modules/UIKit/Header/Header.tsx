import React from 'react';
import {Logo} from "./components/Logo/Logo";
import {Container} from "src/modules/UIKit/Container";
import {SHeaderBody} from "./components/HeaderBody/HeaderBody";
import {HeaderNav} from "./components/HeaderNav/HeaderNav";
import styled from "styled-components";

export const SHeader = styled.header`
  position: relative;
  background-color: #fff;
`;

export const Header = () => {
    return (
        <SHeader>
            <Container>
                <SHeaderBody>
                    <Logo to='/'>conduit</Logo>
                    <HeaderNav/>
                </SHeaderBody>
            </Container>
        </SHeader>
    );
};
