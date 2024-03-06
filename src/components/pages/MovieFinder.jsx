// DEPENDENCIES IMPORTS
import React, { useContext } from "react";

// CONTEXT IMPORTS
import { apiContext } from "../../context/apiContext.js";

// COMPONENTS IMPORTS
import Movies from "../Movies.jsx";
import Form from "../Form";
import Header from "../Header.jsx";
import Footer from "../Footer.jsx";

export default function MovieFinder(props, {children}) {
  const { movies, URL_IMAGE } = useContext(apiContext);

  return (
    <>
      <Header lang={props.lang} path={props.path} />
      <main className="container mt-3">
        <section id="MF-SECTION-1" className="row">
          <Form lang={props.lang} path={props.path} />
        </section>
        <section id="MF-SECTION-2" className="row pt-5">
          <Movies movies={movies} URL_IMAGE={URL_IMAGE} lang={props.lang} />
        </section>
      </main>
      <Footer lang={props.lang} path={props.path} />
    </>
  );
}
