import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Nav';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import './App.css';

function App() {
  return (
    <div className = 'App'>
      <Router>
      <Nav/>
      <Switch>
        <Route exact path = '/' component = {Register}/>
        <Route path = '/login'  component = {Login}/>
        <Route path = '/dashboard' component = {Dashboard}/>
        <Route exact path = '*' component = {Dashboard} />
        <Route exact path = '*/*' component = {Dashboard} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
