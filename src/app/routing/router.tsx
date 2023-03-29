import React from "react";
import {Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import {Layout} from "src/modules/components/Layout";
import {HomePage} from "src/modules/pages/homePage/UI/HomePage";
import {LoginPage} from "../../modules/pages/loginPage/UI/LoginPage";
import {RegisterPage} from "../../modules/pages/registerPage/UI/RegisterPage";
import {GlobalFeed} from "../../modules/components/Feeds/components/FeedsItems/components/GlobalFeed";
import {YourFeed} from "../../modules/components/Feeds/components/FeedsItems/components/YourFeed";
import {TagFeed} from "../../modules/components/Feeds/components/FeedsItems/components/TagFeed";
import {RequireAuth} from "../../hoc/RequireAuth";

export const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route path='/' element={<HomePage/>}>
            <Route path='your-feed' element={
                <RequireAuth>
                    <YourFeed/>
                </RequireAuth>
            }/>
            <Route path='global-feed' element={<GlobalFeed/>}/>
            <Route index element={<GlobalFeed/>}/>
            <Route path='article' element={<TagFeed/>}/>
        </Route>
        <Route path='login' element={<LoginPage/>}/>
        <Route path='register' element={<RegisterPage/>}/>
    </Route>
))