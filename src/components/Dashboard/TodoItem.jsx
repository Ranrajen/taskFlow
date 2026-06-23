// src/components/Dashboard/TodoItem.jsx
import React from 'react';
import { useAppContext } from '../../context/AppContext';

const TodoItem = ({ todo }) => {
  const { toggleTodo, deleteTodo } = useAppContext(); // Access functions directly

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input 
        type="checkbox" 
        checked={todo.completed} 
        onChange={() => toggleTodo(todo.id)} 
      />
      <span>{todo.text}</span>
      <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>✕</button>
    </div>
  );
};
export default TodoItem;