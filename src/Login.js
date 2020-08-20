import React, { useState } from 'react';
import { LoginForm } from './Form'

const Login = () => {
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[button, setButton] = useState(false)

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    if (email === '') {
     alert('There was an error in the email');
    } else if (password === '') {
      alert('There was an error in the password');
    } else {
      setButton(true);
    };
    e.preventDefault();
  };

  const text = !button ? null : <p>You have successfully login with your Email <b>{email}</b> and Password <b>{password}</b></p>
  return (
    <div>
      <LoginForm
        email = {email} handleEmail = {handleEmail}
        password = {password} handlePassword = {handlePassword}
        button = {button} handleLogin = {handleLogin} 
      />
      <hr></hr>
      {text}
    </div>
  );
};

export default Login