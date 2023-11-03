import React, { useEffect, useState } from 'react';
import './../index.css';

function Footer() {

  const [isLightMode, setIsLightMode] = useState(document.body.classList.contains('light'));

  const toggleMode = () => {
    if (isLightMode) {
      document.body.classList.remove('light');
      localStorage.setItem('theme', 'dark');
      setIsLightMode(false);
    } else {
      document.body.classList.add('light');
      localStorage.setItem('theme', 'light');
      setIsLightMode(true);
    }
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'light') {
      document.body.classList.add('light');
      setIsLightMode(true);
    } else {
      setIsLightMode(false);
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
            <span className="theme-name" onClick={() => toggleMode()}>
              {isLightMode ? 'dark mode' : 'light mode'}
            </span>
            <span className="lines"></span>
          </span>
        </h6>
      </footer>
  );
}

export default Footer;