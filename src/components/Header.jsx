import React from 'react';
import './../index.css';

function Header() {
  return (


      <div className="container">
        <div className="logo">
          <h1><a href="index.html">Cris Maillo</a></h1>
          <img className="smileySvg" src="../assets/images/smiley.svg" alt="Smiley" />
          <div className="ellipseContainer">
            <a href="index.html">
              <img className="ellipseSvg" src="../assets/images/ellipse.svg" alt="Ellipse" />
              <img className="ellipseSvg" src="../assets/images/ellipse.svg" alt="Ellipse" style={{ transform: "rotate(10deg)" }} />
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