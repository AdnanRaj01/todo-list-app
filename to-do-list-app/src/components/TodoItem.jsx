import React from "react";

function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <span onClick={() => onToggle(todo.id)}>
        {todo.text}
      </span>

      <button className="delete-btn" onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </div>
  );
}

export default TodoItem;