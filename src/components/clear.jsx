import React, { Component } from "react";

class Clear extends Component {
  clearAll = event => {
    this.props.onClick(event);
  };

  render() {
    return (
      <button className="clear__button" onClick={this.clearAll}>
        Clear All
      </button>
    );
  }
}

export default Clear;
