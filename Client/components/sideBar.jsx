import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';



const SideBar = () => {
  
  return (
    <>
    <div className='search-wrapper'>
      <input className='search' placeholder='Search'></input>
    </div>
    <nav className='nav-side'>
      <ul>
        <li><Link to='/create' className="link-sidebar">Create</Link></li>
        <li><Link to='/files'className="link-sidebar">Files</Link></li>
        <li><Link to='/tags' className="link-sidebar">Tags</Link></li>
        <li><Link to='/nests' className="link-sidebar">Nests</Link></li>
      </ul>
    </nav>
    </>
  );
}

export default SideBar;