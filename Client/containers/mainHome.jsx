import React from 'react';

import Create from '../components/create.jsx';
import Tags from '../components/tags.jsx';
import Files from '../components/files.jsx';
import Nests from '../components/nests.jsx';

// main container- upload a file: changes to all files, tags or collections when side bar buttons are clicked

const MainCHome = () => {
  //if conditional logic for rendering: default (create), create, tags, files, nests, 
  // keyword in store state that can changes in onCHange events, must change back after used.
  // refactor as a switch statement?

  if (sideCreateT) {
    return (
      <div id="mainCCreate">
        < Create />
      </div>
    )
  }
  if (sideTagsT) {
    return (
        <div id="mainCTags">
          < Tags />
        </div>
      )
  }
  if (sideFilesT) {
    return (
        <div id="mainCFiles">
          < Files />
        </div>
      )
  }
  if (sideNestsT) {
    return (
        <div id="mainCNests">
          < Nests />
        </div>
      )
  }
  else {
    return (
        <div>
          < Create />
        </div>
      )
  }

}

export default MainCHome;