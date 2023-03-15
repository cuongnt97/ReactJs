import React from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Root from "./routers/Root";
import Home from "./routers/Home";
import Blog from "./routers/Blog";
import Contact from "./routers/Contact";
import Men from "./routers/Men";
import Women from "./routers/Women";
import PageNotFound from "./components/PageNotFound";

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "men", element: <Men /> },
      { path: "women", element: <Women /> },
      { path: "blog", element: <Blog /> },
      { path: "contact", element: <Contact /> },
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
