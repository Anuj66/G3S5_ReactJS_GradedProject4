import React from "react";
import Card from "../Card/Card";
import "./MoviesList.css";

const MoviesList = (props) => {
  const { data } = props;

  return (
    <div className="d-flex flex-row flex-wrap m-2 p-2 gap-3 align-items-stretch">
      {data &&
        data.map((movieDetails) => {
          return <Card key={movieDetails.id} movieDetails={movieDetails} />;
        })}
    </div>
  );
};

export default MoviesList;
