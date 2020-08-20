import React from 'react';

export const RegisterForm = function(props) {
  return (
    <div>
      <form onSubmit = {props.onSubmit}>
        <h3>Full Name</h3>
        <input type = 'text' name = 'name' value = {props.name} onChange = {props.handleName}/><br/>
        <h3>Email</h3>
        <input type = 'email' name = 'email' value = {props.email} onChange = {props.handleEmail}/><br/>
        <h3>Password</h3>
        <input type = 'password' name = 'password' value = {props.password} onChange = {props.handlePassword}/><br/>
        <button type = 'submit' value = {props.button}>Register</button>
      </form>
    </div>
  );
};

export const LoginForm = (props) => {
  return (
    <div>
      <form onSubmit = {props.handleLogin}>
        <h3>Email</h3>
        <input type = 'text' name = 'email' value = {props.email} onChange = {props.handleEmail}/><br/>
        <h3>Password</h3>
        <input type = 'password' name = 'password' value = {props.password} onChange = {props.handlePassword}/><br/>
        <button type = 'submit' value = {props.button}>Login</button>
      </form>
    </div>
  );
};
