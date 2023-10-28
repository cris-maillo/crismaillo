import React from 'react';
import './../index.css';
import yellow2 from '../assets/images/yellow2.svg';
import yellow from '../assets/images/yellow.svg';
import green from '../assets/images/green.svg';


function Background() {
  return (
    <div className="background">
        <div>
            <img className="greenSvg" src={green} alt="Green" />
        </div>
        <div>
            <img className="yellowSvg" src={yellow} alt="Yellow" style={{ width: "200px", top: "-120px", left: "80px" }} />
        </div>
        <div>
            <img className="yellowSvg bottom" src={yellow2} alt="Yellow 2" />
        </div>
    </div>
)}

export default Background;