import React from 'react';
import { Routes, Route } from 'react-router-dom';


import SplashPage from './pages/splash.jsx';
import Homepage from './pages/homepage.jsx';
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
      <Route path='/' element={< Homepage />} />
      <Route path='/main' element={<MainCHome/>}>
        <Route path='create' element={<Create/>} />
        <Route path='tags' element={<Tags/>} />
        <Route path='files' element={<Files/>} />
        <Route path='nests' element={<Nests/>} />
      </Route>
    </Routes>
  </>
  )
}

export default App

