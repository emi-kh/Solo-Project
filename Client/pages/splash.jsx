import React from 'react';

import LoginPage from '../components/login.jsx';
import Homepage from './homepage.jsx';

const SplashPage = () => {
  console.log(window.location)
  const handleEnter = (e) => {

    // if (e) return window.location.pathname = '/homepage';
    // if (e) {
    //   fetch('/homepage')
    //     .then(res => res.json())
    //     .then(data => {
    //       // data to route
    //       window.location.pathname = data
    //     })
    //     .catch(err => console.log(`Error ${err}, found in splash.jsx line 11 fetch res to /homepage`))
    // }
  }

  return (
    <div id='splashMain'>
      {/* < LoginPage /> */}
      <input id="enterB" type='submit' value="Enter" onClick={handleEnter}></input>
    </div> 
  );

}

export default SplashPage