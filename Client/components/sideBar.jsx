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
        <li><Link to='/create' >Create</Link></li>
        <li><Link to='/files'>Files</Link></li>
        <li><Link to='/tags'>Tags</Link></li>
        <li><Link to='/nests'>Nests</Link></li>
      </ul>
    </nav>
    </>
  );
}

export default SideBar;