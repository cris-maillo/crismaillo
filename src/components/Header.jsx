import './../App.css';
import ellipse from '../assets/images/ellipse.svg';
import smiley from '../assets/images/smiley.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="container">
      <div className="logo">
        <h1>
          <Link to="/">Cris Maillo</Link>
        </h1>
        <img className="smileySvg" src={smiley} alt="Smiley" />
        <div className="ellipseContainer">
          <Link to="/">
            <img className="ellipseSvg" src={ellipse} alt="Ellipse" />
            <img className="ellipseSvg" src={ellipse} alt="Ellipse" style={{ transform: "rotate(10deg)" }} />
          </Link>
        </div>
      </div>

      <div className="divider">
        <hr />
      </div>
    </div>
  );
}

export default Header;