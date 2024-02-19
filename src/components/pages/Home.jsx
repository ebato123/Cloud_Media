import React from "react";

import Header from '../Header.jsx';
import Main from '../Main.jsx';
import Footer from '../Footer.jsx';

export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render() {
        console.log(this.props.path)
        console.log(this.props.lang)
        return(
            <>
                <Header lang={this.props.lang} path={this.props.path}/>
                <Main lang={this.props.lang} path={this.props.path} />
                <Footer lang={this.props.lang} path={this.props.path}/>
            </>
        );
    }
}