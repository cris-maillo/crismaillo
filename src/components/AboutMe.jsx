import React from 'react';
import './../index.css';
import profilePic from '../assets/images/profile.jpeg';
import profilePicM from '../assets/images/profileMobile.png';
import who from '../assets/images/yoko.png';


function AboutMe() {
  return (
    <div>
      <div class="aboutMe">
        <h2>About Me</h2> 
      </div>

    <div class="aboutMecontent">
        <img class="profilePic tooltip" alt="dark matter expo, Berlin" src={profilePic}/>
        <img class="profileMobile" alt="dark matter expo, Berlin" src={profilePicM}/>
        <div class="aboutText">
            <p class="me">Hey, I’m Cris (she/her). I’m a London-based, <span class="textHover tooltip" alt="Asturias, Northern Spain" style={{cursor: 'help'}}>Oviedo</span>-born 23-year-old. I 
                tend to avoid any definitions of who I am as I personally believe that life and the act of being 
                are ever-changing and <span class="image-wrapper textHover">usually too ambigious<img class="image" src={who} alt="yoko ono not knowing who she is"/> to ever be fully truthful.</span></p>
            <p class="values">I <wbr/>believe in the value of commu<wbr/>nity and avoid being a hypocr<wbr/>ite above all else.</p>
            <div class="doing">
                <p>I’m currently a Tech Consultant @ IBM and I am mostly building 
                    my experience as a Business Analyst in the Public Sector. </p>
                <p>I have a degree in IT Management for Business from the University of Manchester, 
                    and am slowly working through The Odin Project’s Full Stack Web Development course.</p>
                <div class="contactLinks">
                    <p><a href="https://github.com/cris-maillo" target="_blank" rel="noreferrer">GitHub</a></p>
                    <p><a href="/imgs/CristinaMaillo2022.pdf" target="_blank" rel="noreferrer">Résumé</a></p>
                    <p><a href="https://www.linkedin.com/in/cristina-maillo/" target="_blank" rel="noreferrer">LinkedIn</a></p>
                    <p onclick="emailToClipboard()" alt="Click to copy to Clipboard" class="tooltip" style={{cursor: 'pointer'}}>cristinamaillo.r@gmail.com</p>
                </div>
            </div>
            <div class="colophon">
                <p style={{paddingBottom: '10px'}}><b>about this site</b></p>
                <p>I created this website inspired by a mixture of slow-web / learning in public / digital garden 
                    discourse. I believe that having a public, creative, and if possible, self-made, space to 
                    share and introduce yourself online can be somehow restorative.<br/>
                    This website is designed on Figma and built on very plain HTML, JS, and CSS & uses GSAP and Tippy as libraries. 
                    It is hosted on GitHub pages and <a href="https://www.websitecarbon.com/website/crismaillo-net/" target="_blank" rel="noreferrer">produces 0.33g of CO<small>2</small> every time someone visits</a>.
                    <br/>You can check out the <a href="https://github.com/cris-maillo/crismaillo-web">source code here</a> and 
                    my <a href="https://www.figma.com/file/sEhm45WPK5lXzVnEyRmDz6/webwebweb?node-id=0%3A1&t=qISysJrnH9IBYPUp-1" target="_blank" rel="noreferrer">designs here</a>. 
                </p>
            </div>
        </div>
    </div>

    <div class="colophonMobile">
      <p style={{paddingBottom: '10px'}}><b>about this site</b></p>
      <p>I created this website inspired by a mixture of slow-web / learning in public / digital garden 
      discourse. I believe that having a public, creative, and if possible, self-made, space to 
      share and introduce yourself online can be somehow restorative.<br/><br/>
      This website is designed on Figma and built on very plain HTML, JS, and CSS & uses GSAP and Tippy as libraries. 
      It is hosted on GitHub pages and <a href="https://www.websitecarbon.com/website/crismaillo-net/" target="_blank" rel="noreferrer">produces 0.33g of CO<small>2</small> every time someone visits</a>.
      <br/><br/>You can check out the <a href="https://github.com/cris-maillo/crismaillo-web">source code here</a> and 
      my <a href="https://www.figma.com/file/sEhm45WPK5lXzVnEyRmDz6/webwebweb?node-id=0%3A1&t=qISysJrnH9IBYPUp-1" target="_blank" rel="noreferrer">designs here</a>. </p>
    </div>

    <footer class="disappearFooter">
      <h6><span class="hide"><a href="https://www.yourworldoftext.com/~crismaillo/" target="_blank" rel="noreferrer">leave a message</a> <span class="lines"></span> <a href="https://www.yourworldoftext.com/~crismaillo/" target="_blank" rel="noreferrer">@crismaillo</a> <span class="lines"></span><span class="lines"></span> // <span class="lines"></span></span><span class="lines"></span> <span  class="theme-name">dark mode</span> <span class="lines"></span></h6>
    </footer>

    </div>
  );
}

export default AboutMe;