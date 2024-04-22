import React from "react";
import NoteContext from "./NoteContext";
import { useState } from "react";
const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  //Adding a note

  //To do

  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYyNjYyNWE4YWI4ZjIzMjM4NTJkZWE4In0sImlhdCI6MTcxMzc5MTU3OH0.jyJSaX7OOAO8BQ0vtveYQBrAYxPURpyQAE0Lh9vFEa0",
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  const addNote = async (title, description, tag) => {
    // TODO: API Call
    // API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYyNjYyNWE4YWI4ZjIzMjM4NTJkZWE4In0sImlhdCI6MTcxMzc5MTU3OH0.jyJSaX7OOAO8BQ0vtveYQBrAYxPURpyQAE0Lh9vFEa0",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const note = await response.json();
    setNotes(notes.concat(note));
  };

  //Deleting a note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYyNjYyNWE4YWI4ZjIzMjM4NTJkZWE4In0sImlhdCI6MTcxMzc5MTU3OH0.jyJSaX7OOAO8BQ0vtveYQBrAYxPURpyQAE0Lh9vFEa0",
      },
    });
    const json = response.json();
    console.log(json);

    console.log("Deleting the note with id: " + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //Edit a notec
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYyNjYyNWE4YWI4ZjIzMjM4NTJkZWE4In0sImlhdCI6MTcxMzc5MTU3OH0.jyJSaX7OOAO8BQ0vtveYQBrAYxPURpyQAE0Lh9vFEa0",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json;

    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
