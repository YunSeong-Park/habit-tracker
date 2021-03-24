import React, { Component } from "react";
import Add from "./add";
import Habits from "./habits";

class Contents extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Runming", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  handleIncrement = habit => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits });
  };

  handleDecrement = habit => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits });
  };

  handleDelete = habit => {
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({ habits });
  };

  addHabit = habit => {
    const addedHabit = { id: Math.random(), name: habit, count: 0 };
    const habits = [...this.state.habits, addedHabit];

    this.setState({ habits });
  };

  // trackHabit = e => {
  //   const addedHabit = this.state.addedHabit;
  //   addedHabit.name = e.target.value;
  //   this.setState({ habits: this.state.habits, addedHabit });
  // };

  render() {
    return (
      <div className="contents">
        <Add onClick={this.addHabit} />
        <Habits
          habits={this.state.habits}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default Contents;
