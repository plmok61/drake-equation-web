import React from 'react';
import logo from './logo.svg';
import Privacy from './Privacy';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
    <Switch>
      <Route path="/privacy" exact>
        <Privacy />
      </Route>
      <Route path="/">
        <div className="App">
          <div className="centerBody">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Drake Equation</h2>
            </div>
            <h4>
              Calculate the number of alien civilizations in our galaxy
            </h4>
          </div>
        </div>
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
