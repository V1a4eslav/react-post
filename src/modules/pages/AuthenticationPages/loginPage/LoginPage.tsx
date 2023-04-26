import React from 'react';
import {Container} from "../../../UIKit/Container";
import {LoginForm} from "../components/LoginForm";

export const LoginPage = () => {
    return (
        <Container>
            <LoginForm name='login'/>
        </Container>
    );
};
