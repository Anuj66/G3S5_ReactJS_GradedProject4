import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import data from "./data/json/data.json";
import MoviesList from "./components/MoviesList/MoviesList";
import MovieDetails from "./components/MovieDetails/MovieDetails";

const topRatedIndianMovies = data["top-rated-india"];
const topRatedMovies = data["top-rated-movies"];
const upcomingMovies = data["movies-coming"];
const moviesInTheatres = data["movies-in-theaters"];
const favourite = JSON.parse(localStorage.getItem("favourites"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MoviesList data={topRatedIndianMovies} />,
  },
  {
    path: "/homepage",
    element: <MoviesList data={topRatedIndianMovies} />,
  },
  {
    path: "/upcomingMovies",
    element: <MoviesList data={upcomingMovies} />,
  },
  {
    path: "/moviesInTheatres",
    element: <MoviesList data={moviesInTheatres} />,
  },
  {
    path: "/topRatedMovies",
    element: <MoviesList data={topRatedMovies} />,
  },
  {
    path: "/movieDetails/:id",
    element: <MovieDetails data={data} />,
  },
  {
    path: "/favourites",
    element: <MoviesList data={favourite} />,
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <Navbar />
    <RouterProvider router={router} />
    <Footer />
  </>
);
