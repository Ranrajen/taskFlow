// src/components/Notes/NoteGrid.jsx
import React from 'react';
import NoteCard from './NoteCard';
import { useAppContext } from '../../context/AppContext';

const NoteGrid = () => {
  const { notes } = useAppContext();
  return (
    <div className="note-grid" style={{ gridColumn: 'span 2' }}>
      {notes.map(note => <NoteCard key={note.id} note={note} />)}
    </div>
  );
};
export default NoteGrid;