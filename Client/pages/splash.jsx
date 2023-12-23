import React from 'react';
import LoginPage from '../components/login.jsx';
import Homepage from './homepage.jsx';

const SplashPage = () => {
  
  const handleEnter = (e) => {
    if (e) {
      fetch('/homepage')
        .then(res = res.json())
        .catch(err => console.log(`Error ${err}, found in splash.jsx line 11 fetch res to /homepage`))
    }
  }

  return (
    <div id='splashMain'>
      {/* < LoginPage /> */}
      <input type='submit' value="Enter" onChange={handleEnter}></input>
    </div> 
  );

}

export default SplashPage