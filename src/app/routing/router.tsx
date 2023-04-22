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
import {SettingsPage} from "../../modules/pages/settingsPage/SettingsPage";
import {ArticlePage} from "../../modules/pages/ArticlePage/ArticlePage";
import {MyPosts} from "../../modules/pages/profilePage/components/Posts/MyPosts/MyPosts";
import {FavoritesPost} from "../../modules/pages/profilePage/components/Posts/FavoritesPost/FavoritesPost";
import {ProfilePage} from "../../modules/pages/profilePage/ProfilePage";
import {Navigate} from "react-router";

export const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path='/' element={<Layout/>}>
            <Route index element={<Navigate to='main' replace/>}/>
            <Route path='main' element={<HomePage/>}>
                <Route path='your-feed' element={
                    <RequireAuth>
                        <YourFeed/>
                    </RequireAuth>
                }/>
                <Route path='global-feed' element={<GlobalFeed/>}/>
                <Route index element={<GlobalFeed/>}/>
                <Route path='article' element={<TagFeed/>}/>
            </Route>
            <Route path='/profile/:profile' element={<ProfilePage/>}>
                <Route index element={<MyPosts/>}/>
                <Route path='favorites' element={<FavoritesPost/>}/>
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