import React from "react";
import "./FormStyles.css";
import emailjs from "emailjs-com";

const Form = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2590g8p",
        "template_cern5kv",
        e.target,
        "UuFTppwIbuZ2q1lhX"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="form">
      <form onSubmit={sendEmail}>
        <label>Twoje imię</label>
        <input type="text" name="name"></input>
        <label>Email</label>
        <input type="email" name="email"></input>
        <label>Temat</label>
        <input type="text" name="subject"></input>
        <label>Szczegóły</label>
        <textarea rows="6" placeholder="Opis" name="message" />
        <button className="btn">Wyślij</button>
      </form>
    </div>
  );
};

export default Form;
