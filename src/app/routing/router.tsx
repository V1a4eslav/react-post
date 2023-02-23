// import React, {FC, lazy} from 'react';
// import React from "react";
// import {BrowserRouter, Routes, Route, createBrowserRouter, createRoutesFromElements,} from "react-router-dom";

// const AuthorizationView = lazy(() => import('../../modules/authorization/ui/index'));
// const DashboardView = lazy(() => import('../../modules/dashboard/ui/index'));

// export const AppRoutes: FC = () => {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={
//                     <SignIn/>
//                     // <React.Suspense fallback={<CustomBackdrop />}>
//                     //     <AuthorizationView />
//                     // </React.Suspense>
//                 }/>
//                 <Route path="/login" element={
//                     <SignIn/>
//                     // <React.Suspense fallback={<CustomBackdrop />}>
//                     //     <AuthorizationView />
//                     // </React.Suspense>
//                 }/>
//                 <Route path="/register" element={
//                     // <React.Suspense fallback={<CustomBackdrop />}>
//                     //     <DashboardView />
//                     // </React.Suspense>
//                     <SignUp/>
//                 }/>
//             </Routes>
//         </BrowserRouter>
//     );
// };

import React from "react";
import {Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import {Layout} from "src/modules/components/Layout";
import {HomePage} from "src/modules/pages/homePage/UI/HomePage";
import {RequireAuth} from "../../hoc/RequireAuth";
import {LoginPage} from "../../modules/pages/loginPage/UI/LoginPage";
import {RegisterPage} from "../../modules/pages/registerPage/UI/RegisterPage";

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