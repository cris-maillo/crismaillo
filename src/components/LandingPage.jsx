import React from 'react';
import './../index.css';

function LandingPage() {
  return (

    <div className="intro">
      <h2>welcome,</h2>
      <h4>this is my very own personal space on the <span className="image-wrapper textHover"><img className="image" src="imgs/technologists.jpeg" alt="test"/><span>internet</span></span>. An experimental &amp; ever-changing (verging on self-absorbed) space to share <a href="about-me.html">who I am</a>, <a href="projects.html">what I've done</a>, what I’m doing now, <a href="toolbox.html">what I like</a>, and <a href="film.html">what I capture</a>.
      Inspired by the slow web and various <span className="image-wrapper textHover"><img class="image" src="imgs/digGarden.gif" alt="test"/><span>digital gardens</span></span>, this is my formal <span class="image-wrapper textHover"><span>introduction into the internet</span><img class="image" src="imgs/dream.jpeg" alt="test"/></span>, through self-taught lines of code, multiple figma drafts, and lots of good vibes.</h4>
      <h4>In other words, <b>nice to meet you.</b></h4>
    </div>

  );
}

export default LandingPage;