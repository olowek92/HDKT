import React from "react";
import "./TeamStyles.css";

const Team = () => {
  return (
    <div className="team">
      <div className="card-container">
        <div className="card">
          <p className="btc">PHOTO</p>
          <p>- Edward -</p>
          <p>- Kłosowski -</p>
          <p>- Road Glide -</p>
          <p>- Road King -</p>
        </div>
        <div className="card">
          <p className="btc">PHOTO</p>
          <p>- Wojciech -</p>
          <p>- Ołownia -</p>
          <p>- Iron 883 -</p>
          <p>- Low Rider -</p>
        </div>
        <div className="card">
          <p className="btc">PHOTO</p>
          <p>- Kazimierz -</p>
          <p>- Kowalcze -</p>
          <p>- Street Glide -</p>
          <p>- Street Bob -</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
