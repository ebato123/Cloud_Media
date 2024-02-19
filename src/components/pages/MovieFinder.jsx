// BUSCA EN UNA BASE DE DATOS PELÍCULAS Y DA INFORMACIÓN SOBRE ELLAS.

// CONTEXT IMPORTS
import { apiContext } from "../../context/apiContext.js";

// DEPENDENCIES IMPORTS
import React, { useEffect, useContext } from "react";
import YouTube from "react-youtube";

// COMPONENTS IMPORTS
import Header from "../Header.jsx";
import Main from "../Main.jsx";
import Footer from "../Footer.jsx";
import Accordion from "../Accordion.jsx";
import Form from "../Form.jsx";

export default function MovieFinder(props, { children }) {
  const { fetchMovies, movies, URL_IMAGE } = useContext(apiContext);

  //Component LifeCycle
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <Header lang={props.lang} path={"/login"} />
      <main className="container mt-3">
        <Form lang={props.lang} path={props.path} />
        <Accordion movies={movies} URL_IMAGE={URL_IMAGE} lang={props.lang} />
      </main>
      <Footer lang={props.lang} path={props.path} />
    </>
  );
}
