// src/components/Layout/Header.jsx
import React from 'react';

const Header = ({ title, toggleTheme, isDarkMode }) => {
  return (
    <div className="header">
      <h1>{title}</h1>
      <div className="header-actions">
        <button className="icon-btn">🔍</button>
        <button className="icon-btn" onClick={toggleTheme}>
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </div>
  );
};
export default Header;