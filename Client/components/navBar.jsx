import React from 'react';

const NavBar = () => {
  const Profile = () => {
    <input id="profileB" type='submit' value="Profile" ></input>
  }
  const Settings = () => {
    <input id="settingsB" type='submit' value="Settings" ></input>
  }
  
  return (
    <div id="navBar">
      < Profile />
      < Settings />
    </div>
  );
}

module.exports = NavBar;