import React, { useState } from "react";
import { connect } from "react-redux";
import {
  handleAdd,
  handleRemove,
  handleUpdate,
  handleComplete,
} from "../redux/reducer";
import "./Todos.css";

const handleState = (state) => {
  return {
    todos: state,
  };
};

const handleDispatch = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(handleAdd(obj)),
    removeTodo: (id) => dispatch(handleRemove(id)),
    updateTodo: (obj) => dispatch(handleUpdate(obj)),
    completeTodo: (id) => dispatch(handleComplete(id)),
  };
};

function Todos(props) {
  const [todo, setTodo] = useState();

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  return (
    <div className="containerInput">
      <input
        type="text"
        onChange={(event) => handleChange(event)}
        className="inputTodo"
      />
      
      <button
        className="buttonAdd"
        onClick={() =>
          props.addTodo({
            id: Math.floor(Math.random() * 1000),
            item: todo,
            completed: false,
          })
        }
      >
        Add
      </button>
      <br />
    </div>
  );
}

export default connect(handleState, handleDispatch)(Todos);
