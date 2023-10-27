import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import GlobalStyle from "./styles/Globalstyles";
import {ThemeProvider} from "styled-components";
import theme from "./styles/theme";
import Router from "./Router";

createRoot(document.getElementById('root')).render(
    <>
        <GlobalStyle/>
        <ThemeProvider theme={theme}>
            <Router/>
        </ThemeProvider>
    </>
)
