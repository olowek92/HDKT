import React from "react";
import { Link } from "react-router-dom";
import "./VideoStyles.css";

import tripVideo from "../assets/teamTrip.mp4";

const Video = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={tripVideo} type="video/mp4" />
      </video>
      <div className="content">
        <h1>HD KRAKÓW TEAM</h1>
        <p>Łączy nas wspólna pasja.</p>
        <div>
          <Link to="/events" className="btn">
            Wydarzenia
          </Link>
          <Link to="/contact" className="btn btn-light">
            Kontakt
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Video;
