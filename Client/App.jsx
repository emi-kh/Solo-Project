import React from 'react';
import { Routes, Route } from 'react-router-dom';


import SplashPage from './pages/splash.jsx';
import Homepage from './pages/homepage.jsx';
import NavBar from './components/navBar.jsx';
import MainCHome from './containers/mainHome.jsx';
import SideBar from './components/sideBar.jsx';
import Create from './components/create.jsx';
import Tags from './components/tags.jsx';
import Files from './components/files.jsx';
import Nests from './components/nests.jsx';



const App = () => {
  return (
    < >

    < Routes>
      <Route path='/*' element={< Homepage />} />
      {/* <Route path='/' element={<SplashPage />} />
      <Route path='/NoteNest' element={<Homepage />} /> */}
    </Routes>
  </>
  )
}

export default App

