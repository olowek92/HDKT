import React from "react";
import "./FooterStyles.css";
import {
  FaFacebook,
  FaMailBulk,
  // FaPhone,
  FaSearchLocation,
  FaYoutube,
} from "react-icons/fa";

const FacebookUrl = "https://www.facebook.com/HD-Kraków-Team-102328762343792/";
const YoutubeUrl = "https://youtube.com/user/eklosowski";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaSearchLocation
              size={20}
              style={{ color: "#ffffff", marginRight: "2rem" }}
            />
            <div>
              <p>Kraków</p>
              <h4>Polska</h4>
            </div>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#ffffff", marginRight: "2rem" }}
              />{" "}
              hdkrakowteam2021@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>O nas</h4>
          <p>
            Team powstał w 2021 roku. Już po roku było nas prawie 40 osób.
            Stawiamy na przyjacielską atmosfere, dobrą zabawe oraz spędzanie
            razem czasu podczas wspólnych podróży.
          </p>
          <div className="social">
            <a href={FacebookUrl} target="_blank" rel="noreferrer">
              <FaFacebook
                className="anchor"
                size={30}
                style={{ color: "#ffffff", marginRight: "1rem" }}
              />
            </a>
            <a href={YoutubeUrl} target="_blank" rel="noreferrer">
              <FaYoutube
                className="anchor"
                size={30}
                style={{ color: "#ffffff", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
