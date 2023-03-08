import React from 'react';
import {Outlet} from "react-router";
import {AnimatePresence} from "framer-motion";
import {Header} from "./Header/UI/Header";
import {Wrapper} from "./Wrapper";
import {MainWrapper} from "./MainWrapper";

export const Layout = () => {
    return (
        <Wrapper>
            <Header/>
            <MainWrapper>
                <AnimatePresence mode="wait">
                    <Outlet/>
                </AnimatePresence>
            </MainWrapper>
            <footer>footer</footer>
        </Wrapper>

    );
};
