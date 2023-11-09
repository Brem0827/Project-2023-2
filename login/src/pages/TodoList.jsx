import React, { useReducer, useState } from "react";
import "../css/TodoList.css";
import Header from "../components/Header";
import ScrollHeader from "../components/ScrollHeader";
import Footer from "../components/Footer";

const initialState = {
  todos: []
};

function reducer(state, action) {
  switch (action.type) {
    case "add_todo":
      return { todos: [...state.todos, action.payload] };
    case "toggle_todo":
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, complete: !todo.complete }
            : todo
        )
      };
    case "delete_todo":
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload)
      };
    default:
      throw new Error();
  }
}

function TodoApp() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "add_todo",
      payload: { id: Date.now(), task, complete: false }
    });
    setTask("");
  };

  return (
    <div>
      <Header />
      <ScrollHeader />
      <div className="todo-app">
        <h2 className="todo-title">Todo List</h2>
        <form onSubmit={handleSubmit} className="todo-form">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="todo-input"
          />
          <button type="submit" className="todo-button">
            할일 추가
          </button>
        </form>
        <ul className="todo-list">
          {state.todos.map((todo) => (
            <li
              key={todo.id}
              className={`todo-item ${todo.complete ? "completed" : ""}`}
            >
              <label className="todo-label">
                <input
                  type="checkbox"
                  checked={todo.complete}
                  onChange={() =>
                    dispatch({ type: "toggle_todo", payload: todo.id })
                  }
                  className="todo-checkbox"
                />
                {todo.task}
              </label>
              <button
                onClick={() =>
                  dispatch({ type: "delete_todo", payload: todo.id })
                }
                className="todo-delete-button"
              >
                삭제
              </button>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default TodoApp;
