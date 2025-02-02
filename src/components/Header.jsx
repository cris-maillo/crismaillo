import './../App.css';
import { GiStripedSun } from "react-icons/gi";
import { PiMoonStarsLight } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Header() {
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
    <div className="container">
      <div className="logo">
        <h1>
          <Link to="/">Cris Maillo</Link>
        </h1>
        <div onClick={toggleMode} className='themeIcon'>
          {isLightMode ? <GiStripedSun size={24}/> : <PiMoonStarsLight size={24}/>}
        </div>
      </div>
    </div>
  );
}

export default Header;