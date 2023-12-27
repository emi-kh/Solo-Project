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
    {/* <div className='input-wrapper'>
      <input className='search' placeholder='Search'></input>
    </div> */}
    <nav className='nav-side'>
      <input className='search' placeholder='Search'></input>
      <ul>
        <li><Link to='/main/create' >Create</Link></li>
        <li><Link to='/main/tags'>Tags</Link></li>
        <li><Link to='/main/files'>Files</Link></li>
        <li><Link to='/main/nests'>Nests</Link></li>
      </ul>
    </nav>
    </>
  );
}

export default SideBar;