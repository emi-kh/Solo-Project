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
    <div>
      <Link to='/currNote' state={noteState} className="noteButton">{noteName}</Link>
    </div>
  )
}

export default NoteButton

// style={{height: '100px', width: '100px', background: 'white'}}