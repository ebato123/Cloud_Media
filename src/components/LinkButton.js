import React from "react";

import { Link } from "react-router-dom";

export default class LinkButton extends React.Component {
    render() {
        return(
            <Link to="/login" className="btn btn-outline-light">Log In</Link>
        );
    }
}