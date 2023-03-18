import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import Home from "./routes/Home";
import Checkout from "./routes/Checkout";
import Product from "./routes/Product";
import Cart from "./routes/Cart";
import Profile from "./routes/Profile";
import About from "./routes/About";
import Blog from "./routes/Blog";
import PostList, { listPostLoader } from "./components/PostList";
import PostDetail, { postDetailLoader } from "./components/PostDetail";
import PageNotFound from "./routes/PageNotFound";
import Todos, { todoActions, todoLoader } from "./routes/Todos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "posts",
        element: <PostList />,
        loader: listPostLoader,
      },
      {
        path: "posts/:postId",
        element: <PostDetail />,
        loader: postDetailLoader,
      },
      {
        path: "/post/:postId/authors/:authorId",
        element: <Profile />,
      },
      {
        path: "/todos",
        element: <Todos />,
        loader: todoLoader,
        action: todoActions,
      },
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
