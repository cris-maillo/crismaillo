/* eslint-disable */
import './../App.css';
import React, { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';
import technologists from '../assets/images/technologists.jpeg';
import digGarden from '../assets/images/digGarden.gif';
import dream from '../assets/images/dream.jpeg';
import Monsterra from './Monsterra';

function LandingPage() {
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    const fetchLastCommitDate = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/repos/cris-maillo/crismaillo/commits/main'
        );
        const data = await response.json();
        const commitDate = new Date(data.commit.committer.date);
        const options = {
          year: "numeric",
          month: "long",
          day: "numeric",
        };
        setLastUpdated(commitDate.toLocaleDateString("en-GB", options));
      } catch (error) {
        console.error('Error fetching last commit date:', error);
      }
    };

    fetchLastCommitDate();
  }, []);

  return (
    <>
    <div className="intro">
      <h3>welcome,</h3>
      <h4>
        this is my very own personal space on the{" "}
        <span className="image-wrapper textHover">
          <img className="image" src={technologists} alt="girls on lappy" />
          <span>internet</span>
        </span>. 
        An experimental &amp; <Tippy content={"last update: " + (lastUpdated || '29 September 2024')} className='tippy'><span className='textHover'>ever-changing</span></Tippy> (verging on self-absorbed) space to share{" "}
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
    <div className='monsterra'>
      <Monsterra/>
    </div>
    </>
  );
}

export default LandingPage;
