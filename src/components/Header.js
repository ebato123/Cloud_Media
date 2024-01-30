import React from "react";
import logo from "../cloud-media-logo.png";

import LinkButton from "./LinkButton";

export default class Header extends React.Component {
    render() {
        return(
            <header className="row">
                {/* HEADER SECTION 1 */}
                <section className="col-6" id="H-SECTION-1">
                    <img src={logo} alt="cloud-logo" className="mt-3 slide-top"></img>
                </section>
                {/* HEADER SECTION 2 */}
                <section className="col-6" id="H-SECTION-2">
                    <LinkButton />
                </section>
            </header>
        );
    }
}