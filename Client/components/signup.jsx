import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const SignUp = () => {
  const handleSubmit = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
      setTimeout(() => {
        navigate('/home')
      }, 1000)
    }, []);
  }
  return (
    <div id='signupForm'>
    <h3>Join the Nest</h3>
    <form method='POST' action='/signup'>
      <input name="username" type="text" placeholder="username"></input>
      <input name="password" type="password" placeholder="password"></input>
      <br></br>
      <input type="submit" value="Create User" onClick={handleSubmit}></input>
    </form>
  </div>
  )
}

export default SignUp;