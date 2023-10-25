import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GlobalStyle from "./styles/Globalstyles";
import {ThemeProvider} from "styled-components";
import theme from "./styles/theme";
import Router from "./Router";

ReactDOM.render(
    <>
        <GlobalStyle/>
        <ThemeProvider theme={theme}>
            <Router/>
        </ThemeProvider>
    </>,
    document.getElementById('root')
);
