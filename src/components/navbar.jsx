import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand h1" href="#">
            Navbar
          </a>
        </div>
      </nav>
    );
  }
}

export default NavBar;
