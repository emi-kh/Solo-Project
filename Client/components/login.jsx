import React, { useState } from 'react';


const LoginPage = () => {

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
        <div id='signupForm'>
          <p>Sign Up</p>
          <form method='POST' action='/signup'>
            <input name="username" type="text" placeholder="username"></input>
            <input name="password" type="password"></input>
            <br></br>
            <input type="submit" value="Create User"></input>
          </form>
        </div>
      </main>
    </div>
  )
}

export default LoginPage;