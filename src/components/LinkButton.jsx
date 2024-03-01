import React from "react";

import { Link } from "react-router-dom";

export default class LinkButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render() {
        let linkTittle = "";
        let path = "";

        // MOVIEFINDER LINKBUTTON
        if(this.props.btnType === "MovieFinder"){
            switch(this.props.lang){
                case "en":
                    linkTittle = "Movie Finder";
                    path = "/movie_finder/en";
                    break;
                default:
                    linkTittle = "Buscar Películas";
                    path = "/movie_finder";
                    break;
            }
        // LOGIN LINKBUTTON
        }else if(this.props.path === "/login" || this.props.path === "/login/en"){
            switch(this.props.lang){
                case "en":
                    linkTittle = "Home";
                    path = "/en";
                    break;
                default:
                    linkTittle = "Volver";
                    path = "/";
                    break;
            }

        // HOME LINKBUTTON
        }else{
            switch(this.props.lang){
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
            <Link to={path} className={"btn btn-outline-light "+this.props.display}>{linkTittle}</Link>
        );
    }
}