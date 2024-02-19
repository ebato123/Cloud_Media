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
        return(
            <>
                <Header lang={this.props.lang} path={this.props.path}/>
                <Main lang={this.props.lang} path={this.props.path}/>
                <Footer lang={this.props.lang} path={this.props.path}/>
            </>
        );
    }
}