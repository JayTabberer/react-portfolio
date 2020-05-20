import React from 'react';
import About from './components/About';
import Home from './components/Home';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/home'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path='/home'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
