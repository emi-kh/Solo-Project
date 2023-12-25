import React from 'react';

import NavBar from '../components/navBar.jsx';
import SideBar from '../components/sideBar.jsx';
import MainCHome from '../containers/mainHome.jsx';

// nav bar top
// timeline- under nav bar, stretch feature

// side bar- all files, all tags, collections

const Homepage = () => {
  return (
    <div>
      < NavBar />
      < SideBar />
      < MainCHome />
    </div>
  );
}

module.exports = Homepage;