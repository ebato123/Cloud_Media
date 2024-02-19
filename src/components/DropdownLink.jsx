import Dropdown from "react-bootstrap/Dropdown";
// import { useState } from "react";

function BasicExample(props) {
  // const [path, setPath] = useState(props.path);

  // changing variables
  let dropdownTittle = "";
  let index1 = "";
  let index2 = "";
  let option1 = "";
  let option2 = "";

  // MORE BUTTON PROPS
  if (props.btnType === "moreBtn") {
    props.lang === "en"
      ? (dropdownTittle = "More Cloud")
      : (dropdownTittle = "+ Cloud");
    option1 = "Movie Finder";
    option2 = "Movie Roullete";
    // path to be redirect
    switch (props.lang) {
      case "en":
        index1 = "/movie_finder/en";
        index2 = "/movie_roullete/en";
        break;
      default:
        index1 = "/movie_finder";
        index2 = "/movie_roullete";
        break;
    }

    // LANGUAGE BUTTON PROPS
  } else {
    props.lang === "en"
      ? (dropdownTittle = "Language")
      : (dropdownTittle = "Lenguaje");
    option1 = "Español (es)";
    option2 = "English (en)";
    // LOGIN props
    if (props.path === "/login" || props.path === "/login/en") {
      index1 = "/login";
      index2 = "/login/en";
      // HOME props
    } else {
      index1 = "/";
      index2 = "/en";
    }
  }
  // Render Button
  return (
    <Dropdown>
      <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
        {dropdownTittle}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href={index1}>{option1}</Dropdown.Item>
        <Dropdown.Item href={index2}>{option2}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample;
