import React from 'react';
import {Logo} from "./components/Logo/Logo";
import {Container} from "src/UIKit/Container";
import {HeaderBody} from "./components/HeaderBody/HeaderBody";
import {HeaderNav} from "./components/HeaderNav/HeaderNav";

export const Header = () => {
    return (
        <div className="header">
            <Container>
                <HeaderBody>
                    <Logo to='/'>conduit</Logo>
                    <HeaderNav/>
                </HeaderBody>
            </Container>
        </div>
    );
};
