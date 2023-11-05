import React, { useEffect, useState } from 'react';
import './../index.css';

function Footer() {

  const [isLightMode, setIsLightMode] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme === 'light';
  });

  const toggleMode = () => {
    const newTheme = isLightMode ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setIsLightMode(!isLightMode);
  };

  useEffect(() => {
    if(isLightMode){
      document.body.classList.add('light');
    }else{
      document.body.classList.remove('light');
    }
  }, [isLightMode]);

  return (
      <footer>
        <h6>
          <span className="hide">
            <a href="https://www.yourworldoftext.com/~crismaillo/" target="_blank" rel="noreferrer">leave a message</a>
            <span className="lines"></span>
            <a href="https://www.yourworldoftext.com/~crismaillo/" target="_blank" rel="noreferrer">@crismaillo</a>
            <span className="lines"></span>
            <span className="lines"></span>
            <span className="lines"></span>
            <span className="theme-name" onClick={toggleMode}>
              {isLightMode ? 'dark mode' : 'light mode'}
            </span>
            <span className="lines"></span>
          </span>
        </h6>
              {/* <footer className="disappearFooter">
        <h6>
          <span className="hide">
            <a href="https://www.yourworldoftext.com/~crismaillo/" target="_blank" rel="noreferrer">
              leave a message
            </a>{' '}
            <span className="lines"></span>{' '}
            <a href="https://www.yourworldoftext.com/~crismaillo/" target="_blank" rel="noreferrer">
              @crismaillo
            </a>{' '}
            <span className="lines"></span>
            <span className="lines"></span> // <span className="lines"></span>
          </span>
          <span className="lines"></span>{' '}
          <span className="theme-name">dark mode</span> <span className="lines"></span>
        </h6>
      </footer> */}
      </footer>
  );
}

export default Footer;