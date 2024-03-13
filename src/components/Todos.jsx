  import React from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { removeTodo } from "../feature/todo/todoSlice";
  const Todos = () => {
    const todos = useSelector(state => state.todo.todos);
    const dispatch = useDispatch();
    
    return (

      <>
        <div>
          <h1 className="Todo-items mt-3">Todo Item</h1>
          </div>  
        {todos.map((todo) => (
          <ul className="d-flex align-items-center justify-content-center" key={todo.id}>
          <input value={todo.text} readonly className="form-control" />  
            <button className="btn btn-danger " onClick={() => dispatch(removeTodo(todo.id))}>X</button>
          </ul>

        ))}
      </>
    );
  };

  export default Todos;
