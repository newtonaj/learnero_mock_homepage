import React, { Component } from "react";
import User from "./User";
import logo from "../learnero/logo.png";
import headerimage from "../learnero/headerimage.png";
import flexibility from "../learnero/flexibility.png";
import support from "../learnero/support.png";
import community from "../learnero/community.png";
import downloads from "../learnero/downloads.png";
// >> user.js
// << app.js
class Header extends Component {
  render() {
    return (
      <header>
        <User />
        <nav className="header">
          <img className="logo" src={logo} alt="logo" />
        </nav>
        <img className="headerimage" src={headerimage} alt="banner" />
        <div className="images">
          <img src={flexibility} alt="flexibility" />
          <img src={support} alt="" />
          <img src={downloads} alt="" />
          <img src={community} alt="" />
        </div>
      </header>
    );
  }
}

export default Header;
