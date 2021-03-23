import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Runming", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  handleIncrement = habit => {
    this.setState({count: this.state.})
  };

  handleDecrement = habit => {
    console.log(`handleDcrement ${habit.name}`);
  };

  handleDelete = habit => {
    console.log(`handleDelete ${habit.name}`);
  };

  render() {
    return (
      <ul>
        {this.state.habits.map(habit => (
          <Habit
            key={habit.id}
             habit={habit}
             onIncrement={this.handleIncrement}
             onDecrement={this.handleDecrement}
             onDelete={this.handleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
