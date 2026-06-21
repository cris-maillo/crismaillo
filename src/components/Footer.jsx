import './../App.css';
import { useEffect, useState } from 'react';

function detectOS() {
  const ua = navigator.userAgent;
  if (/Mac|iPhone|iPad|iPod/.test(ua)) return 'macOS';
  if (/Win/.test(ua)) return 'Windows';
  if (/Android/.test(ua)) return 'Android';
  if (/Linux/.test(ua)) return 'Linux';
  return navigator.platform || 'Unknown';
}

function formatTime(date) {
  return date.toLocaleTimeString('en-GB', { hour12: false });
}

function Footer() {
  const [resolution, setResolution] = useState(
    `${window.innerWidth}x${window.innerHeight}`
  );
  const [time, setTime] = useState(formatTime(new Date()));
  const os = detectOS();

  useEffect(() => {
    const handleResize = () =>
      setResolution(`${window.innerWidth}x${window.innerHeight}`);
    window.addEventListener('resize', handleResize);

    const interval = setInterval(() => setTime(formatTime(new Date())), 1000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
    };
  }, []);

  return (
    <footer className="footer">
      <div className="footerRow">
        <span className="copyright">
          ©2026. Cris Maillo.
          <br />
          All Rights Reserved.
        </span>
        <span className="stat resolution">{resolution}</span>
        <span className="stat os">{os}</span>
        <span className="stat time">{time}</span>
        <nav className="socials">
          <a href="https://www.linkedin.com/in/cristina-maillo/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/cris-maillo/" target="_blank" rel="noopener noreferrer">
            Github
          </a>
          <a href="https://x.com/cris_maillo" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="https://www.instagram.com/cris.maillo/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
