import React from 'react';
import {router} from './routing/router';
import {RouterProvider} from "react-router";
import '../fonts/Fonts.css';
import {GlobalStyles} from "../modules/components/GlobalStyles";
import {ThemeProvider} from "styled-components";
import {useTheme} from "../hook/useTheme";

export const App = () => {
    const {theme} = useTheme();
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <RouterProvider router={router}/>
        </ThemeProvider>
    )
};
