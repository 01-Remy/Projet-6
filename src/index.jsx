import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./pages/error";
import Housing from "./pages/housing";
import About from "./pages/about";
import Header from "./components/header";
import Footer from "./components/footer";
import "./styles/index.css";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "*",
//     element: <Error />,
//   },
//   {
//     path: "/fiche-logement",
//     element: <Housing />,
//   },
//   {
//     path: "/a-propos",
//     element: <About />,
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="*" element={<Error />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/fiche-logement" element={<Housing />}></Route>
        <Route path="/a-propos" element={<About />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
