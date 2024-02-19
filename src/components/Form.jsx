// CONTEXT IMPORTS
import { apiContext } from "../context/apiContext";

// DEPENDENCIES IMPORTS
import React, { useState, useContext } from "react";

export default function Form(props) {
  const [currentState, setCurrentState] = useState(
    props.lang === "en" ? "subscribe" : "suscribirse"
  );
  const { searchMovies, setSearchKey } = useContext(apiContext);

  function toggleState() {
    if (props.lang === "en") {
      if (currentState === "subscribe") {
        setCurrentState("login");
      } else {
        setCurrentState("subscribe");
      }
    } else {
      if (currentState === "suscribirse") {
        setCurrentState("iniciarSesion");
      } else {
        setCurrentState("suscribirse");
      }
    }
  }

  const submitted = (e) => {
    let alert1 = "";
    switch (currentState) {
      case "login":
        alert1 = "Back-End is not ready yet :(";
        break;
      case "iniciarSesion":
        alert1 = "El Back-End aún no está terminado :(";
        break;
      case "subscribe":
        alert1 = "You have been subscribed succesfully.";
        break;
      // "suscribirse"
      default:
        alert1 = "Suscripción completada.";
    }
    alert(alert1);
    e.preventDefault();
  };

  // state variables
  let formTittle = "";
  let placeHolder1 = "";
  let placeHolder2 = "";
  let label2 = "";
  let label4 = "";
  let inputType = "";
  let buttonTittle1 = "";
  let buttonTittle2 = "";
  let p1 = "";
  let language = props.lang;
  switch (language) {
    case "en":
      switch (currentState) {
        case "login":
          formTittle = "Log In";
          placeHolder1 = "Enter your email.";
          placeHolder2 = "Enter you password.";
          inputType = "password";
          buttonTittle1 = "Send";
          buttonTittle2 = "Subscribe";
          label2 = "Password";
          label4 = "Log in for a more personalized content.";
          p1 = "or";
          break;
        default:
          formTittle = "¡Subscribe!";
          placeHolder1 = "Enter your email.";
          placeHolder2 = "Enter you name.";
          inputType = "text";
          buttonTittle1 = "Send";
          buttonTittle2 = "Log In";
          label2 = "Name";
          label4 = "Subscribe to get daily updates about us.";
          p1 = "or";
          break;
      }
      break;
    default:
      switch (currentState) {
        case "iniciarSesion":
          formTittle = "Inicia Sesión";
          placeHolder1 = "Ingrese su email.";
          placeHolder2 = "Ingrese su contraseña.";
          inputType = "password";
          buttonTittle1 = "Enviar";
          buttonTittle2 = "Suscrbirse";
          label2 = "Contraseña";
          label4 = "Inicia sesión para un contenido más personalizado.";
          p1 = "o";
          break;
        default:
          formTittle = "¡Suscríbete!";
          placeHolder1 = "Ingrese su email.";
          placeHolder2 = "Ingrese su nombre.";
          inputType = "text";
          buttonTittle1 = "Enviar";
          buttonTittle2 = "Iniciar Sesión";
          label2 = "Nombre";
          label4 =
            "Suscríbete para recibir novedades sobre nuestros servicios.";
          p1 = "o";
          break;
      }
  }

  // LOGIN FORM
  if (props.path === "/login" || props.path === "/login/en") {
    return (
      <form onSubmit={submitted} className="p-3 m-5">
        <h2>{formTittle}</h2>
        <article className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder={placeHolder1}
          ></input>
        </article>
        <article className="form-group">
          <label>{label2}</label>
          <input
            type={inputType}
            className="form-control"
            placeholder={placeHolder2}
          ></input>
        </article>
        <article id="buttons" className="p5">
          <button type="submit" className="btn btn-primary">
            {buttonTittle1}
          </button>
          <p>{p1}</p>
          <div className="btn btn-primary" onClick={toggleState}>
            {buttonTittle2}
          </div>
        </article>
        <label>{label4}</label>
      </form>
    );

    // MOVIE FINDER FORM
  }
  if (props.path === "/movie_finder" || props.path === "/movie_finder/en") {
    return (
      <form className="container mb-4" onSubmit={searchMovies}>
        <input
          id="search"
          type="text"
          placeholder="Search Movies"
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <article id="buttons">
          <button className="btn btn-primary">Search</button>
          <button className="btn btn-primary">Last Releases</button>
        </article>
      </form>
    );
  }
}
