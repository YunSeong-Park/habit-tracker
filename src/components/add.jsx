import React, { PureComponent } from "react";

class Add extends PureComponent {
  inputRef = React.createRef();
  formRef = React.createRef();

  onSubmit = event => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onClick(name);
    // this.inputRef.current.value = "";
    this.formRef.current.reset();
  };

  render() {
    console.log("add");
    return (
      <form ref={this.formRef} className="add" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="add__input"
          ref={this.inputRef}
          placeholder="Please enter your habit"
        />
        <button className="add__button">Add</button>
      </form>
    );
  }
}

export default Add;
