import React, {useState, useEffect} from 'react';
import { Form, redirect, useActionData } from 'react-router-dom';

import Success from './success';

//require Users, Tags, and Nests data from database
// const userData = require()
// const tagData = require()

const useInput = init => {
  const [ value, setValue ] = useState(init);
  const onChange = e => {
    setValue(e.target.value);
  };
  // return the value with the onChange function instead of setValue function
  return [ value, onChange ];
};

const Create = (props) => {
  const [ fileName, nameOnChange ] = useInput('');
  // const [tags, setTags] = useState({});
  // const [ nests, nestsOnChange ] = useInput('');
  const [ notes, notesOnChange ] = useInput('');
  const [ nameError, setNameError ] = useState(null);

  // useEffect to clear nameError when `fileName` is changed
  useEffect(()=>{
    setNameError(null);
  }, [fileName]);

  // const handleFilmCheck = e => {
  //   const idx = e.target.value;
  //   const newFilmSet = {...filmSet};
  //   if (newFilmSet[idx]) delete newFilmSet[idx];
  //   else newFilmSet[idx] = true;
  //   setFilmSet(newFilmSet);
  // };

  // const filmCheckboxes = filmsData.map((filmObj, idx) => {
  //   return (
  //     <div key={idx} className="checkboxWithLabel">
  //       <input type="checkbox" className="filmCheckbox" value={idx} onChange={handleFilmCheck}></input>
  //       <span className="checkboxLabel">{filmObj.title}</span>
  //     </div>
  //   );
  // });

  const saveNote = () => {
    // if (fileName === '') {
    //   setNameError('required');
    // } else {
    //   const tags = [];
    //   for (const idx in tags) {
    //     tags.push({
    //       userId: filmsData[idx].title,
    //       files: filmsData[idx]._id
    //     });
    //   }
    // }

    const body = {
      fileName,
      // userId: ,
      // tags,
      // nests,
      notes
    }

    fetch('/api/file/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify(body)
      })
      .then(resp => resp.json())
      .then((data) => {
        console.log(data);
        return (
          <Success fileName={data.file} />
        )
      })
      // .then(() => {
      //   props.history.push('/');
      // })
      .catch(err => console.log('Create fetch /api/fileUpload: ERROR: ', err));
    }



  return (
    <section className='wrapper-create'>
      <h2 className='headerC'>Create New Note</h2>
      <article className='card-create'>
        <div className='create-container'>
          <label htmlFor='upload'>Upload: </label>
        </div>
        <div className='create-container'>
          <label htmlFor='fileName'> File Name: </label>
          <input name="fileName" placeholder="file 1" value={fileName} onChange={nameOnChange} />
          {nameError ? (<span className="errorMsg">{nameError}</span>) : null}
        </div>
        {/* <div className='create-container'>
          <label htmlFor='tags'> Tags: </label>
          <input name="tags" placeholder="recipes" value={tags} onChange={tagsOnChange} />
        </div> */}
        {/* <div className='create-container'>
          <label htmlFor='nests'> Nests: </label>
          <input name="nests" placeholder="My Nest" value={nests} onChange={nestsOnChange} />
        </div> */}
        <div className='create-container'>
          <label htmlFor='notes'> Notes: </label>
          <textarea name="notes" placeholder="Today I discovered...." value={notes} onChange={notesOnChange} />
        </div>
        <div className='submit-container'>
          <button type="button" className="createBtn" rows='10' onClick={saveNote}>Create</button>
        </div>
      </article>
    </section>
  )
};


export default Create;





  // const data = useActionData();

      {/* <Form method='POST' action='/upload'>
        <label>
          <span>File Name:</span>
          <input type='text' name='fileName' />
        </label>
        <label>
          <span>Tags:</span>
          <input type='text' name='tags' />
        </label>
        <label>
          <span>Notes:</span>
          <input type='text' name='notes' />
        </label>
        <button>Submit</button>

        {data && data.error && <p>{data.error}</p>}
      
      </Form> */}



      // export const uploadAction = async ({ request }) => {

        //   const data = await request.formData()
        
        //   const submit = {
        //     name: data.get('fileName'),
        //     tags: data.get('tags'),
        //     notes: data.get('notes')
        //   }
        
        //   // send post request to database
        
        //   //error message for user
        //   if (submit.name === '') {
        //     return {error: 'File must be given a name'}
        //   }
        
        //   // redirect to blank create page?
        //   return redirect('/create') // might need to change route
      // }