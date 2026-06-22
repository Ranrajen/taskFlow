// src/components/Notes/NoteCard.jsx
import React from 'react';
import { useAppContext } from '../../context/AppContext';

const NoteCard = ({ note }) => {
  const { deleteNote } = useAppContext();
  return (
    <div className="note-card">
      {note.pinned && <span className="pin-icon">📌</span>}
      <h4>{note.title}</h4>
      <p>{note.content}</p>
      <div className="note-actions">
        <span>{note.date}</span>
        <button 
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'red', fontSize: '14px' }}
          onClick={() => deleteNote(note.id)}
        >🗑️</button>
      </div>
    </div>
  );
};
export default NoteCard;