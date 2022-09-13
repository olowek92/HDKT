import React from "react";
import "./TeamStyles.css";
import TomekZ from "../assets/persons/TomekZ.JPEG";
import AnetaEdi from "../assets/persons/Aneta&Edi.jpeg";

const Team = () => {
  const anetaEdi = "Aneta&Edi";

  return (
    <div className="team">
      <div className="card-container">
        <div className="card">
          <img className="image" src={AnetaEdi} alt={anetaEdi} />
          <p>- {anetaEdi} -</p>
          <p>- RoadGlide -</p>
        </div>
        <div className="card">
          <img className="image" src={TomekZ} alt="Tomek" />
          <p>- Tomek -</p>
          <p>- Breakout -</p>
        </div>
        {/* <div className="card"> */}
        {/* <p className="btc">PHOTO</p> */}
          {/* <img className="image" src='' alt="" />
          <p>-  -</p>
          <p>-  -</p> */}
        {/* </div> */}
        {/* <div className="card"> */}
          {/* <p className="btc">PHOTO</p> */}
          {/* <img className="image" src="" alt="" />
          <p>-  -</p>
          <p>-  -</p> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Team;
