import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import "./MovieDetails.css";

const MovieDetails = (props) => {
  const { data } = props;
  const { id } = useParams();

  const getMovie = () => {
    let result = null;
    if (id != null) {
      result = searchMovie(data["movies-coming"], id);
      if (!result.isFound) {
        result = searchMovie(data["movies-in-theaters"], id);
      }
      if (!result.isFound) {
        result = searchMovie(data["top-rated-india"], id);
      }
      if (!result.isFound) {
        result = searchMovie(data["top-rated-movies"], id);
      }
      if (!result.isFound) {
        result = searchMovie(data["favourite"], id);
      }
    }
    return result;
  };

  const searchMovie = (data, id) => {
    for (const movie of data) {
      if (movie.id === id) {
        return { isFound: 1, movie: movie };
      }
    }
    return { isFound: 0, movie: null };
  };

  let movie = getMovie().movie;
  let sum = 0;
  for (const rating of movie.ratings) {
    sum += rating;
  }
  let averageRating = parseFloat(sum / movie.ratings.length).toFixed(1);

  console.log(movie);

  return (
    <div>
      <div className="card m-2" style={{ maxWidth: "100%" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`/src/data/img/${movie.poster}`}
              className="img-fluid rounded-start"
              alt="Image not available"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text">{movie.storyline}</p>
              <p className="card-text">Release Date : {movie.releaseDate}</p>
              {movie.imdbRating && (
                <p className="card-text">IMDB Rating : {movie.imdbRating}</p>
              )}
              <p className="card-text">
                Actors :{" "}
                {movie.actors.map((actor, index) => {
                  if (index === movie.actors.length - 1) return actor;
                  return actor + ", ";
                })}
              </p>
              <p className="card-text">
                Genres :{" "}
                {movie.genres.map((genre, index) => {
                  if (index === movie.genres.length - 1) return genre;
                  return genre + ", ";
                })}
              </p>
              <p className="card-text">Rating : {averageRating}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
