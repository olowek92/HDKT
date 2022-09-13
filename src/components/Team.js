import React from "react";
import "./TeamStyles.css";
import TomekZ from "../assets/persons/TomekZ.JPEG";

const Team = () => {
  return (
    <div className="team">
      <div className="card-container">
        <div className="card">
          <img className="image" src={TomekZ} alt="tomasz" />
          <p>- Tomasz -</p>
          <p>- Breakout -</p>
        </div>
        <div className="card">
          <p className="btc">PHOTO</p>
        </div>
        <div className="card">
          <p className="btc">PHOTO</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
