import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import {Login} from "./page/login/Login";
import {BaseLayout} from "./components/BaseLayout";
import {NotFound} from "./components/NotFound";
import {Main} from "./page/main/Main";
import {Stocks} from "./page/stock/Stocks";
import {StocksUpload} from "./page/stock/StocksUpload";

const router = createBrowserRouter([
    {
        path: "/",
        element: <BaseLayout />,
        errorElement: <NotFound />,
        children: [
            { index: true, element: <Stocks /> },
            { path: "stocks/upload", element: <StocksUpload /> },
            // path: "events/:id", pathvarialbe 을 이런식으로 사용하면 될듯
            // { path: "third", element: <Third /> },
        ],
    },
    {
        path: "/login",
        element: <BaseLayout />,
        errorElement: <NotFound />,
        children: [
            { index: true, element: <Login /> },
            // { path: "second", element: <Second /> },
            // { path: "third", element: <Third /> },
        ],
    },
]);

export default router;