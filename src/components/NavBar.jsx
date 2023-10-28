import React from 'react';
import './../index.css';


function NavBar() {
  return (
    <div className="navbar">
        <nav>
            <ul>
                <li>
                <div className="navitem"><a href="projects.html">Projects</a></div>
                </li>
                <li>
                <div className="navitem"><a href="text.html">Text</a></div>
                </li>
                <li>
                <div className="navitem"><a href="film.html">Film</a></div>
                </li>
                <li>
                <div className="navitem"><a href="toolbox.html">Toolbox</a></div>
                </li>
                <li>
                <div className="navitem"><a href="about-me.html">About Me</a></div>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar;