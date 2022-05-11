import React from "react";
import "./EventsStyles.css";

import { Link } from "react-router-dom";

import HarleyTank from "../assets/harleyTank.jpg";
import FatBob from "../assets/fatBob.jpg";

const Events = () => {
  return (
    <div className="events">
      <div className="left">
        <h1>Nadchodzące wydarzenie.</h1>
        <p>
          Jeśli zauważyłeś brak informacji związanych z wydarzeniem. Napisz do
          nas.
        </p>
        <Link to="/contact">
          <button className="btn">Kontakt</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="image-stack top">
            <img src={FatBob} className="img" alt="" />
          </div>
          <div className="image-stack bottom">
            <img src={HarleyTank} className="img" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
