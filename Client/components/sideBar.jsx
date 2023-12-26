import React from 'react';


const SideBar = () => {
  const CreateB = () => {
    const handleCreateB = (e) => {
    //   if (e) return  // change sideCreateT variable to true, renders in main container section not in side bar
    }
    return <input id="allTagsB" type='submit' value="Tags" onChange={ handleCreateB }></input>
  }

  const AllTags = () => {
    const handleTagsB = (e) => {
      // change sideTagsT to true
    }
    return <input id="allTagsB" type='submit' value="Tags" onChange={ handleTagsB }></input>
  }
  const AllFiles = () => {
    const handleFilesB = (e) => {
      // change sideFilesT to true
    }
    return <input id="allFilesB" type='submit' value="Files" onChange={ handleFilesB }></input>
  }

  const AllNests = () => {
    const handleNestsB = (e) => {
      // change sideNestsT to true
    }
    return <input id="allNestsB" type='submit' value="Nests" onChange={ handleNestsB }></input>
  }
  
  return (
    <div id="sideBar">
      < CreateB />
      < AllTags />
      < AllFiles />
      < AllNests />
    </div>
  );
}

export default SideBar;