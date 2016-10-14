import React from "react";
import Header from "../Header";
import Navbar from "../Navbar";

export default class Layout extends React.Component {
  constructor () {
    super();
    this.state = {
      title: "Welcome",
    };
  }

  render () {
    return (
      <div>
        <Header />
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}
