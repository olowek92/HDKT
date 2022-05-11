import React from "react";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import Navbar from "../components/Navbar";
import EventsSection from "../components/Events";

const Training = () => {
  return (
    <div>
      <Navbar />
      <HeroImage
        heading="WYDARZENIA"
        text="Wszystkie wydarzenia naszego Teamu."
      />
      <EventsSection />
      <Footer />
    </div>
  );
};

export default Training;
