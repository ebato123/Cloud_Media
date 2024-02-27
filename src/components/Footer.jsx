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

    // MOVIE FINDER FOOTER
    if(this.props.path === "/movie_finder" || this.props.path === "/movie_finder/en"){
      return(
        <footer className="row mt-5 p-5">
        <section className="col-6">
          <LinkButton lang={this.props.lang} path={this.props.path} />
          <BasicExample lang={this.props.lang} path={this.props.path} />
        </section>
        <section className="col-6">
          <p>Cloud Media Team</p>
          <img src={logo} alt="cloud-logo"></img>
        </section>
      </footer>
      )

    // HOME FOOTER
    }else{
      return (
        <footer className="row mt-5 p-5">
          <section className="col-6">
            <LinkButton lang={this.props.lang} path={this.props.path} />
            <BasicExample lang={this.props.lang} path={this.props.path} />
            <LinkButton lang={this.props.lang} path={this.props.path} btnType="MovieFinder"/>
          </section>
          <section className="col-6">
            <p>Cloud Media Team</p>
            <img src={logo} alt="cloud-logo"></img>
          </section>
        </footer>
      );
    }
  }
}
