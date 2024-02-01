import React from "react";

import logo from "../cloud-media-logo.png";

import BasicExample from "./DropdownLink";
import LinkButton from "./LinkButton";

export default class Footer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            languaje: this.props.lang
        }
    }
    render() {
        return(
            <footer className="row mt-5 p-5">
                <section className="col-6">
                    <LinkButton lang={this.props.lang}/>
                    <BasicExample />
                </section>
                <section className="col-6">
                    <p>Cloud Media Team</p>
                    <img src={logo} alt="cloud-logo"></img>
                </section>
            </footer>
        );
    }
}