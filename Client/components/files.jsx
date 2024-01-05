import React, {useEffect, useState} from 'react';

import NoteButton from './noteButton.jsx';


const Files = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetch('/api/file/allFiles')
    .then(data => data.json())
    .then(data => {
      // console.log(data);
      setFiles(data)
    })
    .catch(err => {
      console.log(`Error occured in fetch get allFiles request client side files.jsx: ${err}`)
    })
  }, []);
  // if (files) console.log('files.jsx line 27: ', files);

  return (
      <div className='wrapper-files'>
        <h2 className='main-title'>Files Component</h2>
        <div className='noteButtonC'>
          {files.map((file, index) => (
            < NoteButton id={file._id} noteName={file.fileName} noteText={file.notes} key={file._id}/>
          ))}
        </div>
      </div>
  )

}

export default Files;