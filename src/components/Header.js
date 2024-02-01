import React from "react";
import logo from "../cloud-media-logo.png";

import LinkButton from "./LinkButton";

export default class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            path: this.props.path
        }
    }
    render() {
        function HeaderSec1(){
            return(
                <section className="col-6" id="H-SECTION-1">
                <img src={logo} alt="cloud-logo" className="mt-3 slide-top"></img>
                </section>
            );
        }
        switch(this.state.path){
            case "/login" || "/login/en":
                return(
                    <header className="row">
                        <HeaderSec1 />
                        <section className="col-6" id="H-SECTION-2">
                            <LinkButton lang={this.props.lang} path={this.props.path}/>
                        </section>
                    </header>
                );
            default:
                return(
                    <header className="row">
                        {/* HEADER SECTION 1 */}
                            <HeaderSec1 />
                        {/* HEADER SECTION 2 */}
                        <section className="col-6" id="H-SECTION-2">
                            <LinkButton lang={this.props.lang}/>
                        </section>
                    </header>
                );
        }
    }
}