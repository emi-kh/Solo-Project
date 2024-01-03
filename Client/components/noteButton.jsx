import React from "react";
import { Link } from "react-router-dom";

const NoteButton = ({id, noteName}) => {
  
  const noteState = {
    noteId: id,
    noteName: noteName
  }
  return (
    <label className="noteButton">
      <Link to='/currNote' state={noteState}>{noteName}</Link>
    </label>
  )
}

export default NoteButton