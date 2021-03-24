import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <span className="Navbar__leaf">
          <i className="fas fa-leaf"></i>
        </span>
        <h1 className="Navbar__title">Habit Tracker</h1>
        <h2 className="Navbar__marker">1</h2>
      </div>
    );
  }
}

export default Navbar;
