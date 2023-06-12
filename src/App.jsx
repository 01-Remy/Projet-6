import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Error from "./pages/error";
import Apartment from "./pages/apartment";
import About from "./pages/about";
import "./styles/style.scss";

const router = createBrowserRouter([
  {
    path: "/kasa",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "*",
    element: <Error />,
  },
  {
    path: "/kasa/error",
    element: <Error />,
  },
  {
    path: "/kasa/appartement/:apartId",
    element: <Apartment />,
    errorElement: <Error />,
  },
  {
    path: "/kasa/a-propos",
    element: <About />,
    errorElement: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
