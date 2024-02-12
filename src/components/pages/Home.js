import React from "react";

import Header from '../Header.js';
import Main from '../Main.js';
import Footer from '../Footer.js';

export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render() {
        let index = "";
        this.props.language === "en"?index="/en":index="/";
        return(
            <>
                <Header lang={this.props.lang} path={index}/>
                <Main lang={this.props.lang} />
                <Footer lang={this.props.lang} path={index}/>
            </>
        );
    }
}