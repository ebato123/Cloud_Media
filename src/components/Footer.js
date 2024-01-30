import React from "react";

import logo from "C:/Users/elian/Desktop/PROGRAMACIÓN/cloud-media/src/img/cloud-media-logo.png";

import BasicExample from "./DropdownLink";
import LinkButton from "./LinkButton";

import { Link } from "react-router-dom";

export default class Footer extends React.Component {
    render() {
        return(
            <footer className="row mt-5 p-5">
                <section className="col-6">
                    <LinkButton />
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