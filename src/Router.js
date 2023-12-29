import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import {Login} from "./page/login/Login";
import {BaseLayout} from "./components/BaseLayout";
import {NotFound} from "./components/NotFound";
import {Stocks} from "./page/stock/Stocks";
import {StocksUpload} from "./page/stock/StocksUpload";
import {Main} from "./page/main/Main";
import {Articles} from "./page/article/Articles";
import {Article} from "./page/article/Article";
import {ArticleCreate} from "./page/article/ArticleCreate";
import {Assets} from "./page/asset/Assets";
import {Asset} from "./page/asset/Asset";

const router = createBrowserRouter([
    {
        path: "/",
        element: <BaseLayout />,
        errorElement: <NotFound />,
        children: [
            { index: true, element: <Main /> },
        ],
    },
    {
        path: "/articles",
        element: <BaseLayout />,
        errorElement: <NotFound />,
        children: [
            { index: true, element: <Articles /> },
            { path: "/articles/:id", element: <Article /> },
            { path: "/articles/create", element: <ArticleCreate /> },
            // path: "events/:id", pathvarialbe 을 이런식으로 사용하면 될듯
            // { path: "third", element: <Third /> },
        ],
    },
    {
        path: "/assets",
        element: <BaseLayout />,
        errorElement: <NotFound />,
        children: [
            { index: true, element: <Assets /> },
            { path: "/assets/:id", element: <Asset /> },
            // { path: "/assets/create", element: <ArticleCreate /> },
            // path: "events/:id", pathvarialbe 을 이런식으로 사용하면 될듯
            // { path: "third", element: <Third /> },
        ],
    },
    {
        path: "/stocks",
        element: <BaseLayout />,
        errorElement: <NotFound />,
        children: [
            { index: true, element: <Stocks /> },
            { path: "/stocks/upload", element: <StocksUpload /> },
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