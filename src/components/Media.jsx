import React from "react";

export default class Media extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
      return(
        <a href={this.props.href} target="_blank" rel="noreferrer" className={"media "+this.props.className}>
          <img src={this.props.src} alt={this.props.alt + "-logo"} className={"media "+this.props.className} id={this.props.id}></img>
        </a>
      );
  }
}









