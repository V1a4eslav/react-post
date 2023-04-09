import React from "react";
import {Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import {Layout} from "src/modules/components/Layout";
import {HomePage} from "src/modules/pages/homePage/HomePage";
import {LoginPage} from "../../modules/pages/loginPage/LoginPage";
import {RegisterPage} from "../../modules/pages/registerPage/UI/RegisterPage";
import {GlobalFeed} from "../../modules/components/Feeds/components/FeedsItems/components/GlobalFeed";
import {YourFeed} from "../../modules/components/Feeds/components/FeedsItems/components/YourFeed";
import {TagFeed} from "../../modules/components/Feeds/components/FeedsItems/components/TagFeed";
import {RequireAuth} from "../../hoc/RequireAuth";
import {EditorPage} from "../../modules/pages/editorPage/EditorPage";
import {ProfilePage} from "../../modules/pages/profilePage/ProfilePage";
import {SettingsPage} from "../../modules/pages/settingsPage/SettingsPage";
import {ArticlePage} from "../../modules/pages/ArticlePage/ArticlePage";

export const router = createBrowserRouter(createRoutesFromElements(
    <>
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
            <Route path='/editor' element={
                <RequireAuth>
                    <EditorPage/>
                </RequireAuth>
            }/>
            <Route path='/editor/:slug' element={
                <RequireAuth>
                    <EditorPage/>
                </RequireAuth>
            }/>
            <Route path='/profile/:profile' element={
                <RequireAuth>
                    <ProfilePage/>
                </RequireAuth>
            }/>
            <Route path='/settings' element={
                <RequireAuth>
                    <SettingsPage/>
                </RequireAuth>
            }/>
            <Route path='login' element={<LoginPage/>}/>
            <Route path='article/:title' element={<ArticlePage/>}/>
            <Route path='register' element={<RegisterPage/>}/>
        </Route>
    </>
))