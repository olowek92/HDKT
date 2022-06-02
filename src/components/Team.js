import React from "react";
import "./TeamStyles.css";
import TomekZ from "../assets/persons/TomekZ.JPEG";

const Team = () => {
  return (
    <div className="team">
      <div className="card-container">
        <div className="card">
          <p className="btc">PHOTO</p>
          <p>- Edward -</p>
          <p>- Road Glide -</p>
          <p>- Road King -</p>
        </div>
        <div className="card">
          <p className="btc">PHOTO</p>
          <p>- Kazimierz -</p>
          <p>- Street Glide -</p>
          <p>- Street Bob -</p>
        </div>
        <div className="card">
          <img className="image" src={TomekZ} alt="tomasz" />
          <p>- Tomasz -</p>
          <p>- Breakout -</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
