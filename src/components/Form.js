import React from "react";
import "./FormStyles.css";

const Form = () => {
  return (
    <div className="form">
      <form>
        <label>Twoje imię</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="email"></input>
        <label>Temat</label>
        <input type="text"></input>
        <label>Szczegóły</label>
        <textarea rows="6" placeholder="Opis" />
        <button className="btn">Wyślij</button>
      </form>
    </div>
  );
};

export default Form;
