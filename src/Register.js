import React, { useState } from 'react';
import { RegisterForm } from './Form';

const Register = () => {
  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[button, setButton] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleButton = (e) => {
    if (name === '') {
      alert('Please we need your name to confirm you are a human');
    } else if (email === '') {
      alert('Please tell the email we can use to contact you');
    } else if (password === '') {
      alert('Choose a password to secure your account');
    } else {
      setButton(true)
    }
    e.preventDefault();
  };

  const text = !button ? null : <p>Your Name <b>{name}</b>, Email <b>{email}</b> and Password <b>{password}</b> has registered successfully</p>
  return (
    <div>
      <RegisterForm 
        name = {name} handleName = {handleName}
        email = {email} handleEmail = {handleEmail}
        password = {password} handlePassword = {handlePassword}
        button = {button} onSubmit = {handleButton}
      />
      <hr></hr>
      {text}
    </div>
  );
};

export default Register