import React from 'react';
import './Nav.css';
import {   
  Link
} from "react-router-dom";
function Nav() {
  return (
   
    <nav className="header">
        <Link to="/"  className="header_link_logo">
        <div className="header_logo">
            <h3>Guhan</h3>
        </div>
        </Link>     
        <div className="header_tabs">
            <Link to="/"  className="header_link">Home</Link>
            <Link to="/about" className="header_link">About</Link>
            <Link to="/skills" className="header_link">Skills</Link>
            <Link to="/contact" className="header_link">Contact</Link>
        </div>        
    </nav>
    
  )
}

export default Nav;

