import React from "react";

import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";

export default class LogIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render() {
        let index = "";
        this.props.language === "en"?index="/login/en":index="/login";
        return(
            <>
                <Header lang={this.props.lang} path={index}/>
                <Main lang={this.props.lang} path={index}/>
                <Footer lang={this.props.lang} path={index}/>
            </>
        );
    }
}