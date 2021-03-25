import React, { Component } from "react";
import "./app.css";
import Contents from "./components/contents";
import Navbar from "./components/navbar";

class App extends Component {
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

    habit && this.setState({ habits });
  };

  clearAll = event => {
    const habits = [...this.state.habits];
    habits.map(habit => {
      habit.count = 0;
    });
    this.setState({ habits });
  };

  render() {
    return (
      <>
        <Navbar
          countTotal={this.state.habits.reduce(
            (countTotal, habit) => habit.count + countTotal,
            0
          )}
        />
        <Contents
          habits={this.state.habits}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          handleDelete={this.handleDelete}
          addHabit={this.addHabit}
          clearAll={this.clearAll}
        />
      </>
    );
  }
}
export default App;
