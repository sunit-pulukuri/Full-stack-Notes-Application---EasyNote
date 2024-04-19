import React from 'react'
import { useContext } from 'react';
import NoteItem from './NoteItem';
import NoteContext from '../context/notes/NoteContext';
const Notes = () => {
    const context = useContext(NoteContext);
    const {notes, setNotes} = context;
  return (
      <div className="row my-3">
        <h2>Your Notes</h2>
        {notes.map((note)=>{
          return <NoteItem note = {note}/>
        })}
      </div>
    
  );
}

export default Notes
