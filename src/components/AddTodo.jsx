import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../feature/todo/todoSlice";
const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <>
      <form onSubmit={addTodoHandler}>
        <input
        className="todo-input form-control"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        
        <button className="btn btn-lg btn-success form-control fs-5 mt-3" type="submit">ADD</button>
      </form>
    </>
  );
};

export default AddTodo;
