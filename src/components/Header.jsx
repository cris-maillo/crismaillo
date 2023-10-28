import React from 'react';
import './../index.css';
import ellipse from '../assets/images/ellipse.svg';
import smiley from '../assets/images/smiley.svg';

function Header() {
  return (
    <div className="container">
      <div className="logo">
        <h1><a href="index.html">Cris Maillo</a></h1>
        <img className="smileySvg" src={smiley} alt="Smiley" />
        <div className="ellipseContainer">
          <a href="index.html">
            <img className="ellipseSvg" src={ellipse} alt="Ellipse" />
            <img className="ellipseSvg" src={ellipse} alt="Ellipse" style={{ transform: "rotate(10deg)" }} />
          </a>
        </div>
      </div>

      <div className="divider">
        <hr />
      </div>
    </div>
  );
}

export default Header;