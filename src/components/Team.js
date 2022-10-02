import React from "react";
import "./TeamStyles.css";
import AnetaEdi from "../assets/persons/Aneta&Edi.jpeg";
import RenataJacek from "../assets/persons/Renata&Jacek.jpg";
import TomekZ from "../assets/persons/TomekZ.JPEG";
import TomekCufe from "../assets/persons/Tomek-Cufe.jpg";


const Team = () => {
  const anetaEdi = "Aneta&Edi";
  const renataJacek = "Renata&Jacek";

  return (
    <div className="team">
      <div className="card-container">
        <div className="card">
          <img className="image" src={AnetaEdi} alt={anetaEdi} />
          <p>- {anetaEdi} -</p>
          <p>- RoadGlide -</p>
        </div>
        <div className="card card1">
          <img className="image" src={RenataJacek} alt={renataJacek} />
          <p>- {renataJacek} -</p>
          <p>- SuperLow -</p>
        </div>
        <div className="card">
          <img className="image" src={TomekZ} alt="Tomek" />
          <p>- Tomek -</p>
          <p>- Breakout -</p>
        </div>
        <div className="card card1">
          <img className="image" src={TomekCufe} alt="Tomek" />
          <p>- Tomek -</p>
          <p>- Iron 883 -</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
