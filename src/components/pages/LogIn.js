import React from "react";

import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";

export default class LogIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            languaje: this.props.lang
        }
    }
    render() {
        let index = "";
        this.props.languaje === "en"?index="/login/en":index="/login";
        return(
            <>
                <Header lang={this.props.lang} path={index}/>
                <Main path="/login" lang={this.props.lang}/>
                <Footer lang={this.props.lang}/>
            </>
        );
    }
}