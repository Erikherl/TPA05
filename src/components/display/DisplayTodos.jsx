import React, { useState } from "react";
import { connect } from "react-redux";
import {
  handleAdd,
  handleRemove,
  handleUpdate,
  handleComplete,
} from "../../redux/reducer";
import TodosList from "../list/TodosList";
import "./DisplayTodos.css";

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

const DisplayTodos = (props) => {
  const [sort, setSort] = useState("active");
  return (
    <div className="containerDisplay">
      <div className="buttonDisplay">
        <button onClick={() => setSort("all")}>All</button>
        <button onClick={() => setSort("active")}>Active</button>
        <button onClick={() => setSort("completed")}>Completed</button>
        
      </div>
      
      <ul>
        {props.todos.length > 0 && sort === "active"
          ? props.todos.map((item) => {
              return (
                item.completed === false && (
                  <TodosList
                    key={item.id}
                    item={item}
                    removeTodo={props.removeTodo}
                    updateTodo={props.updateTodo}
                    completeTodo={props.completeTodo}
                  />
                )
              );
            })
          : null}

        {props.todos.length > 0 && sort === "completed"
          ? props.todos.map((item) => {
              return (
                item.completed === true && (
                  <TodosList
                    key={item.id}
                    item={item}
                    removeTodo={props.removeTodo}
                    updateTodo={props.updateTodo}
                    completeTodo={props.completeTodo}
                  />
                )
              );
            })
          : null}

        {props.todos.length > 0 && sort === "all"
          ? props.todos.map((item) => {
              return (
                <TodosList
                  key={item.id}
                  item={item}
                  removeTodo={props.removeTodo}
                  updateTodo={props.updateTodo}
                  completeTodo={props.completeTodo}
                />
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default connect(handleState, handleDispatch)(DisplayTodos);
