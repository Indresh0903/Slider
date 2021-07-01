import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Components/header'
import Home from './pages/Home';
import Devices from './pages/Devices'
import Reports from './pages/Reports'
import Policies from './pages/Policies'
import Network from './pages/Network'
import Left from './Components/Left';
import {BrowserRouter as Router,Switch, Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Header/>
      
      <Router>
      <Left/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/Devices" component={Devices}/>
        <Route path="/Reports" component={Reports}/>
        <Route path="/Settings/Policies" component={Policies}/>
        <Route path="/Settings/Network" component={Network}/>
      </Switch>
      </Router>
    </div>
  );
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
