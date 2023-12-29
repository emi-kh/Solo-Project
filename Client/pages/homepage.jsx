import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import NavBar from '../components/navBar.jsx';
import SideBar from '../components/sideBar.jsx';
import MainCHome from '../containers/mainHome.jsx';

// nav bar top
// timeline- under nav bar, stretch feature

// side bar- all files, all tags, nests

const Homepage = () => {
  return (
    <>
      < NavBar />
      < SideBar />
      <MainCHome />
    </>

  );
}

export default Homepage;