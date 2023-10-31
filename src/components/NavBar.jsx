import React from 'react';
import { Link } from 'react-router-dom';
import './../index.css';


function NavBar() {
  return (
    <div className="navbar">
        <nav>
          <ul>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/text">Text</Link>
            </li>
            <li>
              <Link to="/film">Film</Link>
            </li>
            <li>
              <Link to="/toolbox">Toolbox</Link>
            </li>
            <li>
              <Link to="/about">About Me</Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default NavBar;
