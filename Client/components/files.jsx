import React, {useState} from 'react';

import NoteButton from './noteButton';


const Files = () => {
  const [files, setFiles] = useState([]);

  fetch('/api/files/getFiles')
  .then(data => json(data))
  .then(files => {
    const filesComp = setFiles.map((file, index) => {
      < NoteButton id={files[index]._id} noteName={files[index].fileName} />
    })
  })

  return (
    <div className='wrapper-files'>
      <h2>Files Component</h2>
      {filesComp}
    </div>
  )
}

export default Files;