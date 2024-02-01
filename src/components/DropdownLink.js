import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';

function BasicExample() {
  const [counter, setCounter] = useState(0);
  return (
    <Dropdown>
      <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
        Lenguaje
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/">Español (es)</Dropdown.Item>
        <Dropdown.Item href="/en">English (en)</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample;