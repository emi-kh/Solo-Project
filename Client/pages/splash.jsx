import React, {useEffect} from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';

import LoginPage from '../components/login.jsx';
import SignUp from '../components/signup.jsx';

const SplashPage = () => {

  const handleEnter = (e) => {
    if (e) {
      const navigate = useNavigate();
      
      useEffect(() => {
        setTimeout(() => {
          navigate('/')
        }, 1000)
      }, []);
    }
    }

  return (
    <div id='splashMain'>
      {/* < LoginPage /> */}
      <Link className='enterB' to='/home' >Enter</Link>
      {/* <input className="enterB" type='submit' value="Enter" method="GET" action='/homepage' onClick={handleEnter}></input> */}
    </div> 
  );

}

export default SplashPage