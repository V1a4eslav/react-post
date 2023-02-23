import React from 'react';
import {Container} from "../../../../UIKit/Container";
import {RegisterForm} from "../../../components/RegisterForm/RegisterForm";

export const RegisterPage = () => {
    return (
        <Container>
           <RegisterForm name="register"/>
        </Container>
    );
};
