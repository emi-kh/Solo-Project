import React, {useState} from 'react';

import NoteButton from './noteButton.jsx';


const Files = () => {
  const [files, setFiles] = useState([]);

  fetch('/api/file/allFiles')
  .then(data => data.json())
  .then(data => {
    console.log(data);
    files.map((file, index) => {
      <>
        < NoteButton id={data[index]._id} noteName={data[index].fileName} />
        {/* <h2>Note Button Here</h2> */}
      </>
    })
  }
  )
  .then(comp => {
    return (
      <div className='wrapper-files'>
        <h2>Files Component</h2>
        {files}
      </div>
    )
  })
  .catch(err => {
    console.log(`Error occured in fetch get allFiles request client side files.jsx: ${err}`)
  })
}

export default Files;