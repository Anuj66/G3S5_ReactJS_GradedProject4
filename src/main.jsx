import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Homepage } from "./pages/Homepage/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/homepage",
    element: <Homepage />,
  },
  {
    path: "/upcomingMovies",
    element: <Homepage />,
  },
  {
    path: "/moviesInTheatres",
    element: <Homepage />,
  },
  {
    path: "/topRatedMovies",
    element: <Homepage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <Navbar />
    <RouterProvider router={router} />
    <Footer />
  </>
);
