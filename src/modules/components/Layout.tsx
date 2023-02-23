import React from 'react';
import {Outlet} from "react-router";
import {Header} from "./Header/UI/Header";
import {Wrapper} from "./Wrapper";

export const Layout = () => {
    return (
        <Wrapper>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <footer>footer</footer>
        </Wrapper>
    );
};
