import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TeamCards from "../components/Team";
import HeroImage from "../components/HeroImage";

const Team = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="NASZ TEAM" text="ZNAJDŹ SIEBIE!" />
      <TeamCards />
      <Footer />
    </div>
  );
};

export default Team;
