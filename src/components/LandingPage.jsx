/* eslint-disable */
import './../App.css';
import { Link } from 'react-router-dom';
import technologists from '../assets/images/technologists.jpeg';
import digGarden from '../assets/images/digGarden.gif';
import dream from '../assets/images/dream.jpeg';

function LandingPage() {
  return (
    <div className="intro">
      <h2>welcome,</h2>
      <h4>
        this is my very own personal space on the{" "}
        <span className="image-wrapper textHover">
          <img className="image" src={technologists} alt="girls on lappy" />
          <span>internet</span>
        </span>. 
        An experimental &amp; ever-changing (verging on self-absorbed) space to share{" "}
        <Link to="/about">who I am</Link>,{" "}  
        <Link to="/projects">what I've done</Link>, 
        what I’m doing now,{" "}
        <Link to="/toolbox">what I like</Link>, 
        and <Link to="/film">what I capture</Link>. 
        Inspired by the slow web and various{" "}
        <span className="image-wrapper textHover">
          <img className="image" src={digGarden} alt="gif of why garden" />
          <span>digital gardens</span>
        </span>
        , this is my formal{" "}
        <span className="image-wrapper textHover">
          <span>
            introduction into the internet</span>
            <img className="image" src={dream} alt="wanting to be a computer" />
        </span>, 
        through self-taught lines of code, multiple figma drafts, and lots of good vibes.
      </h4>
      <h4 style={{zIndex: 0}}>
        In other words, <b>nice to meet you.</b>
      </h4>
    </div>
  );
}

export default LandingPage;
