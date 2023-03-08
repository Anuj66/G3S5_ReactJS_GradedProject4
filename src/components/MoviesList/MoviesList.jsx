import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./MoviesList.css";

const MoviesList = (props) => {
  let { data } = props;
  const [movieData, setMovieData] = useState(data);

  const [search, setSearch] = useState("");

  const searchMovie = () => {
    let result = [];
    if (search && search != "") {
      for (const movie of data) {
        if (movie.title.toLowerCase().includes(search.toLowerCase()))
          result.push(movie);
      }
    }
    return result;
  };

  useEffect(() => {
    console.log(search);
    if (search && search != "") {
      setMovieData(searchMovie());
    }
  }, [search]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form className="d-flex m-2" role="search" onSubmit={onSubmitHandler}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
      <div className="d-flex flex-row flex-wrap m-2 p-2 gap-3 align-items-stretch">
        {movieData &&
          movieData.map((movieDetails) => {
            return <Card key={movieDetails.id} movieDetails={movieDetails} />;
          })}
      </div>
    </>
  );
};

export default MoviesList;
