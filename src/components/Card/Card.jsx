import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";

const Card = (props) => {
  const { movieDetails } = props;
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate("/movieDetails/" + movieDetails.id);
  };

  return (
    <div className="card text-dark bg-light" style={{ width: "15rem" }}>
      <img
        src={`src/data/img/${movieDetails.poster}`}
        className="card-img-top img-fluid"
        alt={"Image not available"}
        // style={{ width: "100%", aspectRatio: "1/1" }}
      />
      <div className="card-body">
        <h5 className="card-title">{movieDetails.title}</h5>
        <button className="btn btn-primary" onClick={onClickHandler}>
          View Details
        </button>
      </div>
    </div>
  );
};

export default Card;
