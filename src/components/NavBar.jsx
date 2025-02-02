import { NavLink } from 'react-router-dom';
import './../App.css';

function NavBar() {
  return (
    <div className="navbar">
      <nav>
        <ul>
          {/* <li>
            <NavLink exact="true" to="/projects" activeClassName="active">
              Projects
            </NavLink>
          </li> */}
          {/* <li>
            <NavLink exact="true" to="/text" activeClassName="active">
              Text
            </NavLink>
          </li> */}
          <li>
            <NavLink exact="true" to="/film" activeClassName="active">
              Film
            </NavLink>
          </li>
          {/* <li>
            <NavLink exact="true" to="/toolbox" activeClassName="active">
              Toolbox
            </NavLink>
          </li> */}
          <li>
            <NavLink exact="true" to="/cook" activeClassName="active">
              Cooking
            </NavLink>
          </li>
          <li>
            <NavLink exact="true" to="/about" activeClassName="active">
              About Me
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
