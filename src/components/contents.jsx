import React, { Component } from "react";
import Add from "./add";
import Clear from "./clear";
import Habits from "./habits";

class Contents extends Component {
  handleIncrement = habit => {
    this.props.handleIncrement(habit);
  };

  handleDecrement = habit => {
    this.props.handleDecrement(habit);
  };

  handleDelete = habit => {
    this.props.handleDelete(habit);
  };

  addHabit = habit => {
    this.props.addHabit(habit);
  };

  clearAll = event => {
    this.props.clearAll(event);
  };

  render() {
    return (
      <div className="contents">
        <Add onClick={this.addHabit} />
        <Habits
          habits={this.props.habits}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          handleDelete={this.handleDelete}
        />
        <Clear onClick={this.clearAll} />
      </div>
    );
  }
}

export default Contents;
