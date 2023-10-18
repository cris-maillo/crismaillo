import React from 'react';
import './../index.css';
import yellow from '../assets/images/yellow2.svg';


function LandingPage() {
  return (
    <div className="App">
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

      <div className="bannercontainer">
        <div class="animationContainer">
          <h6 class="bannerscript">que la suerte no influya // don’t litter // let your loved ones know they are loved // if it’s not alright, it’s not the end // become your own god // if you never create anything, all you will ever be is a consumer // there is ecstasy in paying attention // luck isn't random // simplicity, honesty, and service // limit everything to the essential but do not remove the poetry // there are no useless efforts // I do, because I can. I do, because I care. // empathy is wisdom // no need to add chaos to chaos // assume all communications are tapped // que la suerte no influya // don’t litter // let your loved ones know they are loved // if it’s not alright, it’s not the end // become your own god // if you never create anything, all you will ever be is a consumer // there is ecstasy in paying attention // luck isn't random // simplicity, honesty, and service // limit everything to the essential but do not remove the poetry // there are no useless efforts // I do, because I can. I do, because I care. // empathy is wisdom // no need to add chaos to chaos // assume all communications are tapped // que la suerte no influya // don’t litter // let your loved ones know they are loved // if it’s not alright, it’s not the end // become your own god // if you never create anything, all you will ever be is a consumer // there is ecstasy in paying attention // luck isn't random // simplicity, honesty, and service // limit everything to the essential but do not remove the poetry // there are no useless efforts // I do, because I can. I do, because I care. // empathy is wisdom // no need to add chaos to chaos // assume all communications are tapped // </h6>
        </div>
      </div>

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

        <div class="intro">
          <h2>welcome,</h2>
          <h4>this is my very own personal space on the <span class="image-wrapper textHover"><img class="image" src="imgs/technologists.jpeg" alt="test"/><span>internet</span></span>. An experimental &amp; ever-changing (verging on self-absorbed) space to share <a href="about-me.html">who I am</a>, <a href="projects.html">what I've done</a>, what I’m doing now, <a href="toolbox.html">what I like</a>, and <a href="film.html">what I capture</a>.
          Inspired by the slow web and various <span class="image-wrapper textHover"><img class="image" src="imgs/digGarden.gif" alt="test"/><span>digital gardens</span></span>, this is my formal <span class="image-wrapper textHover"><span>introduction into the internet</span><img class="image" src="imgs/dream.jpeg" alt="test"/></span>, through self-taught lines of code, multiple figma drafts, and lots of good vibes.</h4>
          <h4>In other words, <b>nice to meet you.</b></h4>
        </div>
      </div>

      <footer>
        <h6>
          <span className="hide">
            <a href="https://www.yourworldoftext.com/~crismaillo/" target="_blank">leave a message</a>
            <span className="lines"></span>
            <a href="https://www.yourworldoftext.com/~crismaillo/" target="_blank">@crismaillo</a>
            <span className="lines"></span>
            <span className="lines"></span>
            <span className="lines"></span>
            <span className="theme-name">dark mode</span>
            <span className="lines"></span>
          </span>
        </h6>
      </footer>
    </div>
  );
}

export default LandingPage;