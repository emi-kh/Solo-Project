import React from "react";
import { useLocation } from "react-router";
import { useNavigate } from 'react-router-dom';

const CurrNote = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const {noteId, noteName, noteText} = location.state;

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
      navigate('/deleteSuccess')
    })
    .catch(err => console.log('currNote.jsx fetch /api/file/delete: ERROR: ', err));
  }
  
  return (
    <div className="wrapper-currNote">
      <h2 className="currHead">{noteName}</h2>
      <div className="currText-C">
        <p className="currText">{noteText}</p>
      </div>
      <div>
        <button className="deleteNote" onClick={deleteNote}>Delete Note</button>
      </div>
    </div>
  )
}

export default CurrNote