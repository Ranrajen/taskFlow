// src/context/AppContext.jsx
import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // --- TO-DO STATE ---
  const [todos, setTodos] = useState([
    { id: 1, text: 'Write blog post', completed: true },
    { id: 2, text: 'Plan weekend trip', completed: false },
    { id: 3, text: 'Pay bills', completed: false },
  ]);

  const addTodo = (text) => {
    if (!text.trim()) return;
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  // --- NOTES STATE ---
  const [notes, setNotes] = useState([
    { id: 1, title: 'Meeting Workflow', content: 'How to optimize meetings...', pinned: true, date: '20 Sep' },
    { id: 2, title: 'Competitor Analysis', content: 'Short summary of task-flow...', pinned: false, date: '1h ago' },
  ]);

  const addNote = (title, content) => {
    if (!title.trim() || !content.trim()) return;
    setNotes([{ id: Date.now(), title, content, pinned: false, date: 'Just now' }, ...notes]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(n => n.id !== id));
  };

  const value = {
    todos, addTodo, toggleTodo, deleteTodo,
    notes, addNote, deleteNote
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);