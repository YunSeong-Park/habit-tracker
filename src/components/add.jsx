import React, { Component } from "react";

class Add extends Component {
  state = { addedHabit: "" };
  onChange = e => {
    //this.props.onChange(e);
    this.setState({ addedHabit: e.target.value });
  };

  onClick = () => {
    this.props.onClick(this.state.addedHabit);
  };

  render() {
    return (
      <div className="add">
        <input type="text" className="add__input" onChange={this.onChange} />
        <button className="add__button" onClick={this.onClick}>
          Add
        </button>
      </div>
    );
  }
}

export default Add;
