import Dropdown from 'react-bootstrap/Dropdown';
// import { useState } from 'react';

function BasicExample(props) {
  // const [path, setPath] = useState(props.path);
  let dropdownTittle = "";
  let index1 = "";
  let index2 = "";
  props.lang==="en"?dropdownTittle="Language":dropdownTittle="Lenguaje";
  switch(props.path){
    case "/login" || "login/en":
      index1 = "/login";
      index2 = "/login/en";
      break;
    default:
      index1 = "/";
      index2 = "/en";
      break;
  }
  return (
    <Dropdown>
      <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
        {dropdownTittle}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href={index1}>Español (es)</Dropdown.Item>
        <Dropdown.Item href={index2}>English (en)</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample;