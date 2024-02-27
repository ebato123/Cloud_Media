// BUSCA EN UNA BASE DE DATOS PELÍCULAS Y DA INFORMACIÓN SOBRE ELLAS.

// COMPONENTS IMPORTS
import Header from "../Header.jsx";
import Main from "../Main.jsx";
import Footer from "../Footer.jsx";

export default function MovieFinder(props) {

  console.log(props.path)
  return (
    <>
      <Header lang={props.lang} path={"/login"} />
      <Main lang={props.lang} path={props.path}/>
      <Footer lang={props.lang} path={props.path} />
    </>
  );
}

/*

*/