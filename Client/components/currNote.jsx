import React from "react";
import { useLocation } from "react-router";
import { useNavigate } from 'react-router-dom';

const CurrNote = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const {noteId, noteName, noteText} = location.state;

  // console.log('CurrNote line 11 noteId prop: ', noteId);

  const body = {
    id: noteId
  }

  //delete note button
  const deleteNote = () => {
    fetch('/api/file/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify(body)
    })
    .then(doc => doc.json())
    .then(doc => {
      console.log('currNote line 28 deleted doc: ', doc)
      navigate('/deleteSuccess')
    })
    .catch(err => console.log('currNote.jsx fetch /api/file/delete: ERROR: ', err));
  }
  
  return (
    <>
      <div className="currHeadC">
        <h2 className="currHead">{noteName}</h2>
      </div>
      <div className="currTextC">
        <p className="currText">{noteText}</p>
      </div>
      <div className="currDeleteC">
        <button className="deleteNote" onClick={deleteNote}>Delete Note</button>
      </div>
    </>
  )
}

export default CurrNote