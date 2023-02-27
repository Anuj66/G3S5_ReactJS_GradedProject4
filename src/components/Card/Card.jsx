import React from "react";
import "./Card.css";

const Card = (props) => {
  const { movieDetails } = props;

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={movieDetails.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{movieDetails.title}</h5>
        <p className="card-text">{movieDetails.details}</p>
        <a href="#" className="btn btn-primary">
          View Details
        </a>
      </div>
    </div>
  );
};

export default Card;
