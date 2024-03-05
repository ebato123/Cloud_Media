import React from "react";

import Form from "../Form";
import Header from "../Header";
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
                <main className="row">
                    <section id="LM-SECTION-1" className="row SECTION">
                        <Form lang={this.props.lang} path={this.props.path} display="" id="form-1"/>
                        <Form lang={this.props.lang} path={this.props.path} display="d-none" id="form-2"/>
                    </section>
                </main>
                <Footer lang={this.props.lang} path={this.props.path}/>
            </>
        );
    }
}