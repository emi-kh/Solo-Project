import React, { useState } from 'react';
import { useNavigate } from 'react-router';


const LoginPage = () => {
  const handleSubmit = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
      setTimeout(() => {
        navigate('/home')
      }, 1000)
    }, []);
  }
  return (
    <div>
      <header>
        <h1>NoteNest</h1>
      </header>
      <main>
        <div id='loginForm'>
          <p>Login</p>
          <form method='POST' action='/login'>
            <input name="username" type="text" placeholder="username"></input>
            <input name="password" type="password" placeholder="password"></input>
            <br></br>
            <input type='submit' value="Login"></input>
          </form>
        </div>
      </main>
    </div>
  )
}

export default LoginPage;