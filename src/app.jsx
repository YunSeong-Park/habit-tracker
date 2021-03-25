import React, { Component } from "react";
import "./app.css";
import Navbar from "./components/navbar";
import Habits from "./components/habits";

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

  addHabit = name => {
    const addedHabit = { id: Date.now(), name, count: 0 };
    const habits = [...this.state.habits, addedHabit];
    this.setState({ habits });
  };

  onReset = e => {
    const habits = this.state.habits.map(habit => {
      habit.count = 0;
      return habit;
    });
    this.setState({ habits });
  };

  render() {
    console.log("app");
    return (
      <>
        <Navbar
          countTotal={
            this.state.habits.filter(habit => habit.count !== 0).length
          }
        />
        <Habits
          habits={this.state.habits}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          handleDelete={this.handleDelete}
          onReset={this.onReset}
          onClick={this.addHabit}
        />
      </>
    );
  }
}
export default App;
