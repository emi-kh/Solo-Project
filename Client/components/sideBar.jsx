import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';



const SideBar = () => {
  // const CreateB = () => {
  //   const handleCreateB = (e) => {
  //   //   if (e) return  // change sideCreateT variable to true, renders in main container section not in side bar
  //   }
  //   return <input id="allTagsB" type='submit' value="Tags" onChange={ handleCreateB }></input>
  // }

  
  return (
    <>
    <div className='search-wrapper'>
      <input className='search' placeholder='Search'></input>
    </div>
    <nav className='nav-side'>
      <ul>
        <li><Link to='/create' >Create</Link></li>
        <li><Link to='/tags'>Tags</Link></li>
        <li><Link to='/files'>Files</Link></li>
        <li><Link to='/nests'>Nests</Link></li>
      </ul>
    </nav>
    </>
  );
}

export default SideBar;