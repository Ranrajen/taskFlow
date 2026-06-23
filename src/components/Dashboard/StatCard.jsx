// src/components/Dashboard/StatCard.jsx
import React from 'react';

const StatCard = ({ number, label, subLabel, isDark }) => {
  return (
    <div className={`card stat-card ${isDark ? 'dark-card' : ''}`}>
      <div className={`stat-number ${!isDark ? 'orange' : ''}`}>• {number}</div>
      <div className="stat-label">
        <span>{label}</span>
        <span>{subLabel}</span>
      </div>
    </div>
  );
};
export default StatCard;