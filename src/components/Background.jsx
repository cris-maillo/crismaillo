import React from 'react';
import './../index.css';
import yellow from '../assets/images/yellow2.svg';


function Background() {
  return (
    <div className="background">
        <div>
            <img className="greenSvg" src="./imgs/green.svg" alt="Green" />
        </div>
        <div>
            <img className="yellowSvg" src="./imgs/yellow.svg" alt="Yellow" style={{ width: "200px", top: "-120px", left: "80px" }} />
        </div>
        <div>
            <img className="yellowSvg bottom" src={yellow} alt="Yellow 2" />
        </div>
    </div>
)}

export default Background;