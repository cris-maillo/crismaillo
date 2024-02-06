import { NavLink } from 'react-router-dom';
import './../App.css';

function NavBar() {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <NavLink exact to="/projects" activeClassName="active">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/text" activeClassName="active">
              Text
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/film" activeClassName="active">
              Film
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/toolbox" activeClassName="active">
              Toolbox
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/cook" activeClassName="active">
              Cooking
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/about" activeClassName="active">
              About Me
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
