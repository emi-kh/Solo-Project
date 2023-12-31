import React, {useState} from 'react';
import { Form, redirect, useActionData } from 'react-router-dom';

const useInput = init => {
  const [ value, setValue ] = useState(init);
  const onChange = e => {
    setValue(e.target.value);
  };
  // return the value with the onChange function instead of setValue function
  return [ value, onChange ];
};

const Create = () => {


  return (
    <div className='wrapper-create'>
      <h2 className='headerC'>Create File</h2>

    </div>
  )
}

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