import React from "react";
import "./FooterStyles.css";
import {
  FaFacebook,
  FaMailBulk,
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
              <a href="mailto:hdkrakowteam2021@gmail.com">
                hdkrakowteam2021@gmail.com
              </a>
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>O nas</h4>
          <p>
          Najważniejsza dla nas jest wspólna jazda i pokonywanie kolejnych kilometrów w gronie Przyjaciół. Naszą grupę tworzą osoby z pasją do motocykli, pozytywnie zakręcone i to maksymalnie na tym punkcie.
          Wszyscy w grupie mają taki sam status, a im więcej osób to tym więcej pomysłów na kolejne podróże, spotkania i wspólną zabawę. 
          Grupa HD Kraków Team powstała w 2021 roku a we wrześniu 2022 liczy około 60 osób. Wszyscy jesteśmy fanami marki Harley-Davidson, część z nas zawsze marzyła o motocyklu tej marki więc spełniliśmy swoje marzenia. 
          Takim niepisanym mottem jest „nie ważne gdzie jedziesz ale z kim”
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
