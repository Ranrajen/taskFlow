// src/App.js
import React, { useState } from 'react';
import './App.css';
import { AppProvider } from './context/AppContext';

// Components
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import StatCard from './components/Dashboard/StatCard';
import TodoList from './components/Dashboard/TodoList';
import AddNoteForm from './components/Notes/AddNoteForm';
import NoteGrid from './components/Notes/NoteGrid';
import { useAppContext } from './context/AppContext';

// Dashboard View Component (Wrapped to access Context)
const DashboardView = () => {
  const { todos, notes } = useAppContext();
  const openTasks = todos.filter(t => !t.completed).length;
  const completedTasks = todos.filter(t => t.completed).length;

  return (
    <div className="grid-container">
      <StatCard number={openTasks} label="OPEN TASKS" subLabel="3 Overdue" />
      <StatCard number={completedTasks} label="Completed Tasks" subLabel="" isDark={true} />
      <TodoList />
      
      {/* Recent Notes Snippet for Dashboard */}
      <div className="card">
        <h3>NOTE ENTRY</h3>
        {notes.length > 0 ? (
          <div style={{ marginTop: '15px' }}>
            <p style={{ fontSize: '15px', fontWeight: 'bold' }}>{notes[0].title}</p>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '5px' }}>
              {notes[0].content.substring(0, 60)}...
            </p>
          </div>
        ) : (
          <p style={{ color: 'var(--text-muted)', marginTop: '15px' }}>No notes added yet.</p>
        )}
      </div>
    </div>
  );
};

// Notes View Component
const NotesView = () => {
  const { notes } = useAppContext();
  const pinnedNotes = notes.filter(n => n.pinned).length;

  return (
    <div className="grid-container">
      <StatCard number={notes.length} label="Total Notes" subLabel={`${pinnedNotes} Pinned`} />
      <AddNoteForm />
      <NoteGrid />
    </div>
  );
};

// Main App Layout
function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <AppProvider>
      <div className="app-container">
        <Sidebar currentView={currentView} setView={setCurrentView} />
        
        <div className="main-content">
          <Header 
            title={currentView === 'dashboard' ? 'My Dashboard' : 'My Notes'} 
            toggleTheme={toggleTheme} 
            isDarkMode={darkMode}
          />
          
          {currentView === 'dashboard' ? <DashboardView /> : <NotesView />}
        </div>
      </div>
    </AppProvider>
  );
}

export default App;