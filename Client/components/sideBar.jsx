import React, {useState} from 'react';
import { Link, Route, Routes } from 'react-router-dom';



const SideBar = () => {
  const [query, setQuery] = useState(null);

  const handleSearch = (e) => {
    if (e) {
      setQuery(e.target.value)
    }
  }
  const searchState = {
    query
  }
 
  
  return (
    <>
   <div className='search-wrapper'>
     <input className='search' placeholder='Search' type='string' value={query} onChange={handleSearch} ></input>
     <Link to='/files' state={searchState} className='searchSubmit' >Search</Link>
   </div>
    <nav className='nav-side'>
      <ul>
        <li><Link to='/create' className="link-sidebar">Create</Link></li>
        <li><Link to='/files'className="link-sidebar">Notes</Link></li>
        <li><Link to='/tags' className="link-sidebar">Tags</Link></li>
        <li><Link to='/nests' className="link-sidebar">Nests</Link></li>
      </ul>
    </nav>
    </>
  );
}

export default SideBar;