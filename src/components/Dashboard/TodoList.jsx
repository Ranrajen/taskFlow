// src/components/Dashboard/TodoList.jsx
import React from 'react';
import TodoItem from './TodoItem';
import AddTodoForm from './AddTodoForm';
import { useAppContext } from '../../context/AppContext';

const TodoList = () => {
  const { todos } = useAppContext();
  return (
    <div className="card">
      <h3>TO-DO LIST</h3>
      <div>
        {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
      </div>
      <AddTodoForm />
    </div>
  );
};
export default TodoList;