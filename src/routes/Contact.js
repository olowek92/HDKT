import React from "react";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import Navbar from "../components/Navbar";
import Form from "../components/Form";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="KONTAKT." text="Napisz do nas." />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
