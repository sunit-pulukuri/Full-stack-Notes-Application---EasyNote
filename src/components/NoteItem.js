import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
const NoteItem = (props) => {
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <div className=" col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <div className="d-flex align-items-center">
            <p className="card-text" style={{ paddingTop: "12px" }}>
              {note.description}
            </p>

            <i
              className="fa-sharp fa-solid fa-trash mx-2"
              onClick={() => {
                deleteNote(note._id);
                props.showAlert("Deleted successfully", "success");
              }}
            ></i>
            {/* <i className="fa-solid fa-copy"></i> */}
            <i
              className="fa-sharp fa-regular fa-pen-to-square mx-2"
              onClick={() => {
                updateNote(note);
                props.showAlert("Updated successfully", "success");
              }}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
