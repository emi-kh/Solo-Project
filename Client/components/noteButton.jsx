import React from "react";
import { Link } from "react-router-dom";

const NoteButton = ({id, noteName, noteText, key}) => {
  
  const noteState = {
    noteId: id,
    noteName: noteName,
    noteText: noteText,
    key: key
  }
  return (
    <div style={{height: '100px', width: '100px', background: 'white'}} className="noteButton">
      <Link to='/currNote' state={noteState}>{noteName}</Link>
    </div>
  )
}

export default NoteButton