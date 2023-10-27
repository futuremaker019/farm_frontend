import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Login} from "./page/login/Login";
import {Main} from "./page/main/Main";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;