import './App.css';
import React from 'react';
import Home from "./Home"
import About from "./About"
import Skills from "./Skills"
import Contact from "./Contact"
import Nav from './components/Nav'
import {  
  BrowserRouter as Router,
  Switch,
  Route,  
} from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>      
      <Switch>         
          <Route  path="/" exact component={Home}/>           
          <Route path="/about"component={About}/>            
          <Route path="/skills" component={Skills}/>  
          <Route path="/contact" component={Contact}/>                     
        </Switch>       
    </div>
    </Router>
  );
}

export default App;
