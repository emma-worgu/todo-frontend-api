import React, { useState, createContext } from 'react';

export const FormContext = createContext();

export const FormProvider = (props) => {
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
  return (
    <FormContext.Provider value = {[name, setName]}>
      {props.children}
    </FormContext.Provider>
  );
};