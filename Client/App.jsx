import React from 'react';
import { render } from 'react-dom';

// import LandingPage from './containers/landing.jsx';
// import LoginPage from './components/login.jsx';

{/* <div>
< LoginPage /> 
</div> */}

const App = () => {
  return (
        <div>
        <header>
          <h1>NoteNest</h1>
        </header>
        <main>
          <div id='loginForm'>
            <form method='POST' action='/login'>
              <input name="username" type="text" placeholder="username"></input>
              <input name="password" type="password" placeholder="password"></input>
              <input type='submit' value="login"></input>
            </form>
          </div>
          <div id='signupForm'>
            <form method='POST' action='/signup'>
              <input name="username" type="text" placeholder="username"></input>
              <input name="password" type="password"></input>
              <input type="submit" value="create user"></input>
            </form>
          </div>
        </main>
      </div>
  )
}

export default App

