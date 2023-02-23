import React from 'react';
import {router} from './routing/router';
import {AuthProvider} from "../hoc/AuthProvider";
import {RouterProvider} from "react-router";
import {GlobalStyles} from "../modules/components/GlobalStyles";
import {ThemeProvider} from "styled-components";
import {useTheme} from "../hook/useTheme";


export const App = () => {
    const {theme} = useTheme();

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
                <AuthProvider>
                    <RouterProvider router={router}/>
                </AuthProvider>
        </ThemeProvider>
    )
};
