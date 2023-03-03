import React from "react";
import Card from "../../components/Card/Card";
import "./Homepage.css";
import data from "../../data/json/data.json";

export const Homepage = () => {
  return (
    <div className="d-flex flex-row flex-wrap m-2 p-2 gap-2">
      {data &&
        data["top-rated-movies"].map((movieDetails) => {
          return <Card key={movieDetails.id} movieDetails={movieDetails} />;
        })}
    </div>
  );
};
