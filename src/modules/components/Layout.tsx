import React from 'react';
import {Outlet} from "react-router";
import {Header} from "./Header/UI/Header";
import {Wrapper} from "./Wrapper";
import {MainWrapper} from "./MainWrapper";

export const Layout = () => {
    return (
        <Wrapper>
            <Header/>
            <MainWrapper>
                <Outlet/>
            </MainWrapper>
            <footer>footer</footer>
        </Wrapper>
    );
};
