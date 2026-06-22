// src/components/Layout/Sidebar.jsx
import React from 'react';

const Sidebar = ({ currentView, setView }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-icon">☰</div>
      <div 
        className={`sidebar-icon ${currentView === 'dashboard' ? 'active' : ''}`} 
        onClick={() => setView('dashboard')}
      >📅</div>
      <div 
        className={`sidebar-icon ${currentView === 'notes' ? 'active' : ''}`} 
        onClick={() => setView('notes')}
      >📝</div>
      <div className="sidebar-icon">⚙️</div>
    </div>
  );
};
export default Sidebar; 