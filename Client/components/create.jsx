import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

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
        navigate('/success')
      })
      .catch(err => console.log('Create fetch /api/fileUpload: ERROR: ', err));
    }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  // }


  return (
    <section className='wrapper-create'>
      <div className='titleCreateC'>
        <h2 className='titleCreate'>Create New Note</h2>
      </div>
      <form className='formCreate'>
        {/* <div className='createC'>
          <label htmlFor='upload'>Upload: </label>
        </div> */}
        <div className='createC'>
          <label htmlFor='fileName'> Note Title: </label>
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
        <div className='createC'>
          <label className='labelTextArea' htmlFor='notes'> Notes: </label>
          <textarea name="notes" className='notesTextArea' placeholder="Today I discovered...." value={notes} onChange={notesOnChange} />
        </div>
        <div className='submitC'>
          <button type="button" className="createBtn" rows='10' onClick={saveNote}>Create</button>
        </div>
      </form>
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