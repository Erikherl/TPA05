import React, { useRef } from "react";
import "./TodosList.css";
import { FaEdit, FaCheck, FaTrashAlt, FaCheckSquare } from 'react-icons/fa'

const TodosList = (props) => {
  const { item, updateTodo } = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };
  return (
    <li key={item.id}>
      <textarea
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
      />
      <div className="containerButton">
        <button onClick={() => changeFocus()}><FaEdit style={{width:"2vw", height:"auto"}}></FaEdit></button>
        <button onClick={() => props.completeTodo(item.id)}><FaCheck style={{width:"2vw", height:"auto"}} ></FaCheck></button>
        <button onClick={() => props.removeTodo(item.id)}><FaTrashAlt style={{width:"1.8vw", height:"auto"}}></FaTrashAlt></button>{" "}
      </div>
      {item.completed && <span className="complete">Plan Completed <FaCheckSquare></FaCheckSquare></span>}
    </li>
  );
};

export default TodosList;
