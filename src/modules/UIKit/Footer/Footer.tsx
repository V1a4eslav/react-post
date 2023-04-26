import React from 'react';
import {Container} from '../Container';
import {SFooter, SFooterBody, SFooterLogo, SFooterText} from "./SFooter";

export const Footer = () => {
    return (
        <SFooter>
            <Container>
                <SFooterBody>
                    <SFooterLogo to='/'>conduit</SFooterLogo>
                    <SFooterText>© 2023. An interactive learning project from ...</SFooterText>
                </SFooterBody>
            </Container>
        </SFooter>
    );
};
