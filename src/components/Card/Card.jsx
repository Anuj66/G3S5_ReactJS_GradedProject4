import React from "react";
import "./Card.css";

const Card = (props) => {
  const { movieDetails } = props;

  console.log(movieDetails);

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={movieDetails.posterurl}
        className="card-img-top"
        alt={`Not Found`}
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
