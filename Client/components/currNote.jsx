import React from "react";
import { useLocation } from "react-router";

const CurrNote = () => {
  const location = useLocation();
  const {noteId, noteName} = location.state;
  
  return (
    <h2>Note goes here</h2>
  )
}

export default CurrNote