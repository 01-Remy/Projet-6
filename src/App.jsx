import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Error from "./pages/error";
import Housing from "./pages/housing";
import About from "./pages/about";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "*",
    element: <Error />,
  },
  {
    path: "/fiche-logement",
    element: <Housing />,
    errorElement: <Error />,
  },
  {
    path: "/a-propos",
    element: <About />,
    errorElement: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
