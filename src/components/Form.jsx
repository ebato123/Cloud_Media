// DEPENDENCIES IMPORTS
import React, { useState, useContext, useEffect } from "react";

// CONTEXT IMPORTS
import { apiContext } from "../context/apiContext";
import { formContext } from "../context/formContext";



export default function Form(props, {children}) {
  // Hooks
  const [currentState, setCurrentState] = useState(props.state);
  const { searchMovies, setSearchKey } = useContext(apiContext);
  const { globalState, setGlobalState } = useContext(formContext)

  // Changing State (forms state)
  useEffect(() => {
    // Ejecutar solo en la primer instancia
    setGlobalState(props.state);
  }, [props.state, setGlobalState]);
  let changingState = undefined;
  props.id === "form-2" ? changingState = globalState : changingState = currentState;
  
  // Toggle FUNCTIONS
  function toggleState() {
    if (props.lang === "en") {
      if (currentState === "subscribe") {
        setCurrentState("login");
        setGlobalState("subscribe")
      } else {
        setCurrentState("subscribe");
        setGlobalState("login")
      }
    } else {
      if (currentState === "suscribirse") {
        setCurrentState("iniciarSesion");
        setGlobalState("suscribirse");
      } else {
        setCurrentState("suscribirse");
        setGlobalState("iniciarSesion");
      }
    }
  }

  // Submitted Form functions
  const submitted = (e) => {
    let alert1 = "";
    switch (changingState) {
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

  // Language Changing Variables
  let [formTittle, placeHolder1, placeHolder2,
    label2, label4, inputType, buttonTittle1,
    buttonTittle2, p1, mfButton1, mfButton2, mfPlaceHolder1] = "";

  // EN case
  if (props.lang === "en"){
    // Login Variables
    switch (changingState) {
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
    // MovieFinder variables
    mfButton1 = "Search";
    mfButton2 = "Last Releases";
    mfPlaceHolder1 = "Search Movies";

  // ES case
  }else{
    // Login Variables
    switch (changingState) {
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
    // MovieFinder variables
    mfButton1 = "Buscar";
    mfButton2 = "Últimos Estrenos";
    mfPlaceHolder1 = "Buscar Películas";
  }

  // LOGIN FORM
  if (props.path === "/login" || props.path === "/login/en") {
    return (
      <form onSubmit={submitted} className={"p-3 m-5 " + props.display} id={props.id}>
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
          <p className={props.display}>{p1}</p>
          <div className={"btn btn-primary " + props.display} onClick={toggleState}>
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
      <form className="container mb-4 col-12" onSubmit={searchMovies} id="movie-finder">
        <input
          id="search"
          type="text"
          placeholder={mfPlaceHolder1}
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <article id="buttons">
          <button className="btn btn-primary">{mfButton1}</button>
          <button className="btn btn-primary" onClick={() => window.location.reload()}>{mfButton2}</button>
        </article>
      </form>
    );
  }
}
