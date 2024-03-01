import React from "react";

import logo from "../img/cloud-media-logo.png";

import BasicExample from "./DropdownLink";
import LinkButton from "./LinkButton";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    //changing variables
    let display = "";

    // MOVIE FINDER FOOTER
    if(this.props.path === "/movie_finder" || this.props.path === "/movie_finder/en"){
      display = "d-none";
    }

    // GLOBAL FOOTER
    return (
      <footer className="row mt-5">
        <section className="col-4 F-SECTION" id="F-SECTION-1">
          <LinkButton lang={this.props.lang} path={this.props.path} />
          <BasicExample lang={this.props.lang} path={this.props.path} />
          <LinkButton lang={this.props.lang} path={this.props.path} btnType="MovieFinder" display={display}/>
        </section>
        <section className="col-4 F-SECTION" id="F-SECTION-2">
          <p>Cloud Media Team</p>
          <img src={logo} alt="cloud-logo"></img>
          <article id="logos">
              <a href="https://github.com/ebato123" target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i></a>
              <a href="https://www.instagram.com/elian.moises/?hl=en" target="_blank" rel="noreferrer"><i class="fa-brands fa-instagram"></i></a>
              <a href="https://twitter.com/elianson_m" target="_blank" rel="noreferrer"><i class="fa-brands fa-x-twitter"></i></a>
          </article>
        </section>
        <section className="col-4 F-SECTION" id="F-SECTION-3">
          <a href="https://www.privacypolicies.com/live/66a54d28-6d2e-41e0-8cc3-28bce02115e9">Privacy Policy</a>
        </section>
      </footer>
    );
  }
}

