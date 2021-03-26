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
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDecrement = habit => {
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count - 1 };
      }
      return item;
    });
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
    let countChange = 0;
    const habits = this.state.habits.map(habit => {
      if (habit.count !== 0) {
        countChange++;
        return { ...habit, count: 0 };
      }
      return habit;
    });
    countChange !== 0 && this.setState({ habits });
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
