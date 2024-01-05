import React from "react";
import { Link } from "react-router-dom";

const NoteButton = ({id, noteName, noteText}) => {
  
  const noteState = {
    noteId: id,
    noteName: noteName,
    noteText: noteText,
  }
  return (
    // <React.Fragment className="noteButton">
    // <Link to='/currNote' state={noteState} className="link">{noteName}</Link>
    // </React.Fragment>
    <div className="noteButton">
      <Link to='/currNote' key={id} state={noteState} className="link-notes">{noteName}</Link>
    </div>
  )
}

export default NoteButton

// style={{height: '100px', width: '100px', background: 'white'}}