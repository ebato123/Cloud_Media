import React from "react";

import { Link } from "react-router-dom";

export default class LinkButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            language: this.props.lang,
            path: this.props.path
        }
    }
    render() {
        let linkTittle = "";
        let path = "";
        switch(this.state.path){
            case "/login" || "/login/en":
                switch(this.state.language){
                    case "en":
                        linkTittle = "Home";
                        path = "/en";
                        break;
                    default:
                        linkTittle = "Volver";
                        path = "/";
                        break;
                }break;
            default:
                switch(this.state.language){
                    case "en":
                        linkTittle = "Log In";
                        path = "/login/en";
                        break;
                    default:
                        linkTittle = "Iniciar Sesión";
                        path = "/login";
                        break;
                }
        }
        return(
            <Link to={path} className="btn btn-outline-light">{linkTittle}</Link>
        );
    }
}