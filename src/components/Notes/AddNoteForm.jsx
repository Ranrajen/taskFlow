// src/components/Notes/AddNoteForm.jsx
import React, { useState } from 'react';
import { useAppContext } from '../../context/AppContext';

const AddNoteForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addNote } = useAppContext();

  const handleSubmit = () => {
    addNote(title, content);
    setTitle('');
    setContent('');
  };

  return (
    <div className="card dark-card">
      <h3 style={{ color: 'white' }}>Write a new entry</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '15px' }}>
        <input 
          type="text" 
          placeholder="Note Title..." 
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
          style={{ padding: '12px', borderRadius: '12px', border: 'none', outline: 'none' }}
        />
        <textarea 
          placeholder="Write your note here..." 
          value={content} 
          onChange={(e) => setContent(e.target.value)}
          style={{ padding: '12px', borderRadius: '12px', border: 'none', outline: 'none', height: '80px', resize: 'none' }}
        />
        <button 
          className="add-btn" 
          onClick={handleSubmit} 
          style={{ width: '100%', borderRadius: '12px', height: '40px' }}
        >Add Note +</button>
      </div>
    </div>
  );
};
export default AddNoteForm;