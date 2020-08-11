import React from 'react';

const Register = () => {
  return (
    <form>
      <h3>Full Name</h3>
      <input className = 'name' type = 'text' name = 'name' required/><br/>
      <h3>Email</h3>
      <input className = 'email' type = 'email' name = 'email' required/><br/>
      <h3>Password</h3>
      <input className = 'password' type = 'password' name = 'password' required/><br/>
      <button type = 'submit'>Register</button>
    </form>
  );
};

export default Register