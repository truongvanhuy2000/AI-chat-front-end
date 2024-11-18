import {Route, Routes} from 'react-router-dom';
import React from 'react';
import AppLayout from "../components/layout/AppLayout";
import ImageGenerator from "../pages/ImageGeneration/ImageGenerator";
import LandingPage from "../pages/Landing/LandingPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route key="/" path="/" element={<LandingPage/>}></Route>
            <Route element={<AppLayout/>}>
                <Route key={0} path="/image-generator" element={<ImageGenerator />}/>
            </ Route>
        </Routes>
    )
};

export default AppRoutes