/* eslint-disable */
import './../App.css';
import profilePic from '../assets/images/profile2.jpg';
import profilePicM from '../assets/images/profileMobile.png';
import who from '../assets/images/yoko.png';
import Tippy from '@tippyjs/react';
import Title from './Title';


function AboutMe() {
  
  function emailToClipboard(){
    navigator.clipboard.writeText("cristinamaillo.r@gmail.com");
  }

  return (
    <div>
    <Title title="About Me"/>
    <div className="aboutMecontent">
      <Tippy content="Southwark" className='tippy'>
        <img className="profilePic" alt="somewhere in Southwark" src={profilePic}/>
      </Tippy>
        <img className="profileMobile" alt="dark matter expo, Berlin" src={profilePicM}/>
        <div className="aboutText">
            <p className="me">Hey, I’m Cris (she/her). I’m a London-based,{" "}
            <Tippy content="Asturias, Northern Spain" className='tippy'>
              <span className="textHover" alt="Asturias, Northern Spain" style={{cursor: 'help'}}>Oviedo</span>
            </Tippy>-born 23-year-old. I tend to avoid any definitions of who I am as I personally believe that life and the act of being 
                are ever-changing and <span className="image-wrapper textHover">usually too ambigious<img className="image" src={who} alt="yoko ono not knowing who she is"/> to ever be fully truthful.</span></p>
            <p className="values">I <wbr/>believe in the value of commu<wbr/>nity and avoid being a hypocr<wbr/>ite above all else.</p>
            <div className="doing">
                <p>I’m currently a Tech Consultant @ IBM and I am mostly building 
                    my experience as a Business Analyst in the Public Sector. </p>
                <p>I have a degree in IT Management for Business from the University of Manchester, 
                    and currently studying part-time MSc Computer Science at the University of Bath.</p>
                <div className="contactLinks">
                    <p><a href="https://github.com/cris-maillo/crismaillo" target="_blank" rel="noopener noreferrer">GitHub</a></p>
                    <p><a href="https://crismailo.net/assets/images/CristinaMaillo2022.pdf" target="_blank" rel="noopener noreferrer" download>Résumé</a></p>
                    <p><a href="https://www.linkedin.com/in/cristina-maillo/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                    <Tippy content="Click to copy to Clipboard" className='tippy'>
                      <p onClick={emailToClipboard} alt="Click to copy to Clipboard" style={{cursor: 'pointer'}}>cristinamaillo.r@gmail.com</p>
                    </Tippy>
                </div>
            </div>
            <div className="colophon">
                <p style={{paddingBottom: '10px'}}><b>about this site</b></p>
                <p>I created this website inspired by a mixture of slow-web / learning in public / digital garden 
                    discourse. I believe that having a public, creative, and if possible, self-made, space to 
                    share and introduce yourself online can be somehow restorative.<br/>
                    This website is designed on Figma and built on React & uses GSAP and Tippy as libraries. 
                    It is hosted on GitHub pages and <a href="https://www.websitecarbon.com/website/crismaillo-net/" target="_blank" rel="noopener noreferrer">produces 0.93g of CO<small>2</small> every time someone visits</a>.
                    <br/>You can check out the <a href="https://github.com/cris-maillo/crismaillo">source code here</a> and 
                    my <a href="https://www.figma.com/file/sEhm45WPK5lXzVnEyRmDz6/webwebweb?node-id=0%3A1&t=qISysJrnH9IBYPUp-1" target="_blank" rel="noopener noreferrer">designs here</a>. 
                </p>
            </div>
        </div>
    </div>

    <div className="colophonMobile">
      <p style={{paddingBottom: '10px'}}><b>about this site</b></p>
      <p>I created this website inspired by a mixture of slow-web / learning in public / digital garden 
      discourse. I believe that having a public, creative, and if possible, self-made, space to 
      share and introduce yourself online can be somehow restorative.<br/><br/>
      This website is designed on Figma and built on React & uses GSAP and Tippy as libraries. 
      It is hosted on GitHub pages and <a href="https://www.websitecarbon.com/website/crismaillo-net/" target="_blank" rel="noopener noreferrer">produces 0.39g of CO<small>2</small> every time someone visits</a>.
      <br/><br/>You can check out the <a href="https://github.com/cris-maillo/crismaillo">source code here</a> and 
      my <a href="https://www.figma.com/file/sEhm45WPK5lXzVnEyRmDz6/webwebweb?node-id=0%3A1&t=qISysJrnH9IBYPUp-1" target="_blank" rel="noopener noreferrer">designs here</a>. </p>
    </div>
    </div>
  );
}

export default AboutMe;