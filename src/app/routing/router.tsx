import React from "react";
import {Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import {Layout} from "src/modules/components/Layout";
import {HomePage} from "src/modules/pages/homePage/UI/HomePage";
import {LoginPage} from "../../modules/pages/loginPage/UI/LoginPage";
import {RegisterPage} from "../../modules/pages/registerPage/UI/RegisterPage";
import {RequireAuth} from "../../hoc/RequireAuth";

export const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route index element={
            <RequireAuth>
                <HomePage/>
            </RequireAuth>
        }/>
        <Route path='login' element={<LoginPage/>}/>
        <Route path='register' element={<RegisterPage/>}/>
    </Route>
))