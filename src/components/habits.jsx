import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
  handleIncrement = habit => {
    this.props.handleIncrement(habit);
    // const habits = [...this.props.habits];
    // const index = habits.indexOf(habit);
    // habits[index].count++;
    // this.setState({ habits });
  };

  handleDecrement = habit => {
    this.props.handleDecrement(habit);
    // const habits = [...this.props.habits];
    // const index = habits.indexOf(habit);
    // const count = habits[index].count - 1;
    // habits[index].count = count < 0 ? 0 : count;

    // this.setState({ habits });
  };

  handleDelete = habit => {
    this.props.handleDelete(habit);
    // const habits = this.props.habits.filter(item => item.id !== habit.id);
    // this.setState({ habits });
  };

  clearAll = e => {
    this.props.onReset();
  };

  render() {
    return (
      <div className="habits">
        <ul>
          {this.props.habits.map(habit => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>

        <button className="habits-reset" onClick={this.clearAll}>
          Reset All
        </button>
      </div>
    );
  }
}

export default Habits;
