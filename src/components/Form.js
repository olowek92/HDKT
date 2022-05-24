import React, { useState } from "react";
import "./FormStyles.css";
import emailjs from "emailjs-com";

const Form = () => {
  const errorMessages = {
    nameRequired: "Imię jest wymagane",
    nameTooShort: "Imię jest za krótkie",
    emailRequired: "E-mail jest wymagany",
    emailIncorrect: "Niepoprawny adres e-mail",
    subjectRequired: "Temat jest wymagany",
    subjectTooShort: "Temat jest za krótki",
    messageRequired: "Wiadomość jest wymagana",
    messageTooShort: "Wiadomość jest za krótka",
  };

  const succeedMessage = {
    formSent: "Formularz wysłany poprawnie!",
  };

  const validate = (form) => {
    if (!form.name) {
      return errorMessages.nameRequired;
    } else if (form.name.length < 3) {
      return errorMessages.nameTooShort;
    }

    if (!form.email) {
      return errorMessages.emailRequired;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email)) {
      return errorMessages.emailIncorrect;
    }

    if (!form.subject) {
      return errorMessages.subjectRequired;
    } else if (form.subject.length < 3) {
      return errorMessages.subjectTooShort;
    }

    if (!form.message) {
      return errorMessages.messageRequired;
    } else if (form.message.length <= 15) {
      return errorMessages.messageTooShort;
    }

    return succeedMessage.formSent;
  };

  const [error, setError] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const updateField = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const SendEmail = (e) => {
    e.preventDefault();

    const errorMsg = validate(form);

    if (errorMsg) {
      setError(errorMsg);
    }

    if (errorMsg === succeedMessage.formSent) {
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
  };

  return (
    <div className="form">
      <form onSubmit={SendEmail}>
        <label>Twoje imię</label>
        <input type="text" name="name" onChange={updateField}></input>
        <span>
          {errorMessages.nameRequired === error ? error : ""}
          {errorMessages.nameTooShort === error ? error : ""}
        </span>
        <label>Email</label>
        <input type="email" name="email" onChange={updateField}></input>
        <span>
          {errorMessages.emailRequired === error ? error : ""}
          {errorMessages.emailIncorrect === error ? error : ""}
        </span>
        <label>Temat</label>
        <input type="text" name="subject" onChange={updateField}></input>
        <span>
          {errorMessages.subjectRequired === error ? error : ""}
          {errorMessages.subjectTooShort === error ? error : ""}
        </span>
        <label>Szczegóły</label>
        <textarea
          rows="6"
          placeholder="Opis"
          name="message"
          onChange={updateField}
        />
        <span className="textarea">
          {errorMessages.messageRequired === error ? error : ""}
          {errorMessages.messageTooShort === error ? error : ""}
        </span>
        <button className="btn">Wyślij</button>
        <span className="correctForm">
          {succeedMessage.formSent === error ? error : ""}
        </span>
      </form>
    </div>
  );
};

export default Form;
