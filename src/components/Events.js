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
          Z uwagi na dużą liczbę osób nasze wydarzenia nie są otwarte dla wszystkich, chodzi o samą logistykę. Jeżeli chcesz się przekonać i pojechać gdzieś z nami, pisz na adres e-mail hdkrakowteam2021@gmail.com a poinformujemy Cię o najbliższej wyprawie/spacerze.
        </p>
        <Link to="/contact">
          <button className="btn">Kontakt</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="image-stack top">
            <img src={FatBob} className="img" alt="motorcycle" />
          </div>
          <div className="image-stack bottom">
            <img src={HarleyTank} className="img" alt="motorcycle" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
