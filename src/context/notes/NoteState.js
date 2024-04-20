import React from "react";
import NoteContext from "./NoteContext";
import { useState } from "react";
const NoteState = (props) => {
  const notesInitial = [
    {
      "_id": "661e8b00f5752d34340cf4aef326cbe",
      "user": "661e8ad9f2d0cf4aef326cbb",
      "title": "420 Title",
      "description": "New note 42120",
      "tag": "personal",
      "date": "2024-04-16T14:28:16.556Z",
      "__v": 0
    },
    {
      "_id": "661e8b00f2d024152cf3454aef326cbe",
      "user": "661e8ad9f2d0cf4aef326cbb",
      "title": "420 Title",
      "description": "New note 23120",
      "tag": "personal",
      "date": "2024-04-16T14:28:16.556Z",
      "__v": 0
    },
    {
      "_id": "661e8b00f2d131102424cf4aef326cbe",
      "user": "661e8ad9f2d0cf4aef326cbb",
      "title": "420 Title",
      "description": "New note 23120",
      "tag": "personal",
      "date": "2024-04-16T14:28:16.556Z",
      "__v": 0
    },
    {
      "_id": "661e8b00f2345421111345d0c13645f4aef326cbe",
      "user": "661e8ad9f2d0cf4aef326cbb",
      "title": "420 Title",
      "description": "New note 23120",
      "tag": "personal",
      "date": "2024-04-16T14:28:16.556Z",
      "__v": 0
    },
    {
      "_id": "661e8b00f2234234d01212cf4aef326cbe",
      "user": "661e8ad9f2d0cf4aef326cbb",
      "title": "420 Title",
      "description": "New note 23120",
      "tag": "personal",
      "date": "2024-04-16T14:28:16.556Z",
      "__v": 0
    }
    
  ]

  const [notes, setNotes] = useState(notesInitial);


  //Adding a note

  //To do 
  const addNote = (title,description,tag)=>{
    const note = {
      "_id": "661e8b00f2234d120c3f4aef326cbe",
      "user": "661e8ad9f2d0cf4aef326cbb",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2024-04-16T14:28:16.556Z",
      "__v": 0
    }
    setNotes(notes.concat(note))
  }

  //Deleting a note
  const deleteNote= ()=>{
    
  }
  

  //Edit a notec
  const editNote= ()=>{

  }
  
  return (
    <NoteContext.Provider value={{notes, addNote}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
