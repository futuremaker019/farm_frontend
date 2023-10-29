import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import GlobalStyle from "./styles/Globalstyles";
import {ThemeProvider} from "styled-components";
import theme from "./styles/theme";
import router from "./Router";
import {RouterProvider} from "react-router-dom";

const root = document.getElementById('root');
createRoot(root).render(
    <>
        <GlobalStyle/>
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    </>
)
