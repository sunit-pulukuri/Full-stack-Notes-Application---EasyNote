import React from "react";
import NoteContext from "./NoteContext";
import { useState } from "react";
const NoteState = (props) => {
  const notesInitial = [
    {
      "_id": "661e8b00f2d0cf4aef326cbe",
      "user": "661e8ad9f2d0cf4aef326cbb",
      "title": "420 Title",
      "description": "New note 42120",
      "tag": "personal",
      "date": "2024-04-16T14:28:16.556Z",
      "__v": 0
    },
    {
      "_id": "661e8b00f2d0cf4aef326cbe",
      "user": "661e8ad9f2d0cf4aef326cbb",
      "title": "420 Title",
      "description": "New note 23120",
      "tag": "personal",
      "date": "2024-04-16T14:28:16.556Z",
      "__v": 0
    },
    {
      "_id": "661e8b00f2d0cf4aef326cbe",
      "user": "661e8ad9f2d0cf4aef326cbb",
      "title": "420 Title",
      "description": "New note 23120",
      "tag": "personal",
      "date": "2024-04-16T14:28:16.556Z",
      "__v": 0
    },
    {
      "_id": "661e8b00f2d0cf4aef326cbe",
      "user": "661e8ad9f2d0cf4aef326cbb",
      "title": "420 Title",
      "description": "New note 23120",
      "tag": "personal",
      "date": "2024-04-16T14:28:16.556Z",
      "__v": 0
    },
    {
      "_id": "661e8b00f2d0cf4aef326cbe",
      "user": "661e8ad9f2d0cf4aef326cbb",
      "title": "420 Title",
      "description": "New note 23120",
      "tag": "personal",
      "date": "2024-04-16T14:28:16.556Z",
      "__v": 0
    },
    {
      "_id": "661e8b00f2d0cf4aef326cbe",
      "user": "661e8ad9f2d0cf4aef326cbb",
      "title": "420 Title",
      "description": "New note 23120",
      "tag": "personal",
      "date": "2024-04-16T14:28:16.556Z",
      "__v": 0
    },
    {
      "_id": "661e8b00f2d0cf4aef326cbe",
      "user": "661e8ad9f2d0cf4aef326cbb",
      "title": "420 Title",
      "description": "New note 23120",
      "tag": "personal",
      "date": "2024-04-16T14:28:16.556Z",
      "__v": 0
    },
    {
      "_id": "661e8b00f2d0cf4aef326cbe",
      "user": "661e8ad9f2d0cf4aef326cbb",
      "title": "420 Title",
      "description": "New note 23120",
      "tag": "personal",
      "date": "2024-04-16T14:28:16.556Z",
      "__v": 0
    },
    {
      "_id": "661e8b00f2d0cf4aef326cbe",
      "user": "661e8ad9f2d0cf4aef326cbb",
      "title": "420 Title",
      "description": "New note 23120",
      "tag": "personal",
      "date": "2024-04-16T14:28:16.556Z",
      "__v": 0
    },
    {
      "_id": "661e8b00f2d0cf4aef326cbe",
      "user": "661e8ad9f2d0cf4aef326cbb",
      "title": "420 Title",
      "description": "New note 23120",
      "tag": "personal",
      "date": "2024-04-16T14:28:16.556Z",
      "__v": 0
    },
    {
      "_id": "661e8b00f2d0cf4aef326cbe",
      "user": "661e8ad9f2d0cf4aef326cbb",
      "title": "420 Title",
      "description": "New note 23120",
      "tag": "personal",
      "date": "2024-04-16T14:28:16.556Z",
      "__v": 0
    },
    {
      "_id": "661e8b00f2d0cf4aef326cbe",
      "user": "661e8ad9f2d0cf4aef326cbb",
      "title": "420 Title",
      "description": "New note 889",
      "tag": "personal",
      "date": "2024-04-16T14:28:16.556Z",
      "__v": 0
    }
  ]

  const [notes, setNotes] = useState(notesInitial)
  
  return (
    <NoteContext.Provider value={{notes,setNotes}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
