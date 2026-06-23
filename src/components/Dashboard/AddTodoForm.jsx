// src/components/Dashboard/AddTodoForm.jsx
import React, { useState } from 'react';
import { useAppContext } from '../../context/AppContext';

const AddTodoForm = () => {
  const [input, setInput] = useState('');
  const { addTodo } = useAppContext();

  const handleSubmit = () => {
    addTodo(input);
    setInput('');
  };

  return (
    <div className="add-task">
      <input 
        type="text" 
        placeholder="Add a task..." 
        value={input} 
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
      />
      <button className="add-btn" onClick={handleSubmit}>+</button>
    </div>
  );
};
export default AddTodoForm;