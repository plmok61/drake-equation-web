import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import galaxy from './galaxy.png';
import Privacy from './Privacy';
import './App.css';
import AppStorePNG from './app-store.png'
import { Link } from 'react-router-dom';

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
              <img src={galaxy} className="App-logo" alt="logo" />
              <h2>Drake Equation</h2>
            </div>
            <h4>
              <a href="https://apps.apple.com/us/app/drake-equation-calculator/id1360650293">
                Download the iOS app
              </a>
            </h4>
            
              <div className="imgContainer">
                <a 
                  href="https://apps.apple.com/us/app/drake-equation-calculator/id1360650293"
                >
                  <img src={AppStorePNG} alt="app store" className="appStoreImg" />
                </a>
              </div>
            <div>
              <Link to="/privacy" style={{ color: 'white' }}>Privacy Policy</Link>
            </div>
          </div>
        </div>
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
