import React from 'react';

const Login = () => {
  return (
    <form>
    <h3>Email</h3>
    <input className = 'email' type = 'text' name = 'email'/><br/>
    <h3>Password</h3>
    <input className = 'password' type = 'password' name = 'password'/><br/>
    <button type = 'submit'>Login</button>
  </form>
  );
};

export default Login