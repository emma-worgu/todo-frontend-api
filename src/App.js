import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Nav';
import Login from './Login';
import Register from './Register';
import './App.css';

function App() {
  return (
    <div className = 'App'>
      <Router>
      <Nav/>
      <Switch>
        <Route path = '/' exact component = {Register}/>
        <Route path = '/login'  component = {Login}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
