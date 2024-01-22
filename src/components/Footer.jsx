/* eslint-disable */
import { useEffect, useState } from 'react';
import './../App.css';

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
          <span>
            <a className="hide" href="https://www.yourworldoftext.com/~crismaillo/" target="_blank" rel="noopener noreferrer">leave a message</a>
            <span className="lines"></span>
            <a className="hide" href="https://www.yourworldoftext.com/~crismaillo/" target="_blank" rel="noopener noreferrer">@crismaillo</a>
            <span className="lines"></span>
            <span className="lines"></span><span className="hide"> // </span><span className="lines"></span>
            <span className="lines"></span>
            <span className="theme-name" onClick={toggleMode}>
              {isLightMode ? 'dark mode' : 'light mode'}
            </span>
            <span className="lines"></span>
          </span>
        </h6>
      </footer>
  );
}

export default Footer;