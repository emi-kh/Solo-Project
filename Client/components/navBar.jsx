import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

const NavBar = () => {

  return (
  <div className='wrapper-top'>
    <nav className="nav-top">
      <Link to="/" className="site-title">NoteNest</Link>
      {/* <ul>
        <li className='nav-top'>
          <Link to='/settings'>Settings</Link>
        </li>
      </ul> */}
    </nav> 
  </div>

  );
}

{/* <nav className="nav">
  <a href="/" className="nav-title">NoteNest</a>
  <ul>
    <li>
      <a href="/profile">Profile</a>
    </li>
    <li>
      <a href='/settings'>Settings</a>
    </li>
  </ul>
</nav> */}

export default NavBar;