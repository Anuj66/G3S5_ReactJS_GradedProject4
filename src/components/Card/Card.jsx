import React from "react";
import "./Card.css";

const Card = (props) => {
  const { movieDetails } = props;

  console.log(movieDetails);

  return (
    <div
      className="card text-dark bg-light"
      style={{ width: "15rem", height: "10rem" }}
    >
      <img
        src={movieDetails.posterurl}
        className="card-img-top img-fluid"
        alt={`Not Found`}
        style={{ width: "100%", aspectRatio: "1/1" }}
      />
      <div className="card-body">
        <h5 className="card-title">{movieDetails.title}</h5>
        <a href="#" className="btn btn-primary">
          View Details
        </a>
      </div>
    </div>
  );
};

export default Card;
