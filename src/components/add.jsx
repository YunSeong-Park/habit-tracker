import React, { memo } from "react";

const Add = memo(props => {
  const inputRef = React.createRef();
  const formRef = React.createRef();

  const onSubmit = event => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onClick(name);
    // this.inputRef.current.value = "";
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className="add" onSubmit={onSubmit}>
      <input
        type="text"
        className="add__input"
        ref={inputRef}
        placeholder="Please enter your habit"
      />
      <button className="add__button">Add</button>
    </form>
  );
});

export default Add;
