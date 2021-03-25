import React, { Component } from "react";

class Navbar extends Component {
  render() {
    const countTotal = this.props.countTotal;
    return (
      <div className="Navbar">
        <span className="Navbar__leaf">
          <i className="fas fa-leaf"></i>
        </span>
        <h1 className="Navbar__title">Habit Tracker</h1>
        <h2 className="Navbar__marker">{countTotal}</h2>
      </div>
    );
  }
}

export default Navbar;
