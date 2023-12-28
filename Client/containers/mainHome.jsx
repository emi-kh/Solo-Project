import React from 'react';
import { Route, Routes } from 'react-router';

import SideBar from '../components/sideBar.jsx';
import Create from '../components/create.jsx';
import Tags from '../components/tags.jsx';
import Files from '../components/files.jsx';
import Nests from '../components/nests.jsx';

// main container- upload a file: changes to all files, tags or collections when side bar buttons are clicked

const MainCHome = () => {
  //if conditional logic for rendering: default (create), create, tags, files, nests, 
  // keyword in store state that can changes in onCHange events, must change back after used.
  // refactor as a switch statement?
  return (
    <>
    <div className='wrapper-main'>
      <div className='main'>
        {/* <Create />
        <Tags />
        <Files />
        <Nests /> */}

        <Routes>
          <Route path='create' element={<Create/>} />
          <Route path='tags' element={<Tags/>} />
          <Route path='files' element={<Files/>} />
          <Route path='nests' element={<Nests/>} />
        </Routes>
    </div>
    </div>
    </>
  )

}

export default MainCHome;