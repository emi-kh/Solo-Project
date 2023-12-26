import React from 'react';

const NavBar = () => {
  // const Profile = () => {
  //   <input id="profileB" type='submit' value="Profile" ></input>
  // }
  // const Settings = () => {
  //   <input id="settingsB" type='submit' value="Settings" ></input>
  // }
  
  return (
    // <div className="nav">
    //   < Profile />
    //   < Settings />
    // </div>
    <nav className="nav">
      <a href="/" className="site-title">NoteNest</a>
      <ul>
        <li className='active'>
          <a href="/profile">Profile</a>
        </li>
        <li className='active'>
          <a href='/settings'>Settings</a>
        </li>
      </ul>
    </nav> 
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