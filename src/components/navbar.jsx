import React, { PureComponent } from "react";

class Navbar extends PureComponent {
  render() {
    console.log("navbar");
    const countTotal = this.props.countTotal;
    return (
      <div className="navbar">
        <i className="navbar-logo fas fa-leaf"></i>
        <span className="navbar__title">Habit Tracker</span>
        <span className="navbar-count">{countTotal}</span>
      </div>
    );
  }
}

export default Navbar;
