import React from 'react';
import {Outlet} from "react-router";
import {AnimatePresence} from "framer-motion";
import {Header} from "./Header/Header";
import {Wrapper} from "./Wrapper";
import {MainWrapper} from "./MainWrapper";
import {Footer} from "./Footer/Footer";

export const Layout = () => {
    return (
        <Wrapper>
            <Header/>
            <MainWrapper>
                <AnimatePresence mode="wait">
                    <Outlet/>
                </AnimatePresence>
            </MainWrapper>
            <Footer/>
        </Wrapper>

    );
};
